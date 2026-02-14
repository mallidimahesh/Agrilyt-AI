// ============================================
// Configuration
// ============================================
const API_BASE_URL = 'http://127.0.0.1:8004';

// ============================================
// Cities data
// ============================================
const CITIES = [
    { id: 'bengaluru', name: 'Bangalore', state: 'Karnataka', icon: '🏙️' },
    { id: 'mumbai', name: 'Mumbai', state: 'Maharashtra', icon: '🌊' },
    { id: 'delhi', name: 'Delhi', state: 'NCR', icon: '🏛️' },
    { id: 'kolkata', name: 'Kolkata', state: 'West Bengal', icon: '🌉' },
    { id: 'chennai', name: 'Chennai', state: 'Tamil Nadu', icon: '☀️' },
    { id: 'hyderabad', name: 'Hyderabad', state: 'Telangana', icon: '🕌' },
    { id: 'ahmedabad', name: 'Ahmedabad', state: 'Gujarat', icon: '🏗️' },
    { id: 'pune', name: 'Pune', state: 'Maharashtra', icon: '🌿' },
    { id: 'surat', name: 'Surat', state: 'Gujarat', icon: '💎' },
    { id: 'jaipur', name: 'Jaipur', state: 'Rajasthan', icon: '🏰' },
    { id: 'lucknow', name: 'Lucknow', state: 'Uttar Pradesh', icon: '🕊️' },
    { id: 'kanpur', name: 'Kanpur', state: 'Uttar Pradesh', icon: '🏭' },
    { id: 'nagpur', name: 'Nagpur', state: 'Maharashtra', icon: '🍊' },
    { id: 'indore', name: 'Indore', state: 'Madhya Pradesh', icon: '🧹' },
    { id: 'thane', name: 'Thane', state: 'Maharashtra', icon: '🚉' },
    { id: 'bhopal', name: 'Bhopal', state: 'Madhya Pradesh', icon: '🏞️' },
    { id: 'visakhapatnam', name: 'Visakhapatnam', state: 'Andhra Pradesh', icon: '⚓' },
    { id: 'patna', name: 'Patna', state: 'Bihar', icon: '📜' },
    { id: 'vadodara', name: 'Vadodara', state: 'Gujarat', icon: '🎨' },
    { id: 'ghaziabad', name: 'Ghaziabad', state: 'Uttar Pradesh', icon: '🏗️' },
    { id: 'ludhiana', name: 'Ludhiana', state: 'Punjab', icon: '🚜' },
    { id: 'agra', name: 'Agra', state: 'Uttar Pradesh', icon: '🕌' },
    { id: 'nashik', name: 'Nashik', state: 'Maharashtra', icon: '🍷' },
    { id: 'faridabad', name: 'Faridabad', state: 'Haryana', icon: '⚙️' },
    { id: 'meerut', name: 'Meerut', state: 'Uttar Pradesh', icon: '🏏' },
    { id: 'rajkot', name: 'Rajkot', state: 'Gujarat', icon: '🛠️' },
    { id: 'varanasi', name: 'Varanasi', state: 'Uttar Pradesh', icon: '📿' },
    { id: 'srinagar', name: 'Srinagar', state: 'Jammu & Kashmir', icon: '🏔️' },
    { id: 'aurangabad', name: 'Aurangabad', state: 'Maharashtra', icon: '🗿' },
    { id: 'dhanbad', name: 'Dhanbad', state: 'Jharkhand', icon: '⛏️' },
    { id: 'amritsar', name: 'Amritsar', state: 'Punjab', icon: '🛕' },
    { id: 'navi-mumbai', name: 'Navi Mumbai', state: 'Maharashtra', icon: '🏢' },
    { id: 'prayagraj', name: 'Allahabad', state: 'Uttar Pradesh', icon: '🌊' },
    { id: 'ranchi', name: 'Ranchi', state: 'Jharkhand', icon: '🌳' },
    { id: 'howrah', name: 'Howrah', state: 'West Bengal', icon: '🌉' },
    { id: 'coimbatore', name: 'Coimbatore', state: 'Tamil Nadu', icon: '👕' },
    { id: 'jabalpur', name: 'Jabalpur', state: 'Madhya Pradesh', icon: '🐅' },
    { id: 'gwalior', name: 'Gwalior', state: 'Madhya Pradesh', icon: '🏰' },
    { id: 'vijayawada', name: 'Vijayawada', state: 'Andhra Pradesh', icon: '⛰️' },
    { id: 'jodhpur', name: 'Jodhpur', state: 'Rajasthan', icon: '🧢' },
    { id: 'madurai', name: 'Madurai', state: 'Tamil Nadu', icon: '🛕' },
    { id: 'raipur', name: 'Raipur', state: 'Chhattisgarh', icon: '🌾' },
    { id: 'kota', name: 'Kota', state: 'Rajasthan', icon: '📚' },
    { id: 'guwahati', name: 'Guwahati', state: 'Assam', icon: '🦏' },
    { id: 'chandigarh', name: 'Chandigarh', state: 'Chandigarh', icon: '📐' },
    { id: 'solapur', name: 'Solapur', state: 'Maharashtra', icon: '🧵' },
    { id: 'hubli', name: 'Hubli-Dharwad', state: 'Karnataka', icon: '🛤️' },
    { id: 'bareilly', name: 'Bareilly', state: 'Uttar Pradesh', icon: '🪑' },
    { id: 'moradabad', name: 'Moradabad', state: 'Uttar Pradesh', icon: '🎺' },
    { id: 'gurgaon', name: 'Gurgaon', state: 'Haryana', icon: '🏙️' },
    { id: 'aligarh', name: 'Aligarh', state: 'Uttar Pradesh', icon: '🔐' },
    { id: 'jalandhar', name: 'Jalandhar', state: 'Punjab', icon: '⚽' },
    { id: 'tiruchirappalli', name: 'Tiruchirappalli', state: 'Tamil Nadu', icon: '🏯' },
    { id: 'bhubaneswar', name: 'Bhubaneswar', state: 'Odisha', icon: '🛕' },
    { id: 'salem', name: 'Salem', state: 'Tamil Nadu', icon: '🥭' },
    { id: 'thiruvananthapuram', name: 'Trivandrum', state: 'Kerala', icon: '�' },
    { id: 'bhiwandi', name: 'Bhiwandi', state: 'Maharashtra', icon: '🏬' },
    { id: 'saharanpur', name: 'Saharanpur', state: 'Uttar Pradesh', icon: '🪵' },
    { id: 'gorakhpur', name: 'Gorakhpur', state: 'Uttar Pradesh', icon: '🕉️' },
    { id: 'guntur', name: 'Guntur', state: 'Andhra Pradesh', icon: '🌶️' },
    { id: 'bikaner', name: 'Bikaner', state: 'Rajasthan', icon: '🏜️' },
    { id: 'amravati', name: 'Amravati', state: 'Maharashtra', icon: '🛕' },
    { id: 'noida', name: 'Noida', state: 'Uttar Pradesh', icon: '💻' },
    { id: 'jamshedpur', name: 'Jamshedpur', state: 'Jharkhand', icon: '🔩' },
    { id: 'bhilai', name: 'Bhilai', state: 'Chhattisgarh', icon: '🏗️' },
    { id: 'warangal', name: 'Warangal', state: 'Telangana', icon: '🏯' },
    { id: 'cuttack', name: 'Cuttack', state: 'Odisha', icon: '🥈' },
    { id: 'firozabad', name: 'Firozabad', state: 'Uttar Pradesh', icon: '🔮' },
    { id: 'kochi', name: 'Kochi', state: 'Kerala', icon: '🛶' },
    { id: 'bhavnagar', name: 'Bhavnagar', state: 'Gujarat', icon: '🌊' },
    { id: 'dehradun', name: 'Dehradun', state: 'Uttarakhand', icon: '🏔️' },
    { id: 'durgapur', name: 'Durgapur', state: 'West Bengal', icon: '🏭' },
    { id: 'asansol', name: 'Asansol', state: 'West Bengal', icon: '⛏️' },
    { id: 'nanded', name: 'Nanded', state: 'Maharashtra', icon: '🕍' },
    { id: 'kolhapur', name: 'Kolhapur', state: 'Maharashtra', icon: '👞' },
    { id: 'ajmer', name: 'Ajmer', state: 'Rajasthan', icon: '🕌' },
    { id: 'gulbarga', name: 'Gulbarga', state: 'Karnataka', icon: '🏰' },
    { id: 'jamnagar', name: 'Jamnagar', state: 'Gujarat', icon: '🛢️' },
    { id: 'ujjain', name: 'Ujjain', state: 'Madhya Pradesh', icon: '🔔' },
    { id: 'siliguri', name: 'Siliguri', state: 'West Bengal', icon: '☕' },
    { id: 'jhansi', name: 'Jhansi', state: 'Uttar Pradesh', icon: '⚔️' },
    { id: 'nellore', name: 'Nellore', state: 'Andhra Pradesh', icon: '🌾' },
    { id: 'jammu', name: 'Jammu', state: 'Jammu & Kashmir', icon: '🏔️' },
    { id: 'belgaum', name: 'Belgaum', state: 'Karnataka', icon: '🏰' },
    { id: 'mangalore', name: 'Mangalore', state: 'Karnataka', icon: '🚢' },
    { id: 'tirunelveli', name: 'Tirunelveli', state: 'Tamil Nadu', icon: '🍮' },
    { id: 'gaya', name: 'Gaya', state: 'Bihar', icon: '☸️' },
    { id: 'jalgaon', name: 'Jalgaon', state: 'Maharashtra', icon: '🍌' },
    { id: 'udaipur', name: 'Udaipur', state: 'Rajasthan', icon: '🛶' },
    { id: 'vellore', name: 'Vellore', state: 'Tamil Nadu', icon: '�🏥' }
];

