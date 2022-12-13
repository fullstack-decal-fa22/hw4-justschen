import React from 'react';
import Color from './Color';
/* Add any imports you think you might need here! */

const Menu = (props) => { 

  const handleClick = (color) => {
    props.update({color: color})
  }

    return (
      <div className="colorOptions" handleClick={handleClick}>
        <Color color="red" handleClick={handleClick}></Color>
        <Color color="orange" handleClick={handleClick}></Color>
        <Color color="yellow" handleClick={handleClick}></Color>
        <Color color="blue" handleClick={handleClick}></Color>
      </div>
    );
}

export default Menu;