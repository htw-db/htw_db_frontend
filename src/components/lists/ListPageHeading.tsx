import React, { useState } from 'react';
import {
  Button,
  ButtonDropdown,
  CustomInput,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
} from 'reactstrap';

import { Colxx, Separator } from '../common/CustomBootstrap';

export interface Props {
  heading: string;
  instancesLength: number;
  selectedInstancesLength: number;
  onOpenModal: () => void;
  onSelectAll: () => void;
}

const ListPageHeading: React.FC<Props> = ({
  heading,
  instancesLength,
  selectedInstancesLength,
  onOpenModal,
  onSelectAll,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <div className="mb-2">
            <h1>{heading}</h1>
            <div className="text-zero top-right-button-container">
              <Button color="primary" size="lg" className="top-right-button" onClick={onOpenModal}>
                ADD NEW
              </Button>
              {'  '}
              <ButtonDropdown isOpen={dropdownOpen} toggle={() => setDropdownOpen(!dropdownOpen)}>
                <div className="btn btn-primary btn-lg pl-4 pr-0 check-button check-all">
                  <CustomInput
                    className="custom-checkbox mb-0 d-inline-block"
                    type="checkbox"
                    id="checkAll"
                    checked={selectedInstancesLength >= instancesLength}
                    onChange={() => onSelectAll()}
                    label={
                      <span
                        className={`custom-control-label ${
                          selectedInstancesLength > 0 && selectedInstancesLength < instancesLength
                            ? 'indeterminate'
                            : ''
                        }`}
                      />
                    }
                  />
                </div>
                <DropdownToggle caret color="primary" className="dropdown-toggle-split btn-lg" />
                <DropdownMenu right>
                  <DropdownItem>Delete</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </div>
          </div>
          <Separator className="mb-5" />
        </Colxx>
      </Row>
    </>
  );
};

export default ListPageHeading;
