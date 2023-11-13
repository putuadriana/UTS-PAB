import { useNavigation } from "@react-navigation/native";
import { Heading, Center, NativeBaseProvider } from "native-base";


const SettingScreen = () => {
  const navigation = useNavigation();

  return(
    <NativeBaseProvider>
      <Center flex={1}>
        <Heading>Setting</Heading>
      </Center>
    </NativeBaseProvider>
  )
}
export default SettingScreen;