import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateProduct = () =>
{
    const data = { productName: "", productDec: "", productImg: "" };

    const [inputData, setInputData] = useState(data);
    const [field, setField] = useState(false)

    const redirect = useNavigate()

    useEffect(() =>
    {
        axios.get('http://localhost:3000/productData')
            .then((res) => console.log(res))
            .catch(error => console.log(error));
    }, [])


    const handleData = (e) =>
    {
        setInputData({ ...inputData, [e.target.name]: e.target.value })
        console.log(inputData)
    }

    const handleSubmit = (event) =>
    {
        event.preventDefault();
        if (!inputData.productName || !inputData.productDec || !inputData.productImg)
        {
            alert("All Fields are Mendatory")
        } else
        {
            axios.post('http://localhost:3000/productData', inputData)
                .then(() => console.log("product added"))
                .catch(error => console.log(error));


            setField(true)
            redirect('/showproduct')
        }
    }

    return (
        <>
            <pre>{(field) ? <h2>New {inputData.productName}, Product Added successfully!</h2> : ""}</pre>
            <form action="#" onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="prname">Product Name: </label>
                    <input type="text" name="productName" id="prname" value={inputData.productName} onChange={handleData} />
                </p>
                <p>
                    <label htmlFor="prdec">Product Description: </label>
                    <textarea name="productDec" id="prdec" cols="30" rows="5" value={inputData.productDec} onChange={handleData}></textarea>
                </p>
                <p>
                    <label htmlFor="primg">Product Image Url: </label>
                    <input type="text" name="productImg" id="primg" value={inputData.productImg} onChange={handleData} />
                </p>
                <p><input type="submit" value="Add Product" /></p>
            </form>
        </>
    )
}

export default CreateProduct
