# Sistema de Gestión de Aparcamiento

Este proyecto es un sistema de gestión de aparcamiento que permite registrar la entrada y salida de vehículos, gestionar slots de estacionamiento y visualizar el historial de vehículos. Está compuesto por una interfaz web que incluye páginas para el registro de vehículos y la visualización de historial.

## Tabla de contenido
 |Indice |Titulo|
 |--|--|
 |1|Instalación|
 |2|Contenido del proyecto|
 |3|Instrucciones de Uso|
 |4|DEPENDENCIAS|
 |5|Contribución|
 |6|Licencia|
 |7|Contacto|
###  Instalación
> Para la la instalacion de esta pagina ten en cuenta los siguientes pasos:
1. Clona el repositorio:
    ```bash
    git clone https://github.com/Santiago-SanP05/Proyecto_Git_SantacruzSantiago_SanchezYuli.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd tu-repositorio
    ```
3. Proceso de Abrir:
   una vez ubicado dentro de tu carpetas se puede utilizar
    ```bash
    code .
    ```
## Contenido del Proyecto

### 1. `index.html`

La página principal de gestión del aparcamiento. Incluye:

- **Encabezado** con el nombre del parque y enlaces a diferentes secciones.
- **Sección de tarifas** con información sobre los precios de estacionamiento.
- **Historial** con una tabla para mostrar los vehículos registrados y permitir la salida.

#### Características:
- Fondo de video con una vista animada.
- Navegación entre secciones.
- Visualización de historial de vehículos.

### 2. `registrar.html`

La página de registro para nuevos vehículos. Incluye:

- **Formulario de entrada** con campos para la placa del vehículo, modelo, slot y tipo.
- **Botón de entrada** para registrar el vehículo.

#### Características:
- Fondo de video animado.
- Dropdown para seleccionar el tipo de vehículo.
- Validación de entradas del formulario.

### 3. `index.css`

Hoja de estilos para la página principal (`index.html`). Incluye:

- **Estilos para el encabezado** y la navegación.
- **Diseño para la tabla de historial**.
- **Decoración y fondo de video**.

### 4. `registrar.css`

Hoja de estilos para la página de registro (`registrar.html`). Incluye:

- **Estilos para el formulario** de registro.
- **Diseño del dropdown** para selección de tipo de vehículo.
- **Fondo de video animado**.

### 5. `MostarHistory.js`

Script para gestionar la visualización del historial de vehículos. Incluye:

- **Carga de datos** desde `localStorage`.
- **Visualización de historial** en la tabla.

### 6. `Registro.js`

Script para gestionar el registro de nuevos vehículos. Incluye:

- **Validación de datos** del formulario.
- **Registro de vehículos** y actualización de slots.
- **Manejo de entradas y salidas**.

## Instrucciones de Uso

1. **Abrir la Página Principal**:
   - Abre `index.html` en un navegador para ver la página de gestión y el historial de vehículos.

2. **Registrar un Vehículo**:
   - Navega a `registrar.html`.
   - Completa el formulario con la placa, modelo, slot y tipo de vehículo.
   - Haz clic en el botón de "Enter" para registrar el vehículo.

3. **Visualizar Historial**:
   - En la página principal (`index.html`), el historial de vehículos registrados se mostrará en la tabla bajo la sección de "Historial".

## Dependencias

- **Boxicons** para iconos: [Boxicons](https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css)
- **Fuentes** de Google y CDN: 
  - [Black Side](https://fonts.cdnfonts.com/css/black-side)
  - [Bionic Comic](https://fonts.cdnfonts.com/css/bionic-comic)
  - [Cheerful Cupcake](https://fonts.cdnfonts.com/css/cheerful-cupcake)

## Contribución

Para contribuir a este proyecto, por favor realiza un fork del repositorio y envía un pull request con tus cambios.

¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto, por favor sigue estos pasos: 
Puedes contribuir creando un fork del repositorio y enviando un pull request.

|Tipo de contribución|Aceptado|Comentarios|
|--|--|--|
|Reporte de errores|Sí|Utiliza la sección de issues en GitHub|
|Nuevas características|Sí|Envía un pull request con tus propuestas|

> [!TIP]
> Esto es un resumen de pasos para la contribucion al proyecto
>1. Clonar
>       ```bash
>    git clone https://github.com/Santiago-SanP05/Proyecto-Javascript_SANTIAGOSANTACRUZ.git
>       ```
>2. Crea una nueva rama:
>    ```bash
>    git branch nueva-funcionalidad
>    ```
>3. Realiza tus cambios y haz commit:
>    ```bash
>    git commit -m 'Añadir nueva funcionalidad'
>    ```
>4. Envía un pull request.

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).
>La Licencia MIT es una licencia de software libre permisiva que es ampliamente utilizada en la comunidad de software

---

**Nota:** Asegúrate de que todos los archivos mencionados (HTML, CSS, JS) estén correctamente vinculados y ubicados en sus respectivos directorios para que el proyecto funcione como se espera.

## Contacto

Si desea contribuir con el proyecto o resolver dudas que le haya generado puede contactarnos a estos numeros 
|Santiago|
|--|
|+57 350 811 5170|
