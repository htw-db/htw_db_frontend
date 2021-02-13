import React from 'react';
import { Badge } from 'reactstrap';

import { InstanceStatus } from '../../types';

export interface Props {
  status?: InstanceStatus;
}

const BadgeStatus: React.FC<Props> = ({ status }) => {
  let color = '';
  if (status === undefined || status === InstanceStatus.RUNNING) {
    color = 'success';
  } else {
    color = 'info';
  }
  return (
    <Badge color={color} pill>
      {status || InstanceStatus.RUNNING}
    </Badge>
  );
};

export default BadgeStatus;
