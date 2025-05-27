import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

mock.onGet('/api/users').reply(200, [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
]);
