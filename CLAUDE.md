# Qırımtatar Wordle - Context для Claude Code

## Опис проекту
Кримськотатарська версія популярної гри Wordle з повною локалізацією та підтримкою кримськотатарського алфавіту.

## Основна інформація
- **URL**: https://wordle.qirimca.org/
- **Технології**: React, TypeScript, Tailwind CSS
- **Розгортання**: GitHub Pages
- **Мови**: Кримськотатарська (основна), Українська, Англійська, Турецька

## Архітектура проекту

### Структура файлів
```
src/
├── components/          # React компоненти
│   ├── alerts/         # Система сповіщень
│   ├── grid/           # Ігрова сітка
│   ├── keyboard/       # Віртуальна клавіатура
│   ├── modals/         # Модальні вікна
│   └── navbar/         # Навігація
├── constants/          # Константи та налаштування
│   ├── locales.ts      # Локалізація
│   ├── strings.ts      # Рядки інтерфейсу
│   ├── validGuesses.ts # Допустимі слова
│   └── wordlist.ts     # Слова для загадування
├── lib/               # Утиліти та логіка
└── context/           # React контекст
```

### Ключові особливості

#### Багатомовність
- Підтримка 4 мов з URL параметром `?lang=`
- Кримськотатарська за замовчуванням
- Локалізовані рядки в `constants/locales.ts`

#### Кримськотатарський алфавіт
- Підтримка спеціальних літер: Â, Ç, Ğ, İ, I, Ñ, Ö, Ş, Ü
- Мапінг клавіатури в `components/keyboard/Keyboard.tsx`
- Позиційний мапінг української → кримськотатарської

#### Шрифти
- e-Ukraine та e-Ukraine Head
- Unicode range включає кирилицю: `U+0400-04FF`
- `font-display: swap` для продуктивності

## Налаштування розробки

### Команди
- `npm start` - Dev сервер
- `npm test` - Тести
- `npm run build` - Білд для продакшену
- `npm run lint` - Prettier перевірка

### Основні залежності
- React 17
- TypeScript
- Tailwind CSS 3
- Date-fns для роботи з датами
- Heroicons для іконок

## GitHub Actions Workflows
1. **React app deployment** - Основний деплой на GitHub Pages
2. **Build and Deploy** - Альтернативний деплой workflow
3. **Test** - Запуск тестів
4. **Lint** - Перевірка форматування коду

## Відомі проблеми та рішення

### Кримськотатарські літери
- Використовується Turkish I (İ) для i з крапкою
- Позиційний мапінг для української клавіатури
- Unicode normalisation для правильного порівняння

### GitHub Actions
- CI=true в Actions перетворює warnings в errors
- Потрібен `eslint-disable` для невикористаних змінних
- Prettier plugins мають конфлікти залежностей

### Performance
- Lazy loading модалів зменшив bundle на 19%
- Code splitting створює 9 окремих chunks
- Critical CSS вбудовано в HTML

## Оптимізації продуктивності (останні)
- DNS prefetch для зовнішніх ресурсів
- Font preloading зі swap display
- Lazy loading компонентів
- Bundle size: 285KB → 230KB

## Часті команди для розробки

### Git
```bash
git status
git add .
git commit -m "feat: опис змін"
git push origin master
```

### Debug workflows
```bash
gh run list --limit 5
gh run view [ID] --log-failed
```

### Тестування
```bash
npm test -- --watchAll=false
npm run build  # для перевірки білда
```

## Контакти
- Організація: QIRI'M YOUNG
- Репозиторій: https://github.com/qirimca/react-wordle-crimean-tatar
- Сайт: https://qirimca.org

---
*Файл створено для збереження контексту між сесіями Claude Code*