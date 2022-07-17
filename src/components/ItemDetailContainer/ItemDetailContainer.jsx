import { listadoProductos } from '../../data/data';
import { useEffect, useState } from 'react';
import ItemDetailList from '../ItemDetailList/ItemDetailList';
import {useParams} from "react-router-dom"


function ItemDetailContainer() {
    
    const [productos, setProductos] = useState([])
    const {iditem} = useParams();

    const getProductos = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const myData1 = listadoProductos.filter((item) => item.id === iditem)

                resolve(myData1)
            }, 1000);
        })
    }
    

    useEffect(() => {

        getProductos()
            .then(res => setProductos(res))
            .catch(console.log)
    }, [])

return (
    <>
    <h2>Detalle de los productos!</h2> 
    <ItemDetailList listadoProductos={productos}/>
    </>
)
}

export default ItemDetailContainer;