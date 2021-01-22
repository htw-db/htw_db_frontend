import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getInstancesStart } from '../slices/instances';
import { selectInstances } from '../selectors/instances';
import { setAuthorization } from '../utils/axiosConfig';
import { AppLayout } from '../layout/AppLayout';

export interface HomePageProps {}

// eslint-disable-next-line no-empty-pattern
export const HomePage: React.FC<HomePageProps> = ({}) => {
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { instances, isLoading, error } = useSelector(selectInstances);

  useEffect(() => {
    setAuthorization(
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InMwNTU4MTUxIn0.DDNBIrZ4P2zptZ10z8S1CJo94ihVFgL93qKk247H6WE',
    );
    dispatch(getInstancesStart());
  }, [dispatch]);

  return (
    <AppLayout>
      <div className="dashboard-wrapper">hello</div>
    </AppLayout>
  );
};

export default HomePage;
