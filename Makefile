all:
	docker-compose up

rebuild:
	docker-compose up --build

clean:
	docker-compose rm -v
