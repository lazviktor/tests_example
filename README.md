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

