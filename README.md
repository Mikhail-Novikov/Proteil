# Презентационные страницы с формой регистрации

# Основное
- Простая структура компонентов с повторно используемыми элементами UI
- Базовая стилизация через App.less и глобальные CSS-файлы
- Инструменты разработки (ESLint, Prettier, Babel)
- node v20.19.0

# Структура проекта
   - db/ - примеры слоя данных (index.js, server)
   - design/ - макеты и диаграммы
   - src/
   - App.tsx, App.less - главное приложение и стили
   - index.tsx, index.html - точка входа
   - components/ - переиспользуемые UI-компоненты (Header, PBXCard, ModalForm и т.д.)
   - pages/ - страницы маршрутизации (Home, ActionPbx и т.д.)
   - assets/ - изображения и прочие ресурсы
   - README.md - описание
   - package.json - конфигурация проекта
   - tsconfig.json, babel.config.json, webpack.config.js - конфигурационные файлы

# Настройка сервера
   - Сконфигурировать файл .env с доступами к базе в директории db
      DB_USER=postgres
      DB_HOST=localhost
      DB_NAME=postgres
      DB_PASSWORD=...
      DB_PORT=5432

# Запуск
   1. Установить зависимости
      - npm install
   2. Запуск клиента
      - run start 
   3. Старт сервера
      - cd db
      - node server.js

# Примечания
- UI рассчитан на экраны 4к(3840x1900).
- Форма регистрации открывается по кнопке "Просмотреть АТС действии"

