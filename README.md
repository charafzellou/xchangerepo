# XchangeRepo
XchangeRepo - the simple Repo for all Crypto Exchanges

## Launching the app
To launch the app, use the following commands:

```bash
git clone https://github.com/charafzellou/xchangerepo
cd xchangerepo
docker-compose up
```

## Launching the app
For reasons unknown to my modest brain and knowledge, sometimes NPM refuses to cooperate properly with Docker to initialize the Node Modules.

In order to bypass this issue, you need to initialize them before stting up the Docker environment, run this after cloning the Git:

```bash
docker rm $(docker ps -aq) && docker-compose down
cd api
npm install
cd ../client/src/
npm install
cd ../../server/
npm install
```
## Launching the app
If you face an undocumented issue and want to scrap everythign to restart, it is recommended top get on the top folder `./xchangerepo/` and run this:
```bash
docker rm $(docker ps -aq) && docker-compose down
```

Ports used by the Docker-Compose:

```
Mongo --> 27017:27017
Mongo-Express GUI --> 8081:8081
API Request for Exchanges --> 1234:1234
API React for Website --> 3000:3000
React Client for Website --> 8686:8686
```