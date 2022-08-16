import React from "react";
import { useEffect, useState } from "react";
import { getUsers } from "../actions";
import { View, Text, Button } from "react-native";
import { collection, getDocs } from "@firebase/firestore";
import { ListItem, Avatar } from "react-native-elements";
import firebase from "../database/firebase";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

 const UserList = (props) => {

   // const [users, setUsers] = useState([]);
    const users = useSelector(state => state.users)
    const dispatch = useDispatch();

 /* useEffect(async () => {
   const all = await getDocs(collection(firebase.db, 'users'));
   const arr = [];
    all.forEach((e) => {
        const {name, email, phone} = e.data();
        arr.push({
            id: e.id,
            name,
            email,
            phone
            
        })
    })
    setUsers(arr)
 }, [users])*/

 useEffect(() => {
   dispatch(getUsers())
 }, [])

 
 console.log(users)
    return(
        <View>
            <Text>
                User List
            </Text>
            <Button title='Create' onPress={() => props.navigation.navigate('CreateUser')}/>
            {
                users?.map((e, i) => {
                    return(
                        <ListItem key={e.id}  
                        bottomDivider
                        onPress={() => {
                                props.navigation.navigate('UserDetail', {
                                    userId: e.id
                            })
                        }
                        
                    }
                        >
                            <ListItem.Content>
                                <ListItem.Title>{e.name}</ListItem.Title>
                                <ListItem.Subtitle>{e.email}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    )
                })
            }
        </View>
    )
}

export default UserList;