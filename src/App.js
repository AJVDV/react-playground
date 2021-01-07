import React, { Component } from 'react';
import './App.css';
import Accordion from './state-drills/Accordion/Accordion';
//import Tabs from './state/Tabs';
//import Tooltip from './composition/Tooltip';
//import React, { Component } from 'react';
//import HelloWorld from './state-drills/HelloWorld';
//import Bomb from './state-drills/Bomb';
//import RouletteGun from './state-drills/RouletteGun';
//import Accordion from './state-drills/Accordion/Accordion'
//import Tabs from './state/Tabs';
//import DemonymApp from './demonymapp/demonymApp';
//import Counter from './state/Counter'


/*
const firstTooltip = (
  <Tooltip color='hotpink' message='tooltip message'>
    ipsum
  </Tooltip>
)
const secondTooltip = (
  <Tooltip color='#126BCC' message='another tooltip message'>
    officiis
  </Tooltip> 
)
*/


const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Accordion sections={sections} />
      </div>
    );
  }
}


export default App;
/*function App() {
  return (
    <main className='App'>
      <Split className='left' flexBasis={2}>
        This is the content for the left `Split`. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?<br />
        {/* make another toolitp directly inside the App *///}
/*        <Tooltip message='one more tooltip message'>
          Necessitatibus?
        </Tooltip>
      </Split>
      <Split className='right'>
        This is the content fot the right `Split`. Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.
      </Split>
    </main>
  );
} */

//export default App;
