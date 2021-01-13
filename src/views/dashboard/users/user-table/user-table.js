import React, { useEffect, useState } from 'react';
import { getALlUsersRequest } from '../../../../services/user-service/user.service';

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const { data } = await getALlUsersRequest();
      console.log(data);
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>User table</h1>
      <div>
        {users
          .map((user) => user.firstName)
          .map((userName) => (
            <h3>{userName}</h3>
          ))}
      </div>
    </div>
  );
};

export default UserTable;
