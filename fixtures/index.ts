import { test as base } from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { ProductsPage } from "../pages/ProductPage";

type MyFixtures = {
    loginPage: LoginPage;
    productsPage: ProductsPage;
}

export const test = base.extend<MyFixtures>({

    loginPage: async ({ page }, use) => {
        // 1. Se crea la instancia de loginPage
        const loginPage = new LoginPage(page);
        // 2. Se manda a llamar el "navigateTo"
        await loginPage.navigateTo();
        // 3. Se manda la instruccion para que se ejecute.
        await use(loginPage);
    },

    productsPage: async ({ page }, use) => {
        // 1. Se crea la instancia de loginPage
        const loginPage = new LoginPage(page);
        // 2. Se crea la instancia de productsPage
        const productsPage = new ProductsPage(page);
        // 3. Se hace el login completo con credenciales validas
        await loginPage.login("standard_user", "secret_sauce");
        // 4. llama a "use" pasándole la instancia de productsPage
        await use(productsPage);
    }
});


export { expect } from '@playwright/test';