import io from 'socket.io-client';
import React from 'react';
import ChatBox from './components/chat-box';
import style from './app.less';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      chat: {
        messages: [],
      },
    };

    const socket = io();
    socket.on('message', ({type, data}) => {
      if (type === 'chat') {
        this.setState({
          chat: {
            ...this.state.chat,
            messages: [
              ...this.state.chat.messages,
              data,
            ],
          }
        });
      } else if (type === 'login') {
        const {username, authToken} = data;
        this.setState({
          user: {
            ...this.state.user,
            username,
            authToken,
          }
        })
      }
    });

    this.onSendChatMessage = (message) => {
      socket.emit('message', {
        type: 'chat',
        data: {
          authToken: this.state.user.authToken,
          username: this.state.user.username,
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
        <ChatBox
          chatMessages={this.state.chat.messages}
          onSendChatMessage={this.onSendChatMessage}/>
      </div>
    );
  }
}

export default App;
