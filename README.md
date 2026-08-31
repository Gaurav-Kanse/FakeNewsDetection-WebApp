#  Fake News Detection

### End-to-end NLP application for classifying news as Real or Fake.

A full-stack machine learning application that analyzes news text and predicts whether it is likely to be **real or fake**.

The project combines an NLP preprocessing pipeline, classical machine-learning models, a FastAPI inference API, and a React frontend.

---

##  How It Works

```text
News Article
     │
     ▼
Text Preprocessing
     │
     ▼
TF-IDF Vectorization
(Unigrams + Bigrams)
     │
     ▼
ML Classifier
     │
     ▼
Prediction + Confidence
     │
     ▼
FastAPI
     │
     ▼
React Interface
```

---

##  Model Development

Multiple classifiers were evaluated:

* Logistic Regression
* Support Vector Machine
* Naive Bayes

Logistic Regression was selected for deployment based on its performance and generalization on custom inputs.

The text pipeline uses **TF-IDF feature extraction with unigram and bigram features**.

---

##  Features

* News text classification
* NLP preprocessing
* TF-IDF feature extraction
* Multiple-model comparison
* Prediction confidence
* FastAPI inference endpoint
* React web interface

---

##  Tech Stack

**ML**

`Python` · `Scikit-learn` · `TF-IDF`

**Backend**

`FastAPI`

**Frontend**

`React`

---

##  Structure

```text
.
├── backend/
│   └── ML inference API
│
├── frontend/
│   └── React application
│
└── README.md
```

---

##  Running Locally

### Backend

```bash
cd backend
```

Install the backend dependencies and start the FastAPI application using the project's configured entry point.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

##  What This Project Demonstrates

This project was built to explore the complete path from:

**raw text → feature engineering → model selection → API inference → user-facing application.**

It focuses on the engineering side of taking an ML model beyond a notebook and integrating it into an actual application.

---

##  Limitations

The prediction represents the output of a machine-learning classifier and should **not be treated as a factual verification system**.

Model performance depends heavily on the training data and the distribution of real-world news.

---

##  License

See the repository for licensing information.
