import React from "react";
import { View, ScrollView,TextInput, StyleSheet } from "react-native";
import React from "react";
import { useState } from "react";
import { Button } from "react-native-elements";


const Register = () => {
    const [user, setUsers] = useState({
        email: '',
        password:''
    });

    
    const handlerChangeText = (name, value) => {
        setUsers({...user, [name]: value})
    }

    const setLogin = () => {

    }


    return(
        <ScrollView>
            <View style={style.inputGroup}>
                <TextInput 
                typ
                placeholder='email' 
                value={user.email}
                onChangeText={(value) => handlerChangeText('email', value)}/>
            </View >
            <View style={style.inputGroup}>
                <TextInput 
                placeholder='password' 
                value={user.password}
                onChangeText={(value) => handlerChangeText('password', value)}/>
            </View >
            <View>
            <Button title='Login' onPress={() => setLogin()}/>
            </View>
            
        </ScrollView>
    )
}


const style = StyleSheet.create({
    container: {
        margin: 30
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1
    }
})

export default Register;