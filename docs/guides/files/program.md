# Project Release

## Project Compilation
npm run build

## Nginx Config
```js
server {
        #SSL port 443
        listen 443 ssl;
        #Fill in the domain name of the binding certificate
        server_name sd.lihengrui.cn;
        #certificate's name
        ssl_certificate /home/spring/ssl/sd/sd.lihengrui.cn_bundle.crt;
        #certificate file name
        ssl_certificate_key /home/spring/ssl/sd/sd.lihengrui.cn.key;
        ssl_session_timeout 5m;
        #Please configure according to the following protocol
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        #Please configure the encryption package according to the following package configuration, written according to the openssl standard.
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
        ssl_prefer_server_ciphers on;

        location / {
            root /data/html/api;
            index index.html index.htm;
            try_files $uri $uri/ /index.html;
        }
}
```
