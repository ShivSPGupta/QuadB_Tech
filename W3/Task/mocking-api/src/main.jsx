// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

//For Testing MSW
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
// import './index.css';

// async function enableMocking() {
//   if (import.meta.env.DEV) {
//     const { worker } = await import('./components/MSW/browsers.jsx');
//     return worker.start();
//   }
//   return Promise.resolve();
// }

// enableMocking().then(() => {
//   const root = createRoot(document.getElementById('root'));
//   root.render(
//     <StrictMode>
//       <App />
//     </StrictMode>
//   );
// });


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Start MSW in development only
async function deferRender() {
  const { worker } = await import('./components/MSW/browsers');
    return worker.start();
}

deferRender().then(()=>{
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
})



