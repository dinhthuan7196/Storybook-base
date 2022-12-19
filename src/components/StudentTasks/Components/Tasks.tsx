import { useState } from 'react';

import range from 'lodash/range';

import { Container } from '../styles';

import CardInfo from './CardInfo';

export default () => {
  const [collapse, setCollapse] = useState<Record<string, boolean>>({});

  return (
    <Container>
      {range(1, 30).map((idx) => (
        <CardInfo key={idx} />
      ))}
    </Container>
  );
};
