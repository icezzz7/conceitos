import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Card from './components/Card';

export default function App() {
  return ( 
  <ScrollView style={{marginTop:30}} >
    <Card></Card>
    <View style={styles.card}>
      <Text style = {styles.titulo }>  Lacoste</Text>
      <text style = {styles.paragrafo }>kayblack</text>
      <text>Caverinha</text>
      <text>G.A</text>
    
    
      <StatusBar style="auto" />
    </View>
    <View style={styles.card}>
      <Text style = {styles.titulo }>  Oakley</Text>
      <text style = {styles.paragrafo }>Kyan</text>
      <text>Mc kauan</text>
      <text>Mc Davi</text>
    
    
      <StatusBar style="auto" />
    </View>

    <View style={styles.card}>
      <Text style = {styles.titulo }>  Nike</Text>
      <text style = {styles.paragrafo }>Orochi</text>
      <text>Poze do rodo</text>
      <text>Pedrinho</text>
    
    
      <StatusBar style="auto" />
    </View>
    </ScrollView>
   
  );
}
n1 = 10
possuiPremiassao = true
pessoas = ['Orion', 'maria', 'joao']
pessoa = {nome: 'orion', telefone: 12546, endereco: 'ABC'}

pessoas = [
    {nome: 'orion', telefone: 12546, endereco: 'ABC'},
    {nome: 'maria', telefone: 12547, endereco: 'DEF'},
    {nome: 'joao', telefone: 12546, endereco: 'GHI'},
]

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
