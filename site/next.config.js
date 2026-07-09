/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'AI Kasm',
    description: 'AI Kasm workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://itslovecats.github.io/kasm-registry/',
    contactUrl: 'https://github.com/ITsLoveCats/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
