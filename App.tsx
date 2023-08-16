import React from 'react'
import Stages from './src/fiveStages'
import Chat from './src/Chat'
import "react-native-url-polyfill/auto"
import { SafeAreaView } from 'react-native'


const App: React.FC = () => {
//return <Stages />;

return <>
  <Chat />
</>
};

export default App;