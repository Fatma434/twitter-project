


import './App.css';
import FeedPage from './Feed/FeedPage';
import Sidebar from './slidarbar/Sidebar';
import Widgets from './Widget/Widgets';

function App() {
  return (
    <div className="App">
      {/* <h1>
        Hey today............... lets build twitter clone 💥
      </h1> */}
      {/* sidebar */}
      <Sidebar/>
    
      <FeedPage/>

      <Widgets/>

     

      {}
    </div>
  );
}

export default App;
