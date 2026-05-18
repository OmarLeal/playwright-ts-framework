import { test, expect } from "../fixtures";
import { slugify } from "../utils/helpers";




test.describe('Products Page', () => {

    test("Verificar titulo de la pagina", async ({ page, productsPage }) => {
        await expect(page.locator('.title')).toHaveText('Products');
    });

    test("Verificar cantidad de productos", async ({ page, productsPage }) => {
        await expect(productsPage.getProductCount()).resolves.toBe(6);
    });

    test("Agregar producto al carrito", async ({ page, productsPage }) => {
        const productName = slugify("Sauce Labs Backpack");
        await productsPage.addProductToCart(productName);
        await expect(page.locator(`[data-test="remove-${productName}"]`)).toBeVisible();
    });
})


