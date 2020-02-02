import React, { useEffect, useState } from 'react';
import api from '../Services/Api';

import DevItems from '../components/DevItems';
import DevForm from '../components/DevForm';

import '../Styles/Global.css';
import '../App/App.css';
import '../Styles/SideBar.css';

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    const loadDev = async () => {
      const response = await api.get('/devs');

      setDevs(response.data);
    }
    loadDev();
  }, [])

  const handleAddDev = async (data) => {

    const response = api.post('/devs', data);
   
    setDevs([...devs, response.data]);
  }
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />

      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItems key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
