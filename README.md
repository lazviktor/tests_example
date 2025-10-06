# Playwright E2E Template

Готовый к публикации шаблон E2E‑тестов на Playwright (TypeScript) с GitHub Actions.

## Быстрый старт
```bash
npm ci
npx playwright install --with-deps
npm test
```

Откройте HTML‑отчёт:
```bash
npm run report:open
```

## Что внутри
- `@playwright/test` с параллельным запуском и трейсами
- Проекты для Chromium/Firefox/WebKit
- Пример page‑object и фикстуры
- Готовый workflow для GitHub Actions (`.github/workflows/playwright.yml`)
- Пример теста на демо‑сайте TodoMVC: https://demo.playwright.dev/todomvc

## CI (GitHub Actions)
При пуше/PR тесты запускаются автоматически, а отчёты/трейсы прикрепляются как артефакты.
