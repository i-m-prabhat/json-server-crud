import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const Update = () =>
{
    const value = { name: "", email: "" };
    const [data, setData] = useState(value);
    const { name, email } = data;

    const redirect = useNavigate();
    const { id } = useParams();

    useEffect(() =>
    {
        // Fetch data from the server
        axios.get(`http://localhost:5000/user/${id}`).then((res) =>
        {
            setData(res.data);
        });
    }, []);

    const onValueChange = (e) =>
    {
        console.log(e);
        console.log(e.target.value);
        setData({ ...data, [e.target.name]: e.target.value });
        console.log(data);
    }

    const handleUpdate = (id, newData) =>
    {
        // e.preventDefault();
        console.log("data Updated successfully");
        // Update data on the server
        axios.put(`http://localhost:5000/user/${id}`, newData).then(() =>
        {
            // Update data in the state
            const updatedData = [data].map((item) =>
                item.id === id ? { ...item, ...newData } : item
            );
            setData(updatedData);
        })

    }
    return (
        <>
            <h2>Update</h2>
            <form className='container'>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                    <input type="text" className="form-control" name='name' value={name} id="exampleInputPassword1"
                        onChange={(e) => onValueChange(e)}
                    />
                </div>
                <p>{name}</p>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' value={email} id="exampleInputEmail1" aria-describedby="emailHelp"
                        onChange={(e) => onValueChange(e)}
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>

                </div>
                <p>{email}</p>
                <Link to="/read">
                    <button type="button" className="btn btn-primary" onClick={() => handleUpdate(id, data)}>Update</button>
                </Link>
            </form>
        </>
    )
}

export default Update
