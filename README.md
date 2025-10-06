# Playwright E2E

![CI](https://github.com/lazviktor/tests_example/actions/workflows/playwright.yml/badge.svg)

Набор сквозных E2E-тестов на Playwright (TypeScript) с аккуратной структурой проекта, отчётами (HTML/JUnit/Allure), конфигурацией через `.env` и готовым CI на GitHub Actions.

## Возможности
- UI-тесты с Page Object Model.
- API-тесты на встроенном `request`.
- Проверки доступности (a11y) на базе `axe`.
- Моки сети (`page.route`) и сценарии с файлами (upload/download).
- Визуальные снапшоты и простой перф-смоук.
- Отчёты: Playwright HTML, JUnit, Allure.
- Линтинг и автоформатирование: ESLint + Prettier.

## Быстрый старт
```bash
npm ci
npx playwright install --with-deps
cp .env.example .env
npm run all          # lint + tests
npm run test:report  # открыть HTML-отчёт
# Allure:
npm run allure:report && npm run allure:open
Скрипты
npm test             # запустить тесты
npm run test:headed  # запуск в headed-режиме
npm run test:report  # открыть HTML-отчёт Playwright
npm run all          # lint + test
npm run lint         # ESLint
npm run format       # Prettier
npm run allure:report && npm run allure:open  # генерация/просмотр Allure
Конфигурация окружения
Используется .env (пример в .env.example):
PLAYWRIGHT_BASE_URL=https://demo.playwright.dev
AUTH_USERNAME=foo
AUTH_PASSWORD=bar
Структура проекта
tests/
  fixtures/           # расширяемые фикстуры
  pageObjects/        # POM
  specs/              # UI, API, a11y, файлы, моки сети и т.д.
  static/             # локальные страницы для upload/download
.github/workflows/    # GitHub Actions

