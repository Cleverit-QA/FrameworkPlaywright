import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Ejemplo 1 adaptar test a page object model', async ({ page }) => {
  const homePage = new HomePage(page);
  await page.goto('https://www.cleveritgroup.com/');
  await homePage.theUserClicksTheEnButton();
  await homePage.validateTextInEnglish(page);
});




