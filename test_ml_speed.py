import time
import pandas as pd
import numpy as np
from services.ml_engine import predict_future_prices, load_ml_models
from datetime import datetime, timedelta

def test_ml_speed():
    print("Testing ML Engine Speed...")
    
    # 1. Measure Import Time
    start = time.time()
    load_ml_models()
    print(f"Import Time: {time.time() - start:.4f}s")
    
    # 2. Mock Data
    print("Generating Mock Data...")
    
    # Weather History (60 days)
    weather_history = []
    for i in range(60):
        weather_history.append({
            "date": (datetime.now() - timedelta(days=60-i)).strftime("%Y-%m-%d"),
            "max_temp": 30.0,
            "min_temp": 20.0,
            "rainfall_mm": 5.0,
            "humidity": 60
        })
        
    # Weather Forecast (7 days)
    weather_forecast = {
        "forecast": []
    }
    for i in range(7):
        weather_forecast['forecast'].append({
            "date": (datetime.now() + timedelta(days=i+1)).strftime("%Y-%m-%d"),
             "max_temp": 31.0,
            "min_temp": 21.0,
            "rainfall": 0.0
        })
        
    # Price History (60 days)
    price_history = {
        "records": []
    }
    for i in range(60):
        price_history['records'].append({
            "arrival_date": (datetime.now() - timedelta(days=60-i)).strftime("%Y-%m-%d"),
            "modal_price": 2000.0 + (i * 10),
            "arrival_quantity": 100
        })
        
    # 3. Measure Prediction Time
    print("Running Prediction...")
    start = time.time()
    predictions = predict_future_prices(
        weather_history=weather_history,
        weather_forecast=weather_forecast, 
        price_history=price_history
    )
    duration = time.time() - start
    print(f"Prediction Time: {duration:.4f}s")
    print(f"Generated {len(predictions)} predictions")

if __name__ == "__main__":
    test_ml_speed()
