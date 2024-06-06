import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Header from './components/Header/Header.jsx';
import Form from './components/form/Form.jsx';
import MyOrg from './components/my-org/my-org.jsx';
import Team from './components/team/Team.jsx';
import Footer from './components/footer/Footer.jsx';
import './App.css';

function App() {

  const [display, setDisplay] = useState(true);
  const [members, setMembers] = useState([
    {
      id: uuid(),
      name: 'Pepito Oliden',
      position: 'Coquero',
      photo: 'https://github.com/harlandlohora.png',
      team: 'Mobile',
      favorite: true
    },
    {
      id: uuid(),
      name: 'Mose Otilion',
      position: 'Chisme',
      photo: 'https://github.com/harlandlohora.png',
      team: 'Mobile',
      favorite: true
    },
    {
      id: uuid(),
      name: 'Pollito Oliden',
      position: 'Jueguitos',
      photo: 'https://github.com/harlandlohora.png',
      team: 'Programming',
      favorite: true
    },
    {
      id: uuid(),
      name: 'Yeyito Records',
      position: 'Sonidero',
      photo: 'https://github.com/harlandlohora.png',
      team: 'Innovation Management',
      favorite: true
    },
    {
      id: uuid(),
      name: 'Sonora Chanclilla',
      position: 'Dra. en rayos X',
      photo: 'https://github.com/harlandlohora.png',
      team: 'Programming',
      favorite: true
    },
    {
      id: uuid(),
      name: 'Chimio Caquitas',
      position: 'Dra. en rayos X',
      photo: 'https://github.com/harlandlohora.png',
      team: 'UX/UI',
      favorite: true
    },
    {
      id: uuid(),
      name: 'Yom ero',
      position: 'Peneco',
      photo: 'https://github.com/harlandlohora.png',
      team: 'Front End',
      favorite: false
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

  //Show or hide Form component
  const changeDisplay = () => {
    setDisplay( !display );
  };

  const registerMember = (member) => {
    setMembers([...members, member]); // Copy array with spread operator and add new member
  };

  const deleteMember = (id) => {
    const updatedMembers = members.filter((member) => member.id !== id);
    setMembers(updatedMembers);
  };

  // Change team color
  const updateColor = (id, color) => {

    const updatedTeams = teams.map((element) => {
      if (element.id === id) {
        element.accentColor = color
      };

      return element;
    });

    setTeams(updatedTeams);
  };

  // Create new custom team
  const createTeam = (newTeam) => {
    setTeams([...teams, {...newTeam, id: uuid()} ]);
  };

  const like = (id) => {
    const updatedFavorites = members.map((member) => {
      if (member.id === id) {
        member.favorite = !member.favorite;
      };

      return member;
    });

    setMembers(updatedFavorites);
  };

  return (
    <>
      <Header />

      { // Conditional render of Form component
        display && 
          <Form 
            teams={teams.map( (team) => team.team )}
            registerMember={registerMember}
            createTeam={createTeam}
          />
      }

      <MyOrg changeDisplay={changeDisplay} />

      { // Mapping Team components to teams' content
        teams.map( (team) => <Team 
          data={team} 
          key={team.team} 
          members={members.filter( (member) => team.team === member.team )}  //Each component renders only the members from its team
          like={like}
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
