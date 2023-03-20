import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Read = () =>
{
    const [data, setData] = useState([])

    const getData = () =>
    {
        axios.get('http://localhost:5000/user').then((res) =>
        {
            console.log(res.data);
            setData(res.data);
        })
    }
    useEffect(() =>
    {
        getData();
    }, [])
    const handleDelete = (id) =>
    {
        if (window.confirm("Are You sure want to delete?"))
        {
            axios.delete(`http://localhost:5000/user/${id}`).then(() =>
            {
                getData();
            }).catch((err) => console.log(err))
        }
    }

    return (
        <>
            <h1>Registration List</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((data) =>
                        (
                            <tr key={data.id}>
                                <th scope="row">{data.id}</th>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>
                                    <Link to={`/update/${data.id}`} className='btn btn-primary'>Edit</Link>
                                </td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => handleDelete(data.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                        )
                    }
                </tbody>
            </table>
            <Link to={'/'} >

                <button className='btn btn-primary'>go back to Register</button>
            </Link>
        </>
    )
}

export default Read
