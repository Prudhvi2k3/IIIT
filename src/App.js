import Navbar from './components/Navbar';
import Card from './components/Cards';
import PieChart from './components/Piecharts';
import Sidebar from './components/Sidebar';
import Searchbar from './components/Searchbar';
import Content from './components/Content';
import Table from './components/Table';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <><Navbar />
    <Content />
    <Card />
    <PieChart />
    <Table />
    <Footer/>
    </>
  );
}

export default App;
