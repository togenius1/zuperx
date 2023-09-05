import { Fragment, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import classes from './features.module.css';

function FeaturesPage() {
    const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

    let url: string =
        'https://zuperx-storage-0648618673334-main.s3.ap-southeast-1.amazonaws.com/public/images/income.png';

    if (hoveredFeature === 'income') {
        url =
            'https://zuperx-storage-0648618673334-main.s3.ap-southeast-1.amazonaws.com/public/images/income.png';
    }

    if (hoveredFeature === 'spending') {
        url =
            'https://zuperx-storage-0648618673334-main.s3.ap-southeast-1.amazonaws.com/public/images/spending.png';
    }

    if (hoveredFeature === 'account') {
        url =
            'https://zuperx-storage-0648618673334-main.s3.ap-southeast-1.amazonaws.com/public/images/account.png';
    }

    return (
        <Fragment>
            <Head>
                <title>Features </title>
                <meta name='description' content='Features of Finaci!' />
            </Head>

            <section>
                <div className={classes.container}>
                    <Image
                        src={url}
                        alt={`${hoveredFeature}`}
                        priority
                        width={720}
                        height={1600}
                        style={{
                            width: '25%',
                            height: 'auto',
                        }}
                    />
                    <div className={classes.budget}>
                        <h1
                            className={classes.title}
                            onMouseEnter={() => setHoveredFeature('spending')}
                            onMouseLeave={() => setHoveredFeature('spending')}
                        >
                            Budget Status
                        </h1>
                        <p className={classes.article}>
                            The Budget Status feature summarizes available
                            budget, spent amount, and remaining budget for
                            informed expense management.
                        </p>
                    </div>
                    <div className={classes.graph}>
                        <h1
                            className={classes.title}
                            onMouseEnter={() => setHoveredFeature('income')}
                            onMouseLeave={() => setHoveredFeature('income')}
                        >
                            Category Graph
                        </h1>
                        <p className={classes.article}>
                            The Category Graph visually shows income and expense
                            distribution across categories, offering a quick
                            financial source overview for earnings analysis.
                        </p>
                    </div>
                    <div className={classes.account}>
                        <h1
                            className={classes.title}
                            onMouseEnter={() => setHoveredFeature('account')}
                            onMouseLeave={() => setHoveredFeature('account')}
                        >
                            Empowering Budget Allocation
                        </h1>
                        <p className={classes.article}>
                            The Empowering Budget Allocation feature empowers
                            users to allocate budgets to specific categories,
                            enhancing spending control and financial planning.
                        </p>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default FeaturesPage;
