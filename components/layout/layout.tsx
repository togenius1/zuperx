import { Fragment, ReactNode } from 'react';

import MainNavigation from './main-navigation';
import Footer from './footer';

function Layout(props: Props) {
    return (
        <Fragment>
            <MainNavigation />
            <main>{props.children}</main>
            <Footer />
        </Fragment>
    );
}

export default Layout;

//##################### Type ########################
type Props = {
    children: ReactNode;
};
