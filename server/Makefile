up:
	docker-compose up -d

down:
	docker-compose down


build:
	docker build -t notes_app_env .

build-base:
	docker-compose build

build-run:
	docker run -it -d -p 8000:8000 notes_app_env

base-log:
	docker-compose logs -f