# TestTheFramework - Project Plan

This document outlines the plan for creating a comprehensive test framework comparison project based on the QA Playground Tests baseline implementation.

## Project Overview

The goal is to create a codebase that:
1. Implements test scenarios from the QA Playground Tests baseline
2. Provides TypeScript implementation as a migration target
3. Establishes a baseline for comparing different test frameworks
4. Integrates AI models and agents for test generation and maintenance

## Current State Analysis

### Existing Implementations
- **Java Playwright**: Located in `java/playwright/` with TestNG framework
- **TypeScript Playwright**: Located in `typescript/` with existing utilities

### Baseline Implementation
- **Location**: `baseline-implementation/`
- **Source**: https://github.com/marko-simic/qa-playground-tests
- **Language**: JavaScript (Playwright)
- **Test Count**: 23 test scenarios

## Project Structure

```
TestTheFramework/
├── baseline-implementation/  # Original JS implementation from QA Playground
│   ├── tests/                # Test specifications (JavaScript)
│   ├── pages/                # Page Object Model
│   └── fixtures/             # Test data files
├── java/                     # Java test implementations
│   └── playwright/
├── typescript/               # TypeScript test implementations (current)
│   ├── src/tests/            # Test specifications
│   └── src/utils/            # Utility functions
├── typescript-migration/     # TypeScript migration target (NEW)
│   ├── tests/                # Migrated test specifications
│   ├── pages/                # TypeScript Page Objects
│   └── utils/                # TypeScript utilities
├── docs/                     # Documentation
│   ├── architecture.md       # Architecture overview
│   └── migration-plan.md     # Migration strategy
├── docker-compose.yml        # Docker services definition
└── README.md                 # Project documentation
```

## Test Scenarios from Baseline

### 1. Budget Tracker Tests
| Test | Description |
|------|-------------|
| Add all incomes and expenses | Verify budget calculations with multiple entries |
| Modify first record | Edit existing budget entry |
| Remove all records | Clear all budget entries |

### 2. QR Code Generator Tests
| Test | Description |
|------|-------------|
| Visually validate generated image | Screenshot comparison for QR code |

### 3. Rating Tests
| Test | Description |
|------|-------------|
| Rate with one star | Single star rating validation |
| Rate with two stars | Two star rating validation |
| Rate with three stars | Three star rating validation |
| Rate with four stars | Four star rating validation |
| Rate with five stars | Five star rating validation |

### 4. Links Tests
| Test | Description |
|------|-------------|
| Open each menu link in new tab | Multi-tab navigation |
| Open each menu link by clicking | Single tab navigation |

### 5. Shadow DOM Tests
| Test | Description |
|------|-------------|
| Boost progress bar by clicking button | Shadow DOM element interaction |

### 6. Mouse Over Tests
| Test | Description |
|------|-------------|
| Put mouse pointer on the image | Hover interaction validation |

### 7. Hidden Elements Tests
| Test | Description |
|------|-------------|
| Click on the hidden button | Hidden element interaction |

### 8. Upload Tests
| Test | Description |
|------|-------------|
| Upload an image file | Single file upload |
| Upload multiple image files | Multi-file upload |

### 9. Iframe Tests
| Test | Description |
|------|-------------|
| Click on button in two-level deep iframe | Nested iframe handling |

### 10. Dynamic Table Tests
| Test | Description |
|------|-------------|
| Verify Spider-Man's real name | XPath-based table navigation |

### 11. Verify Account Tests
| Test | Description |
|------|-------------|
| Solve verification code by typing numbers | Code input validation |
| Solve verification code by pressing key-up button | Arrow key simulation |

### 12. Redirection Tests
| Test | Description |
|------|-------------|
| Verify each redirection in chain | Multi-step redirect validation |

### 13. Fetch Data Tests
| Test | Description |
|------|-------------|
| Load and display all posts | API data loading validation |

### 14. Tags Input Tests
| Test | Description |
|------|-------------|
| Remove the last tag | Tag removal validation |
| Add max number of tags | Tag limit validation |
| Remove all tags | Bulk tag removal |

