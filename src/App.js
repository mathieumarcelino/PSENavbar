import './App.css';
import Header from './Components/Header/Header';
import SubHeader from './Components/SubHeader/SubHeader';
import SubHeaderMobile from './Components/SubHeaderMobile/SubHeaderMobile';
import {AppProvider} from "./Context/AppContext"


function App() {
  return (
    <div className="App">
        <AppProvider>
          <Header/>
          <SubHeader/>
          <SubHeaderMobile/>
        </AppProvider>
    </div>
  );
}

export default App;
