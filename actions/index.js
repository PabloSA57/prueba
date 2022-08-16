import axios from "axios"

export function addUser(user){
    return function(dispatch){
        dispatch({
            type: "add_User",
            payload: user
        })
    }
}

export function getUsers(){
    return  async function(dispatch){
        try {
            let res = await axios.get("http://127.0.0.1:3001/users")
            console.log(res)
            dispatch({
                type:"GET_USERS",
                payload: res.data
            })
         } catch (error) {
             console.log(error)
         }
        }
    }

