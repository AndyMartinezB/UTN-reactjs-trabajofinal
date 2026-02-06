# 🌿 Gestión de Vivero - Trabajo Final Integrador

Este repositorio contiene el **Trabajo Final Integrador** para el curso de **Desarrollo en React JS** de la UTN.BA.

El proyecto consiste en una aplicación web llamada **Vivero Nativas**, que permite la administración de un catálogo de plantas nativas, integrando autenticación de usuarios, base de datos y navegación protegida.

## 📋 Descripción del Proyecto

La aplicación fue desarrollada para consolidar los conceptos de **componentes, estados, props, contexto global (AuthContext) y routing**.

El objetivo principal es ofrecer un **Dashboard protegido** donde un usuario autenticado pueda realizar operaciones **CRUD** (Crear, Leer, Actualizar, Eliminar) sobre una entidad (Productos / Plantas), persistiendo los datos en **Firebase Firestore**.

### Funcionalidades

- **Autenticación:** Login y registro de usuarios mediante Firebase Authentication.
- **Rutas Protegidas:** Acceso restringido al Dashboard mediante validación de sesión en `AuthContext`.
- **Gestión de Datos:** Carga y administración de plantas nativas en tiempo real.
- **Feedback de Usuario:** Indicadores de carga y validaciones visuales.
- **Diseño:** Interfaz responsive creada con **CSS nativo**.

## 🛠 Tecnologías Utilizadas

- **Frontend:** React JS (Vite)
- **Navegación:** React Router DOM
- **Backend (BaaS):** Firebase (Authentication & Firestore)
- **Estilos:** CSS Nativo

## 🚀 Instalación y Ejecución

Sigue estos pasos para correr el proyecto localmente:

1. **Clonar el repositorio:**

```bash
git clone https://github.com/AndyMartinezB/UTN-reactjs-trabajofinal.git
cd UTN-reactjs-trabajofinal
```

2. **Instalar dependencias:**

```bash
npm install
```

3. **Configurar Variables de Entorno:**

Crea un archivo `.env.local` en la raíz del proyecto y agrega tus credenciales de Firebase:

```env
VITE_API_KEY=tu_api_key
VITE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
VITE_PROJECT_ID=tu_proyecto
VITE_STORAGE_BUCKET=tu_proyecto.appspot.com
VITE_MESSAGING_SENDER_ID=tu_sender_id
VITE_APP_ID=tu_app_id
```

4. **Iniciar la aplicación:**

```bash
npm run dev
```

## 📂 Estructura del Proyecto

El código está organizado de la siguiente manera:

- `/components`: Componentes reutilizables (Header, Footer, ProtectedRoute).
- `/views`: Páginas principales (Home, Login, Register, AboutThis).
- `/context`: `AuthContext.jsx` para el manejo global del estado de sesión.
- `/services`: Lógica de conexión con Firebase y funciones asíncronas.
- `/styles`: Archivos CSS organizados por módulos.

## 🔐 Manejo de Sesión (AuthContext)

La autenticación se centraliza en un Contexto Global que:

1. Escucha cambios en el estado de Firebase (`onAuthStateChanged`).
2. Provee el objeto `user` y las funciones `login`, `register` y `logout` a toda la aplicación.
3. Maneja un estado de `loading` para evitar redirecciones erróneas al recargar la página en rutas privadas.

## 💡 Desafíos y Soluciones

Durante el desarrollo se abordaron situaciones clave:

- **Persistencia al recargar:** Se implementó un estado de carga (`loading`) en el Contexto para esperar la respuesta de Firebase antes de evaluar si el usuario tiene permiso para ver una ruta protegida.
- **Uniformidad visual:** Para mantener el diseño de la grilla en el catálogo, se limitó la longitud de las descripciones de los productos, agregando una funcionalidad de _Ver más / Ver menos_ controlada por estado local.

## 🌱 Créditos

Este proyecto tiene fines puramente educativos.

La temática, imágenes y datos de especies nativas están inspirados en el **Vivero Churrinche** (Córdoba), cuyo trabajo en la difusión de flora nativa se toma como referencia para este ejercicio académico. +info dentro del componente AboutThis.

---

**Autor:** Andrés Martínez Bologna  
**Curso:** Desarrollo en React JS - UTN.BA  
**Año:** 2026
