# 🎯 SportFlow - Gestión Integral de Clubes de Fútbol

## 📋 Descripción del Proyecto

**SportFlow** es una aplicación web modular para la gestión centralizada de clubes de fútbol. Digitaliza procesos que normalmente se manejan en papelería física, ofreciendo una plataforma completa para administrar jugadores, equipos, estadísticas, entrenamientos y notificaciones.

## ✨ Características Principales

- **🔐 Autenticación de Usuarios**: Sistema de login/registro con 4 roles diferentes
- **👥 Gestión de Jugadores**: Crear, editar, eliminar y visualizar perfiles de jugadores
- **🏆 Plantillas de Equipos**: Organizar jugadores en diferentes categorías y equipos
- **📈 Estadísticas Deportivas**: Registro detallado de goles, asistencias, tarjetas
- **📅 Programación de Entrenamientos**: Crear y gestionar eventos, partidos y entrenamientos
- **🔔 Sistema de Notificaciones**: Enviar mensajes a jugadores, entrenadores y directivos
- **⚙️ Configuración del Club**: Gestionar información general de la organización
- **💾 Persistencia Local**: Todos los datos se guardan en navegador (localStorage)

## 🏗️ Estructura de Carpetas

```
sportflow/
├── index.html                 # Pantalla de Login/Registro
├── app.html                   # Dashboard Principal
│
├── css/
│   ├── styles.css            # Estilos globales (incluido en app.html)
│   ├── auth.css              # Estilos de autenticación (incluido en index.html)
│   └── components.css        # Componentes reutilizables
│
├── js/
│   ├── auth.js               # Lógica de autenticación
│   ├── storage.js            # Sistema de almacenamiento local
│   └── utils.js              # Funciones auxiliares
│
├── components/
│   ├── dashboard.js          # Módulo Dashboard
│   ├── players.js            # Módulo Gestión de Jugadores
│   ├── teams.js              # Módulo Plantillas
│   ├── statistics.js         # Módulo Estadísticas
│   ├── schedule.js           # Módulo Entrenamientos
│   ├── notifications.js      # Módulo Notificaciones
│   └── settings.js           # Módulo Configuración
│
├── data/
│   └── sample-data.js        # Datos de ejemplo
│
└── README.md                 # Esta documentación
```

## 🚀 Guía de Instalación Rápida

### Paso 1: Descargar Archivos
Descarga todos los archivos en una carpeta llamada `sportflow/`

### Paso 2: Estructura de Carpetas
Crea las siguientes carpetas:
```bash
mkdir css js components data
```

### Paso 3: Organizar Archivos
- `index.html` → Raíz
- `app.html` → Raíz
- Archivos `.js` → Carpeta correspondiente
- Archivos `.css` → Carpeta `css/`

### Paso 4: Abrir en Navegador
```bash
# Opción 1: Abrir directamente
Haz doble clic en index.html

# Opción 2: Servidor local (recomendado)
python -m http.server 8000
# Luego abre: http://localhost:8000/index.html
```

## 👤 Usuarios de Demostración

Prueba la aplicación con estos usuarios:

| Email | Contraseña | Rol | Permisos |
|-------|-----------|-----|----------|
| admin@club.com | Demo123! | Administrador | Acceso total |
| director@club.com | Demo123! | Director | Gestión completa |
| coach@club.com | Demo123! | Entrenador | Estadísticas, entrenamientos |
| player@club.com | Demo123! | Jugador | Solo lectura |

## 📦 Descripción de Módulos

### 1. Dashboard (📊)
- Resumen de estadísticas generales
- Últimas actividades registradas
- Acceso rápido a módulos principales

### 2. Gestión de Jugadores (👥)
- Crear nuevo jugador
- Ver listado completo
- Editar información
- Eliminar jugador
- Asignar dorsal automáticamente

### 3. Plantillas (🏆)
- Crear múltiples equipos
- Organizar por categoría (Profesional, Sub-17, Sub-15)
- Asignar entrenador responsable
- Ver composición del equipo

### 4. Estadísticas (📈)
- Registrar goles por jugador
- Registrar asistencias
- Contar tarjetas amarillas/rojas
- Visualizar tabla de desempeño

### 5. Entrenamientos (📅)
- Programar entrenamientos
- Registrar partidos
- Establecer ubicación y hora
- Confirmar asistencia

