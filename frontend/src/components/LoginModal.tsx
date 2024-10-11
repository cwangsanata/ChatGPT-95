import React from 'react';
import { Modal, ModalMenu } from '@react95/core/Modal';
import { Button, TextInput } from 'react95';

import '../styles/loginModal.css';

const LoginModal: React.FC< ModalMenu > = () => {
  return <>
    <Modal title="Login" className="login-modal" dragOptions={{
      defaultPosition: {
        x: 0,
        y: 20
      }
    }}>
      <Modal.Content width="300px" height="160px" boxShadow="$in" bgColor="white">
        <TextInput placeholder="Username" />
        <TextInput placeholder="Password" type="password" />
        <Button>Login</Button>
        <Button>Sign Up</Button>
      </Modal.Content>
    </Modal>
  </>;
};

export default LoginModal;