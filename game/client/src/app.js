import io from 'socket.io-client';
import React from 'react';
import ChatBox from './components/chat-box';
import style from './app.less';

const MAX_CHAT_MESSAGES = 20;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chat: {
        messages: [],
      },
    };

    const socket = io();
    socket.on('message', ({type, data}) => {
      if (type === 'chat') {
        const allChatMessages = [
          ...this.state.chat.messages,
          data,
        ];
        const latestChatMessages = allChatMessages.slice(Math.max(allChatMessages.length - MAX_CHAT_MESSAGES, 0));
        this.setState({
          chat: {
            ...this.state.chat,
            messages: latestChatMessages,
          }
        });
      }
    });

    this.onSendChatMessage = (message) => {
      socket.emit('message', {
        type: 'chat',
        data: {
          username: 'tester', // ToDo: grab username from state
          message,
        }
      });
    };
  }

  componentDidMount() {
    // ToDo: setup Pixi
  }


  render() {
    return (
      <div className={style.app}>
        <div className="canvas-container"/>
        <ChatBox chatMessages={this.state.chat.messages} onSendChatMessage={this.onSendChatMessage}/>
      </div>
    );
  }
}

export default App;
