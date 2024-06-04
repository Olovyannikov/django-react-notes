# React Django Notes

## Стэк:

### Backend:
- [Python 3](https://www.python.org/downloads/);
- [Django Framework](https://www.djangoproject.com/);
- [Django Rest](https://www.django-rest-framework.org/);
- [PyJWT](https://pyjwt.readthedocs.io/en/stable/);

### Frontend:
- [Vite](https://vitejs.dev/);
- [React](https://react.dev/);
- [Typescript](https://www.typescriptlang.org/);
- [ESLint](https://eslint.org/);
- [Prettier](https://prettier.io/);
- [Redux Toolkit](https://redux-toolkit.js.org/);
- [Mantine UI](https://mantine.dev/);

## Запуск локально

### Backend:
- В терминале запустите виртуальное окружение `python3 -m venv env`;
- Активируйте виртуальный конфиг `source env/bin/activate`;
- Установите зависимости `pip install -r requirements.txt`;
- Запустите командой `python manage.py runserver`;
- Сервер запустится по адресу `http://127.0.0.1:8000`;

### Frontend:
- Убедитесь, что вы используете NodeJS >= 20 командой `node -v`;
- Установите зависимости `npm i` или `yarn` или `pnpm i`;
- Запустите проект `npm run dev` или `yarn dev` или `pnpm dev`;
- Откройте браузер по адресу `localhost:3000`;