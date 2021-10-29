import { useState, useEffect } from "react";
import apiUser from "../api/api-user";

export default function useData(path, initialValue){
    const [data, setData] = useState(initialValue);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect( () => {
        setIsLoading(true);
        apiUser.get(path)
            .then( response => {
                setIsLoading(false);
                setData(response.data);
            })
            .catch( err => {
                setIsLoading(false);
                setError(err.response);
            })
    },[path]);

    return [data, isLoading, error];
}