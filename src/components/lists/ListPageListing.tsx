import React from 'react';
import { Card, CustomInput, Row } from 'reactstrap';

import { InstanceInterface } from '../../types';
import { Colxx } from '../common/CustomBootstrap';
import BadgeStatus from '../common/BadgeStatus';

export interface Props {
  instances: InstanceInterface[];
  selectedInstances: number[];
  onToggle: (id: number) => void;
}

const ListPageListing: React.FC<Props> = ({ instances, selectedInstances, onToggle }) => (
  <Row>
    {instances.map((instance) => (
      <Colxx key={instance.id} xxs="12" className="mb-3">
        <Card
          className={selectedInstances.includes(instance.id) ? 'active' : ''}
          onClick={(event) => onToggle(instance.id)}
        >
          {' '}
          <div className="pl-2 d-flex flex-grow-1 min-width-zero">
            <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
              <div className="w-40 w-sm-100">
                <p className="list-item-heading mb-1 truncate">{instance.name}</p>
              </div>
              <div className="w-15 w-sm-100">
                <BadgeStatus status={instance.status} />
              </div>
            </div>
            <div className="custom-control custom-checkbox pl-1 align-self-center pr-4">
              <CustomInput
                className="item-check mb-0"
                type="checkbox"
                id={`check_${instance.id}`}
                checked={selectedInstances.includes(instance.id)}
                onChange={() => {}}
                label=""
              />
            </div>
          </div>
        </Card>
      </Colxx>
    ))}
  </Row>
);
export default ListPageListing;
