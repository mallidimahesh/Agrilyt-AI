import requests
import json

def verify_api():
    url = "http://127.0.0.1:8004/api/predict"
    params = {
        "commodity": "Rice",
        "city_id": "bengaluru"
    }
    
    try:
        response = requests.get(url, params=params, timeout=30)
        response.raise_for_status()
        data = response.json()
        print(f"Success! Status: {response.status_code}")
        print(f"Received {len(str(data))} bytes of data.")
        print(f"Forecast loaded: {len(data.get('forecast', []))} days")
    except requests.exceptions.HTTPError as e:
        print(f"Failed: HTTP Error {e.response.status_code} - {e.response.text}")
    except requests.exceptions.ConnectionError as e:
        print(f"Failed: Connection Error - {e}")
        print("Is the server running?")
    except requests.exceptions.Timeout as e:
        print(f"Failed: Timeout Error - {e}")
    except requests.exceptions.RequestException as e:
        print(f"Failed: An unexpected request error occurred - {e}")
    except json.JSONDecodeError:
        print(f"Failed: Could not decode JSON from response. Response text: {response.text}")
    except Exception as e:
        print(f"Failed: An unexpected error occurred - {e}")

if __name__ == "__main__":
    verify_api()
