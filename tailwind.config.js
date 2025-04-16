/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.html"],
    theme: {
      extend: {
        colors: {
          fondo: '#F9FAFB',
          'fondo-secundario': '#FFFFFF',
          'texto-principal': '#1E3A8A',
          'texto-secundario': '#6B7280',
          'texto-invertido': '#FFFFFF',
          borde: '#E5E7EB',
          boton: '#2563EB',
          'boton-hover': '#1D4ED8',
          acento: '#3B82F6',
          oscuro: '#1F2937',
          exito: '#10B981',
          advertencia: '#F59E0B',
          error: '#EF4444',
          info: '#3B82F6',
        },
        borderRadius: {
          base: '8px',
        },
        boxShadow: {
          suave: '0 4px 10px rgba(0, 0, 0, 0.06)',
        },
        transitionTimingFunction: {
          suave: 'ease',
        },
        transitionDuration: {
          base: '300ms',
        }
      },
    },
    plugins: [],
  }
  