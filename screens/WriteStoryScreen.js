import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';

export default class WriteStoryScreen extends React.Component{
    render(){
        return( 
            <View style = {styles.container}>
              <View style = {styles.inputView}>
                <Header
                  backgroundColor={'orange'}
                  centerComponent={{
                  text: 'Story Hub App',
                  style: { color: '#fff', fontSize: 20 },
                  }}/>

                 <TextInput
                  style = {styles.inputBox}
                  placeHolder = 'TITLE OF THE STORY'>
                  </TextInput>

                  <TextInput
                  style = {styles.inputBox}
                  placeHolder = 'AUTHOR OF THE STORY'>
                  </TextInput>

                  <TextInput
                  style = {styles.inputBox}
                  placeHolder = 'WRITE STORY'
                  multiLine = {true}>
                  </TextInput>

                  <TouchableOpacity style = {styles.submitButton}>
                      <Text style = {styles.submitButtonText}>SUBMIT</Text>
                  </TouchableOpacity>
                  
              </View>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    inputView:{
      flexDirection: 'row',
      margin: 20
    },
    inputBox:{
      width: 200,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 0,
      fontSize: 20
    },
    submitButton:{
      backgroundColor:'orange',
      width:100,
      height:50,
    },
    submitButtonText:{
      padding:10,
      textAlign:'center',
      fontSize:20,
      fontWeight:'bold',
      color:'white',
    }
  });