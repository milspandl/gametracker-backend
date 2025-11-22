GameTracker – Backend

Este es el backend del proyecto GameTracker.  
Provee una API REST para gestionar videojuegos y reseñas personales.

Construido con:

- Node.js
- Express
- Mongoose
- MongoDB Atlas

---

Endpoints principales

Juegos
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | /api/games | Obtiene todos los juegos |
| POST | /api/games | Crea un juego |
| PUT | /api/games/:id | Edita un juego |
| DELETE | /api/games/:id | Elimina un juego |

Reseñas
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | /api/reviews/:juegoId | Obtiene reseñas por juego |
| POST | /api/reviews | Crea una reseña |
| PUT | /api/reviews/:id | Edita una reseña |
| DELETE | /api/reviews/:id | Elimina una reseña |

---

Instalación y ejecución

