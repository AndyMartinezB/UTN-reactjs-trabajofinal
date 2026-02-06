# 🌿 Gestión de Vivero - Trabajo Final Integrador

Este repositorio contiene el **Trabajo Final Integrador** para el curso de **Desarrollo en React JS** de la UTN.BA.

[cite_start]El proyecto consiste en una aplicación web ("Vivero Nativas") que permite la administración de un catálogo de plantas nativas, integrando autenticación de usuarios, base de datos en tiempo real y navegación protegida[cite: 1, 5, 7].

## 📋 Descripción del Proyecto

[cite_start]La aplicación fue desarrollada para consolidar los conceptos de **componentes, estados, props, contexto global (AuthContext) y routing**[cite: 5].

[cite_start]El objetivo principal es ofrecer un Dashboard protegido donde un usuario autenticado pueda realizar operaciones **CRUD** (Crear, Leer, Actualizar, Eliminar) sobre una entidad (Productos/Plantas), persistiendo los datos en **Firebase Firestore**[cite: 18, 21, 29].

### Funcionalidades

- [cite_start]**Autenticación:** Login y Registro de usuarios mediante Firebase Authentication[cite: 10, 14].
- [cite_start]**Rutas Protegidas:** Acceso restringido al Dashboard mediante validación de sesión en `AuthContext`[cite: 19, 38].
- **Gestión de Datos:** Carga y administración de plantas nativas en tiempo real.
- [cite_start]**Feedback de Usuario:** Indicadores de carga y validaciones visuales[cite: 13].
- [cite_start]**Diseño:** Interfaz responsive creada con **CSS Nativo** (sin frameworks externos)[cite: 39].

## 🛠 Tecnologías Utilizadas

- **Frontend:** React JS (Vite)
- **Navegación:** React Router DOM
- **Backend (BaaS):** Firebase (Authentication & Firestore)
- **Estilos:** CSS Nativo (Módulos y Variables)

## 🚀 Instalación y Ejecución

[cite_start]Sigue estos pasos para correr el proyecto localmente[cite: 52]:

1.  **Clonar el repositorio:**

    ```bash
    git clone [https://github.com/tu-usuario/tfi-react-vivero.git](https://github.com/tu-usuario/tfi-react-vivero.git)
    cd tfi-react-vivero
    ```

2.  **Instalar dependencias:**

    ```bash
    npm install
    ```

3.  **Configurar Variables de Entorno:**
    Crea un archivo `.env.local` en la raíz del proyecto y agrega tus credenciales de Firebase[cite: 60]:

    ```env
    VITE_API_KEY=tu_api_key
    VITE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
    VITE_PROJECT_ID=tu_proyecto
    VITE_STORAGE_BUCKET=tu_proyecto.appspot.com
    VITE_MESSAGING_SENDER_ID=tu_sender_id
    VITE_APP_ID=tu_app_id
    ```

4.  **Iniciar la aplicación:**
    ```bash
    npm run dev
    ```

## 📂 Estructura del Proyecto

[cite_start]El código está organizado siguiendo buenas prácticas de separación de responsabilidades[cite: 46, 47]:

- `/components`: Componentes reutilizables (Header, Footer, ProtectedRoute, Forms).
- `/views`: Páginas principales (Home, Login, Register, Dashboard, About).
- [cite_start]`/context`: `AuthContext.jsx` para el manejo global del estado de sesión[cite: 12].
- `/services`: Lógica de conexión con Firebase y funciones asíncronas.
- `/styles`: Archivos CSS organizados por módulos.

## 🔐 Manejo de Sesión (AuthContext)

La autenticación se centraliza en un Contexto Global que:

1.  Escucha cambios en el estado de Firebase (`onAuthStateChanged`).
2.  Provee el objeto `user` y funciones (`login`, `register`, `logout`) a toda la app.
3.  [cite_start]Maneja un estado de `loading` para evitar redirecciones erróneas al recargar la página en rutas privadas[cite: 36].

## 💡 Desafíos y Soluciones

Durante el desarrollo se abordaron situaciones clave:

- **Persistencia al recargar:** Se implementó un estado de carga (`loading`) en el Contexto para esperar la respuesta de Firebase antes de evaluar si el usuario tiene permiso para ver una ruta protegida.
- **Uniformidad Visual:** Para mantener el diseño de la grilla en el catálogo, se limitó la longitud de las descripciones de los productos, agregando una funcionalidad de "Ver más / Ver menos" controlada por estado local.

## 🌱 Créditos

Este proyecto tiene fines puramente educativos.

La temática, imágenes y datos de especies nativas están inspirados en el **Vivero Churrinche** (Córdoba), cuyo trabajo en la difusión de flora nativa se toma como referencia para este ejercicio académico.

---

**Autor:** Andrés Martínez Bologna  
**Curso:** Desarrollo en React JS - UTN.BA  
**Año:** 2025
