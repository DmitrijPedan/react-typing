import React, {useState} from 'react';
import './App.css';
import Card, {CardVariant} from "./components/Card";

function App() {



  return (
    <div className="App">
      <h1>Works</h1>
			<Card width={'250px'} height={'250px'} backgroundColor={'red'} variant={CardVariant.outlined} cardAction={(num) => console.log('action', num)}>
				<p>Content</p>
			</Card>
    </div>
  );
}

export default App;
