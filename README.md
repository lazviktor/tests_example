# Playwright E2E

![CI](https://github.com/lazviktor/tests_example/actions/workflows/playwright.yml/badge.svg)

Набор сквозных E2E-тестов на **Playwright (TypeScript)** для демонстрации автоматизации UI и API с отчётами (HTML, JUnit, Allure), конфигурацией через `.env` и готовым CI на GitHub Actions.

---

## Быстрый старт

npm ci
npx playwright install --with-deps
cp .env.example .env
npm run all
npm run test:report
npm run allure:report && npm run allure:open

---

## Скрипты

| Команда | Описание |
|----------|-----------|
| `npm test` | Запустить тесты |
| `npm run test:headed` | Запуск в headed-режиме |
| `npm run test:report` | Открыть HTML-отчёт Playwright |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |
| `npm run all` | Линт + тесты |
| `npm run allure:report && npm run allure:open` | Генерация и просмотр отчёта Allure |

---

## Конфигурация окружения

Используется `.env` (пример в `.env.example`):

PLAYWRIGHT_BASE_URL=https://demo.playwright.dev  
AUTH_USERNAME=foo  
AUTH_PASSWORD=bar  

---

## Структура проекта

tests/  
  fixtures/        # Расширяемые фикстуры  
  pageObjects/     # Page Object Model  
  specs/           # UI, API, a11y, файлы, моки сети и т.д.  
  static/          # Локальные страницы для upload/download  
.github/workflows/ # CI  

---

## Возможности

- UI-тесты с Page Object Model  
- API-тесты на встроенном `request`  
- Проверки доступности (a11y) через `@axe-core/playwright`  
- Моки сети (`page.route`) и тесты загрузки/скачивания файлов  
- Визуальные снапшоты и перф-смоук-проверки  
- Отчёты: **Playwright HTML**, **JUnit**, **Allure**  
- Линтинг и автоформатирование: **ESLint + Prettier**

---

## CI/CD

- При пуше или Pull Request:
  - Линтинг и прогон тестов на GitHub Actions  
  - Сохранение артефактов (HTML-отчёт, трейс, Allure, JUnit)  
- Статус билда отображается бейджем CI выше

---

## Технологии

- **Playwright + TypeScript**  
- **Allure, JUnit**  
- **ESLint, Prettier**  
- **GitHub Actions**

---
