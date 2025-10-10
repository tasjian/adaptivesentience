/**
 * Google Apps Script for Buttsniffer Interest Form
 *
 * SETUP INSTRUCTIONS:
 * 1. Create a new Google Sheet
 * 2. Add headers in the first row: Timestamp | First Name | Last Name | Email | Company | Comments
 * 3. Go to Extensions > Apps Script
 * 4. Replace the default code with this script
 * 5. Click "Deploy" > "New deployment"
 * 6. Select type: "Web app"
 * 7. Execute as: "Me"
 * 8. Who has access: "Anyone"
 * 9. Click "Deploy"
 * 10. Copy the Web App URL and paste it into index.html (replace YOUR_GOOGLE_SCRIPT_URL_HERE)
 * 11. Grant necessary permissions when prompted
 */

function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);

    // Extract form fields
    const timestamp = new Date(data.timestamp);
    const firstName = data.firstName;
    const lastName = data.lastName;
    const email = data.email;
    const company = data.company;
    const comments = data.comments || '';

    // Append data to the sheet
    sheet.appendRow([
      timestamp,
      firstName,
      lastName,
      email,
      company,
      comments
    ]);

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        'status': 'success',
        'message': 'Data added successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        'status': 'error',
        'message': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function to verify script works
function testDoPost() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        timestamp: new Date().toISOString(),
        firstName: 'Test',
        lastName: 'User',
        email: 'test@example.com',
        company: 'Test Company',
        comments: 'This is a test comment'
      })
    }
  };

  const result = doPost(testData);
  Logger.log(result.getContent());
}
