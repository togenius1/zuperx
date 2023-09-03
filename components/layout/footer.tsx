import Link from 'next/link';

import classes from './footer.module.css';

const TermOfUse =
    'https://www.privacypolicyonline.com/live.php?token=4yaHsj91yJuJhh8UknFKZy6wj4YrdCes';
const Privacy =
    'https://www.privacypolicies.com/live/ff66f483-14db-4593-98fb-bcf5293f82dd';

function Footer() {
    return (
        <footer className={classes.footer}>
            <Link href={'/help-center'}>
                <div>Contact us</div>
            </Link>

            <Link
                href={TermOfUse}
                target='_blank'
                // rel='noopener noreferrer'
            >
                <div>Term of Use</div>
            </Link>

            <Link
                href={Privacy}
                target='_blank'
                // rel='noopener noreferrer'
            >
                <div>Privacy Policy</div>
            </Link>
        </footer>
    );
}

export default Footer;
