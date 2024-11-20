// import { onAuthStateChanged } from "firebase/auth";
// import { useEffect, useState } from "react";
// import { createContext } from "react";
// import { auth } from "../Utils/firebase";


// export const AuthContext = createContext();

// function AuthContextProvider( {children} ) {
//     const [user , setUser] = useState({
//         isLogin: false,
// userInfo: {},
//     })

//     function onAuthChanged(user) {
//         if (user){
//            setUser({isLogin :true, userInfo:{
//                 name: user?.displayName,
//                 photoUrl: user?.photoURL,
//                 email: user?.email,
//             },})
//         }else{
//             setUser({isLogin :false, userInfo:{}})
//         }
//         setUser(user);
       
//       }
    
//       useEffect(() => {
//         const subscriber = onAuthStateChanged(auth ,onAuthChanged);
//         return subscriber; // unsubscribe on unmount
//       }, []);


//     return (<AuthContext.Provider value={(user,setUser)}>{children }</AuthContext.Provider>
//     )
// }
// export default AuthContextProvider;


import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState, createContext } from "react";
import { auth } from "../Utils/firebase";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState({
    isLogin: false,
    userInfo: {},
  });

  function onAuthChanged(firebaseUser) {
    if (firebaseUser) {
      setUser({
        isLogin: true,
        
        userInfo: {
          name: firebaseUser?.displayName,
          photoUrl: firebaseUser?.photoURL,
          email: firebaseUser?.email,
        },
      });
    } else {
      setUser({
        isLogin: false,
        userInfo: {},
      });
    }
  }

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, onAuthChanged);
    return subscriber; // Unsubscribe on unmount
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
