import React from 'react';
import { Badge, Card, CustomInput, Row } from 'reactstrap';

import { InstanceInterface } from '../../types';
import { Colxx } from '../common/CustomBootstrap';
import BadgeStatus from '../common/BadgeStatus';

export interface Props {
  instances: InstanceInterface[];
  selectedInstances: number[];
  username: string;
  databaseHostname: string;
  phppgadminURL: string;
  onToggle: (id: number) => void;
}

const ListPageListing: React.FC<Props> = ({
  instances,
  selectedInstances,
  username,
  databaseHostname,
  phppgadminURL,
  onToggle,
}) => (
  <Row>
    {instances.map((instance, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Colxx key={`${instance.id}_${index}`} xxs="12" className="mb-3">
        <Card
          className={selectedInstances.includes(instance.id) ? 'active' : ''}
          onClick={(event) => onToggle(instance.id)}
        >
          {' '}
          <div className="pl-2 d-flex flex-grow-1 min-width-zero">
            <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
              <div className="w-35 w-sm-100">
                <p className="list-item-heading mb-1 truncate">
                  <a href={phppgadminURL} target="_blank" rel="noopener noreferrer">
                    {instance.prefix}
                    {instance.name}
                  </a>
                </p>
              </div>
              <p className="mb-1 text-muted text-small w-45 w-xs-100">
                <Badge color="light" pill>
                  psql -h {databaseHostname} {instance.name} {username}
                </Badge>
              </p>
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
