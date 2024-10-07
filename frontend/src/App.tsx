import { useState } from 'react'
import { Window, WindowContent, GroupBox } from 'react95';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';

import original from 'react95/dist/themes/original';
import GlobalStyles from './components/GlobalStyle';
import TopBar from './components/TopBar';
import MessageInput from './components/MessageInput';
import MessageBox from './components/MessageBox';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const App: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Add user message to the messages array
    setMessages([...messages, { role: 'user', content: input }]);

    // Send a POST request to the backend server
    // TODO: Add the correct URL and error handling
    const response = await axios.post('http://localhost:3000/send', { 
      user: 'user',
      message: input 
    });
    const data = response.data;
    console.log(data.message);

    // Add the assistant's response to the messages array
    setMessages(prev => [
      ...prev,
      { role: 'assistant', content: data.message },
    ]);

    setInput(''); // Clear the input field
  };

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <Window
          style={{
            width: '100vw',
            minHeight: '50vh',
            maxWidth: '100%',
          }}
        >
          <TopBar />
          <WindowContent>
            <GroupBox label="ChatGPT-95">
              <MessageBox 
                messages={messages}
              />
              <MessageInput 
                input={input} 
                setInput={setInput} 
                handleSendMessage={handleSendMessage} 
              />
            </GroupBox>
          </WindowContent>
        </Window>
      </ThemeProvider>
    </>
  );
};

export default App;
