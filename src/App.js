import './App.css';
import Messenger from './components/messanger/Messenger'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { useState } from 'react';
import messages from './components/messanger/data.js';

function App() {
  const [ message, setMessage ] = useState(messages);
  return (
    <>
      <Header />
      <Messenger message={message} />
      <Footer message={message} setMessage={setMessage} />
    </>
  );
}

export default App;
