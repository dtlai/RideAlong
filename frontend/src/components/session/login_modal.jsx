import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import LoginFormContainer from './login_form_container';
import './session.scss';


export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="session-button bouncy" onClick={handleOpen}>
        Login
      </button>
      <Modal
        onClose={handleClose}
        open={open}
        BackdropComponent={Backdrop}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div>
            <LoginFormContainer handleClose={handleClose}/>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}