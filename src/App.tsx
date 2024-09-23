import { useState } from 'react'
import { Window, WindowContent, GroupBox, Frame, ScrollView } from 'react95';
import { ThemeProvider } from 'styled-components';

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

    // TODO: Fetch the response from the ChatGPT API
    // const response = await fetch('/api/chat', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ message: input }),
    // });

    // const data = await response.json();

    // TODO: Add the assistant's response to the messages array
    // setMessages(prev => [
    //   ...prev,
    //   { role: 'user', content: input },
    //   { role: 'assistant', content: data.reply },
    // ]);

    setInput(''); // Clear the input field
  };

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <Window
          style={{
            width: '100vw',
            height: '100vh',
          }}
        >
          <TopBar />
          <WindowContent>
            <GroupBox label="ChatGPT">
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
