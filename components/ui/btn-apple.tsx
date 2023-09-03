import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import classes from './apple.module.css';

function ButtonApple(props: Props) {
    // const { btnAppleUrl } = props;

    return (
        <div className={classes.button}>
            <Link
                href={'https://apps.apple.com/us/app/finaci/id6459474956'}
                target='_blank'
                rel='noopener noreferrer'
            >
                <Image
                    src='https://zuperx-storage-0648618673334-main.s3.ap-southeast-1.amazonaws.com/public/images/btn_apple.png'
                    alt='Google Button'
                    priority
                    width={150}
                    height={50}
                    style={{
                        width: '80%',
                        height: 'auto',
                    }}
                />
            </Link>
        </div>
    );
}

export default ButtonApple;

//######################## Type ##########################
type Props = {
    // btnAppleUrl: StaticImageData;
};
