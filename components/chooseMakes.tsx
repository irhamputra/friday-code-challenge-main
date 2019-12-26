import React, { useState } from 'react';
import { useSearchMakes } from '../lib/useSearchMakes';

const ChooseMakes: React.FC = () => {
    const [make, setMake] = useState('');
    const { loading, makes, error } = useSearchMakes();

    if (loading) return <h1>Loading...</h1>;
    if (error) return <p>Error!</p>;

    const onHandleChange = e => {
        setMake(e.target.value);
    };

    const renderListSuggestion = () => {
        return makes
            .filter(
                manufactures =>
                    manufactures.toLowerCase() === make.toLowerCase()
            )
            .map((make, i) => {
                return (
                    <li onClick={() => console.log(make)} key={i}>
                        {make}
                    </li>
                );
            });
    };

    return (
        <div>
            <input
                name='makes'
                value={make}
                placeholder='type manufacture here..'
                onChange={onHandleChange}
            />
            <ul>{renderListSuggestion()}</ul>
        </div>
    );
};

export default ChooseMakes;
