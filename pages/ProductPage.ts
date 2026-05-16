import { Locator, Page } from "@playwright/test";

export class ProductsPage {

    // Propiedades privadas
    private page: Page;
    private pageTitle: Locator;
    private productList: Locator;
    private productItems: Locator;

    // Constructor
    constructor(page: Page) {
        this.page = page;
        this.pageTitle = page.locator(".title");
        this.productList = page.locator(".inventory_list");
        this.productItems = page.locator(".inventory_item");
    }

    // Metodos publicos
    async getPageTitle(): Promise<string> {
        return await this.pageTitle.innerText();
    }

    async getProductCount(): Promise<number> {
        return await this.productItems.count();
    }

    async addProductToCart(productName: string): Promise<void> {
        await this.page.locator(`[data-test="add-to-cart-${productName}"]`)
            .click();
    }

    async isProductListVisible(): Promise<boolean> {
        return await this.productList.isVisible();
    }

}
