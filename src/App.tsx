import React from 'react';
import './App.css';
import { FlattenExample } from './components/FlattenExample';

const App: React.FC = () => {
return (
<div className="App">
<h1>Flatten Object Demo</h1>
<FlattenExample />
</div>
);
};

export default App;