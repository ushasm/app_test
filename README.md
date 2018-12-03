# Application

Objective:
1. Using docker-compose file, run following docker containers:
    - any database engine
    - any service discovery tool
    - your application
2. The Application shall discover the database configuration on startup using the service discovery tool (Consul, ETCd, Zookeeper, ..)
3. The Application shall connect to a database, read a greeting string and print it.
4. The Application shall serve HTTP and be available on host's 127.0.0.1:8080

**Constraints**

You should not use Docker's service discovery abilities, such as

environment variables and 'links'
docker swarm
docker compose's service name
We need 3rd component between the app and db.
Use a service discovery tool for this, like Consul, etcd, Zookeeper or other.

# Solution:

This was quite challenging task for me since I never used any service discovery tool like Consul, ETCd..

I have added a makefile to make the build process easy and the [Output file.](https://github.com/ushasm/relayr/blob/initial-setup/output.md)

1. Clone the repo.

2. Build the docker-compose file
```
make build / docker-compose build
```
3. Run the Containers
```
make up / docker-compose up -d
```
4. Status of the Containers
```
make status / docker ps
```
5. Browse for http://localhost:3000 to say Hello to the World :)
