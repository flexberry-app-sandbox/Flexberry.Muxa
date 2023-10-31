docker build --no-cache -f SQL\Dockerfile.PostgreSql -t muxa/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t muxa/app ../..
