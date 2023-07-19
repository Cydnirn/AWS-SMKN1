# AWS-SMKN1 SERVER

Install semua dependecies terlebih dahulu

```bash
npm i
```


Untuk memulai server, gunakan **pm2**

```bash
pm2 start app.js
```

Buat file .env untuk mengatur koneksi Mongo Atlas dan URL Frontend

```bash
MONGO_USERNAME=USERNAME_MONGO_ANDA
MONGO_PASSWORD=PASSWORD_MONGO_ANDA
MONGO_CLUSTER_URI=CLUSTER_MONGO_ANDA
FRONTEND_URL=LINK_PUBLIC_FRONTEND
```