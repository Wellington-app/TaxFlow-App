import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Minimal status update
const status = document.getElementById('status');
if (status) status.innerHTML = 'Iniciando interface...';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  try {
    // We render App. If it fails, the global error handler in index.html will catch it
    // or we can catch it here.
    root.render(<App />);
    
    // Clear status after a short delay if render seems successful
    setTimeout(() => {
      const s = document.getElementById('status');
      if (s && s.innerHTML === 'Iniciando interface...') {
        // If it's still there, maybe it's stuck? But usually React takes over.
      }
    }, 2000);
  } catch (e) {
    if (status) status.innerHTML = `<span style="color:red">Erro React: ${e}</span>`;
  }
}
