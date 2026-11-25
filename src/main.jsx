import { createRoot } from 'react-dom/client';
import '@fontsource/inter/latin-500.css';
import '@fontsource/inter/latin-600.css';
import { Portfolio } from './Portfolio.jsx';
import './preview.css';

createRoot(document.getElementById('root')).render(<Portfolio />);
