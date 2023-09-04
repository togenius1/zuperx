import { Fragment } from 'react';
import Head from 'next/head';

import ContactForm from '../../components/contact/contact-form';

function HelpCenterPage() {
    return (
        <Fragment>
            <Head>
                <title>Help Center</title>
                <meta name='description' content='Send me your message' />
            </Head>

            <ContactForm />
        </Fragment>
    );
}

export default HelpCenterPage;
