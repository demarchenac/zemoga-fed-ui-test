import React from 'react';
import './App.scss';

//React router
import { BrowserRouter } from 'react-router-dom';

// Add icons from Font-Awesome.
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

// Toasts.
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ClientRouter } from './views/router';

library.add(fab, fas, far);

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <ClientRouter></ClientRouter>
            </BrowserRouter>
            <ToastContainer newestOnTop />
        </div>
    );
}

export default App;
