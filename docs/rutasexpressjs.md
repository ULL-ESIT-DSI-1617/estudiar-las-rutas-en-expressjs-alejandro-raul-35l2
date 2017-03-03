# ***Rutas en ExpressJS***


## Basic Routing

El direccionamiento básico hace referencia a cómo responde una aplicación a una solicitud de cliente en un punto final en concreto, que viene a ser un URI (o una zona de acceso) y un método de soliticitud HTTP (GET,POST,PUT,etc).

Hay muchas rutas y cada una puede tener una o varias funciones a tratar.

Una ruta sería algo así como:


```js
app.METHOD(PATH,HANDLER)

```
Donde distinguimos:

* *app* es una instancia de express
* *METHOD* es un método de solicitud HTTP
* *PATH* sería por donde accede al servidor
* *HANDLER* es la función que se ejecuta

Se ilustran varios ejemplos con rutas simples:

Aquí responde con un 
"Hola mundo!" en la página inicial.

```js
 app.get('/', function (req, res) {
        res.send('Hello World!')
    })

```

El siguiente ejemplo responderá a una solicitud POST en la ruta específicada.

```js
 app.put('/user', function (req, res) {
        res.send('Got a PUT request at /user')
    })
```
Se ilustran varios ejemplos más que puedes visualizar [aquí](http://expressjs.com/en/starter/basic-routing.html)

