import React,  {useState, useEffect}  from 'react';
import './App.css';
import '@aws-amplify/ui-react/styles.css';
import '@fontsource/inter/variable.css';
//import { FcOnlineSupport } from "react-icons/fc";
import { Amplify } from 'aws-amplify';
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
  const handleChatComplete = (event: any) => {
    const {data, err} = event.detail;
    if (data) alert(JSON.stringify(data));
    if (err) console.error("Chat failed:", err);
  };

  useEffect(() => {
    const chatbotElement = document.querySelector("amplify-chatbot")!;
    chatbotElement.addEventListener("chatCompleted", handleChatComplete);
    return function cleanup() {
      chatbotElement.removeEventListener("chatCompleted", handleChatComplete);
    };
  }, []);
const [chatopen,setChatopen] = useState(false); 
const toggle = () =>{
  setChatopen(!chatopen)
}

  return (
    <div className="App">
      <h1>try to select</h1>
      <div id='chatCon' >
        <div className='chat-box' style={chatopen? show : hide}>
          <div className=''>    
          <AmplifyChatbot
    botName="BookTrip"
    botTitle="Voice Assistant"
    welcomeMessage="Hello, how can I help you?"
    voiceEnabled={true}	
  /></div>
        </div>
        <div className='pop'> 
      
  <p onClick={toggle}><img onClick={toggle}  src={img} alt="click here"/></p>
                                   
        </div>
      </div>
    
    </div>

  );
}

export default App;
