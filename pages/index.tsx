import { Fragment } from 'react';
import Head from 'next/head';

import HomeBG from '../components/home-page/home-bg';

export default function HomePage() {
    return (
        <Fragment>
            <Head>
                <title>zuperx</title>
                <meta
                    name='description'
                    content='ZUPERX provides mobile and web applications'
                />
            </Head>

            <HomeBG />
        </Fragment>
    );
}

//
