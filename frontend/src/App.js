import logo from './logo.svg';
import './App.css';
import RouterComponent from './ui/core/Router'
import './styles/stylesToExport.scss'
import { useHistory } from 'react-router-dom'
import TopBar from './ui/components/TopBar'
import Footer from './ui/components/Footer'

function App() {
  const history = useHistory()
  return (
      <>
        <TopBar history={history}/>
        <RouterComponent />
        <Footer />
      </>
  );
}

export default App;
