# Exercícios de API

## Exercício 1 — GET em /posts

### Método

GET

### URL

https://jsonplaceholder.typicode.com/posts

### Status

200 OK

### Headers encontrados

* content-type: application/json; charset=utf-8
* cache-control: max-age=43200
* etag: W/"6b80-Ybsq/K6GwwqrykAsFxqDXGC7DoM"

---

## Exercício 2 — GET em /posts/1

### Método

GET

### URL

https://jsonplaceholder.typicode.com/posts/1

### Status

200 OK

### Resposta JSON

```json
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
```

### Diferença observada

* `/posts` retorna vários posts
* `/posts/1` retorna apenas um post

---

## Exercício 3 — POST em /posts

### Método

POST

### URL

https://jsonplaceholder.typicode.com/posts

### JSON enviado

```json
{
  "title": "Meu post",
  "body": "Teste da API",
  "userId": 1
}
```

### Status

201 Created

### Explicação

O método POST foi utilizado para enviar dados e criar um recurso.

---

## Exercício 4 — GET em /posts/99999

### Método

GET

### URL

https://jsonplaceholder.typicode.com/posts/99999

### Status esperado

404 Not Found

### Explicação

O recurso não existe no servidor.

---

## Desafio Extra — ViaCEP

### URL

https://viacep.com.br/ws/01001000/json/

### Método

GET

### Status

200 OK

### Formato retornado

JSON
