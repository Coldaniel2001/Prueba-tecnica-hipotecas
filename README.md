# Utilidad de la aplicación

Es muy útil para poder calcular la cuota mensual de una hipoteca, poder almacenar esos datos para cada cliente. Pudiendo también borrar los datos y editarlos tanto la información del cliente
como los datos financieros de esa hipoteca.

## Ver aplicación en producción

https://reliable-eclair-18804e.netlify.app/consultClient

# Como arrancar el el simulador de una hipoteca

## Scripts Disponibles

In este proyecto podremos arrancar con el

### `npm start`

Ejecuta la aplicación en modo de desarrollo.\
Abra [http://localhost:3000](http://localhost:3000) para verlo en su navegador.

La página se recargará cuando realice cambios.\
También puede ver errores de pelusa en la consola.

### `npm run build`

Crea la aplicación para producción en la carpeta `build`.\
Incluye correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

La compilación está minimizada y los nombres de archivos incluyen los hashes.\
¡Su aplicación está lista para ser implementada!

### `npm run eject`

**Nota: esta es una operación unidireccional. ¡Una vez que lo "eject", no podrás regresar!**

Si no está satisfecho con la herramienta de compilación y las opciones de configuración, puede "expulsar" en cualquier momento. Este comando eliminará la dependencia de compilación única de su proyecto.

En su lugar, copiará todos los archivos de configuración y las dependencias transitivas (webpack, Babel, ESLint, etc.) directamente en su proyecto para que tenga control total sobre ellos. Todos los comandos excepto "expulsar" seguirán funcionando, pero apuntarán a los scripts copiados para que puedas modificarlos. En este punto estás solo.

Nunca es necesario utilizar "eject". El conjunto de funciones seleccionado es adecuado para implementaciones pequeñas y medianas, y no debería sentirse obligado a utilizar esta función. Sin embargo, entendemos que esta herramienta no sería útil si no pudiera personalizarla cuando esté listo para usarla.


## archivo que necesitamos

### `.env`

![image](https://github.com/Coldaniel2001/prueba-tecnica-hipotecas/assets/105484687/cbed46f7-15bf-448c-b231-c3acbb6a00b0)

En este archivo necesitamos tener en este archivo la variable REACT_APP_SERVER_URL, y poner la url de donde esta conectado el backend, en el caso de la imagen lo tengo en local, en el otro repositorio enseñare como poner los puertos y la url que tendrá el servidor, en nuestro caso  poner 4002 ya que es el puerto de ese servidor y el dominio localhost por ser local.
También lo tengo en producción y seria otros datos, ya depende el dominio y puerto que tenga tu servidor.

## Paquetes que necesitamos instalar

![image](https://github.com/Coldaniel2001/prueba-tecnica-hipotecas/assets/105484687/749208f5-0814-4013-b823-a1f9c682cf1c)

Es muy probable que cuando arranquemos al darle inspeccionar en consola nos salga errores ya que tenemos que instalar estos paquetes más el de tailwind css
![image](https://github.com/Coldaniel2001/prueba-tecnica-hipotecas/assets/105484687/840684d0-72d9-4122-afcd-85a475245d1c)
podéis meteros en la página npm y buscar uno por uno para instalarlo, pero con solo saber el nombre de cada uno de ellos, tan solo poner en la consola npm i [nombre] y ya se instalaría, por ejemplo:
![image](https://github.com/Coldaniel2001/prueba-tecnica-hipotecas/assets/105484687/2f99d148-2c5e-4d16-b55d-f14c801d230f)










