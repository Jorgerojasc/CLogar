import React,{useContext, useReducer, createContext,useEffect,useMemo} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext()

export default AuthContext;

export function  AuthProvider(props){

    const[state,dispatch] = useReducer(
        (prevState, action)=>{

            switch(action.type){
                case "CHECK_SESSION":
                    return{
                        ...prevState,
                        isLoading:false,
                        user: action.user
                    }
                case "SIGN_IN":
                    return{
                        ...prevState,
                        isSignout:false,
                        user:action.user
                    }
                case "SIGN_OUT":
                    return{
                        ...prevState,
                        isSignout:true,
                        user:null
                    }
            }
        },{
            isSignout:false,
            isLoading:true,
            user:null
        }
    )
    useEffect(()=>{

        const check_session = async ()=>{
            let user
            try {
                user = await AsyncStorage.getItem('User')
            } catch (e) {
                alert("algo salio mal")
                console.log(e)
                
            }
            dispatch({type:"CHECK_SESSION", user:user})
        }
        check_session()

    },[])

    const auth = useMemo(()=>({
        isSignout:state.isSignout,
        isLoading:state.isLoading,
        user:state.user,
        signIn: async (data)=>{
            await AsyncStorage.setItem("User",JSON.stringify(data))
            dispatch({type:"SIGN_IN",user:data})
        },
        signOut: async () =>{
            await AsyncStorage.removeItem("User")
            dispatch({type:"SIGN_OUT"})
        }

    }),[state])
    return <AuthContext.Provider value={auth} {...props}/>

}

export function useAuth(){
    const auth = useContext(AuthContext)
    if(!auth){
        throw new Error("useAuth must be use within a AuthPrivider")
    }
    return auth

}

//Usar en caso de querer validar un Componente de la aplicación
// export function withAuth(Component){
//     return function ComponentWithAut(props){
//         <AuthContext.Consumer>
//             {
//                 auth=>{
//                     if(!auth){
//                         throw new Error("useAuth must be use within a AuthPrivider")
//                     }
//                     return (<Component {...props} auth={auth}/>)
//                 }
//             }
//         </AuthContext.Consumer>
//     }
// }