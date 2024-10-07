import React from 'react';
import { Modal, ModalMenu } from '@react95/core/Modal';

const LoginModal: React.FC< ModalMenu > = () => {
  return (
    <Modal
      title='Login'
      dragOptions={{
        defaultPosition: {
          x: 130,
          y: 130
        }
      }}
    >
      <form>
        <label>
          Username:
          <input type='text' />
        </label>
        <label>
          Password:
          <input type='password' />
        </label>
      </form>
      <Modal.Content width="300px" height="160px" boxShadow="$in" bgColor="white">
            <p>
              The active modal will be based on the order they render, most
              recently rendered will be the active component. On click of a
              non-active modal will fire an action to set that modal as the
              active one.
            </p>
      </Modal.Content>
    </Modal>
  );
}

export default LoginModal;