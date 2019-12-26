import React, { useEffect } from 'react';
import { useSearchModels } from '../lib/useSearchModels';
import ErrorMessage from './errMessage';
import LoadingMessage from './loadingMessage';

const ChooseModels: React.FC<{ make: string }> = ({ make }) => {
    const { loading, models, error } = useSearchModels(make);

    useEffect(() => {
        console.log(models);
    }, [models]);

    const renderAllModels = () => {
        return models.map((model, i) => {
            return (
                <li onClick={() => console.log(make, model)} key={i}>
                    {model}
                </li>
            );
        });
    };

    return (
        <div>
            <p>Choose Models from {make}</p>
            {models.length < 0 ? (
                <ErrorMessage text='Oops, models are not available' />
            ) : loading ? (
                <LoadingMessage text='Please wait, load a models' />
            ) : (
                renderAllModels()
            )}
        </div>
    );
};

export default ChooseModels;
