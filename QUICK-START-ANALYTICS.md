# 🎯 Quick Start Guide - Iowa Print Solutions Analytics
## Get Your Analytics Running in 5 Minutes

### Step 1: Get Your Google Analytics ID
1. Go to [analytics.google.com](https://analytics.google.com)
2. Create a new GA4 property for "Iowa Print Solutions"
3. Copy your Measurement ID (looks like `G-ABC123DEF4`)

### Step 2: Update the Code
Replace the placeholder in these 2 files:

**File 1: `src/main.jsx` (Line 9)**
```javascript
// Change this line:
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'
// To your actual ID:
const GA_MEASUREMENT_ID = 'G-ABC123DEF4'
```

**File 2: `src/utils/analyticsConfig.js` (Line 3)**
```javascript
// Change this line:
MEASUREMENT_ID: 'G-XXXXXXXXXX',
// To your actual ID:
MEASUREMENT_ID: 'G-ABC123DEF4',
```

### Step 3: Test Everything
1. Deploy your site
2. Visit `yoursite.com/#/analytics-test`
3. Click "Run All Tests"
4. Check that all tests show ✅

### Step 4: Verify in Google Analytics
1. Go to GA4 → Reports → Real-time
2. Browse your website
3. See events appearing in real-time!

### Step 5: Start Tracking Leads
Your website will now automatically track:
- 📞 Phone calls: $75 lead value each
- 📝 Contact forms: $50 lead value each  
- 📊 Calculator usage: $40 lead value each
- 📚 Downloads: $25 lead value each
- 💼 Quote requests: $100 lead value each

### Lead Scoring in Action
Users get points for:
- Page visits: 5 points each
- Industry page views: 15 points each
- Tool usage: 20 points each
- Time spent: 20-50 points
- Phone/form interactions: 50-200 points

**Engagement Levels:**
- 🧊 Cold (0-49 points): Standard CTAs
- 🔥 Interested (50-99 points): Engaging CTAs
- 🌡️ Warm (100-199 points): Urgent CTAs  
- 🚨 Hot (200+ points): Premium CTAs

### That's It! 🎉
Your Iowa Print Solutions website is now a sophisticated lead generation and analytics machine. Watch your GA4 dashboard fill with valuable business intelligence about your Iowa prospects!

**Questions?** Check the full deployment guide: `FINAL-DEPLOYMENT-GUIDE.md`