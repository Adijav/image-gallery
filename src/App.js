import React, {useState, useEffect} from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import PeopleCard from './peopleCard';

function App() {
  const [users, setUsers] = useState(0);
  
  useEffect(()=>{
    async function fetchData() {
      setUsers(
        await fetch('https://reqres.in/api/users?page=2')
        .then(res => res.json())
        .then(res => res)
      )
    }
    fetchData();

    // const promise = new Promise((resolve, reject) => {
    //   fetch('https://reqres.in/api/users?page=2')
    //   .then(res => res.json())
    //   .then(res => resolve(res))
    //   .catch(rej => reject(rej))
    // })

    // promise.then(res => setUsers(res));
  },[])
  return (
    <div className='App'>
      <h3>Material UI</h3>
      <Grid
        container
        spacing={10}
        styles={{padding: '24px'}}
      > 
      {users && users.data.map(user => (
        <Grid
          key={user.id}
          item
          xs={12} sm={6} md={4} lg={4} xl={3}
        >
          <PeopleCard
            email={user.email}
            firstName={user.first_name}
            lastName={user.last_name}
            avatar={user.avatar}
          />
        </Grid>
      ))}

      </Grid>
    </div>
  );
}

export default App;
