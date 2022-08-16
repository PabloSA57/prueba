import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { View, Button, TextInput, ScrollView, StyleSheet,Image } from "react-native";
import firebase from "../database/firebase";
import { collection, addDoc } from "@firebase/firestore";
import { addUser } from "../actions";


const CreateUser = (props) => {

    const [state, setState] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const dispatch = useDispatch();

    const handlerChangeText = (name, value) => {
        setState({...state, [name]: value})
    }

   /* const AddnewUser = async () => {
        if(state.name === ''){
            alert('Debe ingresar un nombre')
        }else{
            try{
                const dt = await addDoc(collection(firebase.db, "users"), {
                    name: state.name,
                    email: state.email,
                    phone: state.phone
                })
                props.navigation.navigate('UserList')
                console.log('Existo', dt)
            }catch (e){
                console.error('Error adding', e)
            }
       
        }
    } */

    const AddnewUser = () => {
        dispatch(addUser(state))
    }
    return(
        <ScrollView style={style.container}>
            <View style={style.inputGroup}>
                <TextInput 
                placeholder='nombre' 
                onChangeText={(value) => handlerChangeText('name', value)}/>
            </View >
            <View style={style.inputGroup}>
                <TextInput 
                placeholder='Email'
                onChangeText={(value) => handlerChangeText('email', value)}/>
            
            </View>
            <View style={style.inputGroup}>
                <TextInput 
                placeholder='Phone User'
                onChangeText={(value) => handlerChangeText('phone', value)}/>
                
            </View>
            <View style={style.inputGroup}>
                <Button title='Save User' onPress={() => AddnewUser()}/>
            </View>
            <Image 
            style={style.img}
            source={{
                uri:'https://firebasestorage.googleapis.com/v0/b/prueba-b29c8.appspot.com/o/Beneficios-de-jugar-al-f%C3%BAtbol.jpg?alt=media&token=34552d45-e077-4e7a-83f0-2b36d65da346'
            }}
            />
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
    },
    img:{
        width:100,
        height:100
    }
})
export default CreateUser;