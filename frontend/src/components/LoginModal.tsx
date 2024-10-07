import React from 'react';
import { Window } from 'react95';

const LoginModal: React.FC<Window> = () => {
  return (
    <div className='login-modal'>
        <Window>
            <div className='login-modal-content'>
            <h1>Login</h1>
            <form>
                <label>
                Username:
                <input type='text' />
                </label>
                <label>
                Password:
                <input type='password' />
                </label>
                <button type='submit'>Login</button>
            </form>
            </div>
        </Window>
    </div>
  );
};

export default LoginModal;