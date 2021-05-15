import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const handleDelete = (id) => {
        console.log(id)
        let new_data = data.filter(data => data.id !== id)
        setData(new_data)
    }

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) { // error coming back from server
                        throw Error('could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setIsPending(false);
                    setData(data);
                    setError(null);
                })
                .catch(err => {
                    // auto catches network / connection error
                    setIsPending(false);
                    setError(err.message);
                })
        }, 1000);
    }, [url])

    return {data, isPending, error, handleDelete};
}

export default useFetch;