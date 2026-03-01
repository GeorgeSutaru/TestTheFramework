import { test, expect } from '@playwright/test';

test.describe('Mouse Over', () => {
  test('Should put mouse pointer on the image', async ({ page }) => {
    await page.goto('apps/mouse-over/');
    await expect(page.locator('text=Mouse Over')).toBeVisible();

    // Click on the image to trigger mouse over
    await page.locator('img').click({ force: true });
    
    // Add assertions based on expected behavior
    await expect(page.locator('#result')).toBeVisible();
  });
});