const COMMODITIES = ['Rice', 'Wheat', 'Maize', 'Onion', 'Tomato', 'Potato', 'Lemon', 'Large Cardamom', 'Jaggery', 'Cotton'];

// ============================================
// State
// ============================================
const state = {
    currentUser: null,       // { name, email, user_type }
    selectedCity: null,      // city object
    selectedCommodity: '',
    currentData: null,
    cachedHighlights: [],  // for filtering on highlights page
    chart: null
};

// ============================================
// Screen Navigation
// ============================================
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(`screen-${screenId}`).classList.add('active');

    // Apply role class to body for CSS-based colour switching
    if (state.currentUser) {
        document.body.className = `role-${state.currentUser.user_type}`;
    } else {
        document.body.className = '';
    }
}

// ============================================
// Auth helpers
// ============================================
function showAuthForm(mode) {
    document.getElementById('login-form').style.display = mode === 'login' ? 'flex' : 'none';
    document.getElementById('signup-form').style.display = mode === 'signup' ? 'flex' : 'none';
    document.getElementById('toggle-login').classList.toggle('active', mode === 'login');
    document.getElementById('toggle-signup').classList.toggle('active', mode === 'signup');
    document.getElementById('login-error').textContent = '';
    document.getElementById('signup-error').textContent = '';
}

async function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    const errEl = document.getElementById('login-error');
    errEl.textContent = '';

    try {
        const res = await fetch(`${API_BASE_URL}/api/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.detail || 'Login failed');

        state.currentUser = { name: data.name, email: data.email, user_type: data.user_type };
        enterCityScreen();
    } catch (err) {
        errEl.textContent = err.message;
    }
}

async function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value;
    const user_type = document.querySelector('input[name="user_type"]:checked').value;
    const errEl = document.getElementById('signup-error');
    errEl.textContent = '';

    try {
        const res = await fetch(`${API_BASE_URL}/api/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password, user_type })
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.detail || 'Registration failed');

        state.currentUser = { name: data.name, email: data.email, user_type: data.user_type };
        enterCityScreen();
    } catch (err) {
        errEl.textContent = err.message;
    }
}

function handleLogout() {
    state.currentUser = null;
    state.selectedCity = null;
    state.currentData = null;
    showScreen('auth');
}

