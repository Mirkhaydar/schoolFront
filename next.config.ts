/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Добавляем basePath
  basePath: '/school_frontend', // Замените на /имя_вашего_репозитория, если оно другое
  images: {
    unoptimized: true,
  },
  // Другие ваши конфигурации...
};

export default nextConfig;
