# Adaptive Sentience Pre-Launch Website Setup

## Overview
Single-page pre-launch website with interest form that submits to Google Sheets.

## Files
- `index.html` - Main website file
- `google-apps-script.js` - Google Apps Script for form submission
- `SETUP.md` - This file

## Google Sheets Integration Setup

### Step 1: Create Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Adaptive Sentience Interest Form"
4. In the first row, add these headers:
   - A1: `Timestamp`
   - B1: `First Name`
   - C1: `Last Name`
   - D1: `Email`
   - E1: `Company`
   - F1: `Comments`

### Step 2: Deploy Google Apps Script
1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete any default code
3. Copy all code from `google-apps-script.js` and paste it into the script editor
4. Click **Save** (disk icon)
5. Name your project "Adaptive Sentience Form Handler"
6. Click **Deploy > New deployment**
7. Click the gear icon next to "Select type" and choose **Web app**
8. Configure deployment:
   - **Description**: "Adaptive Sentience interest form handler"
   - **Execute as**: Me
   - **Who has access**: Anyone
9. Click **Deploy**
10. **Grant permissions** when prompted:
    - Click "Authorize access"
    - Choose your Google account
    - Click "Advanced" if you see a warning
    - Click "Go to [Project Name] (unsafe)" (it's safe, it's your own script)
    - Click "Allow"
11. **Copy the Web App URL** (it looks like: `https://script.google.com/macros/s/AKfycby.../exec`)

### Step 3: Update Website
1. Open `index.html`
2. Find this line (around line 316):
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';
   ```
3. Replace `YOUR_GOOGLE_SCRIPT_URL_HERE` with your actual Web App URL
4. Save the file

## Testing

### Test the Google Apps Script
1. In Apps Script editor, select the `testDoPost` function from the dropdown
2. Click **Run**
3. Check your Google Sheet - a test row should appear

### Test the Website
1. Open `index.html` in a web browser
2. Click "I'm Interested"
3. Fill out the form with test data
4. Click "Submit"
5. You should see the confirmation modal
6. Check your Google Sheet - your data should appear

## Deployment Options

### Option 1: Simple Hosting (GitHub Pages, Netlify, Vercel)
1. Push to GitHub repository
2. Enable GitHub Pages or connect to Netlify/Vercel
3. Your site will be live at your chosen domain

### Option 2: Custom Domain
1. Upload `index.html` to your web hosting
2. Configure your domain DNS settings
3. Ensure HTTPS is enabled

## Features

- ✅ Responsive design (mobile & desktop)
- ✅ Modern gradient design
- ✅ Form validation (all fields required)
- ✅ Email format validation
- ✅ Modal-based form submission
- ✅ Google Sheets integration
- ✅ Confirmation modal after submission
- ✅ Timestamp tracking

## Customization

### Update Copy
Edit the text in `index.html`:
- Headline: Line 183
- Subtitle: Line 184
- Feature descriptions: Lines 187-203

### Update Colors
Modify the gradient colors in the `<style>` section:
- Primary gradient: `#667eea` and `#764ba2`
- Look for these hex codes throughout the CSS

### Update Company Name
Replace "Adaptive Sentience" throughout the HTML if needed.

## Support

If form submissions aren't working:
1. Check browser console for errors (F12)
2. Verify the Google Script URL is correct
3. Ensure the Apps Script deployment is set to "Anyone" access
4. Check that the Google Sheet has the correct headers

## Security Note

The Google Apps Script Web App URL is public but only accepts POST requests with the expected data structure. No sensitive data is exposed, and the script only appends data to your Google Sheet.
