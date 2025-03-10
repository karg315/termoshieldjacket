/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Habilita exportación estática
  basePath: '', // Reemplaza con el nombre de tu repositorio (ej. /tech-jacket)
  images: {
    unoptimized: true, // Desactiva optimización de imágenes
  },
};

module.exports = nextConfig;