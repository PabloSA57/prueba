import { Text, ScrollView, View, TextInput, StyleSheet } from "react-native";
import React from "react";


const Login = () => {
    

    
    


    return(
        <ScrollView>
        <View>
            <Text>
                Hola como estas
            </Text>
        </View>

        
        <TextInput style={styles.input} onChangeText={onChangeText}  />
        
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });


export default Login;