# turborepo-starter

A monorepo starter with Next.js, Express.js, SurrealDB, daisyUI, docker, docker-compose, terraform, and more.

## Tech Stack

- monorepo via turborepo
  - api
    - Express.js + Next.js + SurrealDB
  - web
    - Next.js + daisyUI
- DevOps
  - docker
  - docker-compose
  - terraform
- Testing
  - Jest
- Others
  - TypeScript
  - Node.js
  - others

## Tasks of Feature

- API
  - [ ] DB migration
  - [ ] Logic Testing
  - [ ] API Playground
- WEB
  - [ ] API Mocking
  - [ ] Visual Testing
  - [ ] Logic Testing
  - [ ] UIUX Preview

## Develop

### Docker

```sh
# start db
docker network create app_network

docker-compose -f docker-compose.dev.yml up -d
```

```sh
# install
yarn install

# run
yarn dev
```

### Docker

```
docker network create app_network

COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose -f docker-compose.yml build --parallel

docker-compose -f docker-compose.yml up -d
```

Open http://localhost:3000.

To shutdown all running containers:

```
# Stop all running containers
docker kill $(docker ps -q) && docker rm $(docker ps -a -q)
```

## TODO:

setup

- [ ] import alias `~/`
- [ ] monorepo workspace `tsc` build
- [ ] Testing file remove `__test__`

## FIXME:

- [ ] api workspace can't use `shared` package in prod
- [ ] vscode-jest doesn't work at monorepo, `cd apps/api`
