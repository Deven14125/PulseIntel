# ❤️ PulseIntel

### Cardio Disease Prediction System

![Next.js](https://img.shields.io/badge/Next.js-14-black) ![FastAPI](https://img.shields.io/badge/FastAPI-0.95+-009688) ![Python](https://img.shields.io/badge/Python-3.9+-3776AB) ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38B2AC) ![License](https://img.shields.io/badge/License-MIT-green)

A comprehensive Machine Learning application designed to predict the risk of cardiovascular disease based on key health indicators. This project leverages a **Random Forest Classifier** deployed via a **FastAPI** backend, coupled with a modern, responsive **Next.js** frontend to provide a seamless user experience.

---

## 🚀 Features

-   **Accurate Predictions**: Uses a trained Random Forest model to analyze 11 different health parameters.
-   **Modern UI/UX**: Built with Next.js 14 (App Router), Tailwind CSS, and Framer Motion for smooth animations and a responsive design.
-   **Instant Results**: Real-time communication between the frontend and backend ensures immediate feedback.
-   **Dark Mode Support**: Fully integrated light and dark modes for better accessibility.
-   **RESTful API**: Documented API endpoints for easy integration and testing.

---

## 🛠️ Tech Stack

### Frontend
-   **Framework**: Next.js 14 (App Router)
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS
-   **Animations**: Framer Motion
-   **Icons**: Lucide React
-   **HTTP Client**: Axios

### Backend
-   **Framework**: FastAPI
-   **Server**: Uvicorn
-   **Language**: Python 3.9+
-   **Data Validation**: Pydantic
-   **ML Libraries**: Scikit-Learn, NumPy, Pandas

### Machine Learning
-   **Model**: Random Forest Classifier
-   **Input Data**: 11 clinical features (Age, Height, Weight, Blood Pressure, etc.)

---

## 📋 Input Parameters

The model considers the following health metrics for its prediction:

| Parameter | Description |
| :--- | :--- |
| **Age** | Age in years |
| **Gender** | Male / Female |
| **Height** | Height in cm |
| **Weight** | Weight in kg |
| **Systolic BP** | Systolic blood pressure (ap_hi) |
| **Diastolic BP** | Diastolic blood pressure (ap_lo) |
| **Cholesterol** | Normal, Above Normal, or Well Above Normal |
| **Glucose** | Normal, Above Normal, or Well Above Normal |
| **Smoking** | User smokes? (Yes/No) |
| **Alcohol** | User consumes alcohol? (Yes/No) |
| **Activity** | User is physically active? (Yes/No) |

---

## 🏁 Getting Started

Follow these steps to set up the project locally.

### Prerequisites
-   **Python 3.9+** installed
-   **Node.js 18+** installed

### 1. Backend Setup (FastAPI)

Navigate to the backend directory and install the dependencies:

```bash
cd backend

# Create a virtual environment (Optional but recommended)
python -m venv venv
# On Windows
./venv/Scripts/activate
# On MacOS/Linux
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

Run the FastAPI server:

```bash
python main.py
# OR using uvicorn directly
uvicorn main:app --reload
```
The backend will be available at `http://localhost:8000`. You can view the API documentation at `http://localhost:8000/docs`.

### 2. Frontend Setup (Next.js)

Open a new terminal, navigate to the frontend directory, and install dependencies:

```bash
cd frontend

# Install dependencies
npm install
```

Run the development server:

```bash
npm run dev
```
The frontend will be available at `http://localhost:3000`.

---

## 📡 API Endpoints

### `GET /`
Returns a status message indicating the API is running.

### `POST /predict`
Accepts a JSON object with patient data and returns the prediction result.

**Request Body Example:**
```json
{
  "age": 50,
  "height": 165,
  "gender": "Female",
  "weight": 68,
  "ap_hi": 110,
  "ap_lo": 80,
  "cholesterol": "Normal",
  "glucose": "Normal",
  "smoke": "No",
  "alcohol": "No",
  "active": "Yes"
}
```

**Response Example:**
```json
{
  "prediction": 0,
  "result": "Low Risk",
  "bmi": 24.98
}
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/YourFeature`).
3.  Commit your changes (`git commit -m "Add some feature"`).
4.  Push to the branch (`git push origin feature/YourFeature`).
5.  Open a Pull Request.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## ⚠️ Disclaimer

**PulseIntel** is intended for **educational and informational purposes only**. The predictions provided by this application are based on statistical patterns found in a dataset and **do not constitute a professional medical diagnosis**.

-   **Not a Doctor**: This tool is not a substitute for professional medical advice, diagnosis, or treatment.
-   **Accuracy**: While the model strives for accuracy, machine learning predictions can be incorrect.
-   **Consult a Professional**: Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this application.

