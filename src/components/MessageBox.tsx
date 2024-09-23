import React from 'react';
import { ScrollView } from 'react95';

import '../styles/MessageBox.css';

interface Message {
  role: string;
  content: string;
}

interface MessagesScrollViewProps {
  messages: Message[];
}

const MessageBox: React.FC<MessagesScrollViewProps> = ({ messages }) => {
  return (
    <div className='message-box-container'>
        <ScrollView className='message-box'>
            {messages.map((message, index) => (
                <p key={index}>
                <strong className='message-user'>{message.role === 'assistant' ? 'Assistant' : 'You'}:</strong> 
                <p className='message-content'>{message.content}</p>
                </p>
            ))}
        </ScrollView>
    </div>
  );
};

export default MessageBox;