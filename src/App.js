import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';

function App() {
  const todos = [
    {
      sno: 1,
      title: "Go to the Market",
      desc: "You need to go to the market to buy vegetables",
    },
    {
      sno: 2,
      title: "Go to the Mall",
      desc: "You need to go to the mall to buy clothes",
    },
    {
      sno: 3,
      title: "Go to the Park",
      desc: "You need to go to the park for a walk",
    },
  ];

  return (
    <>
    <Header title="My Todos List" searchBar={false}/>
      <Todos todos={todos} />
      <Footer />
    </>

  );
}

export default App;
