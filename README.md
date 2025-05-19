## Deploy

На клиенте сделать push в main ветку репозитория

На сервере:

```bash
./deploy.sh

# Или запустить команды вручную:
cd ./pixel2
npm ci
npm run build
npm pm2 reload all
```
