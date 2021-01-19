import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { deleteUserRequest, getALlUsersRequest } from '../../../../services/user-service/user.service';
import './user-table.scss';
import Button from '../../../../components/button/button';
import { generateSingleUserRoute } from '../../../../utils/routes/routes';

const UserTable = () => {
  const history = useHistory();
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

  const viewUser = (id) => {
    history.push(generateSingleUserRoute(id));
  };

  const editUser = (id) => {
    history.push(generateSingleUserRoute(id));
  };

  const deleteUser = async (id) => {
    try {
      await deleteUserRequest(id).then(() => fetchUsers());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="users-table">
      <div className="users-table__title">
        <h1>User table</h1>
      </div>
      <div className="users-table__table">
        <table className="users-table__table__content">
          <thead>
            <tr>
              <th>Firstname</th>
              <th> Lastname</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>
                  <Button title="View" onClick={() => viewUser(user.id)} />
                  <Button title="Edit" onClick={() => editUser(user.id)} />
                  <Button title="Delete" onClick={() => deleteUser(user.id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
