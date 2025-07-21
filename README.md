## Deploy

Перед деплоем обязательно запустить команду `npm run lint`, и если есть ошибки - исправить их.

На клиенте сделать push в main ветку репозитория

На сервере:

```bash
./deploy.sh

# Или запустить команды вручную:
cd ./pixel2
git pull
npm ci
npm run build
npm pm2 reload all
```