// ============================================
// City Screen
// ============================================
function enterCityScreen() {
    renderUserBadges();
    renderCityGrid();
    // Reset highlights
    document.getElementById('highlights-panel').style.display = 'none';
    document.getElementById('city-grid').style.display = 'grid';
    showScreen('city');
}

function renderUserBadges() {
    const u = state.currentUser;
    if (!u) return;
    const typeLabels = { consumer: '🛒 Consumer', farmer: '🌾 Farmer', govt: '🏛️ Govt Body' };
    const html = `<span>${u.name}</span> · <span>${typeLabels[u.user_type]}</span>`;
    const cls = u.user_type;
    document.getElementById('user-badge').className = `user-badge ${cls}`;
    document.getElementById('user-badge').innerHTML = html;
    const statsBadge = document.getElementById('user-badge-stats');
    if (statsBadge) { statsBadge.className = `user-badge ${cls}`; statsBadge.innerHTML = html; }
}

function renderCityGrid(filteredCities) {
    const grid = document.getElementById('city-grid');
    const list = filteredCities || CITIES;
    grid.innerHTML = list.map(c => `
        <div class="city-card" onclick="handleCitySelect('${c.id}')">
            <div class="city-icon">${c.icon}</div>
            <div class="city-name">${c.name}</div>
            <div class="city-state">${c.state}</div>
        </div>
    `).join('');
}

function handleCitySearch(e) {
    const query = e.target.value.toLowerCase().trim();
    if (e.key === 'Enter') {
        handleCustomCitySubmit();
        return;
    }
    const filtered = CITIES.filter(c =>
        c.name.toLowerCase().includes(query) ||
        c.state.toLowerCase().includes(query)
    );
    renderCityGrid(filtered);
}

function handleCustomCitySubmit() {
    const input = document.getElementById('city-search-input');
    const val = input.value.trim();
    if (!val) return;

    // Check if it matches a known city
    const known = CITIES.find(c => c.name.toLowerCase() === val.toLowerCase());
    if (known) {
        handleCitySelect(known.id);
    } else {
        // Create a custom city object
        const customCity = {
            id: val.toLowerCase().replace(/\s+/g, '-'),
            name: val,
            state: 'Custom Location',
            icon: '📍'
        };
        handleCitySelect(customCity);
    }
}

async function handleCitySelect(cityOrId) {
    let city;
    if (typeof cityOrId === 'string') {
        city = CITIES.find(c => c.id === cityOrId);
    } else {
        city = cityOrId;
    }

    if (!city) return;
    state.selectedCity = city;

    // Hide search and grid
    document.getElementById('city-heading').style.display = 'none';
    document.getElementById('city-sub').style.display = 'none';
    document.getElementById('city-grid').style.display = 'none';
    document.getElementById('city-search-wrapper').style.display = 'none';
    const panel = document.getElementById('highlights-panel');
    panel.style.display = 'block';
    document.getElementById('highlights-city-name').textContent = `${city.name} – Price Highlights`;
    document.getElementById('highlights-sub').textContent = 'Scanning commodities for major price variations…';
    document.getElementById('highlights-loading').style.display = 'flex';
    document.getElementById('highlights-grid').innerHTML = '';

    // Fetch predictions for all commodities in parallel
    const results = [];
    const promises = COMMODITIES.map(async (commodity) => {
        try {
            const res = await fetch(
                `${API_BASE_URL}/api/predict?commodity=${encodeURIComponent(commodity)}&city_id=${encodeURIComponent(city.id)}`
            );
            if (!res.ok) return null;
            const data = await res.json();
            return { commodity, data };
        } catch {
            return null;
        }
    });

    const settled = await Promise.all(promises);
    settled.forEach(r => { if (r) results.push(r); });

    document.getElementById('highlights-loading').style.display = 'none';

    if (results.length === 0) {
        document.getElementById('highlights-grid').innerHTML =
            '<p style="color:var(--color-text-secondary); text-align:center; grid-column:1/-1;">No data available. Ensure the backend is running.</p>';
        document.getElementById('highlights-sub').textContent = 'Could not fetch commodity data';
        return;
    }

    // Calculate price change % for each commodity
    const highlights = results.map(({ commodity, data }) => {
        const hist = data.market_history || [];
        const forecast = data.forecast || [];

        const currentPrice = hist.length > 0 ? parseFloat(hist[hist.length - 1].modal_price) : 0;
        const targetPrice = forecast.length > 0 ? parseFloat(forecast[forecast.length - 1].predicted_price) : currentPrice;

        const change = currentPrice > 0 ? ((targetPrice - currentPrice) / currentPrice * 100) : 0;

        return {
            commodity,
            currentPrice,
            targetPrice,
            change,
            data
        };
    });

    // Sort by absolute change (biggest swings first)
    highlights.sort((a, b) => Math.abs(b.change) - Math.abs(a.change));

    // Cache highlights for commodity filtering
    state.cachedHighlights = highlights;

    document.getElementById('highlights-sub').textContent =
        `Showing ${highlights.length} commodities sorted by expected price variation`;

    renderHighlightCards(highlights);
}

