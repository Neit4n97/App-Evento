import {Home} from "./src/screens/Home";
import { StatusBar } from 'react-native';
import { Fisio } from "./src/screens/Home/fisio";

export default function App(){
  return (
    <>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />
    <Home />
    </>
  )
}

