import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSortUp, faSortDown, faSort, faPlus, faPlusSquare, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

library.add( faSortUp, faSortDown, faSort, faPlus, faPlusSquare, faPlusCircle);

ReactDOM.render(<App />, document.getElementById('root'));
