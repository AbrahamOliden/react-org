import { useState } from 'react';
import Header from './components/header/Header.jsx';
import Form from './components/form/Form.jsx';
import MyOrg from './components/my-org/my-org.jsx';
import Team from './components/team/Team.jsx';
import './App.css';

function App() {

  const [display, setDisplay] = useState(true);
  const changeDisplay = () => {
    setDisplay( !display );
  };

  return (
    <>
      <Header />
      { display && <Form />}
      <MyOrg changeDisplay={changeDisplay} />
      <Team team={'Programming'} />
    </>
  );
};

export default App
