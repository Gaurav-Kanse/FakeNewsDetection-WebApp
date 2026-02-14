from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import re
import string

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load model and vectorizer
model = joblib.load("fake_news_model.pkl")
vectorizer = joblib.load("vectorizer.pkl")

print("Loaded model:", model)

class NewsInput(BaseModel):
    text: str

def clean_text(text):
    text = text.lower()
    text = re.sub(r'https?://\S+', '', text)
    text = re.sub(r'[%s]' % re.escape(string.punctuation), '', text)
    text = re.sub(r'\n', '', text)
    return text

@app.post("/predict")
def predict(data: NewsInput):
    cleaned = clean_text(data.text)
    vectorized = vectorizer.transform([cleaned])

    prediction = model.predict(vectorized)

    # Logistic Regression supports predict_proba
    if hasattr(model, "predict_proba"):
        probabilities = model.predict_proba(vectorized)[0]
        confidence = max(probabilities) * 100
    else:
        confidence = None

    result = "Fake News" if prediction[0] == 0 else "Real News"

    return {
        "prediction": result,
        "confidence": round(confidence, 2) if confidence else None
    }
