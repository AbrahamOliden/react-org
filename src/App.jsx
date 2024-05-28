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

  const teams = [
    {
      team: "Programming",
      mainColor: '#D9F7E9',
      accentColor: '#57C278'
    },
    {
      team: 'Front End',
      mainColor: '#E8F8FF',
      accentColor: '#82CFFA'
    },
    {
      team: 'Data Science',
      mainColor: '#F0F8E2',
      accentColor: '#A6D157'
    },
    {
      team: 'Devops',
      mainColor: '#FDE7E8',
      accentColor: '#E06B69'
    },
    {
      team: 'UX/UI',
      mainColor: '#FAE9F5',
      accentColor: '#DB6EBF'
    },
    {
      team: 'Mobile',
      mainColor: '#FFF5D9',
      accentColor: '#FFBA05'
    },
    {
      team: 'Innovation Management',
      mainColor: '#FFEEDF',
      accentColor: '#FF8A29'
    }
];

  return (
    <>
      <Header />
      { display && <Form />}
      <MyOrg changeDisplay={changeDisplay} />
      {
        teams.map( (team) => {
          return <Team data={team} key={team.team} />
        })
      }
    </>
  );
};

export default App
