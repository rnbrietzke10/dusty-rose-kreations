const config = require('./config');
/** @type {import('next').NextConfig} */
const nextConfig = {
  DB_URI: config.DB_URI,
};

export default nextConfig;
