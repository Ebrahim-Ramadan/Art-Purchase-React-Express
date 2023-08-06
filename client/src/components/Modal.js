import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './modal.css'
import axios from 'axios';
import validator from 'validator';

const toastify = (txt) => {
  toast.success(`${txt}`, {
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: 1500,
    theme: 'dark'
  });
};

const MIN = 6; // MINimum value
const MAX = 100; // MAXimum value

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  padding: 10,
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'transparent',
  border: '2px solid ##EEE',
  borderRadius:'10px',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal({imgData}) {
  const [open, setOpen] = React.useState(false);
  
  const [status, setStatus] = React.useState('');
  const [toEmail, settoEmail] = React.useState('');
  const [isValidEmail, setIsValidEmail] = React.useState(false);

  const handleEmailChange = (e) => {
    const email = e.target.value;
    settoEmail(email)
    setIsValidEmail(validator.isEmail(email));
  }
  const handleSendEmail = async () => {
    try {
      const response = await axios.post('http://localhost:3000/send-email', { toEmail, imgData  });
      setStatus(response.data);
    } catch (error) {
      console.error(error);
      setStatus('Error sending email');
    }
    console.log(status);

  };

  const handleOpenChild = () => {
    setOpen(true);
  };
  const handleCloseChild = () => {
    setOpen(false);
    handleSendEmail()
    toastify('Purchased, Mailing rn')
  };





  return (
    <React.Fragment>
      <Button onClick={handleOpenChild} id='purchase'>
            Purchase
      </Button>
      <Modal
        open={open}
        onClose={handleCloseChild}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
              <Box sx={{ ...style, width: 400, backgroundColor:'black', color:'white', opacity:'0.9'}}>
          <h4 id="child-modal-title" >Confirm Purchase</h4>
          <p id="child-modal-description">
            purchase to be confirmed, redirect me to the papers
          </p>



          <div class="input-group mb-3">
            <input type="email" class="form-control" placeholder="Your mail" aria-label="Recipient's username" aria-describedby="basic-addon2"
            onChange={handleEmailChange}/>
            <div class="input-group-append">
            <button class="btn btn-outline-secondary" onClick={handleCloseChild} size='medium'  disabled={!isValidEmail}>
        Confirm
          </button>
  </div>


          </div>
          
        </Box>
      </Modal>
    </React.Fragment>
  );
}




export default function NestedModal() {


  const [img, setImg] = React.useState(null);
  const [ImgData, setImgData] = React.useState([]);



  React.useEffect(() => {
    const RandomID = Math.floor(Math.random() * (MAX - MIN) + MIN);
    
    const fetchImage = async () => {
      const response = await fetch(`https://api.slingacademy.com/v1/sample-data/photos/${RandomID}`);
      const data = await response.json();
      setImg(data.photo.url);
      setImgData(data.photo)
    };
  
    fetchImage();
  }, []); // Empty dependency array ensures this effect runs only once on component mounts
  
  




  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === '/') {
        handleOpen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
      <Button variant="outlined" size="medium" onClick={handleOpen}>DO A PURCHASE - ctrl+ (/)</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
              <Box sx={{ ...style, width: 700 , border:'none', outline:'none'}}>
          <div class="background-image" style={{ position: 'relative' }}>

            <div style={{  display: 'flex',
  flexWrap: 'wrap', justifyContent:'center', alignItems:'center'}}>

    
<img
    id='Purchased_Image'
        alt='loading...'
      src={img}
    />
            </div>
            
            <div className='BtnsContainers' style={{ position: 'absolute', bottom: '10px', left: '25%', width: 'fit-content' }}>
    <div className='PurchaseCloseBtns'>
                <ChildModal imgData={ImgData} />

        <button id='cancel' onClick={handleClose}>
          <b>Close The Deal</b>
        </button> 
      </div>
    </div>
  </div>


        </Box>
      </Modal>
    </div>
  );
}