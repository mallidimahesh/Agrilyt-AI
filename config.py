import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

class Config:
    """Centralized configuration for the application"""
    
    # API Keys
    DATA_GOV_API_KEY = os.getenv('DATA_GOV_API_KEY', '')
    IMD_API_ENABLED = os.getenv('IMD_API_ENABLED', 'false').lower() == 'true'
    
    # Data.gov.in API URLs
    MANDI_API_URL = "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070"
    
    # IMD API URLs
    IMD_CITY_WEATHER_URL = "https://city.imd.gov.in/citywt/city/weather.php"
    
    # Model Configuration
    USE_PROPHET_MODEL = os.getenv('USE_PROPHET_MODEL', 'true').lower() == 'true'
    USE_XGBOOST_MODEL = os.getenv('USE_XGBOOST_MODEL', 'true').lower() == 'true'
    USE_LIGHTGBM_MODEL = os.getenv('USE_LIGHTGBM_MODEL', 'true').lower() == 'true'
    USE_ARIMA_MODEL = os.getenv('USE_ARIMA_MODEL', 'true').lower() == 'true'
    PREDICTION_DAYS = int(os.getenv('PREDICTION_DAYS', '14'))
    
    # Cache Configuration
    CACHE_EXPIRY_HOURS = 6
    
    # Fallback Configuration
    USE_INTELLIGENT_FALLBACK = True
    
    # Audit Configuration
    ENABLE_FORECAST_AUDIT = os.getenv('ENABLE_FORECAST_AUDIT', 'true').lower() == 'true'
    
    @classmethod
    def has_data_gov_key(cls):
        """Check if data.gov.in API key is configured"""
        return bool(cls.DATA_GOV_API_KEY and cls.DATA_GOV_API_KEY != 'your_api_key_here')
    
    @classmethod
    def is_imd_enabled(cls):
        """Check if IMD API is enabled"""
        return cls.IMD_API_ENABLED
