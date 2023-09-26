// global react
import * as React from 'react'

// react native components
import { Alert, View, ActivityIndicator, Button } from "react-native";

// react navigation dependencies
import { RootStackComponentProps, RootStackType } from "./rootNavigation";


const TestScreen: RootStackComponentProps<'test'> = ({navigation, route}) => {

    const [state1, setState1] = React.useState(true)

    console.debug("state1", state1)

    return (
        <View style={{flex: 1}}> 
        {state1
        ?  <><ActivityIndicator /><Button onPress={() => setState1(!state1)} title='press in' /></> 
        :  <Button onPress={() => setState1(!state1)} title='press out' />
        }
          
        </View>
    )
}

export default TestScreen;