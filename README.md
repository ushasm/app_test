# Relayr

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
