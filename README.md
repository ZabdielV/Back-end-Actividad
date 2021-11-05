# 1. Servicio de playlists películas
## 1.1 Crear película (Create)
Este servicio permite crear una pelicula.
- **Endpoint**: `/peliculas/agregarPeliculas`
- **Método**: `Post`
- **Body**:`{
"titulo":"shrek",
"year":2010,
"director":"Mike Mitchell",
"duracion":"1:30:00",
"clasificacion":"A"
}`
- **validaciones**: **Titulo** String mayor a 0 **Año** Int mayor a 0, **Director** String mayor a 0, **Duración** String mayor a 0, 
**Clasificación** String igual a "A", "B","B15" o "C"
- **errores**: InvalidBodyException	Field must be string	422
- **respuesta**: HTTP status 200                
- **respuesta con error**: HTTP status 422

## 1.2 Obtener película (Read)
Este servicio permite obtener peliculas.
- **Endpoint**: `/peliculas/mostrarPeliculas`
- **Método**: `Get`
- **Body**: No aplica
- **errores**: UserNotFoundException	User doesn't exist	500, InvalidTokenException The token is no valid 401
- **respuesta**:HTTP status 200
- **respuesta con error**: HTTP status 422

## 1.3 Actualizar película (Update)
Este servicio permite actualizar una pelicula
- **Endpoint**: `/peliculas/actualizarPeliculas`
- **Método**: `Post`
- **Body**: `{
"id":"617de5dab9e4041691ea0eac"
"titulo":"shrek",
"year":2010,
"director":"Mike Mitchell",
"duracion":"1:30:00",
"clasificacion":"A"
}`
- **Validaciones:** **id** String que exista dentro de MondoDb ,**Titulo** String mayor a 0 **Año** Int mayor a 0, **Director** String mayor a 0, **Duración** String mayor a 0.
- **errores**: AliasExistsException 500
- **respuesta**: HTTP status 200
- **respuesta con error**: HTTP status 422

## 1.4 Eliminar película (Delete)
Este servicio permite eliminar una pelicula
- **Endpoint**: `/peliculas/eliminarPeliculas`
- **Método**: `Post`
- **Body**: `{
"id":"617de6e6e81c0c8b58eca07c"
}`
- **Validaciones:** **id** String que exista dentro de MondoDb
- **errores**: AliasExistsException 500
- **respuesta**: HTTP status 200
- **respuesta con error**: HTTP status 422

# 2. Servicio de museos
## 2.1 Crear museos (Create)
Este servicio permite crear un meseo.
- **Endpoint**: `/museos/agregarMuseos`
- **Método**: `Post`
- **Body**:`{
"nombre":"Soumaya",
"ubicacion":"CDMX",
"descripcion":"ejemplo",
"tipo":"publico",
"categoria":"artes" 
}`
- **validaciones**: **nombre** String mayor a 0, **ubicacion** String mayor a 0, **descripcion** String mayor a 0, **tipo** String mayor a 0 e igual a "publico" o "privado", **categoria** String mayor a 0 e igual a "artes","humanidades" o "antropologia".
- **errores**: InvalidBodyException	Field must be string	422
- **respuesta**: HTTP status 200                
- **respuesta con error**: HTTP status 422

## 2.2 Obtener museos (Read)
Este servicio permite leer museos.
- **Endpoint**: `/museos/mostrarMuseos`
- **Método**: `Get`
- **Body**: No aplica
- **errores**: UserNotFoundException	User doesn't exist	500, InvalidTokenException The token is no valid 401
- **respuesta**:HTTP status 200
- **respuesta con error**: HTTP status 422

## 2.3 Actualizar museos (Update)
Este servicio permite actualizar un museo.
- **Endpoint**: `/museos/actualizarMuseos`
- **Método**: `Post`
- **Body**: `{
"id":"617de5dab9e4041691ea0eac",
"nombre":"Soumaya",
"ubicacion":"CDMX",
"descripcion":"ejemplo",
"tipo":"publico",
"categoria":"artes" 
}`
- **Validaciones:** **id** String que exista dentro de MondoDb ,**nombre** String mayor a 0 **ubicacion** String mayor a 0, **descripcion** String mayor a 0, **tipo** String mayor a 0, **categoria** String mayor a 0.
- **errores**: AliasExistsException 500
- **respuesta**: HTTP status 200
- **respuesta con error**: HTTP status 422

## 2.4 Eliminar museos (Delete)
Este servicio permite eliminar un museo.
- **Endpoint**: `/museos/eliminarMuseos`
- **Método**: `Post`
- **Body**: `{
"id":"617de6e6e81c0c8b58eca07c"
}`
- **Validaciones:** **id** String que exista dentro de MondoDb
- **errores**: AliasExistsException 500
- **respuesta**: HTTP status 200
- **respuesta con error**: HTTP status 422

