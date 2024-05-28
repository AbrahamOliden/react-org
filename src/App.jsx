import { useState } from 'react';
import Header from './components/header/Header.jsx';
import Form from './components/form/Form.jsx';
import MyOrg from './components/my-org/my-org.jsx';
import './App.css';

function App() {

  const [display, setDisplay] = useState(true);

  return (
    <>
      <Header />
      { display && <Form />}
      {/* <Form /> */}
      <MyOrg />
    </>
  );
};

export default App
