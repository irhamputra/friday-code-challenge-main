import React, { useEffect, useState } from 'react';
import { useSearchModels } from '../lib/useSearchModels';
import ErrorMessage from './errMessage';
import LoadingMessage from './loadingMessage';
import ChooseVehicles from './chooseVehicles';
import { Car, Make, Model } from '../types/Car';

const ChooseModels: React.FC<{ make: Make }> = ({ make }) => {
    const [car, setCar] = useState<Car>({
        make: '',
        model: ''
    });
    const { loading, models, error } = useSearchModels(make);

    useEffect(() => {
        console.log(models);
    }, [models]);

    const renderAllModels = () => {
        return models.map((model: Model, i) => {
            return (
                <li
                    onClick={() => {
                        const newSelectCar: Car = { make, model };
                        setCar(newSelectCar);
                    }}
                    key={i}>
                    {model}
                </li>
            );
        });
    };

    return (
        <div>
            <p>Choose Models from {make}</p>
            {error ? (
                <ErrorMessage text='Oops! Connection lost, please try again' />
            ) : models.length < 0 ? (
                <ErrorMessage text='Oops, models are not available' />
            ) : loading ? (
                <LoadingMessage text='Please wait, load a models' />
            ) : (
                renderAllModels()
            )}

            {car && <ChooseVehicles car={car} />}
        </div>
    );
};

export default ChooseModels;
