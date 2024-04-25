import React, { Component } from 'react';

class Chat extends Component {
  componentDidMount() {
    (function(d, m){
      var kommunicateSettings = 
          {"appId":"da96c7cf71c0743475d331387fe79f66","popupWidget":true,"automaticChatOpenOnNavigation":true};
      var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
      window.kommunicate = m; m._globals = kommunicateSettings;
  
  })(document, window.kommunicate || {});
  }

  render() {
    return null; // Since Kommunicate widget renders its own UI, return null here
  }
}

export default Chat;
