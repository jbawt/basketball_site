import TeamList from './components/TeamList';
import StatSheet from './components/StatSheet';
import './App.css';

function App() {

  return (
    <div className="App">
      <TeamList />
      <div className="table-div">
        <StatSheet />
      </div>
    </div>
  );
}

export default App;
