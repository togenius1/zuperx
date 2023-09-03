'use client';
import Image from 'next/image';

import classes from './home.module.css';
import ButtonGoogle from '../ui/btn-google';
import ButtonApple from '../ui/btn-apple';
import homeUrl from '/public/images/HOME.png';

function HomeBG() {
    // const homeUrl =
    //     'https://zuperx-storage-0648618673334-main.s3.ap-southeast-1.amazonaws.com/public/images/home.png';
    // const homeUrl = '/images/home.png';
    const intrinsicWidth = 3600;
    const intrinsicHeight = 1800;



    return (
        <div className={classes.home}>
            <div className={classes.image}>
                <Image
                    alt='Finaci, Money manager'
                    src={homeUrl}
                    priority
                    width={intrinsicWidth}
                    height={intrinsicHeight}
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                />
                <ButtonGoogle />
                <ButtonApple />
            </div>

            <h1>Finaci</h1>
            <p>Easiest way to manage your personal finances</p>
        </div>
    );
}

export default HomeBG;
