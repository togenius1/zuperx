import { Fragment } from 'react';
import Head from 'next/head';

import HomeBG from '../components/home-page/home-bg';
// import homeImageUrl from '../public/images/home.png';
// import btnGoogleUrl from '../public/images/btn_google.png';
// import btnAppleUrl from '../public/images/btn_apple.png';

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
