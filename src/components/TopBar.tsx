import { Button, WindowHeader as OriginalWindowHeader }  from 'react95';
import styled, { ThemeProvider } from 'styled-components';

import original from 'react95/dist/themes/original';

const WindowHeader = styled(OriginalWindowHeader)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function TopBar() {
  return (
    <>
      <ThemeProvider theme={original}>
        <WindowHeader className='window-topbar'>
          <span>ChatGPT-95.exe</span>
          <Button>
            <span className='close-icon'>&times;</span>
          </Button>
        </WindowHeader>
      </ThemeProvider>
    </>
  );
}

export default TopBar;