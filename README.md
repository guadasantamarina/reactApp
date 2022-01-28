# Hola! Mi nombre es Guadalupe, bienvenidxs a mi primer react-app. 

La misma fue desarrollada durante el curso de ReactJS que brinda Coder House. Para mí, significa un paso más dentro de la carrera de Desarrollo Full Stack que me encuentro cursando desde mayo del 2021. 

Te voy a contar un poco cómo fue el proceso de desarrollo. 

## Herramientas y recursos utilizados. 
·Create-React-App
·React Bootstrap
·React Router Dom

# En qué consiste mi app? 
El curso requería de sus alumnxs que lxs mismxs desarrollen una app que simule ser un E-Commerce. Me inspiré en mi fanatismo por las gorras para recrear una tienda de Gorras y Gorros. La esquematización y funcionalidades de la tienda se mantuvieron bastante básicas y sencillas. 
Al ingresar, el home despliega todos los productos disponibles en la tienda. De preferirlo, existe en el Nav una opción de filtrar los productos por categoría, clickeando en el botón correspondiente. 
Para acceder a más información sobre los productos, el usuario habrá de clickear en el botón 'detail' que lo redirige hacia una tab con información amplia y detallada del producto seleccionado. En esa misma tab, el usuario podrá seleccionar la cantidad de productos que desee adquirir y agregarlos al carrito. Esto se verá reflejado en el CartWidget, que automáticamente mostrará con un pequeño número la cantidad de productos que se encuentran en el carrito actualmente. 
Para dirigirte al carrito y ver con precisión la cantidad de productos seleccionados y el total del precio de la compra tenés dos opciones: clickendo en el cartWidget o clickeando en el botón "finish purchase" que aparece una vez seleccionados los productos. 
El carrito es un despliegue de los productos seleccionados por el usuario, sus cantidades y el precio final de la compra. El usuario una vez allí podrá optar por vaciar el carrito, eliminar cierto producto, o finalizar la compra. 

# Convenciones 
Intenté mantener un adecudado sistema de componentes, en donde los Containers (ItemList e ItemDetail), son los encargados de la lógica y funcionalidad más fuerte. Reciben la información de los productos, que se encuentran hardcodeados en un Mock, se filtran y se almacenan en un Estado, para luego renderizar lo que es el home o el detalle de un producto específico. 
Las funcionalidades que se encuentran en el carrito son adquiridas por este gracias a la creación de un Context que permite compartir información entre componentes. Básicamente, la información de los productos guardados en el carrito se almacena en un Estado Cart, que luego se comparte mediante el context al componente cart. Este mapea el array del carrito, desglosa la información y la renderiza. 
Estuvo en mis intenciones utilizar Firebase para mediante Firestore simular una base de datos. Si bien la conexión con la app fue exitosa y pude acceder a la db, tuve problemas al intentar acceder a los docs de esa db. Por eso me mantuve con el sistema de harcodeo mediante Mocks. 

El video demostrativo de la app se encuentra en la carpeta "gs-app". 