function renderHighlightCards(highlights) {
    const grid = document.getElementById('highlights-grid');
    const role = state.currentUser.user_type;

    const icons = {
        "Rice": "🍚", "Wheat": "🌾", "Maize": "🌽",
        "Onion": "🧅", "Tomato": "🍅", "Potato": "🥔",
        "Lemon": "🍋", "Foxtail Millet": "🌾", "Large Cardamom": "🌿",
        "Jaggery": "🍯", "Cotton": "☁️"
    };

    grid.innerHTML = highlights.map(h => {
        const isUp = h.change > 0;
        const arrow = isUp ? '↗' : '↘';
        const colorClass = isUp ? 'price-up' : 'price-down';
        const bgClass = isUp ? 'bg-up' : 'bg-down';
        const trendLabel = isUp ? 'Rising' : 'Falling';

        // Truncate suggestion for card view
        let suggestion = getSuggestion(role, h.change, h.commodity);
        if (suggestion.length > 80) suggestion = suggestion.substring(0, 80) + '...';

        return `
            <div class="highlight-card" onclick="handleHighlightClick('${h.commodity}')">
                <div class="hl-header">
                    <div class="hl-icon">${icons[h.commodity] || '📦'}</div>
                    <div class="hl-meta">
                        <div class="hl-name">${h.commodity}</div>
                        <div class="hl-trend ${colorClass}">${arrow} ${trendLabel}</div>
                    </div>
                </div>
                
                <div class="hl-body">
                    <div class="hl-price-box">
                        <span class="hl-currency">₹</span>
                        <span class="hl-value">${h.targetPrice.toFixed(0)}</span>
                        <span class="hl-unit">/q</span>
                    </div>
                    <div class="hl-change-badge ${bgClass} ${colorClass}">
                        ${Math.abs(h.change).toFixed(1)}%
                    </div>
                </div>

                <div class="hl-footer">
                    <div class="hl-suggestion">${suggestion}</div>
                    <div class="hl-arrow">→</div>
                </div>
            </div>
        `;
    }).join('');
}

function getSuggestion(role, changePercent, commodity) {
    const isUp = changePercent > 0;
    const abs = Math.abs(changePercent).toFixed(1);

    if (role === 'consumer') {
        if (isUp) return `⚠️ ${commodity} prices expected to rise ${abs}%. Consider buying soon or switch alternatives.`;
        return `✅ Good news! ${commodity} prices expected to drop ${abs}%. Great time to buy.`;
    }
    if (role === 'farmer') {
        if (isUp) return `✅ ${commodity} prices rising ${abs}%. Good opportunity to sell for profit.`;
        return `⚠️ ${commodity} prices falling ${abs}%. Consider holding stock or diversifying.`;
    }
    // govt
    if (isUp) return `📊 ${commodity} up ${abs}%. Consider MSP revision or releasing buffer stock.`;
    return `📊 ${commodity} down ${abs}%. Good window for procurement & fund allocation.`;
}

// ============================================
// Navigation helpers
// ============================================
function handleBackToCity() {
    document.getElementById('highlights-panel').style.display = 'none';
    document.getElementById('city-heading').style.display = 'block';
    document.getElementById('city-sub').style.display = 'block';
    document.getElementById('city-search-wrapper').style.display = 'block';
    document.getElementById('city-grid').style.display = 'grid';
    document.getElementById('city-search-input').value = '';
    renderCityGrid(); // Reset grid
    state.selectedCity = null;
    state.cachedHighlights = [];
    document.getElementById('highlights-commodity-select').value = ""; // Reset filter
}

function handleHighlightCommodityChange(val) {
    if (!val) {
        renderHighlightCards(state.cachedHighlights);
        return;
    }
    const filtered = state.cachedHighlights.filter(h => h.commodity === val);
    renderHighlightCards(filtered);
}

function handleBackToCityFromStats() {
    // Go back to Highlights page
    showScreen('city');
    document.getElementById('city-heading').style.display = 'none';
    document.getElementById('city-sub').style.display = 'none';
    document.getElementById('city-grid').style.display = 'none';
    document.getElementById('highlights-panel').style.display = 'block';
}

function handleHighlightClick(commodity) {
    enterStatsScreen(commodity);
}

function handleCommodityChange(newVal) {
    enterStatsScreen(newVal);
}

function handleGetStats() {
    const val = document.getElementById('stats-commodity-select').value;
    if (val) enterStatsScreen(val);
}

function enterStatsScreen(commodity) {
    state.selectedCommodity = commodity;
    document.getElementById('stats-city-label').textContent = `${state.selectedCity.name} · ${commodity}`;
    document.getElementById('stats-commodity-select').value = commodity;

    // Find data in cached highlights if available
    const found = state.cachedHighlights.find(h => h.commodity === commodity);
    if (found) {
        state.currentData = found.data;
        loadStatsData();
    } else {
        // Fallback fetch with cache busting
        const ts = new Date().getTime();
        fetch(`${API_BASE_URL}/api/predict?commodity=${encodeURIComponent(commodity)}&city_id=${state.selectedCity.id}&t=${ts}`)
            .then(res => {
                if (!res.ok) throw new Error('API Error');
                return res.json();
            })
            .then(data => {
                state.currentData = data;
                loadStatsData();
            })
            .catch(err => {
                console.error(err);
                document.getElementById('weather-content').innerHTML = `<p style="color:red">Error loading data: ${err.message}</p>`;
            });
    }
    showScreen('stats');
}

function loadStatsData() {
    const data = state.currentData;
    if (!data) return;

    // Force show results, hide loading
    document.getElementById('stats-loading').style.display = 'none';
    document.getElementById('stats-results').style.display = 'block';

    const hist = data.market_history || [];
    const forecast = data.forecast || [];
    const avgHist = hist.reduce((s, i) => s + parseFloat(i.modal_price), 0) / (hist.length || 1);
    const avgForecast = forecast.reduce((s, i) => s + parseFloat(i.predicted_price), 0) / (forecast.length || 1);
    const change = ((avgForecast - avgHist) / avgHist * 100);

    // 1. Suggestion Card
    try {
        const suggestionText = getSuggestion(state.currentUser.user_type, change, state.selectedCommodity);
        renderRoleSuggestion(state.currentUser.user_type, suggestionText);
    } catch (e) { console.error('Suggestion error:', e); }

    // 2. Weather
    try {
        if (data.weather || data.current_weather) {
            renderWeatherData(data.weather || data.current_weather);
        }
    } catch (e) { console.error('Weather error:', e); }

    // 3. Supply & FCI Stock Widgets
    try {
        renderSupplyWidgets(hist, data.fci_stock);
    } catch (e) { console.error('Supply widget error:', e); }

    // 4. Price Chart (±14 days from today)
    try {
        renderPriceChart(hist, forecast);
    } catch (e) { console.error('Price chart error:', e); }

    // 5. Climate Chart (±7 days from today)
    try {
        if (data.weather_history) {
            const weatherForecast = data.current_weather ? data.current_weather.forecast : null;
            renderClimateChart(hist, data.weather_history, forecast, weatherForecast, data.macro_factors);
        }
    } catch (e) { console.error('Climate chart error:', e); }

    // 6. Macro Factors
    try {
        if (data.macro_factors) {
            renderMacroFactors(data.macro_factors);
        }
    } catch (e) { console.error('Macro factors error:', e); }

    // 7. Predictions Grid
    try {
        if (forecast) {
            renderPredictions(forecast);
        }
    } catch (e) { console.error('Predictions error:', e); }

    // 8. Blockchain Ledger
    try {
        renderBlockchainLedger();
    } catch (e) { console.error('Blockchain error:', e); }

    // 9. Market Insights
    try {
        renderInsights(hist, forecast, change, data.macro_factors);
    } catch (e) { console.error('Insights error:', e); }
}

