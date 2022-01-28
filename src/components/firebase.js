// Me traigo la función para 'conectar' la aplicación
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

//Traigo el objeto de configuración de la cuenta de firebase
const firebaseConfig = {
    apiKey: "AIzaSyDN54_hQo1dfwS0ixd_VfY_Y4cwYLnMCKs",
    authDomain: "caption-reactjs.firebaseapp.com",
    projectId: "caption-reactjs",
    storageBucket: "caption-reactjs.appspot.com",
    messagingSenderId: "40440827569",
    appId: "1:40440827569:web:02168df551a13bd6485c90"
};

//Creo una instancia de la aplicación. Pasandole esta instancia a los servicios de firebase, la reciben como parámetro. 
const app = initializeApp(firebaseConfig);

// Creo una instancia de firestore usando la instancia de la aplicación previamente creada. Es como una referencia a la base de datos.
export const db = getFirestore(app)
//Esta variable es la que me va a permitir acceder a los datos, entonces la tengo que importar en todos los componentes donde vaya a requerir los productos de mi tienda. Serían: ItemListContainer, ItemDetailContainer y Cart. 