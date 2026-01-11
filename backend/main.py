from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field
import pickle
import numpy as np
import os
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Heart Disease Prediction API")

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify the frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load Model
MODEL_PATH = os.path.join(os.path.dirname(__file__), "model/random_forest.pkl")

try:
    with open(MODEL_PATH, 'rb') as file:
        model = pickle.load(file)
except FileNotFoundError:
    model = None
    print(f"Error: Model file not found at {MODEL_PATH}")

class PredictionInput(BaseModel):
    age: int = Field(..., description="Age in years", ge=1, le=100)
    height: int = Field(..., description="Height in cm", ge=50, le=250)
    gender: str = Field(..., description="Gender: 'Male' or 'Female'")
    weight: float = Field(..., description="Weight in kg", ge=20, le=200)
    ap_hi: int = Field(..., description="Systolic Blood Pressure", ge=50, le=250)
    ap_lo: int = Field(..., description="Diastolic Blood Pressure", ge=30, le=150)
    cholesterol: str = Field(..., description="Cholesterol Level: 'Normal', 'Above Normal', 'Well Above Normal'")
    glucose: str = Field(..., description="Glucose Level: 'Normal', 'Above Normal', 'Well Above Normal'")
    smoke: str = Field(..., description="Msg: 'Yes' or 'No'")
    alcohol: str = Field(..., description="Msg: 'Yes' or 'No'")
    active: str = Field(..., description="Msg: 'Yes' or 'No'")

@app.get("/")
def read_root():
    return {"message": "Heart Disease Prediction API is running"}

@app.post("/predict")
def predict(input_data: PredictionInput):
    if model is None:
        raise HTTPException(status_code=500, detail="Model not loaded")

    # Access data using dot notation on the Pydantic model instance
    # Process inputs
    gender_value = 1 if input_data.gender == "Male" else 0
    
    chol_map = {"Normal": 1, "Above Normal": 2, "Well Above Normal": 3}
    chol_value = chol_map.get(input_data.cholesterol, 1) # Default to Normal if mismatch
    
    gluc_map = {"Normal": 1, "Above Normal": 2, "Well Above Normal": 3}
    gluc_value = gluc_map.get(input_data.glucose, 1)
    
    smoke_value = 1 if input_data.smoke == "Yes" else 0
    alco_value = 1 if input_data.alcohol == "Yes" else 0
    active_value = 1 if input_data.active == "Yes" else 0

    # Prepare features array
    # Order: [age, gender_value, height, weight, ap_hi, ap_lo, chol_value, gluc_value, smoke_value, alco_value, active_value]
    features_list = [
        input_data.age, 
        gender_value, 
        input_data.height, 
        input_data.weight, 
        input_data.ap_hi, 
        input_data.ap_lo, 
        chol_value, 
        gluc_value, 
        smoke_value, 
        alco_value, 
        active_value
    ]
    features = np.array([features_list])
    
    print(f"Received Prediction Request: {input_data}")
    print(f"Formatted Features for Model: {features}")

    try:
        prediction = model.predict(features)[0]
        # prediction is likely 0 or 1
        result = "High Risk" if prediction == 1 else "Low Risk"
        
        return {
            "prediction": int(prediction),
            "result": result,
            "bmi": input_data.weight / ((input_data.height/100)**2)
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
