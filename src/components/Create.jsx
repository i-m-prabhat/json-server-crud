import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Create = () =>
{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const redirect = useNavigate()

    // const header = { "Access-Control-Allow-Origin": "*" };
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        console.log("Submitted");
        axios.post("http://localhost:5000/user", {
            name,
            email
            // header
        }).then(redirect("/read")).catch((err) => console.log(err))

    }
    return (
        <>
            <h2>Create</h2>
            <form className='container'>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder='Enter Your Name here........'
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <p>{name}</p>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder='Enter Your Email here .........'
                        aria-describedby="emailHelp"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>

                </div>
                <p>{email}</p>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </>
    )
}

export default Create
