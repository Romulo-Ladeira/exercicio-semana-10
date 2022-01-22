import './App.css';

import {ThemeProvider} from './components/ThemeContext/themeContext'
import {Layout} from './components/ThemeContext/Layout';

function App() {
 
  return (
    <ThemeProvider>
      <Layout/>
    </ThemeProvider>
  );
    
    
}

export default App;
