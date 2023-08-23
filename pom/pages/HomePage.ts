import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly enButton: Locator;
  readonly titleInEnglish: string;


  constructor(page: Page) {
    this.page = page;
    this.enButton = page.locator("(//div[@class='wg-selector2-text-lang2'][contains(.,'EN')])[1]");
    this.titleInEnglish = 'Cleverit Group - 🚀 We are Experts in DevOps and Cloud Services';
  }

  async theUserClicksTheEnButton() {
    await this.enButton.click();
  }

  async validateTextInEnglish(page){
    await expect(page).toHaveTitle(this.titleInEnglish);
  }


}