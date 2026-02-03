// // /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //   typescript: {
// //     ignoreBuildErrors: true,
// //   },
// //   images: {
// //     unoptimized: true,
// //   },
// // }

// // export default nextConfig
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   images: {
//     unoptimized: true,
//     domains: ["res.cloudinary.com"], // ⭐ Add this
//   },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;