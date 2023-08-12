import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import Routes from './src/routes';
import { myTheme } from './src/styles';
import ErrorBoundary from './src/components/Error';

const App = () => {
  return (
    <ErrorBoundary>
      <StatusBar style='light'/>
      <ThemeProvider theme={myTheme}>
        <Routes />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App
