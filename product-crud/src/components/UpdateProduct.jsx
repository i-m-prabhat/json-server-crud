import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = () =>
{


    const [produtData, setProductData] = useState({
        productName: "",
        productDec: "",
        productImg: ""
    });
    const [field, setField] = useState(false)
    const { productName, productDec, productImg } = produtData;

    const { id } = useParams()

    const redirect = useNavigate()

    useEffect(() =>
    {
        axios.get(`http://localhost:3000/productData/${id}`)
            .then((res) => setProductData(res.data))
            .catch(error => console.log(error));
    }, [])


    const handleData = (e) =>
    {
        setProductData({ ...produtData, [e.target.name]: e.target.value })
        console.log(produtData)
    }

    const handleSubmit = (event) =>
    {
        event.preventDefault();
        axios.put(`http://localhost:3000/productData/${id}`, produtData)
            .then((res) => setProductData(res.data))
            .catch(error => console.log(error));


        setField(true)
        redirect('/showproduct')
    }


    return (
        <>
            <pre>{(field) ? <h2>New {inputData.productName}, Product Added successfully!</h2> : ""}</pre>
            <form action="#" onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="prname">Product Name: </label>
                    <input type="text" name="productName" id="prname" value={productName} onChange={handleData} />
                </p>
                <p>
                    <label htmlFor="prdec">Product Description: </label>
                    <textarea name="productDec" id="prdec" cols="30" rows="5" value={productDec} onChange={handleData}></textarea>
                </p>
                <p>
                    <label htmlFor="primg">Product Image Url: </label>
                    <input type="text" name="productImg" id="primg" value={productImg} onChange={handleData} />
                </p>
                <p><input type="submit" value="Update Product" /></p>
            </form>
        </>
    )
}

export default UpdateProduct
