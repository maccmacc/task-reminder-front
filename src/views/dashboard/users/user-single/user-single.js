import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { EDIT_PAGE, VIEW_PAGE } from '../../../../utils/constants/page.constants';
import { usersRoutes } from '../../../../utils/routes/routes';
import { getSingleUserRequest } from '../../../../services/user-service/user.service';
import Input from '../../../../components/input/input';

import './user-single.scss';

const UserSingle = () => {
  const params = useParams();
  const history = useHistory();
  const [id, setId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const { id: paramId, mode } = params;

    if (mode !== EDIT_PAGE && mode !== VIEW_PAGE) {
      history.push(usersRoutes());
    }
    setIsEdit(mode === EDIT_PAGE);
    setId(paramId);
  }, []);

  useEffect(() => {
    if (id) {
      fetchUser();
    }
  }, [id]);

  const fetchUser = async () => {
    try {
      // ovo je isto kao ono dole samo krace
      const {
        data: {
          // dve tacke kazu koristi promenljivu sa leve strane pod ovim imenom desno
          firstName: resFirstname, lastName: resLastName, email: resEmail, address: resAddress,
        },
      } = await getSingleUserRequest(id);

      // const { data } = await getSingleUserRequest(id);
      // const { firstName, lastName, email, address } =  data;

      setEmail(resEmail);
      setFirstName(resFirstname);
      setLastName(resLastName);
      setAddress(resAddress);
    } catch (err) {
      history.push(usersRoutes());
    }
  };

  return (
    <div className="user-info">
      <div className="user-info__title">
        <div>
          User #
          {id}
          {' '}
          information
        </div>
      </div>
      <div className="user-info__content">
        <div className="form">
          <div className="user-info__group">
            <Input value={firstName} disabled={!isEdit} onChange={(jelena) => setFirstName(jelena)} label="First Name" />
          </div>
          <div className="user-info__group">
            <Input value={lastName} disabled={!isEdit} onChange={(jelena) => setLastName(jelena)} label="Last Name" />
          </div>
          <div className="user-info__group">
            <Input value={address} disabled={!isEdit} onChange={(jelena) => setAddress(jelena)} label="Address" />
          </div>
          <div className="user-info__group">
            <Input value={email} disabled={!isEdit} onChange={(jelena) => setEmail(jelena)} label="Email" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSingle;
