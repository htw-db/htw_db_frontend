import React from 'react';
import { Col } from 'reactstrap';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Colxx = (props: any) => (
  <Col {...props} widths={['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']} />
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Separator = ({ className }: any) => <div className={`separator ${className}`} />;

export { Colxx, Separator };
