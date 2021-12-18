import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer' ;
import {Routes, Route} from "react-router-dom";

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/category/:id" element={<ItemListContainer/>} />
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            </Routes>
        </main>
    )
}

export default Main