import axios from 'axios';
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

const URI = 'https://app121-back-production.up.railway.app/sales';

const CompShowSales = () =>{
    const [sales, setSale] = useState([])
    useEffect( ()=>{
        getSales()
    },[] )
    //Procedimiento para mostrar todas las ventas
    const getSales = async () =>{
        const res = await axios.get(URI);
        setSale(res.data);

    }

    //Procedimiento para elimiar una venta
    const deleteSale = async(id) =>{
        await axios.delete(`${URI}${id}`);
        getSales();
    }

    return(
        <div className='container'>
            <div className='row'>
                 <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'>Crear</Link>
                 <table class="table table-dark table-striped">
                    <thead className='table-primary'>
                        <tr>
                        <th>DN</th>
                        <th>Nombres</th>
                        <th>Apellido</th>
                        <th>Asesor</th>
                        <th>Status</th>
                        <th>Actions</th>
                        </tr>  
                    </thead>
                    <tbody>
                        {sales.map ((sale) =>(
                            <tr key={sale.id}>
                                <td> {sale.dn} </td>
                                <td> {sale.nombres_cliente} </td>
                                <td> {sale.apellido_pat_cliente} </td>
                                <td> {sale.ejecutivo} </td>
                                <td> {sale.status} </td>
                                <td>
                                    <Link to={`/edit/${sale.id}`} className='btn btn-info mr2'>Editar</Link>
                                    <button onClick={()=> deleteSale(sale.id)} className='btn btn-danger'><i className="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                 </div>
            </div>
        </div>
    )
}

export default CompShowSales;