import React, {useEffect} from 'react';
import Img from './img/logo.png';
import DemoComp from './components/DemoComp';
function App() {
  const env = process.env.NODE_ENV;
  useEffect(() => {
    document.title = "Welcome to my Demo"
 }, []);
  return (
    <main>
      <h1>Helloworld</h1>
      <p>Demo text from ReactJS</p>
      <em>Your using: {env}</em>
      <img src={Img} alt="reactJS" />
      <DemoComp text="Comp" />
    </main>
  )
}

export default App;