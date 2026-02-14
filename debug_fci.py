import requests
from config import Config
import json

def debug_fci():
    url = "https://api.data.gov.in/resource/814d6bf2-2790-4e1d-8d8a-eea417efb7a7"
    params = {
        'api-key': Config.DATA_GOV_API_KEY,
        'format': 'json',
        'limit': 100
    }
    headers = {
        'User-Agent': 'Mozilla/5.0'
    }
    try:
        res = requests.get(url, params=params, headers=headers, timeout=15)
        data = res.json()
        print("\n--- FCI Raw Records ---")
        if data.get('records'):
            districts = set()
            for r in data['records']:
                d = r.get('districtname')
                districts.add(d)
                if "BANG" in d.upper() or "BENG" in d.upper():
                    print(f"Record: {r}")
            print(f"Unique Districts in first 100: {districts}")
        else:
            print("No records found")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    debug_fci()
