# QA Playground Tests - TypeScript Implementation

This directory contains the TypeScript implementation of Playwright end-to-end tests for the QAPlayground.dev mini web apps.

## Installation

```bash
npm install
```

## Running the project

How to run the tests:

```bash
npx playwright test
```

How to run the tests with open browser:

```bash
npx playwright test --headed
```

Or you can run a pre-defined script with the command

```bash
npm run test
```

or

```bash
npm run headed
```

## Test Scenarios

The TypeScript implementation includes the following test scenarios:

### 1. Budget Tracker (`tests/budget-tracker.spec.ts`)
- Add all incomes and expenses
- Modify first record
- Remove all records

### 2. QR Code Generator (`tests/qr-code.spec.ts`)
- Visually validate generated image

### 3. Rating (`tests/rating.spec.ts`)
- Rate with one star
- Rate with two stars
- Rate with three stars
- Rate with four stars
- Rate with five stars

### 4. Links (`tests/links.spec.ts`)
- Open each menu link in new tab
- Open each menu link by clicking

### 5. Shadow DOM (`tests/shadow-dom.spec.ts`)
- Boost progress bar by clicking button

### 6. Mouse Over (`tests/mouseover.spec.ts`)
- Put mouse pointer on the image

### 7. Hidden Elements (`tests/hidden.spec.ts`)
- Click on the hidden button

### 8. Upload (`tests/upload.spec.ts`)
- Upload an image file
- Upload multiple image files

### 9. Iframe (`tests/iframe.spec.ts`)
- Click on button in two-level deep iframe

### 10. Dynamic Table (`tests/dynamic-table.spec.ts`)
- Verify Spider-Man's real name

### 11. Verify Account (`tests/verify-account.spec.ts`)
- Solve verification code by typing numbers
- Solve verification code by pressing key-up button

### 12. Redirection (`tests/redirect.spec.ts`)
- Verify each redirection in chain

### 13. Fetch Data (`tests/fetch.spec.ts`)
- Load and display all posts

### 14. Tags Input (`tests/tags.spec.ts`)
- Remove the last tag
- Add max number of tags
- Remove all tags

### 15. New Tab (`tests/new-tab.spec.ts`)
- Open new tab with correct text

### 16. Context Menu (`tests/context-menu.spec.ts`)
- Click on each menu and sub-menu item

### 17. Download (`tests/download.spec.ts`)
- Download a PDF file

### 18. Geolocation (`tests/geolocation.spec.ts`)
- Change browser geolocation

### 19. Onboarding (`tests/onboarding.spec.ts`)
- Close onboarding modal if it exists

### 20. Multi Level Dropdown (`tests/multi-level-dropdown.spec.ts`)
- Validate Setting sub-menu items
- Validate Animals sub-menu items

### 21. Sortable List (`tests/sortable-list.spec.ts`)
- Reorder the list to match correct order

### 22. Changeable Iframe (`tests/changeable-iframe.spec.ts`)
- Verify remaining time and message

### 23. Pop-Up (`tests/popup.spec.ts`)
- Open pop-up and click button inside

## Project Structure

```
typescript/
├── tests/                    # Test specifications
│   ├── budget-tracker.spec.ts
│   ├── qr-code.spec.ts
│   ├── rating.spec.ts
│   ├── links.spec.ts
│   ├── shadow-dom.spec.ts
│   ├── mouseover.spec.ts
│   ├── hidden.spec.ts
│   ├── upload.spec.ts
│   ├── iframe.spec.ts
│   ├── dynamic-table.spec.ts
│   ├── verify-account.spec.ts
│   ├── redirect.spec.ts
│   ├── fetch.spec.ts
│   ├── tags.spec.ts
│   ├── new-tab.spec.ts
│   ├── context-menu.spec.ts
│   ├── download.spec.ts
│   ├── geolocation.spec.ts
│   ├── onboarding.spec.ts
│   ├── multi-level-dropdown.spec.ts
│   ├── sortable-list.spec.ts
│   ├── changeable-iframe.spec.ts
│   └── popup.spec.ts
├── pages/                    # Page Object Model
│   └── budget-app/
│       └── User.ts
├── fixtures/                 # Test data files
│   ├── input-data.json
│   ├── demo.png
│   ├── demo2.png
│   └── demo3.jpg
├── package.json
├── playwright.config.ts
└── tsconfig.json
```

## Key Features

1. **Page Object Model**: Uses POM pattern for maintainability
2. **Data-Driven Testing**: Externalizes test data to JSON files
3. **Parallel Execution**: Supports parallel test execution
4. **Visual Testing**: Includes screenshot comparison for QR code
5. **Frame Handling**: Tests nested iframes and changeable iframes
6. **Popup Handling**: Handles pop-up windows and new tabs
7. **Geolocation**: Tests browser geolocation API
8. **Drag and Drop**: Implements sortable list with drag and drop

## TypeScript Migration Notes

This implementation is a direct migration from the JavaScript baseline (`../baseline-implementation/`) to TypeScript. Key changes include:

1. **Type Safety**: Added proper types for Playwright objects (`Page`, `Locator`, etc.)
2. **Async/Await**: Uses modern async/await pattern
3. **Classes**: Converted JavaScript classes to TypeScript classes with proper access modifiers
4. **Imports/Exports**: Uses ES6 module syntax (`import`/`export`)
5. **JSDoc Comments**: Added type annotations and documentation
