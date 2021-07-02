import React from 'react'
import {Text, View} from 'react-native'

const Profile=({firstName,lastName,dist,state,degree})=>{
  return ( <View style={styles.profileview}>
    <Text>The name is {firstName} {lastName},</Text>
    <Text>from {dist}, {state} and</Text>
    <Text>pursuing {degree}.</Text>
  </View>)
}
//whenever injecting Javascript in React-native code then use braces{}.
//props are just like the attributes in html.
//we can also use StyleSheets with our style object which will show the errors and suggestions. 
const styles ={
  changesInView:{
    backgroundColor:"red",
    padding:20,
  },
  profileview:{
    backgroundColor:"green",
    padding:20
  }
}

function App(){
  const name = "ABHIROOP"
  return (
    <View>
      <Text>{name?name:"NO NAME"}</Text>            
      {/* using ternary operator. */}
      <Text style={styles.changesInView}>Hello World!!</Text>
      <Text style={styles.changesInView}>This is my first Demo Appication.</Text>
      <Profile firstName="Abhiroop" lastName="Panchal" dist="Banswara" state="Rajasthan" degree="B.Tech"/>
      <Profile firstName="Sandeep" lastName="Jangir" dist="Sikar" state="Rajasthan" degree="B.Tech"/>
      <Profile firstName="Pranav" lastName="Jain" dist="Banswara" state="Rajasthan" degree="B.Tech"/>
      <Profile firstName="Dishant" lastName="Lodha" dist="Bhilwara" state="Rajasthan" degree="B.Tech"/>
                            //Above, we gave our custom attributes to the component.
    </View>    
        )
}
export default App
