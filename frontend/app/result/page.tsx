"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle, RefreshCcw, ArrowLeft, Activity, Download } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function ResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const prediction = searchParams.get("prediction");
  const resultText = searchParams.get("result");
  const bmi = searchParams.get("bmi");

  // Input Data for Report
  const age = searchParams.get("age");
  const gender = searchParams.get("gender");
  const height = searchParams.get("height");
  const weight = searchParams.get("weight");
  const ap_hi = searchParams.get("ap_hi");
  const ap_lo = searchParams.get("ap_lo");
  const cholesterol = searchParams.get("cholesterol");
  const glucose = searchParams.get("glucose");
  const smoke = searchParams.get("smoke");
  const alcohol = searchParams.get("alcohol");
  const active = searchParams.get("active");

  const handleDownload = async () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    
    // Theme Colors
    // High Risk: Red // Low Risk: Green
    const themeColor = isHighRisk ? [220, 38, 38] : [21, 128, 61]; 

    // Helper to load image
    const loadImage = (url: string): Promise<HTMLImageElement> => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = "Anonymous";
            img.src = url;
            img.onload = () => resolve(img);
            img.onerror = () => resolve(img); // Resolve anyway to avoid breaking flow
        });
    };

    // Load Assets (Using reliable Wikimedia Commons public domain URLs)
    // Doctor Icon
    const doctorImg = await loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Crystal_Clear_app_doctor.png/256px-Crystal_Clear_app_doctor.png");
    // Caduceus / Medical Symbol
    const medicalToolImg = await loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Caduceus.svg/454px-Caduceus.svg.png");
    // Stethoscope
    const stethoscopeImg = await loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Stethoscope_icon.svg/1024px-Stethoscope_icon.svg.png");

    // -- Header Section --
    doc.setFillColor(themeColor[0], themeColor[1], themeColor[2]);
    doc.rect(0, 0, pageWidth, 50, 'F');
    
    // Add Medical Symbol to Header
    try {
        doc.addImage(medicalToolImg, 'PNG', pageWidth - 40, 5, 30, 40);
    } catch (e) { console.log('Error adding tool image', e) }

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(26);
    doc.setFont("helvetica", "bold");
    doc.text("PulseIntel", 20, 25);
    
    doc.setFontSize(14);
    doc.setFont("helvetica", "normal");
    doc.text("Medical Risk Assessment Report", 20, 35);
    
    // -- Watermark / Background Design --
    // Subtle medical cross in background
    doc.saveGraphicsState();
    doc.setGState(new doc.GState({ opacity: 0.05 }));
    doc.setFillColor(themeColor[0], themeColor[1], themeColor[2]);
    doc.circle(pageWidth / 2, pageHeight / 2, 80, 'F'); // Central circle
    // Draw big cross
    const cx = pageWidth / 2;
    const cy = pageHeight / 2;
    doc.rect(cx - 20, cy - 60, 40, 120, 'F');
    doc.rect(cx - 60, cy - 20, 120, 40, 'F');
    doc.restoreGraphicsState();


    // -- Patient Info & Meta --
    doc.setTextColor(80, 80, 80);
    doc.setFontSize(10);
    doc.text(`Report Date: ${new Date().toLocaleDateString()}`, 20, 65);
    doc.text(`Reference ID: #${Math.floor(Math.random() * 1000000)}`, 20, 70);

    // -- Patient Profile Table --
    doc.setTextColor(themeColor[0], themeColor[1], themeColor[2]);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("PATIENT VITALS & PROFILE", 20, 85);
    
    autoTable(doc, {
        startY: 90,
        head: [['Metric', 'Value', 'Metric', 'Value']],
        body: [
            ['Age', `${age || "N/A"} Years`, 'Gender', gender || "N/A"],
            ['Height', `${height || "N/A"} cm`, 'Weight', `${weight || "N/A"} kg`],
            ['BMI', parseFloat(bmi || "0").toFixed(1), 'Activity', active === "Yes" ? "Active" : "Sedentary"],
        ],
        theme: 'grid',
        headStyles: { 
            fillColor: [255, 255, 255], 
            textColor: themeColor, 
            lineColor: themeColor, 
            lineWidth: 0.1,
            fontStyle: 'bold'
        },
        styles: { 
            fontSize: 10, 
            cellPadding: 6, 
            textColor: [60, 60, 60],
            lineColor: [230, 230, 230],
            lineWidth: 0.1
        },
        columnStyles: { 
            0: { fontStyle: 'bold', cellWidth: 35, fillColor: [250, 250, 250] }, 
            2: { fontStyle: 'bold', cellWidth: 35, fillColor: [250, 250, 250] } 
        }
    });

    // -- Clinical Analysis --
    let finalY = (doc as any).lastAutoTable.finalY + 15;
    doc.text("CLINICAL INDICATORS", 20, finalY);

    autoTable(doc, {
        startY: finalY + 5,
        head: [['Parameter', 'Measurement', 'Clinical Eval.']],
        body: [
            ['Systolic BP', `${ap_hi || "N/A"} mmHg`, (Number(ap_hi) > 130) ? 'Elevated' : 'Normal'],
            ['Diastolic BP', `${ap_lo || "N/A"} mmHg`, (Number(ap_lo) > 80) ? 'Elevated' : 'Normal'],
            ['Cholesterol', cholesterol || "N/A", cholesterol === 'Normal' ? 'Normal' : 'High Risk'],
            ['Glucose', glucose || "N/A", glucose === 'Normal' ? 'Normal' : 'High Risk'],
            ['Smoking', smoke || "N/A", smoke === 'Yes' ? 'Risk Factor' : 'None'],
            ['Alcohol', alcohol || "N/A", alcohol === 'Yes' ? 'Risk Factor' : 'None'],
        ],
        theme: 'plain',
        headStyles: { 
            fillColor: themeColor, 
            textColor: 255, 
            fontStyle: 'bold',
            halign: 'center'
        },
        columnStyles: {
            0: { fontStyle: 'bold' },
            1: { halign: 'center' },
            2: { halign: 'center', fontStyle: 'italic' }
        },
        styles: { fontSize: 10, cellPadding: 5, textColor: [50, 50, 50], rowPageBreak: 'avoid' },
        didParseCell: function(data) {
            if (data.section === 'body' && data.column.index === 2) {
                if (data.cell.raw === 'Elevated' || data.cell.raw === 'High Risk' || data.cell.raw === 'Risk Factor') {
                    data.cell.styles.textColor = [220, 38, 38]; // Red for bad
                } else {
                    data.cell.styles.textColor = [21, 128, 61]; // Green for good
                }
            }
        }
    });

    // -- Doctor's Assessment Box --
    finalY = (doc as any).lastAutoTable.finalY + 20;

    // Check if we need a new page for the assessment
    if (finalY + 60 > pageHeight) {
        doc.addPage();
        finalY = 20;
    }

    // Decoration Line with Heartbeat
    doc.setDrawColor(themeColor[0], themeColor[1], themeColor[2]);
    doc.setLineWidth(0.5);
    doc.line(20, finalY, 50, finalY);
    doc.line(50, finalY, 55, finalY - 5); // Heartbeat up
    doc.line(55, finalY - 5, 60, finalY + 5); // Heartbeat down
    doc.line(60, finalY + 5, 65, finalY); // Back
    doc.line(65, finalY, pageWidth - 20, finalY);

    finalY += 15;

    // Doctor Icon & Result
    try {
        // Keep aspect ratio for doctor image
        doc.addImage(doctorImg, 'PNG', 20, finalY, 25, 25);
    } catch(e) {}

    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.text("AI ASSESSMENT RESULT", 55, finalY + 8);

    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(themeColor[0], themeColor[1], themeColor[2]);
    doc.text(resultText ? resultText.toUpperCase() : "UNKNOWN", 55, finalY + 18);

    // Dynamic height for recommendation text
    doc.setFontSize(11);
    doc.setFont("helvetica", "italic");
    doc.setTextColor(60, 60, 60);
    
    const recommendation = isHighRisk 
    ? "Evaluation indicates a higher probability of cardiovascular issues. Immediate consultation with a specialist is recommended. Please monitor saturated fat intake, exercise regularly, and track blood pressure." 
    : "Evaluation indicates a lower probability of cardiovascular disease. Maintain your current healthy lifestyle, balanced diet, and regular exercise routine. Annual check-ups are advised.";
    
    // Split text to fit width
    const textLines = doc.splitTextToSize(`" ${recommendation} "`, pageWidth - 40);
    doc.text(textLines, pageWidth / 2, finalY + 35, { align: "center" });

    // -- Signature Section --
    const signatureBlockHeight = 40;
    // Check if signature fits on page, else add new page
    if (finalY + 35 + (textLines.length * 5) + signatureBlockHeight > pageHeight) {
         doc.addPage();
         // Reset Y for new page
         // sigY will be calculated relative to page bottom anyway, but we ensure we are on a clean page
    }
    
    const sigY = pageHeight - 40;
    
    // Add Stethoscope Image near bottom as design element
    try {
        doc.addImage(stethoscopeImg, 'PNG', 20, sigY - 20, 30, 30);
    } catch(e) {}

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(0, 0, 0);
    doc.text("__________________________", pageWidth - 70, sigY);
    
    // Signature in Cursive-like font (Times Italic with blue ink)
    doc.setFont("times", "italic");
    doc.setFontSize(22);
    doc.setTextColor(0, 50, 150); // Blue ink color
    doc.text("machchhardk", pageWidth - 60, sigY - 2);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text("Authorized Signature", pageWidth - 65, sigY + 5);
    
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text("Generated by PulseIntel Medical AI • Not for clinical diagnosis", pageWidth / 2, pageHeight - 10, { align: "center" });
    
    doc.save(`PulseIntel-Medical-Report-${new Date().toISOString().split('T')[0]}.pdf`);
  };

  // If no data, redirect back to predict
  if (!prediction || !resultText) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">No result data found.</p>
            <Link href="/predict" className="text-blue-600 hover:underline">Go back to prediction</Link>
        </div>
    );
  }

  const isHighRisk = prediction === "1";

  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`relative overflow-hidden rounded-3xl shadow-2xl p-8 md:p-12 text-center border-2 backdrop-blur-md ${
            isHighRisk 
              ? "bg-white/90 dark:bg-gray-900/90 border-red-100 dark:border-red-900/50" 
              : "bg-white/90 dark:bg-gray-900/90 border-green-100 dark:border-green-900/50"
          }`}
      >
        {/* Background Gradients */}
        <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b ${
            isHighRisk ? "from-red-50 to-transparent dark:from-red-900/20" : "from-green-50 to-transparent dark:from-green-900/20"
        }`} />

        <div className="relative z-10">
            <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg ${
                    isHighRisk ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
                }`}
            >
                {isHighRisk ? <AlertTriangle className="w-12 h-12" /> : <CheckCircle className="w-12 h-12" />}
            </motion.div>

            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isHighRisk ? "text-red-600" : "text-green-600"}`}>
                {resultText}
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Based on your provided health metrics, our AI analysis indicates a 
                <strong> {isHighRisk ? "Higher Probability" : "Lower Probability"} </strong> 
                of cardiovascular disease.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 mb-8 max-w-lg mx-auto backdrop-blur-sm">
                 <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 mb-4">
                    <span className="text-gray-500 dark:text-gray-400">Your Calculated BMI</span>
                    <span className="text-2xl font-bold text-gray-800 dark:text-white">{parseFloat(bmi || "0").toFixed(1)}</span>
                 </div>
                 <div className="text-left">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <Activity className="w-4 h-4" /> AI Recommendations:
                    </h4>
                    {isHighRisk ? (
                        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                             <li className="flex gap-2"><span className="text-red-500">•</span> Consult a cardiologist specifically for further tests.</li>
                             <li className="flex gap-2"><span className="text-red-500">•</span> Strictly monitor saturated fat intake.</li>
                             <li className="flex gap-2"><span className="text-red-500">•</span> Target 150 minutes of moderate activity weekly.</li>
                        </ul>
                    ) : (
                        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                             <li className="flex gap-2"><span className="text-green-500">•</span> Continue with your balanced diet.</li>
                             <li className="flex gap-2"><span className="text-green-500">•</span> Maintain regular sleep schedule.</li>
                             <li className="flex gap-2"><span className="text-green-500">•</span> Keep up your hydration levels.</li>
                        </ul>
                    )}
                 </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                    onClick={() => router.push('/predict')}
                    className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold hover:shadow-lg transition flex items-center justify-center gap-2"
                >
                    <ArrowLeft className="w-5 h-5" /> Back
                </button>
                <button 
                    onClick={handleDownload}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold hover:shadow-lg transition flex items-center justify-center gap-2"
                >
                    <Download className="w-5 h-5" /> Download Report
                </button>
            </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ResultPage() {
    return (
        <main className="min-h-screen py-12 px-4 bg-transparent flex items-center justify-center">
            <Suspense fallback={<div className="text-center">Loading Result...</div>}>
                <ResultContent />
            </Suspense>
        </main>
    )
}
