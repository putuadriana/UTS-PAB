import { useNavigation } from "@react-navigation/native";
import { Heading, Center, NativeBaseProvider } from "native-base";


const HomeScreen = () => {
  const navigation = useNavigation();

  return(
    <NativeBaseProvider>
      <Center flex={1}>
        <Heading>Home</Heading>
      </Center>
    </NativeBaseProvider>
  )
}
export default HomeScreen;