import { Toaster } from 'react-hot-toast'
import { GlobalStyle } from './globalStyles'
import { Home } from './pages/Home'

function App() {
  return (
    <div className="App">
      <Toaster />
      <GlobalStyle />
      <Home />
    </div>
  );
}

export default App
