import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Header from './components/header/Header.jsx';
import Form from './components/form/Form.jsx';
import MyOrg from './components/my-org/my-org.jsx';
import Team from './components/team/Team.jsx';
import Footer from './components/footer/Footer.jsx';
import './App.css';

function App() {

  const [display, setDisplay] = useState(true);
  const [members, setMembers] = useState([
    {
      name: 'Pepito Oliden',
      position: 'Coquero',
      photo: 'https://github.com/harlandlohora.png',
      team: 'Mobile'
    },
    {
      name: 'Mose Otilion',
      position: 'Chisme',
      photo: 'https://github.com/harlandlohora.png',
      team: 'Mobile'
    },
    {
      name: 'Pollito Oliden',
      position: 'Jueguitos',
      photo: 'https://github.com/harlandlohora.png',
      team: 'Programming'
    },
    {
      name: 'Yeyito Records',
      position: 'Sonidero',
      photo: 'https://github.com/harlandlohora.png',
      team: 'Innovation Management'
    },
    {
      name: 'Sonora Chanclilla',
      position: 'Dra. en rayos X',
      photo: 'https://github.com/harlandlohora.png',
      team: 'Programming'
    },
    {
      name: 'Chimio Caquitas',
      position: 'Dra. en rayos X',
      photo: 'https://github.com/harlandlohora.png',
      team: 'UX/UI'
    }
  ]);
  const [teams, setTeams] = useState([
    {
      id: uuid(),
      team: "Programming",
      mainColor: '#D9F7E9',
      accentColor: '#57C278'
    },
    {
      id: uuid(),
      team: 'Front End',
      mainColor: '#E8F8FF',
      accentColor: '#82CFFA'
    },
    {
      id: uuid(),
      team: 'Data Science',
      mainColor: '#F0F8E2',
      accentColor: '#A6D157'
    },
    {
      id: uuid(),
      team: 'Devops',
      mainColor: '#FDE7E8',
      accentColor: '#E06B69'
    },
    {
      id: uuid(),
      team: 'UX/UI',
      mainColor: '#FAE9F5',
      accentColor: '#DB6EBF'
    },
    {
      id: uuid(),
      team: 'Mobile',
      mainColor: '#FFF5D9',
      accentColor: '#FFBA05'
    },
    {
      id: uuid(),
      team: 'Innovation Management',
      mainColor: '#FFEEDF',
      accentColor: '#FF8A29'
    }
  ]);

  console.log(uuid());

  const changeDisplay = () => {
    setDisplay( !display );
  };

  const registerMember = (member) => {
    setMembers([...members, member]); // Copy array with spread operator and add new member
  };

  const deleteMember = () => {
    console.log('adios popo');
  };

  const updateColor = (id, color) => {

    const updatedTeams = teams.map((element) => {
      if (element.id === id) {
        element.accentColor = color
      };

      return element;
    });

    setTeams(updatedTeams);
  };

  return (
    <>
      <Header />

      { // Conditional render of Form component
        display && 
          <Form 
            teams={teams.map( (team) => team.team )}
            registerMember={registerMember}
          />
      }

      <MyOrg changeDisplay={changeDisplay} />

      { // Mapping Team components to teams' content
        teams.map( (team) => <Team 
          data={team} 
          key={team.team} 
          members={members.filter( (member) => team.team === member.team )}  //Each component renders only the members from its team
          deleteMember={deleteMember}
          updateColor={updateColor}
          />
        )
      }

      <Footer />

    </>
  );
};

export default App
