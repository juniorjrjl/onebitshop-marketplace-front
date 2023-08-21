import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import Routes from './src/routes';
import { myTheme } from './src/styles';
import ErrorBoundary from './src/components/Error';
import { AuthContextProvider } from './src/contexts/authContex';

const App = () => {
  return (
    <ErrorBoundary>
      <AuthContextProvider>
        <StatusBar style='light'/>
        <ThemeProvider theme={myTheme}>
          <Routes />
        </ThemeProvider>
      </AuthContextProvider>
    </ErrorBoundary>
  );
}

export default App
