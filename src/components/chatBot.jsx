import '../ChatComponent.css'
import 'highlight.js/styles/github-dark.css';
import Input from './inputArea';
import ChatArea from './chatArea';
import Heading from './heading';

export default function ChatSection(){

  return <div className='chat-section'>
    <Heading/>
    <ChatArea/>
    <Input/>
  </div>
}

// last streach: 
// HIGH PRIORITY=> fix bugs: prolly about the ids assigning -> done
// make it persistant
// npm-package out of it
// THE MAIN THING: Figure out why would anyone use it??? Something sarchesmic?? Some responses that are not provided by anyone
// figure out why extra re-rendering