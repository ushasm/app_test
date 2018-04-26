# Makefile.

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

status:
	docker ps
