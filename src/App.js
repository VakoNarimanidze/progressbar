import logo from './logo.svg';
import './App.css';
import ProgressBar from './Components/ProgressBar';


const testData = [
  {
    bgcolor: "#152887", completed: 35
  },
  {
    bgcolor: "#152887", completed: 55
  },
  {
    bgcolor: "#152887", completed: 80
  },
  {
    bgcolor: "#152887", completed: 100
  }
];


function App() {
  return (
    <div className="App">
      {testData.map((item, idx) => (
        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
      ))}
    </div>
  );
}

export default App;
