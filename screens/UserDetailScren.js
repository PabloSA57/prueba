import React from "react";
import { useEffect, useState } from "react";
import { doc, getDoc, deleteDoc,setDoc } from "firebase/firestore";
import firebase from "../database/firebase";
import { View, Button, TextInput, ScrollView, StyleSheet, ActivityIndicator } from "react-native";

 const UserDetail = (props) => {

    const [user, setUsers] = useState({
        id:'',
        name: '',
        email: '',
        phone: ''
    })
    const [loding, setLoging] = useState(true)


    /*const getUserById = async (id) => {
        const docRef = doc(firebase.db, "users", id);
        const docSnap = await getDoc(docRef); 
        const dta = docSnap.data();
        setUsers({
            ...dta,
            id: dta.id
        })
        setLoging(false)
    }*/
    /*useEffect(() => {
        getUserById(props.route.params.userId)
    },[])*/

    const handlerChangeText = (name, value) => {
        setUsers({...user, [name]: value})
    }

   /* const deleteUser = async () => {
         await deleteDoc(doc(firebase.db, "users", props.route.params.userId))
        props.navigation.navigate('UserList')
    }*/

    /*const updateUser = async() => {
        await setDoc(doc(firebase.db, "users", props.route.params.userId), {
            name: user.name,
            email: user.name,
            phone: user.phone 
          });

          props.navigation.navigate('UserList')
    }
    if(loding){
        return(
            <ActivityIndicator size='large' />
        )
    }*/
    return(
        <ScrollView style={style.container}>
        <View style={style.inputGroup}>
            <TextInput 
            placeholder='nombre' 
            value={user.name}
            onChangeText={(value) => handlerChangeText('name', value)}/>
        </View >
        <View style={style.inputGroup}>
            <TextInput 
            placeholder='Email'
            value={user.email}
            onChangeText={(value) => handlerChangeText('email', value)}/>
        
        </View>
        <View style={style.inputGroup}>
            <TextInput 
            placeholder='Phone User'
            value={user.phone}
            onChangeText={(value) => handlerChangeText('phone', value)}/>
            
        </View>
        <View style={style.inputGroup}>
            <Button title='Update' onPress={() => updateUser()}/>
        </View>
        <View>
            <Button title='Delete' onPress={() => deleteUser()}/>
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
export default UserDetail;