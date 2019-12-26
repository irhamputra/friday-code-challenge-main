import React, { useState, useEffect } from 'react';
import { useSearchMakes } from '../lib/useSearchMakes';
import ErrorMessage from './errMessage';
import LoadingMessage from './loadingMessage';
import ChooseModels from './chooseModels';

const ChooseMakes: React.FC = () => {
    const [make, setMake] = useState('');
    const { loading, makes, error } = useSearchMakes();

    useEffect(() => {
        if (makes.length < 0) {
            return;
        }

        // TODO: WIP Car
        for (let manufacture of makes) {
            const carArr = manufacture.split('');
            // console.log(carArr);
        }
    }, [makes]);

    useEffect(() => {
        console.log([...make]);
    }, [make]);

    const onHandleChange = e => {
        setMake(e.target.value);
    };

    const renderListSuggestion = () => {
        return makes.map((make: string, i) => {
            if (make.includes('BMW') || make.includes('FORD')) {
                return (
                    <li onClick={() => setMake(make)} key={i}>
                        {make}
                    </li>
                );
            }
        });
    };

    return (
        <div>
            {error ? (
                <ErrorMessage text='Oops connection lost, please try again' />
            ) : loading ? (
                <LoadingMessage text='Please wait, we do a magic' />
            ) : (
                <div>
                    <p>Selected car: {make}</p>
                    <input
                        name='makes'
                        value={make}
                        placeholder='type manufacture here..'
                        onChange={onHandleChange}
                    />
                    <div>Suggestion car: {renderListSuggestion()}</div>
                </div>
            )}

            {make && <ChooseModels make={make} />}
        </div>
    );
};

export default ChooseMakes;
