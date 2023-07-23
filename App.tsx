import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import Routes from './src/routes';
import { myTheme } from './src/styles';

const App = () => {
  return (
    <>
      <StatusBar style='light'/>
      <ThemeProvider theme={myTheme}>
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App
