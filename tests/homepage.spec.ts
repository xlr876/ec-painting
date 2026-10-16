import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('renders heading and CTA', async ({ page }) => {
    await page.goto('./');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.getByRole('banner').getByRole('link', { name: /free estimate/i })).toBeVisible();
  });

  test('has correct page title', async ({ page }) => {
    await page.goto('./');
    await expect(page).toHaveTitle(/Lenny's Painting & Drywall LLC/i);
  });

  test('has meta description', async ({ page }) => {
    await page.goto('./');
    const meta = page.locator('meta[name="description"]');
    await expect(meta).toHaveAttribute('content', /.+/);
  });

  test('renders Spanish content and marks the page as Spanish', async ({ page }) => {
    await page.goto('es/');

    await expect(page.locator('html')).toHaveAttribute('lang', 'es');
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/preparación.*apartamentos/i);
    await expect(page.getByRole('navigation', { name: 'Idioma' }).getByRole('link', { name: 'ES' }))
      .toHaveAttribute('aria-current', 'page');
  });

  test('language switch preserves the current page', async ({ page }) => {
    await page.goto('es/contact');
    await page.getByRole('navigation', { name: 'Idioma' }).getByRole('link', { name: 'EN' }).click();

    await expect(page).toHaveURL(/\/contact\/?$/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  });
});
