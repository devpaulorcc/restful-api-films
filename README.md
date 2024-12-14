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

### 1. `GET /`
**Description**: Checks the API status.  
**Expected response**:
```bash
{
    "code": 200,
    "status": "OK",
    "description": "An api made for all the functions of a CRUD for films."
}
```

### 2. `POST /films`
**Description**: Adds a new movie to the catalog.  
**Expected request format**:
```bash
{
    "title": "Return of the Jedi",
    "director": "Richard Marquand",
    "releaseDate": "1983-10-06",
    "genre": "Science Fiction/Fantasy"
}
```
**Expected response** (on success):
```bash
{
    "id": 1,
    "title": "Return of the Jedi",
    "director": "Richard Marquand",
    "releaseDate": "1983-10-06",
    "genre": "Science Fiction/Fantasy",
    "createdAt": "2024-12-14T12:00:00.000Z"
}
```

### 3. `PUT /films/{id}`
**Description**: Completely updates a movie by its ID.  
**Expected request format**:
```bash
{
    "title": "Star Wars: Episode III – Revenge of the Sith",
    "director": "George Lucas",
    "releaseDate": "2005-05-19",
    "genre": "Science Fiction"
}
```
**Expected response**:
```bash
{
    "id": 1,
    "title": "Star Wars: Episode III – Revenge of the Sith",
    "director": "George Lucas",
    "releaseDate": "2005-05-19",
    "genre": "Science Fiction",
    "createdAt": "2024-12-14T12:00:00.000Z"
}
```

### 4. `PATCH /films/{id}`
**Description**: Partially updates a specific resource of a movie by its ID.  
**Expected request format**:
```bash
{
    "genre": "Fantasy"
}
```
**Expected response**:
```bash
{
    "id": 1,
    "title": "Return of the Jedi",
    "director": "Richard Marquand",
    "releaseDate": "1983-10-06",
    "genre": "Fantasy",
    "createdAt": "2024-12-14T12:00:00.000Z"
}
```

### 5. `DELETE /films/{id}`
**Description**: Deletes a movie from the catalog by its ID.  
**Expected response**:
```bash
{
    "id": 1,
    "title": "Return of the Jedi",
    "director": "Richard Marquand",
    "releaseDate": "1983-10-06",
    "genre": "Science Fiction/Fantasy",
    "createdAt": "2024-12-14T12:00:00.000Z"
}
```
