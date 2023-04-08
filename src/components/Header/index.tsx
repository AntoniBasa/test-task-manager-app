import React from 'react';
import Tabs from './Tabs';

const Header:React.FC = () => {
    
    return (
        <div className='header'>
            <div className='header-content'> 
            <h1>Tasks</h1>
            <Tabs/>
            </div>
        </div>
    );
};

export default Header;