### 15. New Tab Tests
| Test | Description |
|------|-------------|
| Open new tab with correct text | New tab handling |

### 16. Context Menu Tests
| Test | Description |
|------|-------------|
| Click on each menu and sub-menu item | Right-click context menu |

### 17. Download Tests
| Test | Description |
|------|-------------|
| Download a PDF file | File download validation |

### 18. Geolocation Tests
| Test | Description |
|------|-------------|
| Change browser geolocation | Geolocation API testing |

### 19. Onboarding Tests
| Test | Description |
|------|-------------|
| Close onboarding modal if it exists | Conditional UI handling |

### 20. Multi Level Dropdown Tests
| Test | Description |
|------|-------------|
| Validate Setting sub-menu items | Multi-level dropdown validation |
| Validate Animals sub-menu items | Multi-level dropdown validation |

### 21. Sortable List Tests
| Test | Description |
|------|-------------|
| Reorder the list to match correct order | Drag and drop validation |

### 22. Changeable Iframe Tests
| Test | Description |
|------|-------------|
| Verify remaining time and message | Dynamic iframe content |

### 23. Pop-Up Tests
| Test | Description |
|------|-------------|
| Open pop-up and click button inside | Pop-up window handling |

## TypeScript Migration Plan

### Phase 1: Project Setup
- [ ] Create `typescript-migration/` directory structure
- [ ] Initialize TypeScript project with tsconfig.json
- [ ] Configure Playwright for TypeScript
- [ ] Set up Allure reporting

### Phase 2: Page Object Model
- [ ] Create base page class with TypeScript generics
- [ ] Implement Budget App User page
- [ ] Create reusable utility classes

### Phase 3: Test Migration
- [ ] Migrate Budget Tracker tests
- [ ] Migrate QR Code Generator tests
- [ ] Migrate Rating tests
- [ ] Migrate Links tests
- [ ] Migrate Shadow DOM tests
- [ ] Migrate Mouse Over tests
- [ ] Migrate Hidden Elements tests
- [ ] Migrate Upload tests
- [ ] Migrate Iframe tests
- [ ] Migrate Dynamic Table tests
- [ ] Migrate Verify Account tests
- [ ] Migrate Redirection tests
- [ ] Migrate Fetch Data tests
- [ ] Migrate Tags Input tests
- [ ] Migrate New Tab tests
- [ ] Migrate Context Menu tests
- [ ] Migrate Download tests
- [ ] Migrate Geolocation tests
- [ ] Migrate Onboarding tests
- [ ] Migrate Multi Level Dropdown tests
- [ ] Migrate Sortable List tests
- [ ] Migrate Changeable Iframe tests
- [ ] Migrate Pop-Up tests

### Phase 4: Testing & Validation
- [ ] Run all migrated tests
- [ ] Fix any issues found
- [ ] Update documentation

## Implementation Guidelines

### TypeScript Best Practices
1. Use strict mode in tsconfig.json
2. Implement proper type definitions
3. Use async/await for asynchronous operations
4. Add JSDoc comments for all classes and methods
5. Follow POM pattern consistently

### Playwright Best Practices
1. Use page objects for element locators
2. Implement explicit waits instead of fixed timeouts
3. Use test.describe for test organization
4. Leverage Playwright's auto-waiting features
5. Implement proper error handling

### Code Organization
1. Separate tests by feature/domain
2. Use descriptive test names
3. Keep test methods focused and concise
4. Reuse common utilities and helpers

## Success Criteria

1. All 23 baseline test scenarios are implemented in TypeScript
2. Tests pass successfully against the QA Playground application
3. Code follows TypeScript and Playwright best practices
4. Documentation is complete and up-to-date

## Next Steps

1. Create the `typescript-migration/` directory structure
2. Set up TypeScript configuration files
3. Begin migration of test scenarios starting with Budget Tracker
4. Implement Page Object Model classes
5. Run and validate migrated tests
