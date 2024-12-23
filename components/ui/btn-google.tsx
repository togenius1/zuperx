import Image from 'next/image';
import Link from 'next/link';

import classes from './google.module.css';

function ButtonGoogle() {
    return (
        <div className={classes.button}>
            <Link
                href={
                    'https://play.google.com/store/apps/details?id=com.togenius1.finner&pli=1'
                }
                target='_blank'
                rel='noopener noreferrer'
            >
                <Image
                    src='https://zuperx-storage-0648618673334-main.s3.ap-southeast-1.amazonaws.com/public/images/btn_google.png'
                    alt='Google Button'
                    priority
                    width={130}
                    height={50}
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                />
            </Link>
        </div>
    );
}

export default ButtonGoogle;

//######################## Type ##########################
