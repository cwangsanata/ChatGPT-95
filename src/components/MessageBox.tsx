import React from 'react';

interface Message {
  role: string;
  content: string;
}

interface MessagesScrollViewProps {
  messages: Message[];
}

const MessageBox: React.FC<MessagesScrollViewProps> = ({ messages }) => {
  return (
    <div 
      className="messages-box"
      ref={ref => ref?.scrollIntoView({ behavior: 'smooth' })}
      style={{ width: '100%', height: '75vh', overflowY: 'auto' }}
    >
      {messages.map((message, index) => (
        <p key={index} style={{ fontWeight: message.role === 'assistant' ? 'bold' : 'normal' }}>
          <strong>{message.role === 'assistant' ? 'Assistant' : 'You'}:</strong> {message.content}
        </p>
      ))}
    </div>
  );
};

export default MessageBox;