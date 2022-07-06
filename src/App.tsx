import React,  {useState}  from 'react';
import './App.css';
import '@aws-amplify/ui-react/styles.css';
import '@fontsource/inter/variable.css';
import { FcOnlineSupport } from "react-icons/fc";
import { Amplify , Auth } from 'aws-amplify';
import { AmplifyChatbot } from '@aws-amplify/ui-react/legacy';
import img from './chatbot.jpg'

window.Buffer = window.Buffer || require("buffer").Buffer;


Amplify.configure({
  Auth: {
    identityPoolId: 'xxxx',
    region: 'us-east-1'
  },
  Interactions: {
    bots: {
      BookTrip: {
        name: 'BookTrip',
        alias: '$LATEST',
        region: 'us-east-1'
      }
    }
  }
});
let  hide = {
  display :'none'
}
let show = {
  display: 'block'
}
function App() {
const [chatopen,setChatopen] = useState(false); 
const toggle = () =>{
  setChatopen(!chatopen)
}

  return (
    <div className="App">
      <div id='chatCon' >
        <div className='chat-box' style={chatopen? show : hide}>
          <div className=''>    
          <AmplifyChatbot
    botName="BookTrip"
    botTitle="Booktrip Bot"
    welcomeMessage="Hello, how can I help you?"
    voiceEnabled={true}	
  /></div>
        </div>
        <div className='pop'> 
      
  <p onClick={toggle}><img onClick={toggle}  src={img} alt="click her"/></p>
                                   
        </div>
      </div>
    
    </div>

  );
}

export default App;
