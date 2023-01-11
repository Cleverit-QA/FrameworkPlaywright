import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly enButton: Locator;
  
  
  constructor(page: Page) {
    this.page = page;
    this.enButton = page.locator("//div[@class='wg-selector2-text-lang2'][contains(.,'EN')]");
  }

  async theUserClicksTheEnButton() {
    await this.enButton.click();
  }

 
}