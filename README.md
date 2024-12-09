<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Description

This API allows you to manage a list of movies, offering operations to create, read, update, and delete movies in a database.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Base URL

```bash
https://rest-api-films.onrender.com
```

## Endpoints

Essa API possui os seguintes endpoints:

- `GET /`: Returns API status.
- `POST /films`: Adds a new movie.
- `PUT /films/{id}`: Completely updates a movie.
- `PATCH /posts/{id}`: Updates a specific resource.
- `DELETE /posts/{id}`: Delete a movie.