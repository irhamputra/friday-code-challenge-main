import React, { useEffect, useState } from 'react';
import { useSearchVehicle } from '../lib/useSearchVehicle';
import { Car } from '../types/Car';

const ChooseVehicles: React.FC<{ car: Car }> = ({ car }) => {
    const { loading, error, vehicle } = useSearchVehicle(car);

    useEffect(() => {
        console.log(vehicle);
    }, [vehicle]);
    return (
        <div>
            Select Car: {car.make} - {car.model}
        </div>
    );
};

export default ChooseVehicles;
