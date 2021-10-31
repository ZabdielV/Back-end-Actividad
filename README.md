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
- **validaciones**:
### Campo  Validación  ###
**Titulo** String mayor a 0 **Año** Int mayor a 0, **Director** String mayor a 0, **Duración** String mayor a 0, 
**Clasificación** String igual a "A", "B","B15" o "C"
- **errores**: InvalidBodyException	Field must be string	422
- **respuesta**: HTTP status 200 & message: 'Updated successfully'
- **respuesta con error**: HTTP status 422

## 1.2 Obtener película (Read)
Este servicio permite ...
- **Endpoint**: `/user`
- **Método**: `Post`
- **Body**:
- **errores**:
- **respuesta**:
- **respuesta con error**:

## 1.3 Actualizar película (Update)
Este servicio permite ...
- **Endpoint**: `/user`
- **Método**: `Post`
- **Body**:
- **errores**:
- **respuesta**:
- **respuesta con error**:

## 1.4 Eliminar película (Delete)
Este servicio permite ...
- **Endpoint**: `/user`
- **Método**: `Post`
- **Body**:
- **errores**:
- **respuesta**:
- **respuesta con error**:

# 2. Servicio de museos
## 2.1 Crear museos (Create)
Este servicio permite ...
- **Endpoint**: `/user`
- **Método**: `Post`
- **Body**:
- **errores**:
- **respuesta**:
- **respuesta con error**:

## 2.2 Obtener museos (Read)
Este servicio permite ...
- **Endpoint**: `/user`
- **Método**: `Post`
- **Body**:
- **errores**:
- **respuesta**:
- **respuesta con error**:

## 2.3 Actualizar película (Update)
Este servicio permite ...
- **Endpoint**: `/user`
- **Método**: `Post`
- **Body**:
- **errores**:
- **respuesta**:
- **respuesta con error**:

## 2.4 Eliminar película (Delete)
Este servicio permite ...
- **Endpoint**: `/user`
- **Método**: `Post`
- **Body**:
- **errores**:
- **respuesta**:
- **respuesta con error**:

