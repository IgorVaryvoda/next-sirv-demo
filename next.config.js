/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: 'custom',
        loaderFile: './sirvLoader.js',
    },
}
module.exports = nextConfig
