up:
	docker compose up 

down:
	docker compose down

db-create:
	docker compose run --rm backend bundle exec rails db:create

migrate:
	docker compose run --rm backend bundle exec ridgepole -c config/database.yml -E development --apply -f db/schemas/Schemafile
