import { test, expect } from '@playwright/test';

test.describe('Mouse Over', () => {
  test('Should put mouse pointer on the image', async ({ page }) => {
    await page.goto('apps/mouse-hover/');
    await expect(page.locator('.poster-container >> img')).toBeVisible();

    const expectedPrice = "$24.96";
    const currentPrice = page.locator(".current-price");

    await page.locator(".poster").hover();

    await expect(currentPrice).toHaveText(expectedPrice);
  });
});
