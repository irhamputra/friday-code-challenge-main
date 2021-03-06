import { useEffect, useState } from 'react';
import axios, { instance } from '../config/http';
import { Car } from '../types/Car';

export const useSearchVehicle = (car: Car) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [vehicles, setVehicles] = useState([]);
    const { make, model } = car;

    useEffect(() => {
        setVehicles([]);
    }, [make, model]);

    useEffect(() => {
        setLoading(true);
        setError(false);

        let cancel: () => void;

        instance
            .get('/vehicles', {
                params: { make, model },
                cancelToken: new axios.CancelToken(c => (cancel = c))
            })
            .then(res => {
                setVehicles(res.data);
                setLoading(false);
            })
            .catch(err => {
                if (axios.isCancel(err)) return;
                setError(true);
            });

        return () => cancel();
    }, [make, model]);

    return { loading, error, vehicles };
};
