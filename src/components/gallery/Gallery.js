import React from 'react';
import './gallery.css';
import Paper from '@material-ui/core/Paper';
import ZoomInOutlinedIcon from '@material-ui/icons/ZoomInOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import PhotoView from '../photoView/PhotoView';


import img1 from '../../images/img1.jpeg';
import img2 from '../../images/img2.jpeg';
import img3 from '../../images/img3.jpeg';
import img4 from '../../images/img4.jpeg';

const useStyles = makeStyles((theme) => ({
   modal: {
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'center',
   },
   paper: {
     backgroundColor: theme.palette.background.paper,
     border: '2px solid #000',
     boxShadow: theme.shadows[9],
     padding: theme.spacing(0.5, 0.5, 0.5),
   },
 }));

const Gallery = () => {

   const classes = useStyles();

   const [open, setOpen] = React.useState(false);
   const [clickedImg, setClickedImg] = React.useState(null);
  
   const handleClose = () => {
     setOpen(false);
   };
   
   const items = [
      {id: 1, img: img1, tittle: 'My family'},
      {id: 2, img: img2, tittle: 'Sunny day'},
      {id: 3, img: img3, tittle: 'At the see'},
      {id: 4, img: img4, tittle: 'My family'},
      {id: 5, img: img4, tittle: 'My family'},
   ];

   return (
      <div className='galleryContainer'>
         <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
               timeout: 500,
            }}
            style={{
               backgroundColor: "rgb(26, 26, 26, 0.5)"
            }}
         >
         <Fade in={open}>
               <div className={classes.paper}>
                  {clickedImg ?
                     <PhotoView image={clickedImg.img} tittle={clickedImg.tittle} close={handleClose}/> 
                     : null
                  }
               </div>
         </Fade>
      </Modal>
         <h1 className='pageTittle'>Family album</h1>
         <div className='gallery'>
            {items.map(item => {
               return(
                  <Paper key={item.id} onClick={()=>{setClickedImg(item); setOpen(true)}}
                     style={{
                        margin: "10px",
                        alignItems: 'center',
                        textAlign: 'center',
                        marginTop: '30px',
                        height: '260px',
                        padding: '2px',
                        boxShadow: '10px 10px 9px rgb(0, 0, 0, 0.7)',
                        cursor: 'pointer',
                     }}
                  >
                     <ZoomInOutlinedIcon
                        style={{
                           position: "absolute",
                           color: 'rgb(153, 0, 0, 0.7)',
                           backgroundColor: 'white'
                        }}
                     />
                     <img src={item.img} alt='img' width='300' height='190'/>
                     <h4 className='itemTittle'>{item.tittle}</h4>
                  </Paper>
               ) 
            })}
         </div> 
      </div>
   )
}

export default Gallery;