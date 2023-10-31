docker build --no-cache -f SQL\Dockerfile.PostgreSql -t muxa-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t muxa-java/app ../../..
