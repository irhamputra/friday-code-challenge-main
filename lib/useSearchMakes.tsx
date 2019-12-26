import { useEffect, useState } from 'react';
import axios, { instance } from '../config/http';

export const useSearchMakes = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [makes, setMakes] = useState([]);

    useEffect(() => {
        setLoading(true);
        setError(false);

        let cancel: () => void;

        instance
            .get('/makes', {
                cancelToken: new axios.CancelToken(c => (cancel = c))
            })
            .then(res => {
                setMakes(() => {
                    return ['Choose Manufactures', ...res.data];
                });
                setLoading(false);
            })
            .catch(err => {
                if (axios.isCancel(err)) return;
                setError(true);
            });

        return () => cancel();
    }, []);

    return {
        loading,
        makes,
        error
    };
};
