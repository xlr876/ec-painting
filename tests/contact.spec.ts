import { test, expect } from '@playwright/test';

test.describe('Contact pages', () => {
  test('English contact page shows business details without a message form', async ({ page }) => {
    await page.goto('/contact');

    const main = page.locator('main');
    await expect(main.locator('form, input, textarea')).toHaveCount(0);
    await expect(main.getByText('Erik Cruz')).toBeVisible();
    await expect(main.getByRole('link', { name: '(614) 717-8408' })).toHaveAttribute('href', 'tel:6147178408');
    await expect(main.getByRole('link', { name: 'lennyspaintingllc@gmail.com' })).toHaveAttribute('href', 'mailto:lennyspaintingllc@gmail.com');
    await expect(main.getByText('Columbus, Ohio & surrounding communities')).toBeVisible();
  });

  test('Spanish contact page shows business details without a message form', async ({ page }) => {
    await page.goto('/es/contact');

    const main = page.locator('main');
    await expect(main.locator('form, input, textarea')).toHaveCount(0);
    await expect(main.getByText('Erik Cruz')).toBeVisible();
    await expect(main.getByRole('link', { name: '(614) 717-8408' })).toHaveAttribute('href', 'tel:6147178408');
    await expect(main.getByRole('link', { name: 'lennyspaintingllc@gmail.com' })).toHaveAttribute('href', 'mailto:lennyspaintingllc@gmail.com');
    await expect(main.getByText('Columbus, Ohio y comunidades cercanas')).toBeVisible();
  });
});
