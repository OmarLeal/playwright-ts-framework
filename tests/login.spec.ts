import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { usersCredentials } from '../test-data/users';

test.describe('Login Page', () => {        // agrupa los tests

    test('Prueba con credenciales correctas', async ({ page }) => {   // un test individual
        // 1. ARRANGE — prepara lo que necesitas
        const loginPage = new LoginPage(page);
        // 2. ACT — ejecuta la acción
        await loginPage.login(usersCredentials.standard.username, usersCredentials.standard.password);
        // 3. ASSERT — verifica el resultado
        await expect(page).toHaveURL(/inventory/);
    });

    test('Prueba con credenciales incorrectas', async ({ page }) => {
        // AAA - Arrange, Act y Assert
        // Arrange
        const loginPage = new LoginPage(page);
        // Act
        await loginPage.login(usersCredentials.invalid.username, usersCredentials.invalid.password);
        // Assert
        await expect(loginPage.isErrorVisible()).resolves.toBe(true);

        await expect(page.locator('.error-message-container')).toContainText('Epic sadface');

    });

    test('Prueba login sin password', async ({ page }) => {
        // AAA - Arrange, Act y Assert
        // Arrange
        const loginPage = new LoginPage(page);
        // Act
        await loginPage.login(usersCredentials.noPassword.username, usersCredentials.noPassword.password);
        // Assert
        await expect(loginPage.isErrorVisible()).resolves.toBe(true);

        await expect(page.locator('.error-message-container')).toContainText('Password is required');

    });
});