import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { Row, Card, CardTitle } from 'reactstrap';

import { LdapCredentialsInterface } from '../../types';
import { loginStart } from '../../slices/auth';
import { selectAuth } from '../../selectors/auth';

import { Colxx } from '../../components/common/CustomBootstrap';
import LoginForm from '../../components/forms/LoginForm';

export interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { profile, isLoading, error } = useSelector(selectAuth);

  const handleOnSubmit = (ldapCredentials: LdapCredentialsInterface) => {
    dispatch(loginStart(ldapCredentials));
  };

  useEffect(() => {
    if (profile) {
      history.push('/app');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile]);

  return (
    <>
      <Row className="h-100">
        <Colxx xxs="12" md="10" className="mx-auto my-auto">
          <Card className="auth-card">
            <div className="position-relative image-side ">
              <p className="text-white h2">Hochschule für Technik und Wirtschaft</p>
              <p className="white mb-0">Please use your university credentials to login.</p>
            </div>
            <div className="form-side">
              <NavLink to="/" className="white">
                <span className="logo-single" />
              </NavLink>
              <CardTitle className="mb-4">Login</CardTitle>
              <LoginForm loading={isLoading} onSubmit={handleOnSubmit} error={error} />
            </div>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};

export default Login;
