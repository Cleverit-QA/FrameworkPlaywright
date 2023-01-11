import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('has title', async ({ page }) => {
  const homePage = new HomePage(page);
  await page.goto('https://www.cleveritgroup.com/');
  await homePage.theUserClicksTheEnButton();
  await expect(page).toHaveTitle(/Cleverit Group: IT Services and Cybersecurity ⚡️/);
});

