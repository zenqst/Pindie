import {useState, useEffect, useRef} from 'react';
import { getGamesByCategory } from './api-utils';
import { endpoints } from "@api/config";

export const useGetDataByCategory = (endpoint, category) => {
    const [data, setData] = useState(null);
    const [ pending, setPending ] = useState(true)
    const refMount = useRef()

    useEffect(() => {
        async function fetchData() {
            const data = await getGamesByCategory(`${endpoints.category}=${category}`);
            setData(data);
            setPending(false)
        }
        fetchData();
    }, [refMount]);

    return { data, pending };
};

export const useAuth = () => {
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const fetchAuth = async (url, payload) => {
        setIsPending(true);

        const response = await fetch(`${endpoints.auth + url}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });
        const data = await response.json();

        if (!response.ok) setError(data.message[0].messages)
        else setData(data);

        setIsPending(false);

        return data
    };

    return { isPending, data, error, fetchAuth };
};