import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getInstancesStart } from '../slices/instances';
import { setAuthorization } from '../utils/axiosConfig';

export interface HomePageProps {}

// eslint-disable-next-line no-empty-pattern
export const HomePage: React.FC<HomePageProps> = ({}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    setAuthorization(
      `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InMwNTU4MTUxIn0.DDNBIrZ4P2zptZ10z8S1CJo94ihVFgL93qKk247H6WE`,
    );
    dispatch(getInstancesStart());
  }, [dispatch]);

  return <>HomePage</>;
};

export default HomePage;
