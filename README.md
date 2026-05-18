# Playwright TypeScript Framework 🎭

Automation framework built with Playwright and TypeScript, implementing Page Object Model (POM), custom fixtures, and CI/CD integration via GitHub Actions.

## 🛠️ Tech Stack

- [Playwright](https://playwright.dev/) — E2E testing framework
- [TypeScript](https://www.typescriptlang.org/) — Strongly typed JavaScript
- [GitHub Actions](https://github.com/features/actions) — CI/CD pipeline

## 📁 Project Structure

playwright-ts-framework/
├── .github/workflows/    # CI/CD pipeline configuration
├── fixtures/             # Custom fixtures for setup reuse
├── pages/                # Page Object Model classes
├── test-data/            # Centralized test data
├── tests/                # Test specs
├── utils/                # Helper functions
└── playwright.config.ts  # Playwright configuration

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/OmarLeal/playwright-ts-framework.git
cd playwright-ts-framework
npm ci
npx playwright install chromium
```

### Run Tests

```bash
# Run all tests
npx playwright test --project=chromium

# Run specific test file
npx playwright test tests/login.spec.ts --project=chromium

# Run with HTML report
npx playwright test --reporter=html
```

### View Report

```bash
npx playwright show-report
```

## 🧪 Test Coverage

| Module | Tests | Status |
|--------|-------|--------|
| Login Page | 3 | ✅ |
| Products Page | 3 | ✅ |
| **Total** | **6** | ✅ |

## 🏗️ Architecture

### Page Object Model
Each page of the application is represented as a class with private locators and public methods, ensuring encapsulation and maintainability.

```typescript
export class LoginPage {
  private usernameInput: Locator;
  private passwordInput: Locator;

  async login(username: string, password: string): Promise<void> {
    await this.navigateTo();
    await this.fillCredentials(username, password);
    await this.clickLogin();
  }
}
```

### Custom Fixtures
Fixtures handle setup automatically, eliminating repeated code across tests.

```typescript
// Instead of repeating setup in every test:
test('verify products', async ({ productsPage }) => {
  // Already logged in and ready
});
```

### CI/CD Pipeline
Every push to `main` triggers the GitHub Actions pipeline automatically.

![CI/CD](https://github.com/OmarLeal/playwright-ts-framework/actions/workflows/playwright.yml/badge.svg)

## 📝 Author

**Omar Alejandro Leal López**  
QA Automation Engineer | SDET  
[GitHub](https://github.com/OmarLeal)
