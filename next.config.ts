/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Исправляем basePath
  basePath: '/schoolFront', // Используем имя репозитория из URL
  images: {
    unoptimized: true,
  },
  // Другие ваши конфигурации...
};

export default nextConfig;
