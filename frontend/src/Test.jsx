import React, { useEffect } from 'react'
import axios from 'axios'
const Test = () => {

    const [value, setValue] = React.useState("");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:8080/api/test", { withCredentials: true });
                console.log(res.data);
                setValue(res.data.message);
            } catch (error) {
                console.log(error);
                setValue(error.message);
            }
        }
        fetchData();
    }, [])

    return (
        <div>
            {value}
        </div>
    )
}

export default Test
