import Nav from './components/NavBar'
import Main from  './components/Main';
import {BrowserRouter} from "react-router-dom"
import CartContext from './components/CartContext'

const App = () => {
    return (
        <BrowserRouter>
            <CartContext>
                <Nav/>
                <Main/>
            </CartContext>
        </BrowserRouter>
    )
}

export default App;