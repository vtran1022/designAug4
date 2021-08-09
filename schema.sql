CREATE TABLE IF NOT EXISTS breeds (
  breed_id SERIAL PRIMARY KEY,
  breed VARCHAR(200) NOT NULL
);

CREATE TABLE IF NOT EXISTS dogs (
  dog_id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  breed_id SMALLINT NOT NULL,
  CONSTRAINT fk_breeds
    FOREIGN KEY(breed_id)
      REFERENCES breeds(breed_id)
);

/* run docker
docker run --rm --name testdb -e POSTGRES_PASSWORD=<password here> -d -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres

login
psql -h localhost -U test_user -d test_db
*/