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
          <div key={index} className={`message ${message.role}`}>
            <strong className={`message-user ${message.role}`}>
              {message.role === 'assistant' ? 'ChatGPT-95' : 'You'}:
            </strong>
            <p className='message-content'>{message.content}</p>
          </div>
        ))}
      </ScrollView>
    </div>
  );
};

export default MessageBox;