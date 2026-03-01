import { test, expect } from '@playwright/test';

test.describe('Shadow DOM', () => {
  test('Should boost progress bar by clicking on the button', async ({ page }) => {
    await page.goto('apps/shadow-dom/');
    await expect(page.locator('text=Boost 🚀')).toBeVisible();

    await page.locator('button').click();

    const progressBar = page.locator('progress-bar');

    await expect(progressBar).toHaveAttribute('percent', '95', { timeout: 9000 });
  });
});
