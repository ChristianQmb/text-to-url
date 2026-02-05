"use client";

import { useState } from "react";

export default function Register() {
    const [input, setInput] = useState({ name: '', email: ''});
    
        const handleChange = (e: any) => {
            setInput({ ...input, [e.target.name]: e.target.value});
        };
    
        const handleSubmit = async (e: any) => {
            e.preventDefault();
            
            console.log(input)
        }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" onChange={handleChange} />
                <input name="email" placeholder="Email" onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}