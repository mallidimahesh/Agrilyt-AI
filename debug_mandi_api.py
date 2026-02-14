import requests
import json
from config import Config

def test_raw_api():
    params = {
        'api-key': Config.DATA_GOV_API_KEY,
        'format': 'json',
        'filters[state]': 'Karnataka',
        'filters[commodity]': 'Onion',
        'limit': 10
    }
    url = "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070"
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    try:
        res = requests.get(url, params=params, headers=headers, timeout=15)
        print(f"Status: {res.status_code}")
        data = res.json()
        print(f"Total: {data.get('total', 'N/A')}")
        if data.get('records'):
            for r in data['records']:
                print(f"Date: {r.get('arrival_date')} | Market: {r.get('market')} | Price: {r.get('modal_price')}")
        else:
            print("No records found")
    except Exception as e:
        print(f"Request failed: {e}")

if __name__ == "__main__":
    test_raw_api()
