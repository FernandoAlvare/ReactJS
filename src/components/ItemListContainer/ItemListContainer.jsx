import './ItemListContainer.css'
import { listadoProductos } from "../../data/data";
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import ItemDetailList from '../ItemDetailList/ItemDetailList';
import {useParams} from "react-router-dom"


function ItemListContainer({greeting}) {
    
    const [productos, setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {idcategoria} =useParams();

    const getProductos = () => {
        
        return new Promise((resolve) => {
            setTimeout(() => {
                const myData = idcategoria ? listadoProductos.filter((item)=>item.category === idcategoria) : listadoProductos;

                resolve(myData)
              
            }, 1000);
        })
    }
    

    useEffect(() => {

        getProductos()
            .then(res => setProductos(res))
            .catch(console.log)
            .finally(()=> setIsLoading(false))
    }, [idcategoria])

return (
    isLoading ? <h1>Cargando...</h1> : (
        <>
        <h2>{greeting}</h2>
        <h3>Catologo</h3>
        <ItemList listadoProductos={productos}/>
        </>
    )

)
}

export default ItemListContainer;