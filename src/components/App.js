import React, { Component } from 'react';

// If a component doesn't have state or refs, prefer normal functions (not arrow functions) over classes
// relying on function name inference (arrow functions) is discouraged
function App() {
  return (
    <div>
      <h2>Christian Hackers</h2>
    </div>
  )
}

export default App;
