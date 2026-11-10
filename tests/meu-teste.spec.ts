import { test, expect } from '@playwright/test';

test('deve acessar o site e verificar o título', async ({ page }) => {
  // 1. Acessa uma URL
  await page.goto('https://example.com');

  // 2. Valida se o título da página está correto
  await expect(page).toHaveTitle(/Example Domain/);
});