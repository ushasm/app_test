Repository details:
1. This is a simple Node application using Mongo as backend and Consul for service discovery, Registrator for registering the container services.

2. The file "docker-compose.yml" defines all the 4 contaiers used where the constraint "not to use links, service name" is met for the application "relay_api" and "mongo".

3. The file "server.js" is a simple node file which connects to Mongo and listen to port 3000 to say Hello to the World.


Output:

```
1. [ushasm@Ushas-MacBook-Pro working ]$ ls
Dockerfile		README.md		package-lock.json	server.js
Makefile		docker-compose.yml	package.json
```
```
2. [ushasm@Ushas-MacBook-Pro working ]$ make build
docker-compose build
consulserver uses an image, skipping
registrator uses an image, skipping
mongo uses an image, skipping
Building relay_api
Step 1/6 : FROM node:6
 ---> 8b54996bef5b
Step 2/6 : WORKDIR /opt/relay_api
 ---> Using cache
 ---> c5b16e8a1120
Step 3/6 : ADD . /opt/relay_api
 ---> 900abab60cfb
Step 4/6 : EXPOSE 3000
 ---> Running in 15dc46d22d5f
Removing intermediate container 15dc46d22d5f
 ---> 688c942dec63
Step 5/6 : RUN npm install
 ---> Running in c492899e55bb
 Removing intermediate container c492899e55bb
 ---> c6c81cfcf55c
Step 6/6 : CMD ["node", "server.js"]
 ---> Running in d5eae9732718
Removing intermediate container d5eae9732718
 ---> 7926c80afb7d
Successfully built 7926c80afb7d
Successfully tagged relay_api:compose
```

```
3. [ushasm@Ushas-MacBook-Pro working ]$ make up
docker-compose up -d
Creating network "working_default" with the default driver
Creating working_mongo_1        ... done
Creating working_consulserver_1 ... done
Creating working_registrator_1  ... done
Creating working_relay_api_1    ... done
```
```
4. [ushasm@Ushas-MacBook-Pro working ]$ make status
docker ps
CONTAINER ID        IMAGE                             COMMAND                  CREATED                  STATUS              PORTS                                                                                                                                             NAMES
2d05e0fe2c30        mongo                             "/entrypoint.sh mong…"   Less than a second ago   Up 3 seconds        0.0.0.0:27017->27017/tcp                                                                                                                          working_mongo_1
10f4fa6d2141        gliderlabs/consul-server:latest   "/bin/consul agent -…"   Less than a second ago   Up 3 seconds        0.0.0.0:8300->8300/tcp, 0.0.0.0:8400->8400/tcp, 8301-8302/tcp, 8301-8302/udp, 0.0.0.0:8500->8500/tcp, 8600/tcp, 8600/udp, 0.0.0.0:32786->53/tcp   working_consulserver_1
2c00acdf2552        relay_api:compose                 "node server.js"         Less than a second ago   Up 3 seconds        0.0.0.0:3000->3000/tcp                                                                                                                            working_relay_api_1
5d42c490b221        gliderlabs/registrator:master     "/bin/registrator -i…"   Less than a second ago   Up 3 seconds                                                                                                                                                          working_registrator_1
```
```
5. curl http://localhost:3000
Hello World
```

6. In order to check if the node app successfully connected to mongo, have a peek at the logs of node container using its contianer ID:
```
[ushasm@Ushas-MacBook-Pro working ]$ docker logs 2c00acdf2552
listening on 3000
Database created!
```
