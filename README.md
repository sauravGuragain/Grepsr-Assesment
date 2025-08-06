Notes App - Full System Testing
This project contains the manual testing, UI automation (Cypress), and API testing (Postman + Newman) for a Notes Application.

 Features Covered
1. Manual Testing
-Created test cases grouped into Smoke and Regression.
-Reported a bug where a note from the "Home" category appeared in "Work".
-Bug Severity: Major
-Bug Priority: High

2. UI Automation (Cypress)
-Sign Up flow
-Login flow
-Create, Edit, Delete notes
-Used Page Object Model (POM)
-Categorized tests into:
-Smoke (cypress/e2e/smoke/)
-Regression (cypress/e2e/regression/)
-Generated a Mochawesome HTML report.

3. API Testing (Postman + Newman)
-API tests for:
-Create Note
-Get All Notes
-Update Note
-Delete Note

Test files:
notes-api.postman_collection.json
notes-env.postman_environment.json
Added a GitHub Actions workflow to auto-run tests daily.

4. GitHub Actions CI
Two workflows:
UI tests: Runs Cypress tests (cypress-tests.yml)
API tests: Runs Newman tests (newman-api-tests.yml)
Triggered automatically every day.

Folder Structure
pgsql
Copy
Edit
├── api-tests/
│   └── postman/
│       ├── notes-api.postman_collection.json
│       └── notes-env.postman_environment.json
├── cypress/
│   ├── e2e/
│   │   ├── smoke/
│   │   └── regression/
│   └── reports/
│       └── mochawesome-report/
├── .github/
│   └── workflows/
│       ├── cypress-tests.yml
│       └── newman-api-tests.yml
└── README.md

 How to Run Locally
1-Clone the repository
git clone [<(https://github.com/sauravGuragain/Grepsr-Assesment)>]
cd notes-app-testing

2-Install dependencies
npm install

3-Run Cypress Tests
npx cypress open

4-Generate Cypress Test Reports 
npm run generate-report

5-Run Postman API tests with Newman
newman run api-tests/postman/notes-api.postman_collection.json -e api-tests/postman/notes-env.postman_environment.json

Author
Saurav Guragain
https://github.com/sauravGuragain