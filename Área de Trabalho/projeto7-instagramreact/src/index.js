import ReactDOM from 'react-dom';
import Menu from './components/Menu';
import Corpo from './components/Corpo';
import Stories from './components/Stories';

import "./css/reset.css";
import "./css/style.css";

ReactDOM.render(
    <div>
        <Menu/> 
        <Corpo/>
    </div>,
    document.querySelector(".root")
);