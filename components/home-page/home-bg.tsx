import Image from 'next/image';

import classes from './home.module.css';
import ButtonGoogle from '../ui/btn-google';
import ButtonApple from '../ui/btn-apple';

function HomeBG() {
    // const homeUrl =
    //     'https://zuperx-storage-0648618673334-main.s3.ap-southeast-1.amazonaws.com/public/images/home.png';
    const homeUrl = '/images/home.svg';

    return (
        <section className={classes.home}>
            <div className={classes.image}>
                <Image
                    src={homeUrl}
                    alt='Finaci, Money manager'
                    width={800}
                    height={200}
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                    priority
                />
                <ButtonGoogle />
                <ButtonApple />
            </div>

            <h1>Finaci</h1>
            <p>Easiest way to manage your personal finances</p>
        </section>
    );
}

export default HomeBG;
