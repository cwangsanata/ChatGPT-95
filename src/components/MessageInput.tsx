import React from 'react';
import { Button, TextInput } from 'react95';

import '../styles/MessageInput.css';

interface MessageInputProps {
    input: string;
    setInput: (input: string) => void;
    handleSendMessage: () => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ input, setInput, handleSendMessage }) => {
    return (
        <div className='message-input-container'>
        <TextInput
            className='message-input'
            value={input}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value)}
            placeholder="Type your message here..."
            rows={4}
            maxLength={4096}
            />
        <Button className='send-button' onClick={handleSendMessage}>Send</Button>
        </div>
    );
}

export default MessageInput;