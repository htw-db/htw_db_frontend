import React from 'react';
import { Card, CustomInput, Row } from 'reactstrap';

import { InstanceInterface } from '../../types';
import { Colxx } from '../common/CustomBootstrap';

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
              {instance.name}
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
