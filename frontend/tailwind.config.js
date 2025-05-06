/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        'primary': {
          DEFAULT: '#1A73E8', // Ocean Blue
          '50': '#E8F1FD',
          '100': '#C5DCFB',
          '200': '#91BBF6',
          '300': '#5D9AF2',
          '400': '#2978ED',
          '500': '#1A73E8', // Main primary color
          '600': '#155CBB',
          '700': '#10458C',
          '800': '#0B2E5D',
          '900': '#05172F',
        },
        'orange': {
          DEFAULT: '#F28C38', // Sunset Orange
          '50': '#FEF3E9',
          '100': '#FDE7D2',
          '200': '#FBCFA6',
          '300': '#F8B779',
          '400': '#F5A04D',
          '500': '#F28C38', // Main orange color
          '600': '#E97112',
          '700': '#BA5A0E',
          '800': '#8B430A',
          '900': '#5C2C07',
        },
        // Secondary colors
        'green': {
          DEFAULT: '#2E7D32', // Forest Green
          '50': '#E8F5E9',
          '100': '#C8E6C9',
          '200': '#A5D6A7',
          '300': '#81C784',
          '400': '#66BB6A',
          '500': '#4CAF50',
          '600': '#43A047',
          '700': '#388E3C',
          '800': '#2E7D32', // Main green color
          '900': '#1B5E20',
        },
        'gold': {
          DEFAULT: '#F4C430', // Golden Sand
          '50': '#FEF9E8',
          '100': '#FDF3D1',
          '200': '#FAE7A3',
          '300': '#F8DA76',
          '400': '#F6D148',
          '500': '#F4C430', // Main gold color
          '600': '#E3B10D',
          '700': '#B28A0A',
          '800': '#826408',
          '900': '#514005',
        },
        // Neutral colors
        'cloud': {
          DEFAULT: '#F5F6F5', // Cloud White
          '100': '#E3E5E3',
          '200': '#C7C9C7',
          '300': '#ABABAB',
          '400': '#8F8F8F',
          '500': '#737373',
          '600': '#595959',
          '700': '#404040',
          '800': '#262626',
          '900': '#0D0D0D',
        },
        'midnight': {
          DEFAULT: '#212121', // Midnight Gray
          '50': '#E9E9E9',
          '100': '#D1D1D1',
          '200': '#A3A3A3',
          '300': '#757575',
          '400': '#474747',
          '500': '#212121', // Main midnight color
          '600': '#1E1E1E',
          '700': '#141414',
          '800': '#0A0A0A',
          '900': '#000000',
        },
        // Accent color
        'coral': {
          DEFAULT: '#FF6F61', // Coral Pink
          '50': '#FFF0EE',
          '100': '#FFE0DD',
          '200': '#FFC2BB',
          '300': '#FFA399',
          '400': '#FF8577',
          '500': '#FF6F61', // Main coral color
          '600': '#FF3F2D',
          '700': '#F91A00',
          '800': '#C71500',
          '900': '#940F00',
        },
      },
      height: {
        '128': '32rem',
      },
      zIndex: {
        '-10': '-10',
      }
    },
  },
  plugins: [],
  // Important to not purge Leaflet classes
  safelist: [
    'leaflet-pane',
    'leaflet-map-pane',
    'leaflet-tile-pane',
    'leaflet-overlay-pane',
    'leaflet-shadow-pane',
    'leaflet-marker-pane',
    'leaflet-tooltip-pane',
    'leaflet-popup-pane',
    'leaflet-control',
  ]
}
