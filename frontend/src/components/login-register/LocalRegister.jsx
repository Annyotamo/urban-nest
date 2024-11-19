import React from 'react'
import Input from '../elements/Input.element'
import { useFormik } from "formik"
import axios from "axios"

const LocalRegister = () => {

    const formik = useFormik({
        initialValues: {
            username: "", email: "", password: ""
        },
        onSubmit: async (values) => {
            const res = await axios.post("http://localhost:8080/api/auth/register", values)
            console.log(res.data);
        }
    })

    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-semibold mb-2'>Welcome to Urban-nest</h1>
            <form className="mx-auto w-[70%] md:w-[50%] lg:w-[30%] border rounded-lg p-10 shadow-md" onSubmit={(e) => { e.preventDefault(); formik.handleSubmit() }}>
                <Input type="text" title="Username" onChange={formik.handleChange} value={formik.values.username} />
                <Input type="email" title="Email" onChange={formik.handleChange} value={formik.values.email} />
                <Input type="password" title="Password" onChange={formik.handleChange} value={formik.values.password} />
                <Input type="password" title="Confirm password" />
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign up</button>
            </form>
        </div>
    )
}

export default LocalRegister
