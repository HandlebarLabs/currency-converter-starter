import React from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container';

export default () => (
  <Container>
    <StatusBar translucent={false} barStyle="light-content" />
  </Container>
);
