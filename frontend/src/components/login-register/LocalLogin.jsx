import React from 'react'
import Input from "../elements/Input.element"

const LocalLogin = () => {
    return (

        <div className='min-h-screen flex justify-center items-center'>
            <form className="mx-auto w-[70%] md:w-[50%] lg:w-[30%] border rounded-lg p-10 shadow-md">
                <Input title="Username/ Login" name="credential" type="text" />
                <Input title="password" type="password" />
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>



    )
}

export default LocalLogin
