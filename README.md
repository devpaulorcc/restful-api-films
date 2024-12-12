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

## Expected formats JSON

```bash
GET:
    {
        "id": 1,
        "title": "O Retorno de Jedi",
        "director": "Richard Marquand",
        "releaseDate": "1983-10-06T00:00:00.000Z",
        "genre": "Ficção científica/Fantasia",
        "createdAt": "2024-12-09T02:11:26.909Z"
    }
POST:
    {
        "title": "O Retorno de Jedi",
        "director": "Richard Marquand",
        "releaseDate": "1983-10-06",
        "genre": "Ficção científica/Fantasia"
    }
PUT:
    {
        "title": "Star Wars: Episódio III – A Vingança dos Sith",
        "director": "George Lucas",
        "releaseDate": "2005-05-19",
        "genre": "Ficção científica"
    }
PATCH:
    {
        "genre": "Fantasia"
    }
```
