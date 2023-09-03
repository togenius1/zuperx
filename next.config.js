/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    env: {
        username: 'togenius1@gmail.com',
        app_pass: 'zziypgpeyslyhkgn', // Gmail app password
          },

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname:
                    'zuperx-storage-0648618673334-main.s3.ap-southeast-1.amazonaws.com',
                port: '',
                pathname: '/public/images/**',
            },
        ],
    },
};

module.exports = nextConfig;
