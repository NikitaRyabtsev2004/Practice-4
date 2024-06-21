import React from 'react';
import { ListGroup } from 'react-bootstrap';
import UserCard from './UserCard';

const UserList = ({ users }) => {
  return (
    <ListGroup>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </ListGroup>
  );
};

export default UserList;
