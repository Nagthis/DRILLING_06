# Edutecno - Animación Japonesa

Este es un proyecto para gestionar información sobre animación japonesa (animes). Utiliza Node.js y Express para crear una API que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en la lista de animes.

## Requisitos previos

- Node.js (versión 14 o superior)
- pnpm (instalado globalmente, se recomienda la última versión)

## Instalación

1. Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/Primo18/edutecno-animacion-japonesa.git
cd edutecno-animacion-japonesa
```
2. Instala las dependencias del proyecto usando pnpm:

```bash
pnpm install
```

## Uso

1. Inicia el servidor:

```bash	
pnpm start
```

2. Abre el navegador en la dirección http://localhost:3000
3. Puedes usar herramientas como Postman para realizar peticiones HTTP a la API.

## Ejemplos de uso de la API con cURL

* GET: Obtener la lista de animes:

```bash
curl http://localhost:3000/api/v1/animes
```

* GET: Obtener un anime por su ID:

```bash
curl http://localhost:3000/api/v1/animes/1
```

* POST: Agregar un nuevo anime:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"nombre": "One Piece", "genero": "Shonen", "año": "1999", "autor": "Eiichiro Oda"}' http://localhost:3000/api/v1/animes
```

* PUT: Actualizar un anime existente:

```bash
curl -X PUT -H "Content-Type: application/json" -d '{"nombre": "One Piece", "genero": "Shonen", "año": "1999", "autor": "Eiichiro Oda"}' http://localhost:3000/api/v1/animes/1
```

* DELETE: Eliminar un anime existente:

```bash
curl -X DELETE http://localhost:3000/api/v1/animes/1
```


## Scripts

- `pnpm start`: Inicia el servidor utilizando nodemon.
- `pnpm test `: Ejecuta los test utilizando mocha y chai.

## Endpoints de la API

| Método | Ruta               | Descripción                            |
| ------ | ------------------ | -------------------------------------- |
| GET    | /api/v1/animes     | Obtiene la lista de animes             |
| GET    | /api/v1/animes/:id | Obtiene un anime por su id             |
| POST   | /api/v1/animes     | Crea un nuevo anime                    |
| PUT    | /api/v1/animes/:id | Actualiza un anime existente por su id |
| DELETE | /api/v1/animes/:id | Elimina un anime por su id             |

## Tests

Para ejecutar los tests, asegúrate de tener el servidor apagado (si se está ejecutando). Luego, simplemente ejecuta:

```bash
pnpm test
```
