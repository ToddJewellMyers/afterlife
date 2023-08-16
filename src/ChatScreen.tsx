import React, { useState, useEffect } from 'react';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import axios from 'axios';


const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello! My child, how may God help you!',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'God',
        },
      },
    ]);
  }, []);

  const onSend = async (newMessages: IMessage[] = []) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));

    const message = newMessages[0].text;

    try {
      const response = await axios.post('{{ChatGPT_API_URL}}', {
        message,
      });
// API key:  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 
      const reply = response.data.reply;

      const botReply: IMessage = {
        _id: messages.length + 1,
        text: reply,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'God',
        },
      };

      setMessages((prevMessages) => GiftedChat.append(prevMessages, [botReply]));
    } catch (error) {
     console.error('Error:', error);
    }
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={onSend}
      user={{
        _id: 1,
      }}
    />
  );
};

export default ChatScreen;