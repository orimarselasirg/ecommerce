
# Ecommerce Byte4bit API


Ecommerce Byte4bit API, es una API creada y diseñada usando node con su framework de express. el cual provee de un sistema de arquitectura REST.

La API tiene creada sus propias rutas y es un sistema monolitico con un diseño de arquitectura de Modelo, Vista, Controlador (MVC)

Por medio de esta API se podran ejecutar todo el CRUD del proceso base de un ecommerce actual

## Requerimientos

Este proyecto funciona con Node.js versión >= 18. Para validar la versión y verificar si tienes Node.js instalado, puedes utilizar el siguiente comando en tu consola preferida:

```
node -v
```

Al ejecutar este comando, se mostrará la versión instalada de Node.js. Si es 18 o superior, estás listo para trabajar en este proyecto. Si no está instalado o la versión es inferior, es posible que necesites instalar una versión más reciente de Node.js para trabajar con este proyecto. Para instalar, haz clic aquí. [node](https://nodejs.org/)

Si prefieres usar Yarn como tu gestor de paquetes, puedes verificar si está instalado ejecutando el siguiente comando en tu consola preferida:
```
yarn -v
```
Al ejecutar este comando, se mostrará la versión instalada de Yarn si está instalado. Si Yarn no está instalado, puedes seguir las instrucciones oficiales de instalación de Yarn para instalarlo en tu sistema. Para instalar, haz clic aquí. [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

También puede ser necesario utilizar software como Postman o Insomnia para realizar solicitudes a los Endpooints, los cuales puedes descargar desde los siguientes enlaces.

[Postman](https://www.postman.com/downloads/)

[Insomnia](https://insomnia.rest/download)

Tambien se recomienda la instalacion de los siguientes software

[Docker](https://docs.docker.com/desktop/install/windows-install/)
[Mongo Compass](https://www.mongodb.com/products/tools/compass)


## Instalación

Este proyecto puede ser instalado utilizando npm o yarn.

En tu consola de comandos, puedes utilizar las siguientes líneas de código:

via npm
```bash
npm install
```
via yarn
```bash
yarn
```

## Variables de Entorno

Para ejecutar este proyecto, debes crear un archivo .env en la carpeta raíz del proyecto y agregar las siguientes variables de entorno:

`PORT`

En esta variable se establece el puerto con el que conectara el base de datos


# Variables para la base de datos

Para estas variables se recomiendas la creacion de una cuenta en Mongo Atlas y descargar el programa de Mongo Compass para conexion local de la base de datos

desde Mongo Atlas se puede crear el cluster donde se definiran las base de datos

![image](https://github.com/orimarselasirg/ecommerce/assets/84402210/6c64d057-7811-4047-8ecd-c4f006832cbf)

en la parte donde dice  ``Connect`` le preguntara como se quiere conectar y selecciona la opcion de Mongo Compass

![image](https://github.com/orimarselasirg/ecommerce/assets/84402210/366b5a97-08a6-455c-8d56-64b0611b1b8a)

A continuacion le data todos los datos que requiere las variable de entorno

![image](https://github.com/orimarselasirg/ecommerce/assets/84402210/7d153012-2072-42b6-b189-a86930578259)


`DB_USERNAME`

En esta variable se define el usuario de la base de datos, normalente el usuario sera ``superadmin``

`DB_PASSWORD`

En esta variable se define la contraseña de acceso a la base de datos, este password es el que haya definido en la creacion de la base de datos en Mongo Atlas

`DB_HOST`

En esta variable se define el host correspondiente a la base de datos, el host es lo que viene despues de la @ de la url de conexion de la base de datos que ofrece Mongo Atlas

`DB_NAME`

En esta variable se define el nombre que tiene la base de datos, es el nombre que define cuando crea la base de datos


las variables anteriores, son necesarias para el caso de querer levantar el proyecto local y controlar el acceso y escritura a su propia base de datos local

# Variable para conexion al servidor de imagenes


`CLOUDINARY_CLOUD_NAME`

`CLOUDINARY_API_KEY`

`CLOUDINARY_API_SECRET`

Las variables anteriores, las ofrece directamente Cloudinary para el almacenamiento y gestion de imagenes via web, para tener esos valores, es necesario que habra una cuenta en [Cloudinary](https://console.cloudinary.com/users/login?RelayState=%2Fconsole%2F)

en la seccion del dashboard una vez cree la cuenta, aparecen los valores requeridos para las variables

![image](https://github.com/orimarselasirg/ecommerce/assets/84402210/0d899c21-3518-48e3-925f-1f3de733e2cf)


# Variable Mercado Pago

`ACCESS_TOKEN_MERCADOPAGO`

Esta varibale es requerida para la conexion de acceso del Boton de pago de Mercado Pago del frontend, esta variable de acceso se obtiene al crear una cuenta como developer en [Mercado Pago](https://www.mercadopago.com.co/developers/es/docs/checkout-pro/landing)


# Variables para las notificaciones por correo

`NODEMAILER_HOST`

Esta variable es el host o servidor que manejo los envios de correo, para el caso de gmail es `smtp.gmail.com`

`NODEMAILER_USER_MAIL`

El valor de esta varibale es el correo del cual se enviaran los correos

`NODEMAILER_USER_PASSWORD`

Este valor se encuentra en las diferentes configuracion de cada servidor de correos, generalmente se debe crear una clave de aplicaciones el cual permitira las conexiones al servidor de correos desde fuera de su propio servicio

Estas variables son requeridas para que al levantar el proyecto se pueda generar la conexion para el envio de notificaciones


## De igual manera, un correo electrónico con todos estos valores será enviado al evaluador del proyecto para facilitar el levantamiento en desarrollo.


## Corriendo el Proyecto

Para iniciar el proyecto en modo de desarrollo, debes tener instalado `nodemon`

puedes instalarlo de manera global con el siguiente comando

usando npm
```bash
npm install -g nodemon
```

usando yarn
```bash
yarn add -g nodemon
```

A continuacion debes ejecutar el siguiente código en tu consola de comandos:

usando npm
```bash
npm run start:dev
```

usando yarn
```bash
yarn start:dev
```

El proyecto se iniciará en breve, y la consola proporcionará informacion de conexiones exitosas definidos por el framework.

<img width="506" alt="image" src="https://github.com/orimarselasirg/ecommerce/assets/84402210/3d7b5ed7-5b95-4606-b244-5e60d4ee9864">



## API Reference

Para el uso de la API, se puede hacer uso de los siguiente softwares [Postman](https://www.postman.com/downloads/) or [Insomnia](https://insomnia.rest/download).

Para las consultas, debes ingresar la URL base en la barra de direcciones de tu navegador web/Postman/Insomnia, y se vería algo así:

```
http://localhost:8080/api/v1
```

Despues, podras escribir los siguientes endpoints.

### Endpoints

## Users

-  Consultar todos los usuarios - GET
  ```
  /users
  ```
-  Crear un usuario - POST
  
  ```
  /users
  ```
-  Consultar un usuario por email - GET
  ```
  /users/:email
  ```
-  Modificar un usuario por Id - GET
  ```
  /users/:userId
  ```
-  Borrar un usuario por Id - DELETE
  
  ```
  /users/:iserId
  ```

## Products
- Listar todos los productos - GET
  ```
  /products
  ```
- Listar un producto por ID - GET
  ```
  /products/:productId
  ```
- Crear un producto - POST
  ```
  /products
  ```
- Guardar la imagen de un producto - POST
  ```
  /products/image
  ```
- Modificar un producto por ID - PUT
  ```
  /products/:productId
  ```
- Borrar un producto por ID - DELETE
  ```
  /products/:productId
  ```

## Order And Carts

- Listar todos los pedidos - GET
  ```
  /carts
  ```
- Listar pedidos por usuario - GET
  ```
  /carts-by-user/:email
  ```
- Crear pedido por usuario - POST
  ```
  /carts/:userId
  ```
- Modificar un pedido por Id - PUT
  ```
  /carts-by-id/:cartId
  ```
- Listar un pedido por Id - GET
  ```
  /carts/:cartid
  ```
- Borrar un pedido por Id - DELETE
  ```
  /carts/:cartid
  ```

## Payment

- Crear preferencia de pago Mercado Pago - POST
  ```
  /create_preference
  ``` 

## Notificator

- Enviar notificación - POST
  ```
  /notification
  ```

## GENERACION DE IMAGENES DOCKER Y EJECUCION

el proyecto tiene configurado el Dockerfile para generacion de la imagen y levantamiento del mismo

## Instalar docker

Debe tener instalado Docker, en caso dado que no, lo puede descargar en la pagina oficial. [Docker](https://docs.docker.com/desktop/install/windows-install/)

una vez instalado, debe crear una cuenta con un nombre de usuairo

## Ejecutar el build del docker

Abra una terminal y situese en la raiz del proyecto y ejecute el siguiente codigo para crear la imagen del proyecto: ``docker build -t [nombredelaimagen] .``

donde ``[nombredelaimagen]`` es el nombre que desea colocarle a la imagen

por convencion se recomienda ``nombreusuariodocker/nombredelproyecto``

por ejemplo:

```
docker build -t developer/apiecommerce .
```

Importante, debe tener corriendo la aplicacion de Docker para que el comando no le genere errores

## Levantar la creación de la imagen

una vez generada la imagen, se debe ejecutar en la misma terminal y misma ubicacion el siguiente comando:

```
docker run -d -p 8080:8080 developer/ecommerce
```
este comando le generara una llave SHA que automaticamente levantara la imagen para su ejecucion

<img width="1244" alt="image" src="https://github.com/orimarselasirg/ecommerce-front/assets/84402210/b82465d2-4972-413f-a88a-c0ef1b11b304">

para poder usar la aplicacion back, debe dirigirse a las opciones de la imagen y ejecutar "open in terminal"

<img width="1250" alt="image" src="https://github.com/orimarselasirg/ecommerce/assets/84402210/ffe7b48f-2511-4c60-901c-c705467730e7">

y en esa pantalla puede irse a los "Logs" y vera en terminal la ejecucion del backend

En este punto ya tiene la API REST corriendo desde el contenedor

### En caso que no desee realizar el proceso de creacion de imagen, puede descargar la imagen y ejecutarla en su equipo, tener presente que si desea comprobar la funcionalidad del backend puede usar Postman o insomnia, o levantar el frontend
### el frontend tambien tiene imagen docker y pueden descargalo con los siguientes comandos

Imagen docker para frontend
``` bash
docker pull ramirogrisales/ecommerce
```
Imagen docker para backend
```bash
docker pull ramirogrisales/apiecommerce
```

## Authors

- [@orimarselasirg](https://github.com/orimarselasirg)

