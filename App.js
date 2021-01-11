import React from "react";
import AuthNavigator from "./app/navigations/AuthNavigation"
import {AuthProvider} from "./app/Auth/AuthContext"

export default function App() {

  return (

    <AuthProvider>
      <AuthNavigator/>
    </AuthProvider>
  )

}

