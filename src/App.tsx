import React,  {useState}  from 'react';
import './App.css';
import '@aws-amplify/ui-react/styles.css';
import '@fontsource/inter/variable.css';
import { Amplify , Auth } from 'aws-amplify';
import { AmplifyChatbot } from '@aws-amplify/ui-react/legacy';

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

function App() {


  return (
    <div className="App">
   
        <AmplifyChatbot
    botName="BookTrip"
    botTitle="aaaa"
    welcomeMessage="Hello, how can I help you?"
    voiceEnabled={true}	
  />
            </div>

  );
}

export default App;
