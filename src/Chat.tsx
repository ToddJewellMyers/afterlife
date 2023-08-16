import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";


const ChatApp = () => {

    const configuration = new Configuration({
            
        apiKey: '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', //process.env.
    });

    const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
    const [inputMessage, setInputMessage] = useState('');
    const [ openai, setOpenApi] = useState<OpenAIApi>(new OpenAIApi(configuration))

    console.log("Messages: " + JSON.stringify(messages) )

  const sendMessage = async () => {
    if (inputMessage.trim() === '') return;

    setMessages([...messages, { role: "user", content: inputMessage }]);
    // Call the ChatGPT API to get a response
    try {
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [...messages, { role: "user", content: inputMessage }],
            temperature: 0.5,
            max_tokens: 256,
            top_p: 1, 
            frequency_penalty: 0,
            presence_penalty: 0, 
        }); 
        let responseMessages: ChatCompletionRequestMessage[] = []

        response.data.choices.forEach( i => {
            
            const msg = i.message
            responseMessages.push(msg)
        })
        setMessages([...messages, ...responseMessages]);

        //response.data.data[0]
        //const botResponse: any = configuration. //configuration.data.choices[0].text.trim();

        // Add the bot's response to the list of messages
        //setMessages([...messages, { text: configuration, user: false }]);
    } catch (error) {
      console.error('Error fetching response from ChatGPT:', error);
    }
    finally {
        // Add the user's message to the list of messages
        setInputMessage('');

    }
  };

  const renderMessage = ({ item }) => (
    <View style={[styles.message, item.role === "user" ? styles.userMessage : styles.botMessage]}>
      <Text>{item.content}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={inputMessage}
          onChangeText={setInputMessage}
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 32,
  },
  message: {
    padding: 8,
    marginVertical: 4,
    borderRadius: 8,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#E2E2E2',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  input: {
    flex: 1,
    marginRight: 8,
    padding: 8,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,
  },
});

export default ChatApp;
