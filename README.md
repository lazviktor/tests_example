# Playwright E2E Ultimate

Полноценный набор для техскрина: 20+ тестов (UI, API, a11y, файлы, стореджи, мок сети), POM, `.env`, Allure, JUnit, HTML, CI-артефакты.

![CI](https://github.com/USERNAME/REPO/actions/workflows/playwright.yml/badge.svg)

## Быстрый старт
```bash
npm ci
npx playwright install --with-deps
npm run all           # lint + tests
npm run test:report   # открыть HTML-отчёт
npm run allure:report && npm run allure:open
```

## Переменные окружения
- `PLAYWRIGHT_BASE_URL` — базовый URL (по умолчанию https://demo.playwright.dev).  
- `AUTH_USERNAME`, `AUTH_PASSWORD` — пример для basic-auth API.
Скопируйте `.env.example` → `.env` и правьте поля.

## Структура
```
tests/
  fixtures/
  pageObjects/
  specs/
  static/           # локальные страницы для upload/download без внешних зависимостей
  utils/
```

## Предупреждение о рисках
В некоторых тестах используются публичные ресурсы (`demo.playwright.dev`, `httpbin.org`, `playwright.dev`). Они могут измениться. Для абсолютной стабильности: укажите свой `PLAYWRIGHT_BASE_URL` и используйте мок‑сеть.
