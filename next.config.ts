/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/schoolFront',
  // Возвращаем unoptimized: true, так как это необходимо для статического экспорта с <Image>
  images: {
    unoptimized: true,
  },
  // Другие ваши конфигурации...
};

export default nextConfig;
