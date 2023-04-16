install:
	yay -Syu nginx-mainline nginx-mainline-mod-dav-ext
	mkdir -p /srv/http/dav
	mkdir -p /srv/client-temp
	sudo cp ./nginx.conf /etc/nginx/nginx.conf
	sudo systemctl start nginx

rc: copy restart

restart:
	sudo systemctl restart nginx

copy:
	sudo cp ./nginx.conf /etc/nginx/nginx.conf

start:
	sudo systemctl start nginx

stop:
	sudo systemctl stop nginx

enable:
	sudo systemctl enable nginx

disable:
	sudo systemctl disable nginx

server:
	python -m http.server 8080