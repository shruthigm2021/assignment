import './App.css';
import * as React from 'react';
import Header from './components/Header';
import  FormComp  from './components/FormComp';
import {Container} from 'react-bootstrap'
import Divider from '@mui/material/Divider';
import UsersList from './components/UsersList';
function App() {
  const [users,setUsers] = React.useState([])
  return (
    <div className="App">
       <Header />
      <Container>
      <h4>Fill in user details</h4>
      <FormComp setUsers={setUsers} users={users}/>
      {users && users.length>0 && <>
        <Divider><h4>User Details</h4></Divider>
      <UsersList users={users} />

      </>}
     
      </Container>
     
    </div>
  );
}

export default App;
