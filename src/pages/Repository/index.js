import React from 'react';

import { Browser } from './styles';

console.log('Repository');

export default function Repository() {
  return (
    <Browser source={{ uri: 'https://google.com' }} style={{ marginTop: 20 }} />
  );
}
