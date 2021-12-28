import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { AppNavigation } from './components/Navigation/AppNavigation'

function App() {
  return (
    <BrowserRouter>
      <AppNavigation />
    </BrowserRouter>
  );
}
export default App;