function renderRoleSuggestion(role, text) {
    const el = document.getElementById('role-suggestion');
    let icon = '💡';
    if (role === 'farmer') icon = '🌾';
    if (role === 'consumer') icon = '🛒';
    if (role === 'govt') icon = '🏛️';

    el.innerHTML = `<strong>${icon} Advisor:</strong> ${text}`;
}

function renderWeatherData(weatherData) {
    let current = weatherData.current || weatherData;
    document.getElementById('weather-content').innerHTML = `
        <div class="weather-stat">
            <div class="weather-stat-label">Temperature</div>
            <div class="weather-stat-value">${current.temp || current.temp_c || 'N/A'}°C</div>
        </div>
        <div class="weather-stat">
            <div class="weather-stat-label">Humidity</div>
            <div class="weather-stat-value">${current.humidity || 'N/A'}%</div>
        </div>
        <div class="weather-stat">
            <div class="weather-stat-label">Condition</div>
            <div class="weather-stat-value" style="font-size: 1.2rem;">${current.description || 'N/A'}</div>
        </div>
    `;
}

// ============================================
// Price Chart
// ============================================
function renderPriceChart(marketHistory, forecast) {
    if (state.chart) state.chart.destroy();

    // Filter to ±14 days from today
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const start14 = new Date(today); start14.setDate(today.getDate() - 14);
    const end14 = new Date(today); end14.setDate(today.getDate() + 14); end14.setHours(23, 59, 59, 999);

    const filteredHist = marketHistory.filter(item => {
        const d = new Date(item.arrival_date); d.setHours(0, 0, 0, 0);
        return d >= start14 && d <= end14;
    });
    const filteredForecast = forecast.filter(item => {
        const d = new Date(item.date); d.setHours(0, 0, 0, 0);
        return d >= start14 && d <= end14;
    });

    const historicalDates = filteredHist.map(item => {
        const d = new Date(item.arrival_date);
        return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    });
    const historicalPrices = filteredHist.map(item => parseFloat(item.modal_price));

    // Arrival quantity (stock) for tooltip
    const historicalStock = filteredHist.map(item => parseFloat(item.arrival_quantity || 0));

    const forecastDates = filteredForecast.map(item => {
        const d = new Date(item.date);
        return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    });
    const forecastPrices = filteredForecast.map(item => parseFloat(item.predicted_price));
    const confidenceLower = filteredForecast.map(item => parseFloat(item.confidence_lower || item.predicted_price * 0.9));
    const confidenceUpper = filteredForecast.map(item => parseFloat(item.confidence_upper || item.predicted_price * 1.1));

    const allDates = [...historicalDates, ...forecastDates];

    // Create stock data array padded with nulls for forecast period
    const stockData = [...historicalStock, ...new Array(forecastDates.length).fill(null)];

    const ctx = document.getElementById('priceChart').getContext('2d');
    state.chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: allDates,
            datasets: [
                {
                    label: 'Historical Price (₹/q)',
                    data: [...historicalPrices, ...new Array(forecastDates.length).fill(null)],
                    borderColor: '#64748b',
                    backgroundColor: 'rgba(100, 116, 139, 0.1)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Forecast Price (₹/q)',
                    data: [...new Array(historicalDates.length).fill(null), ...forecastPrices],
                    borderColor: '#2563eb',
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    borderDash: [5, 5],
                    borderWidth: 2,
                    tension: 0.4,
                    fill: false
                },
                {
                    label: 'Confidence Interval',
                    data: [...new Array(historicalDates.length).fill(null), ...confidenceUpper],
                    borderColor: 'transparent',
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    fill: '+1', // fill to next dataset (Lower)
                    pointRadius: 0
                },
                {
                    label: 'Confidence Lower',
                    data: [...new Array(historicalDates.length).fill(null), ...confidenceLower],
                    borderColor: 'transparent',
                    backgroundColor: 'transparent',
                    fill: false,
                    pointRadius: 0
                }
            ]
        },
        options: {
            responsive: true,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        afterBody: function (context) {
                            const index = context[0].dataIndex;
                            const stock = stockData[index];
                            if (stock !== null && stock !== undefined) {
                                return `Stock Arrival: ${stock} tonnes`;
                            }
                            return '';
                        }
                    }
                },
                legend: {
                    position: 'bottom'
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    title: { display: true, text: 'Price (₹/Quintal)' }
                }
            }
        }
    });
}

