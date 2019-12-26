import { useEffect, useState } from 'react';
import axios, { instance } from '../config/http';

export const useSearchModels = (make: string) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [models, setModels] = useState([]);

    useEffect(() => {
        setModels([]);
    }, [make]);

    useEffect(() => {
        setLoading(true);
        setError(false);

        let cancel: () => void;

        instance
            .get('/models', {
                params: { make },
                cancelToken: new axios.CancelToken(c => (cancel = c))
            })
            .then(res => {
                setModels(res.data);
                setLoading(false);
            })
            .catch(err => {
                if (axios.isCancel(err)) return;
                setError(true);
            });

        return () => cancel();
    }, [make]);

    return { loading, error, models };
};
