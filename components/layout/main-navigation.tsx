import Link from 'next/link';

import Logo from './logo';
import classes from './main-navigation.module.css';
//
function MainNavigation() {
    return (
        <header className={classes.header}>
            <Link href={'/'}>
                <Logo />
            </Link>
            <nav>
                <ul>
                <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/features'>Features</Link>
                    </li>
                    <li>
                        <Link href='/help-center'>Help Center</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
