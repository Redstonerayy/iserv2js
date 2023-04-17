# Setup WebDav Server

As Iserv uses webdav, it can be tested by setting up your
own webdav server. Iserv uses nginx (port 80/443).
It's easy to install nginx with webdav to test functionality
locally.

# Arch Based Linux with nginx

https://wiki.archlinux.org/title/WebDAV

```
yay -Syu nginx-mainline nginx-mainline-mod-dav-ext
sudo mkdir -p /srv/http/dav
sudo mkdir -p /srv/client-temp
sudo cp ./webdav-setup/nginx.conf /etc/nginx/nginx.conf
sudo systemctl start nginx
```
