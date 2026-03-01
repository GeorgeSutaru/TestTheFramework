# TestTheFramework

A comprehensive test framework comparison project supporting multiple testing frameworks including Playwright (TypeScript/Java), Cypress, and Selenium WebDriver. This project also explores AI model integration for test generation, self-healing, and flaky detection.

## 📚 Documentation

- [Architecture Overview](plans/test-framework-comparison-architecture.md) - System architecture and design decisions
- [Test Scenarios Documentation](plans/test-scenarios-documentation.md) - Detailed documentation of all test scenarios
- [TypeScript Migration Strategy](plans/typescript-migration-strategy.md) - Plan for migrating to TypeScript
- [AI Integration Plan](plans/ai-model-agent-integration.md) - AI model and agent integration strategy

## 🏗️ Project Structure

```
TestTheFramework/
├── plans/                         # Planning and documentation
│   ├── test-framework-comparison-architecture.md
│   ├── test-scenarios-documentation.md
│   ├── typescript-migration-strategy.md
│   └── ai-model-agent-integration.md
├── java/                          # Java test implementations
│   └── playwright/
│       ├── src/test/java/...     # TestNG tests
│       └── pom.xml               # Maven configuration
├── typescript/                    # TypeScript test implementations
│   ├── src/tests/                # Playwright tests
│   ├── src/utils/                # Utility functions
│   └── package.json              # npm configuration
├── docker-compose.yml             # Docker services definition
└── README.md                      # This file
```

## 🚀 Quick Start

### Prerequisites
- Docker and Docker Compose
- Node.js 18+ (for TypeScript)
- Java 17+ (for Java tests)
- Maven 3.6+ (for Java tests)

### Running the Application Under Test

```bash
# Start all services including The Internet application
docker-compose up -d

# Verify the application is running
curl http://localhost:3003
```

### Running TypeScript Playwright Tests

```bash
cd typescript
npm install
npx playwright test

# Generate Allure report
npm run report
```

### Running Java Playwright Tests

```bash
cd java/playwright
mvn test

# Generate Allure report
mvn allure:report
```

## 📊 Test Framework Comparison

| Feature | Playwright (TS) | Playwright (Java) | Cypress | Selenium |
|---------|-----------------|-------------------|---------|----------|
| Cross-browser | ✅ | ✅ | ✅ | ✅ |
| Auto-waiting | ✅ | ✅ | ✅ | ❌ |
| Test isolation | ✅ | ✅ | ✅ | ⚠️ |
| Parallel execution | ✅ | ✅ | ⚠️ | ⚠️ |
| Trace viewer | ✅ | ❌ | ❌ | ❌ |

## 🧪 Test Scenarios

The project includes 37 test scenarios covering:

- **Authentication**: Basic Auth, Form Authentication, Secure File Download
- **Element Manipulation**: Add/Remove Elements, Checkboxes, Context Menu, Drag and Drop
- **Dynamic Content**: Dynamic Controls, Dynamic Loading, Disappearing Elements
- **Forms**: File Upload, File Download
- **Navigation**: Multiple Windows, Redirect Link, Status Codes
- **Specialized**: Frames, Shadow DOM, Geolocation, JavaScript Alerts

See [Test Scenarios Documentation](plans/test-scenarios-documentation.md) for complete details.

## 🤖 AI Integration (Planned)

The project plans to integrate AI models for:

1. **Test Generation**: Generate test cases from natural language descriptions
2. **Self-Healing**: Automatically fix broken tests when UI changes
3. **Flaky Detection**: Identify and analyze flaky tests

See [AI Integration Plan](plans/ai-model-agent-integration.md) for details.

## 📈 Roadmap

- [ ] Set up project structure for multi-framework support
- [ ] Create comparison matrix documentation
- [ ] Implement Cypress test suite
- [ ] Implement Selenium WebDriver tests
- [ ] Set up AI integration for test generation
- [ ] Implement self-healing test mechanism
- [ ] Set up flaky test detection

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting pull requests.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Test scenarios based on [The Internet](https://github.com/the-internet) project
- Docker images provided by various contributors

## 📞 Contact

For questions or suggestions, please open an issue on GitHub.
