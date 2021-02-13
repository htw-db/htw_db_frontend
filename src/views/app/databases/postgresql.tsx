import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getInstancesStart,
  addInstanceStart,
  deleteInstanceStart,
} from '../../../slices/instances';
import { selectInstances } from '../../../selectors/instances';
import { selectAuth } from '../../../selectors/auth';

import AddNewModal from '../../../components/lists/AddNewModal';
import ListPageHeading from '../../../components/lists/ListPageHeading';
import ListPageListing from '../../../components/lists/ListPageListing';
import { AddInstanceInterface, InstanceStatus } from '../../../types';

interface PostgreSQLProps {}

const PostgreSQL: React.FC<PostgreSQLProps> = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInstances, setSelectedInstances] = useState<number[]>([]);
  const { instances } = useSelector(selectInstances);
  const { profile } = useSelector(selectAuth);
  const prefix = `${profile ? profile.username : ''}_`;
  const forbiddenNames = instances.map((instance) => instance.name);

  useEffect(() => {
    if (profile) {
      dispatch(getInstancesStart());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile]);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const handleOnToggle = (id: number): void => {
    let result: number[] = [...selectedInstances];
    if (selectedInstances.includes(id)) {
      result = result.filter((selectedInstance) => selectedInstance !== id);
    } else {
      result.push(id);
    }
    setSelectedInstances(result);
  };

  const handleOnSelectAll = () => {
    if (selectedInstances.length >= instances.length) {
      setSelectedInstances([]);
    } else {
      setSelectedInstances(instances.map((instance) => instance.id));
    }
  };

  const handleOnDelete = () => {
    selectedInstances.forEach((instanceId) => {
      const instance = instances.find((value) => value.id === instanceId);
      if (instance && instance.status === InstanceStatus.RUNNING) {
        dispatch(deleteInstanceStart(instanceId));
      }
    });
  };

  const handleOnSubmit = (instance: AddInstanceInterface) => {
    dispatch(addInstanceStart({ ...instance, name: instance.name, prefix }));
    setIsModalOpen(false);
  };

  return (
    <>
      <ListPageHeading
        heading="PostgreSQL"
        instancesLength={instances.length}
        selectedInstancesLength={selectedInstances.length}
        onOpenModal={openModal}
        onSelectAll={handleOnSelectAll}
        onDelete={handleOnDelete}
      />
      <AddNewModal
        isOpen={isModalOpen}
        prefix={prefix}
        onSubmit={handleOnSubmit}
        onClose={closeModal}
        forbiddenNames={forbiddenNames}
      />
      <ListPageListing
        instances={instances}
        selectedInstances={selectedInstances}
        onToggle={handleOnToggle}
      />
    </>
  );
};

export default PostgreSQL;
