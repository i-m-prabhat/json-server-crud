import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ShowProduct = () =>
{
    const [product, setProduct] = useState([])

    const getProductData = () =>
    {
        axios.get('http://localhost:3000/productData').then(res => setProduct(res.data))
        console.log(product);
    }
    useEffect(() =>
    {
        getProductData();

    }, [])

    const handleDelete = (id) =>
    {
        axios.delete(`http://localhost:3000/productData/${id}`)
            .then(() =>
            {
                getProductData()
            })
    }
    return (
        <div>
            <h1>Products List</h1>
            <table>
                <thead>

                    <tr>
                        <th>Product Name</th>
                        <th>Product Description</th>
                        <th>Product img</th>
                        <th colSpan="2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map((item) => (
                            <tr key={item.id}>
                                <td>{item.productName}</td>
                                <td>{item.productDec}</td>
                                <td><img src={item.productImg} alt="img" width={"150px"} /></td>
                                <td>
                                    <Link to={`/updateproduct/${item.id}`}>
                                        <button>Edit</button>
                                    </Link>
                                </td>
                                <td><button onClick={() => handleDelete(item.id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Link to={"/"} >Add More Products</Link>
        </div >
    )
}

export default ShowProduct