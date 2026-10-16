import { test, expect } from '@playwright/test';

test.describe('Services pages', () => {
  test('English service groups use their matching photos', async ({ page }) => {
    await page.goto('services');

    const images = page.locator('main img');
    await expect(images).toHaveCount(4);
    await expect(page.getByRole('img', { name: 'Apartment complex exterior' }))
      .toHaveAttribute('src', /apartment_complex_medium/);
    await expect(page.getByRole('img', { name: 'Apartment interior under renovation' }))
      .toHaveAttribute('src', /renovation_medium/);
    await expect(page.getByRole('img', { name: 'Bathroom vanity and fixtures' }))
      .toHaveAttribute('src', /vanity_medium/);
    await expect(page.getByRole('img', { name: 'Finished apartment dining and living area' }))
      .toHaveAttribute('src', /dining_area_medium/);
  });

  test('Spanish service groups use their matching photos with localized alt text', async ({ page }) => {
    await page.goto('es/services');

    const images = page.locator('main img');
    await expect(images).toHaveCount(4);
    await expect(page.getByRole('img', { name: 'Exterior de un complejo de apartamentos' }))
      .toHaveAttribute('src', /apartment_complex_medium/);
    await expect(page.getByRole('img', { name: 'Interior de apartamento en renovación' }))
      .toHaveAttribute('src', /renovation_medium/);
    await expect(page.getByRole('img', { name: 'Tocador y accesorios de baño' }))
      .toHaveAttribute('src', /vanity_medium/);
    await expect(page.getByRole('img', { name: 'Área de comedor y sala de un apartamento terminado' }))
      .toHaveAttribute('src', /dining_area_medium/);
  });

  test('alternates text and photo sides on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto('services');

    const cards = page.locator('main article');
    for (const index of [0, 1, 2, 3]) {
      const card = await cards.nth(index).boundingBox();
      const title = await cards.nth(index).locator('h3').boundingBox();
      const image = await cards.nth(index).locator('img').boundingBox();

      if (!card || !title || !image) throw new Error(`Service card ${index + 1} is missing its title or photo`);
      expect(index % 2 === 0 ? title.x < image.x : image.x < title.x).toBe(true);
      expect(image.width).toBeLessThan(card.width / 2);
      expect(image.width / image.height).toBeCloseTo(4 / 3, 1);
    }
    await expect(cards.first()).toHaveCSS('border-top-width', '0px');
  });

  test('stacks service text before the photo on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('services');

    const cards = page.locator('main article');
    for (const index of [0, 1, 2, 3]) {
      const title = await cards.nth(index).locator('h3').boundingBox();
      const image = await cards.nth(index).locator('img').boundingBox();

      if (!title || !image) throw new Error(`Service card ${index + 1} is missing its title or photo`);
      expect(title.y).toBeLessThan(image.y);
    }
  });
});
