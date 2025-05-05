/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/schoolFront',
  // Убираем unoptimized: true, чтобы Next.js корректно обрабатывал пути
  // Другие ваши конфигурации...
};

export default nextConfig;
