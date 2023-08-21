import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Card = () => {
  return (
    <>
        <View style={styles.card}>
      <Text style = {styles.titulo }>  Lacoste</Text>
      <text style = {styles.paragrafo }>kayblack</text>
      <text>Caverinha</text>
      <text>G.A</text>
    
    
      <StatusBar style="auto" />
    </View>
    </>
  )
}

export default Card
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      borderColor: 'blue',
      borderStyle: 'solid',
      borderWidth: 2,
      marginBottom: 20,
    },
    titulo: {
      
        
    
     borderBottomWidth: 5,
     borderBottomColor: 'red',
     borderBottomStyle: 'dotted',
     padding: 20,
     textAlign: 'center',
      
      color: 'white',
      fontSize: 30,
      marginBottom: 20,
      backgroundColor: 'red',
      
    },
    paragrafo: {
  
      fontSize: 20,
    }
    
    
  
  });