function renderClimateChart(marketHistory, weatherHistory, priceForecast, weatherForecast, macroFactors) {
    if (state.climateChart) state.climateChart.destroy();

    // Calculate +/- 7 days range
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 7);
    const endDate = new Date(today);
    endDate.setDate(today.getDate() + 7);
    endDate.setHours(23, 59, 59, 999);

    const isWithinRange = (dStr) => {
        const d = new Date(dStr);
        d.setHours(0, 0, 0, 0);
        return d >= startDate && d <= endDate;
    };

    // 1. Prepare Historical Data
    const filteredWeatherHist = weatherHistory.filter(w => isWithinRange(w.date));
    const histDates = filteredWeatherHist.map(w => w.date);
    const histTemps = filteredWeatherHist.map(w => parseFloat(w.max_temp || w.temp_max || w.temp_c || 0));
    const histRain = filteredWeatherHist.map(w => parseFloat(w.rainfall || w.precip_mm || 0));

    const priceMap = {};
    marketHistory.forEach(m => { priceMap[m.arrival_date] = parseFloat(m.modal_price); });
    const histPrices = filteredWeatherHist.map(w => priceMap[w.date] || null);

    // 2. Prepare Forecast Data
    const foreDates = [];
    const foreTemps = [];
    const forePrices = [];
    const foreRain = [];

    if (weatherForecast && priceForecast) {
        const forePriceMap = {};
        priceForecast.forEach(p => { forePriceMap[p.date] = parseFloat(p.predicted_price); });

        weatherForecast.forEach(w => {
            if (isWithinRange(w.date)) {
                foreDates.push(w.date);
                foreTemps.push(parseFloat(w.max_temp || w.temp_max || 0));
                foreRain.push(parseFloat(w.rainfall || 0));
                forePrices.push(forePriceMap[w.date] || null);
            }
        });
    }

    // 3. Combine
    const allPrices = [...histPrices, ...forePrices];
    const allTemps = [...histTemps, ...foreTemps];
    const allRain = [...histRain, ...foreRain];
    const labels = [...histDates, ...foreDates].map(d =>
        new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    );

    // 4. Generate Reasons for each point
    const reasons = allPrices.map((price, i) => {
        if (price === null) return "No data";
        const prevPrice = i > 0 ? allPrices[i - 1] : price;
        const temp = allTemps[i];
        const rain = allRain[i];
        const commodity = state.selectedCommodity;

        const priceChange = price - (prevPrice || price);
        const isUp = priceChange > 0;
        const isSignificant = Math.abs(priceChange) > (prevPrice * 0.005); // > 0.5% change

        // Influence Logic
        if (rain > 15) return "Rainfall disrupting supply logistics.";
        if (temp > 36 && isUp) return "Extreme heat impacting crop quality & transit life.";
        if (temp > 34 && commodity === "Tomato") return "Moderate heat affecting tomato shelf-life.";

        if (isSignificant && isUp) {
            if (macroFactors && macroFactors.storage_conditions && macroFactors.storage_conditions.status === 'Critical')
                return "Critical storage conditions putting pressure on supply.";
            if (macroFactors && macroFactors.export_policy && macroFactors.export_policy.status === 'Volatile')
                return "Policy volatility causing market uncertainty.";
            return "Rising demand matching seasonal supply trends.";
        }

        if (isSignificant && !isUp) return "Favorable climate boosting local arrivals.";

        return "Stable conditions with neutral climatic impact.";
    });

    const ctx = document.getElementById('climateChart').getContext('2d');
    state.climateChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Price (₹)',
                    data: allPrices,
                    borderColor: '#ef4444',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    yAxisID: 'y',
                    tension: 0.4,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    segment: {
                        borderDash: ctx => ctx.p0DataIndex >= histDates.length ? [6, 6] : undefined,
                    }
                },
                {
                    label: 'Temp (°C)',
                    data: allTemps,
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    yAxisID: 'y1',
                    tension: 0.4,
                    pointRadius: 2,
                    segment: {
                        borderDash: ctx => ctx.p0DataIndex >= histDates.length ? [6, 6] : undefined,
                    }
                }
            ]
        },
        options: {
            responsive: true,
            interaction: { mode: 'index', intersect: false },
            plugins: {
                tooltip: {
                    callbacks: {
                        title: (context) => {
                            const label = context[0].label;
                            const idx = context[0].dataIndex;
                            return idx >= histDates.length ? `${label} (Forecast)` : label;
                        },
                        afterBody: (context) => {
                            const idx = context[0].dataIndex;
                            return `\nReason: ${reasons[idx]}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: { display: true, text: 'Price (₹)' },
                    grid: { color: 'rgba(255,255,255,0.05)' }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    title: { display: true, text: 'Temp (°C)' },
                    grid: { drawOnChartArea: false }
                }
            }
        }
    });
}

// ============================================
// Macro Factors & Predictions
// ============================================
function renderMacroFactors(factors) {
    const grid = document.getElementById('macro-grid');
    if (!factors) {
        grid.style.display = 'none';
        return;
    }

    // Convert dict-of-dicts to array if needed
    let factorsList = factors;
    if (!Array.isArray(factors)) {
        factorsList = Object.entries(factors).map(([key, val]) => ({
            name: key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
            status: val.status || 'N/A',
            detail: val.detail || val.description || 'No details',
            impact: val.impact || val.trend || 'Neutral',
            description: val.detail || val.description || 'No description available.'
        }));
    }

    if (factorsList.length === 0) {
        grid.style.display = 'none';
        return;
    }

    grid.style.display = 'grid';
    grid.innerHTML = '';

    const h2 = document.createElement('h2');
    h2.style.gridColumn = '1 / -1';
    h2.style.marginBottom = '1rem';
    h2.innerText = 'Macro-Economic Factors';
    grid.appendChild(h2);

    factorsList.forEach(f => {
        const div = document.createElement('div');
        div.className = 'info-card macro-card';
        const impactColor = (f.impact === 'High' || f.impact === 'Cost Increase' || f.impact === 'High Volatility' || f.impact === 'Supply Shock Risk') ? '#ef4444'
            : (f.impact === 'Neutral' || f.impact === 'Stable') ? '#94a3b8'
                : '#fbbf24';
        div.innerHTML = `
            <h3 style="color: #e2e8f0; font-size: 0.95rem; margin-bottom: 0.5rem;">${f.name || 'Factor'}</h3>
            <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                <span style="background: rgba(30,41,59,0.8); padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.8rem; color: #38bdf8;">${f.status || ''}</span>
                <span style="font-size: 0.8rem; font-weight: 600; color: ${impactColor};">${f.impact || ''}</span>
            </div>
            <p style="font-size: 0.85rem; color: #cbd5e1; line-height: 1.4;">
                ${f.description || f.detail || 'No description available.'}
            </p>
        `;
        grid.appendChild(div);
    });
}

function renderPredictions(predictions) {
    const grid = document.getElementById('predictions-grid');
    grid.innerHTML = '';

    if (!predictions || predictions.length === 0) return;

    // Show next 6 entries
    predictions.slice(0, 6).forEach(p => {
        const date = new Date(p.date).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric' });
        const price = Math.round(p.predicted_price);

        const div = document.createElement('div');
        div.className = 'info-card prediction-card';
        div.style.textAlign = 'center';
        div.style.padding = '1rem';

        div.innerHTML = `
            <div style="color: #94a3b8; font-size: 0.85rem; margin-bottom: 0.5rem;">${date}</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: #e2e8f0;">₹${price}</div>
            <div style="font-size: 0.8rem; color: #22c55e; margin-top: 0.25rem;">Forecast</div>
        `;
        grid.appendChild(div);
    });
}

// ============================================
// Supply & FCI Widgets
// ============================================
function renderSupplyWidgets(marketHistory, fciStock) {
    const section = document.getElementById('stock-supply-section');
    const grid = document.getElementById('stock-supply-grid');
    const badge = document.getElementById('stock-data-badge');
    const commodity = state.selectedCommodity || '';
    const hasFCI = ['Rice', 'Wheat'].includes(commodity);

    let cards = '';
    let hasAnyData = false;

    // ── Live Market Arrivals Card (shown for ALL commodities) ──
    if (marketHistory && marketHistory.length > 0) {
        const lastRec = marketHistory[marketHistory.length - 1];
        const arrivalQty = parseFloat(lastRec.arrival_quantity || 0);
        const arrivalDate = lastRec.arrival_date || lastRec.date || 'Latest';
        hasAnyData = true;

        cards += `
            <div class="stock-card stock-card--live">
                <div class="stock-card__header">
                    <div class="stock-card__icon" style="background: rgba(59, 130, 246, 0.15); color: #3b82f6;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                        </svg>
                    </div>
                    <div>
                        <div class="stock-card__title">Live Market Arrivals</div>
                        <div class="stock-card__subtitle">${commodity} · ${arrivalDate}</div>
                    </div>
                </div>
                <div class="stock-card__body">
                    <div class="stock-card__value">${arrivalQty.toLocaleString()}</div>
                    <div class="stock-card__unit">tonnes</div>
                </div>
                <div class="stock-card__footer">
                    <span class="stock-card__status stock-card__status--live">
                        <span class="stock-pulse"></span> Live Mandi Data
                    </span>
                </div>
            </div>`;
    }

    // ── FCI Government Stock Card (shown ONLY for Rice & Wheat) ──
    if (hasFCI && fciStock !== null && fciStock !== undefined) {
        let fciValue = null;
        if (typeof fciStock === 'number' && !isNaN(fciStock) && fciStock > 0) {
            fciValue = fciStock;
        } else if (typeof fciStock === 'object' && fciStock !== null) {
            const stockVal = fciStock.quantity || fciStock.stock || fciStock.total || fciStock.value;
            if (stockVal) fciValue = parseFloat(stockVal);
        }

        if (fciValue && !isNaN(fciValue)) {
            hasAnyData = true;

            // Determine stock level indicator
            let levelClass = 'stock-card__level--normal';
            let levelText = 'Adequate';
            if (fciValue > 50000) {
                levelClass = 'stock-card__level--high';
                levelText = 'High Reserves';
            } else if (fciValue < 5000) {
                levelClass = 'stock-card__level--low';
                levelText = 'Low Stock';
            }

            cards += `
                <div class="stock-card stock-card--fci">
                    <div class="stock-card__header">
                        <div class="stock-card__icon" style="background: rgba(245, 158, 11, 0.15); color: #f59e0b;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M3 21h18M3 7v1a3 3 0 006 0V7m0 0a3 3 0 016 0v1a3 3 0 006 0V7H3zm0-4h18v4"/>
                            </svg>
                        </div>
                        <div>
                            <div class="stock-card__title">Government (FCI) Stock</div>
                            <div class="stock-card__subtitle">${commodity} · Warehouse Reserve</div>
                        </div>
                    </div>
                    <div class="stock-card__body">
                        <div class="stock-card__value">${fciValue.toLocaleString()}</div>
                        <div class="stock-card__unit">tonnes</div>
                    </div>
                    <div class="stock-card__footer">
                        <span class="stock-card__level ${levelClass}">● ${levelText}</span>
                        <span class="stock-card__badge">FCI Data</span>
                    </div>
                </div>`;
        }
    } else if (hasFCI) {
        // Rice/Wheat but FCI data unavailable
        hasAnyData = hasAnyData || false;
        cards += `
            <div class="stock-card stock-card--fci stock-card--unavailable">
                <div class="stock-card__header">
                    <div class="stock-card__icon" style="background: rgba(100, 116, 139, 0.15); color: #64748b;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M3 21h18M3 7v1a3 3 0 006 0V7m0 0a3 3 0 016 0v1a3 3 0 006 0V7H3zm0-4h18v4"/>
                        </svg>
                    </div>
                    <div>
                        <div class="stock-card__title">Government (FCI) Stock</div>
                        <div class="stock-card__subtitle">${commodity} · Warehouse Reserve</div>
                    </div>
                </div>
                <div class="stock-card__body">
                    <div class="stock-card__value" style="color: #64748b;">N/A</div>
                    <div class="stock-card__unit" style="color: #64748b;">Data unavailable</div>
                </div>
                <div class="stock-card__footer">
                    <span class="stock-card__status" style="color: #64748b;">FCI API not responding</span>
                </div>
            </div>`;
    }

    // Render or hide section
    if (hasAnyData || hasFCI) {
        grid.innerHTML = cards;
        section.style.display = 'block';
        badge.textContent = hasFCI ? 'FCI + Live' : 'Live';
    } else if (cards) {
        grid.innerHTML = cards;
        section.style.display = 'block';
        badge.textContent = 'Live';
    } else {
        section.style.display = 'none';
    }
}

// ============================================
// Blockchain Ledger
// ============================================
function renderBlockchainLedger() {
    const container = document.getElementById('blockchain-container');
    container.innerHTML = '<div class="loading-state"><p>Fetching blockchain data...</p></div>';

    // First mine any pending transactions, then fetch the chain
    fetch(`${API_BASE_URL}/api/blockchain/mine`, { method: 'POST' })
        .catch(() => { }) // Ignore mine errors
        .finally(() => {
            fetch(`${API_BASE_URL}/api/blockchain/chain`)
                .then(res => res.json())
                .then(data => {
                    if (!data.chain || data.chain.length === 0) {
                        container.innerHTML = '<p style="color: #94a3b8; text-align: center; padding: 1rem;">No intervention records on chain.</p>';
                        return;
                    }

                    let html = '';
                    // Reverse to show newest first
                    const blocks = [...data.chain].reverse();
                    blocks.forEach(block => {
                        const ts = block.timestamp;
                        const date = ts > 1e12 ? new Date(ts).toLocaleString() : new Date(ts * 1000).toLocaleString();
                        const txCount = (block.transactions || []).length;
                        const hashShort = (block.hash || '').substring(0, 16) + '...';
                        const prevShort = (block.previous_hash || '0000').substring(0, 16) + '...';

                        let txHtml = '';
                        if (block.transactions && block.transactions.length > 0) {
                            block.transactions.forEach(tx => {
                                txHtml += `
                                    <div style="background: rgba(30,41,59,0.8); padding: 0.5rem; border-radius: 6px; margin-top: 0.5rem; font-size: 0.8rem;">
                                        <span style="color: #94a3b8;">Type:</span> <span style="color: #e2e8f0;">${tx.type || 'Intervention'}</span> |
                                        <span style="color: #94a3b8;">Commodity:</span> <span style="color: #fbbf24;">${tx.commodity || 'N/A'}</span> |
                                        <span style="color: #94a3b8;">Event:</span> <span style="color: #22c55e;">${tx.event || tx.action || 'N/A'}</span>
                                        <div style="color: #64748b; margin-top: 0.25rem;">${tx.detail || ''}</div>
                                    </div>`;
                            });
                        }

                        html += `
                            <div style="background: rgba(15,23,42,0.6); border: 1px solid rgba(51,65,85,0.5); border-radius: 8px; padding: 1rem; margin-bottom: 0.75rem;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                                    <span style="color: #22c55e; font-weight: 600;">Block #${block.index}</span>
                                    <span style="color: #64748b; font-size: 0.8rem;">${date}</span>
                                </div>
                                <div style="font-size: 0.8rem; color: #94a3b8;">
                                    Hash: <code style="color: #38bdf8;">${hashShort}</code>
                                </div>
                                <div style="font-size: 0.8rem; color: #94a3b8;">
                                    Prev: <code style="color: #64748b;">${prevShort}</code>
                                </div>
                                <div style="font-size: 0.8rem; color: #94a3b8; margin-top: 0.25rem;">
                                    Transactions: <span style="color: #e2e8f0;">${txCount}</span> | Nonce: <span style="color: #e2e8f0;">${block.nonce || 0}</span>
                                </div>
                                ${txHtml}
                            </div>`;
                    });

                    container.innerHTML = html;
                })
                .catch(err => {
                    console.error('Blockchain fetch error:', err);
                    container.innerHTML = '<p style="color: #ef4444; text-align: center; padding: 1rem;">Could not load blockchain data.</p>';
                });
        });
}

// ============================================
// Market Insights
// ============================================
function renderInsights(marketHistory, forecast, priceChange, macroFactors) {
    const container = document.getElementById('insights-content');
    if (!container) return;

    const commodity = state.selectedCommodity || 'Commodity';
    const avgHist = marketHistory.reduce((s, i) => s + parseFloat(i.modal_price), 0) / (marketHistory.length || 1);
    const avgFore = forecast.reduce((s, i) => s + parseFloat(i.predicted_price), 0) / (forecast.length || 1);
    const direction = priceChange > 0 ? 'upward' : 'downward';
    const dirIcon = priceChange > 0 ? '📈' : '📉';

    let insightsHtml = `
        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
                <span style="font-size: 1.5rem;">${dirIcon}</span>
                <div>
                    <strong style="color: #e2e8f0;">Price Trend</strong>
                    <p style="color: #94a3b8; font-size: 0.85rem; margin-top: 0.25rem;">
                        ${commodity} prices show an ${direction} trend of <span style="color: ${priceChange > 0 ? '#ef4444' : '#22c55e'}; font-weight: 600;">${Math.abs(priceChange).toFixed(1)}%</span>.
                        Average historical: ₹${Math.round(avgHist)}/q → Forecast: ₹${Math.round(avgFore)}/q.
                    </p>
                </div>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
                <span style="font-size: 1.5rem;">🌦️</span>
                <div>
                    <strong style="color: #e2e8f0;">Climate Impact</strong>
                    <p style="color: #94a3b8; font-size: 0.85rem; margin-top: 0.25rem;">
                        Weather patterns are being tracked for their correlation with price movements. See the Climate Influence chart above for a visual analysis.
                    </p>
                </div>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
                <span style="font-size: 1.5rem;">📊</span>
                <div>
                    <strong style="color: #e2e8f0;">Supply Analysis</strong>
                    <p style="color: #94a3b8; font-size: 0.85rem; margin-top: 0.25rem;">
                        Based on ${marketHistory.length} historical records and ${forecast.length}-day forecast, the AI model has generated actionable predictions above.
                    </p>
                </div>
            </div>`;

    // Add macro factor insights if available
    const factorCount = macroFactors ? (Array.isArray(macroFactors) ? macroFactors.length : Object.keys(macroFactors).length) : 0;
    if (factorCount > 0) {
        insightsHtml += `
            <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
                <span style="font-size: 1.5rem;">🏛️</span>
                <div>
                    <strong style="color: #e2e8f0;">External Factors</strong>
                    <p style="color: #94a3b8; font-size: 0.85rem; margin-top: 0.25rem;">
                        ${factorCount} macro-economic factor(s) are currently influencing ${commodity} prices. Review the Macro-Economic Factors section for details.
                    </p>
                </div>
            </div>`;
    }

    insightsHtml += '</div>';
    container.innerHTML = insightsHtml;
}

