import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import ChooseMakes from '../components/chooseMakes';

const Home = () => (
    <div>
        <Head>
            <title>Home</title>
            <link rel='icon' href='/favicon.ico' />
        </Head>

        <Nav />

        <ChooseMakes />
    </div>
);

export default Home;
