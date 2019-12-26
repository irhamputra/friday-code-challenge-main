import React, { useEffect, useState } from 'react';
import { useSearchVehicle } from '../lib/useSearchVehicle';
import { Car, Vehicle } from '../types/Car';
import ErrorMessage from './errMessage';
import LoadingMessage from './loadingMessage';

const ChooseVehicles: React.FC<{ car: Car }> = ({ car }) => {
    const { loading, error, vehicles } = useSearchVehicle(car);

    useEffect(() => {
        console.log(vehicles);
    }, [vehicles]);

    const renderCar = () => {
        return vehicles.map((vehicle: Vehicle, i) => {
            return (
                <div>
                    <li key={i}>
                        {vehicle.make} - {vehicle.model} -{' '}
                        {vehicle.enginePowerKW}
                    </li>
                </div>
            );
        });
    };

    return (
        <div>
            <br />
            Select Car: {car.make} - {car.model}
            <hr />
            {error ? (
                <ErrorMessage text='Oops, connection lost, please try again' />
            ) : vehicles.length < 0 ? (
                <ErrorMessage text='Oops, Models are not available' />
            ) : loading ? (
                <LoadingMessage text='Please wait, we currently do a magic' />
            ) : (
                renderCar()
            )}
        </div>
    );
};

export default ChooseVehicles;
