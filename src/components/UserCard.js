import React from 'react';
import { ListGroup, Image } from 'react-bootstrap';

const UserCard = ({ user }) => {
  return (
    <ListGroup.Item>
      <Image src={user.avatarUrl} roundedCircle style={{ width: '50px', height: '50px' }} />
      <span style={{ marginLeft: '10px' }}>{user.name}</span>
    </ListGroup.Item>
  );
};

export default UserCard;
