/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  urlImports: [
    "https://fonts.googleapis.com/",
  ],
  experimental: {
    urlImports: [
      "https://framer.com/m/",
      "https://framerusercontent.com/",
      "https://ga.jspm.io/",
      "https://jspm.dev/",
    ],
  },
}
