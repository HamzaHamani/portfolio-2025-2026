/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    // Enable optimization for all image formats
    formats: ["image/webp", "image/avif"],
    // Define device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Define image sizes for different screen sizes
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Minimize layout shift during image loading
    minimumCacheTTL: 60,
    // Allow loading images from external domains if needed
    domains: [],
    // Disable image optimization in development for faster builds
    unoptimized: process.env.NODE_ENV === "development" ? false : false,
  },
};

export default nextConfig;
