import React from 'react'
import { ApolloProvider } from '@apollo/client';
import { client } from './Server';
import { Launches } from './Launches';




function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h2>My Apollo App</h2>
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;