import React from 'react';
import './photoView.css';

const PhotoView = (props) => {
   
   return (
      <div className='photoContainer' onClick={props.close}>
         <img src={props.image} alt="img" className="zoomedImg"/>
      </div>
   )
};

export default PhotoView;