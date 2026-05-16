import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Carpeta donde están los tests
  testDir: './tests',

  // Corre tests en paralelo
  fullyParallel: true,

  // En CI falla si dejaste test.only accidentalmente
  forbidOnly: !!process.env.CI,

  // Reintentos: 2 en CI, 0 en local
  retries: process.env.CI ? 2 : 0,

  // Workers: 1 en CI, automático en local
  workers: process.env.CI ? 1 : undefined,

  // Reportes: HTML siempre + lista en consola
  reporter: [['html'], ['list']],

  use: {
    // URL base de Sauce Demo — nuestro sitio de práctica
    baseURL: 'https://www.saucedemo.com',

    // Captura trace en el primer reintento para debug
    trace: 'on-first-retry',

    // Screenshot solo cuando falla
    screenshot: 'only-on-failure',

    // Video solo cuando falla
    video: 'retain-on-failure',

    // Timeout por acción (click, fill, etc.)
    actionTimeout: 10000,

    // Timeout de navegación
    navigationTimeout: 30000,
  },

  // Timeout global por test
  timeout: 60000,

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});