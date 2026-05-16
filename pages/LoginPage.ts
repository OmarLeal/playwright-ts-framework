import { Page, Locator } from '@playwright/test';

export class LoginPage {
    // Page es el objeto de Playwright que controla el browser
    private page: Page;

    // Locators — privados para encapsulamiento
    private usernameInput: Locator;
    private passwordInput: Locator;
    private loginButton: Locator;
    private errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        // Locators modernos de Playwright
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMessage = page.locator('.error-message-container');
    }

    // Navega a la página de login
    async navigateTo(): Promise<void> {
        await this.page.goto('/');
    }

    // Llena las credenciales
    async fillCredentials(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
    }

    // Click en el botón de login
    async clickLogin(): Promise<void> {
        await this.loginButton.click();
    }

    // Método completo de login
    async login(username: string, password: string): Promise<void> {
        await this.navigateTo();
        await this.fillCredentials(username, password);
        await this.clickLogin();
    }

    // Retorna el mensaje de error
    async getErrorMessage(): Promise<string> {
        return await this.errorMessage.innerText();
    }

    // Verifica si el error es visible
    async isErrorVisible(): Promise<boolean> {
        return await this.errorMessage.isVisible();
    }
}