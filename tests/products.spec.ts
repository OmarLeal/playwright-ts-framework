import { test, expect } from "../fixtures";




test.describe('Products Page', () => {

    test("Verificar titulo de la pagina", async ({ page, productsPage }) => {
        // AAA
        // Arrange
        // const loginPage = new LoginPage(page);
        // const productsPage = new ProductsPage(page);
        // await loginPage.login("standard_user", "secret_sauce");
        // Act
        // No hay acciones en el act, pasamos directo al assert
        // Assert
        await expect(page.locator('.title')).toHaveText('Products');
    });

    test("Verificar cantidad de productos", async ({ page, productsPage }) => {
        // AAA
        // Arrange
        // const loginPage = new LoginPage(page);
        // const productsPage = new ProductsPage(page);
        // await loginPage.login("standard_user", "secret_sauce");
        // Act
        // No hay acciones en el act, pasamos directo al assert
        // Assert
        await expect(productsPage.getProductCount()).resolves.toBe(6);
    });

    test("Agregar producto al carrito", async ({ page, productsPage }) => {
        // AAA
        // Arrange
        // const loginPage = new LoginPage(page);
        // const productsPage = new ProductsPage(page);
        // await loginPage.login("standard_user", "secret_sauce");
        // Act
        await productsPage.addProductToCart("sauce-labs-backpack");
        // Assert
        await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
    });
})