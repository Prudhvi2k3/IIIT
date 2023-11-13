import Navbar from './components/Navbar';
import GameCardList from './components/Cards';
import PieChart from './components/Piecharts';
import Sidebar from './components/Sidebar';
import Searchbar from './components/Searchbar';
import Content from './components/Content';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <><Navbar />
    <GameCardList />
    <PieChart />
    <Table />
    </>
  );
}

export default App;