### 6. Notificaciones (🔔)
- Enviar notificaciones a todos
- Enviar a grupo específico
- Historial de notificaciones
- Filtrar por tipo

### 7. Configuración (⚙️)
- Información del club
- Datos de contacto
- Ubicación de cancha principal
- Datos persistentes

## 🔐 Sistema de Autenticación

### Login
- Email y contraseña requeridos
- Opción "Recuérdame" para persistencia
- Recuperación de contraseña disponible

### Registro
- Crear nuevo usuario
- Seleccionar rol (Admin, Director, Entrenador, Jugador)
- Validación de contraseña
- Prevención de duplicados

### Roles y Permisos

**Admin**: Acceso total a todos los módulos

**Director**: Acceso a jugadores, equipos, estadísticas, entrenamientos, notificaciones, configuración

**Entrenador**: Acceso a jugadores, estadísticas, entrenamientos, notificaciones

**Jugador**: Acceso solo a dashboard y notificaciones

## 💾 Almacenamiento de Datos

### LocalStorage
- Usuarios registrados
- Jugadores
- Equipos/Plantillas
- Estadísticas
- Eventos/Entrenamientos
- Notificaciones
- Información del club

### SessionStorage
- Sesión de usuario activo
- Token de autenticación

⚠️ **Nota**: Los datos se almacenan en el navegador. Si limpias caché, se perderán todos los datos.

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura y semántica
- **CSS3**: Diseño responsivo y moderno
- **JavaScript (ES6+)**: Lógica de la aplicación
- **LocalStorage API**: Persistencia de datos
- **SessionStorage API**: Gestión de sesiones

## 📱 Responsividad

La aplicación es completamente responsiva:
- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Móvil (menos de 768px)

## 🎨 Diseño y Paleta de Colores

### Tema Oscuro (por defecto)
- **Fondo Primario**: #0f172a
- **Fondo Secundario**: #1e293b
- **Accent Principal**: #0284c7
- **Texto Primario**: #f1f5f9

### Colores de Estado
- ✅ Éxito: #10b981 (verde)
- ❌ Error: #dc2626 (rojo)
- ⚠️ Advertencia: #f97316 (naranja)
- ℹ️ Información: #0284c7 (azul)

## 🔧 Funciones Auxiliares Disponibles

### Autenticación
```javascript
checkSession()           // Verificar sesión activa
logout()               // Cerrar sesión
getCurrentUser()       // Obtener usuario actual
hasRole(role)          // Verificar rol
canAccess(module)      // Verificar permisos
```

### Almacenamiento
```javascript
Storage.getPlayers()   // Obtener jugadores
Storage.addPlayer()    // Agregar jugador
Storage.deletePlayer() // Eliminar jugador
// ... Métodos similares para otros entidades
```

### Utilidades
```javascript
showNotification()     // Mostrar notificación
formatDate()          // Formatear fecha
formatTime()          // Formatear hora
isValidEmail()        // Validar email
searchInArray()       // Buscar en array
```

## 🚧 Próximas Mejoras

- [ ] Backend real (Node.js, Django, etc.)
- [ ] Base de datos (MongoDB, PostgreSQL, etc.)
- [ ] Autenticación JWT
- [ ] Exportación a PDF/Excel
- [ ] Gráficas avanzadas
- [ ] Integración con WhatsApp/Email
- [ ] App móvil nativa
- [ ] Sistema de reportes

## 📝 Notas Importantes

1. **Seguridad**: Esta es una aplicación de demostración. No uses contraseñas reales.
2. **Persistencia**: Los datos se guardan en localStorage del navegador.
3. **Navegadores Soportados**: Chrome, Firefox, Safari, Edge (versiones recientes)
4. **Sincronización**: No hay sincronización entre dispositivos sin backend.

## 🤝 Contribuciones

Para mejorar SportFlow:
1. Identifica errores o características faltantes
2. Propone mejoras
3. Contribuye con código
4. Comparte tu feedback

## 📄 Licencia

Este proyecto está disponible para uso educativo y comercial.

## ✉️ Contacto y Soporte

Para preguntas o soporte técnico, contacta al equipo de desarrollo.

---

**SportFlow v1.0** - Desarrollado con ❤️ para mejorar la gestión de clubes de fútbol
