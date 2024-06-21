import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';
import usersData from './db.json';

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      const filteredUsers = usersData.users.filter(user => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setUsers(filteredUsers);
    };

    fetchUsers();
  }, [searchTerm]);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1>Bot User Search</h1>
          <SearchBar setSearchTerm={setSearchTerm} />
          <UserList users={users} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
