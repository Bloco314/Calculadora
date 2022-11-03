import { useState } from 'react';
import {Button, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {  
  const Soma = () =>{
    return(
      <View style={{
        width: 150,
        marginTop:10,
        marginRight: 10
      }}>
        <Button 
          title='Soma'  
          onPress={()=>{
            if(!isNaN(t1) && !isNaN(t2)){
              setResul('Resultado: '+(Number(t1)+Number(t2)))
            }else{
              setResul('Valores invalidos!')
            }
        }}/>
      </View>
    );
  }

  const Subtrai = () => {
    return(
      <View  style={{
        width: 150,
        marginTop: 5,
        marginRight: 10
      }}>
        <Button 
          title='Subtrai'   
          onPress={()=>{
            if(!isNaN(t1) && !isNaN(t2)){
              setResul('Resultado: '+(Number(t1)-Number(t2)))
            }else{
              setResul('Valores invalidos!')
            }
        }}/>
      </View>
    );
  }

  const Multiplica = () => {
    return(
      <View  style={{
        width: 150,
        marginTop:10
      }}>
        <Button 
          title='Multiplica'
          onPress={()=>{
          if(!isNaN(t1) && !isNaN(t2)){
            setResul('Resultado: '+(Number(t1)*Number(t2)))
          }else{
            setResul('Valores invalidos!')
          }
        }}/>
      </View>
    );
  }

  const Divide = () => {
    return(
      <View  style={{
        width: 150,
        marginTop:5
      }}>
        <Button
          title='Divide'
          onPress={()=>{
            if(Number(t2)===0){
              setResul('impossivel dividir por zero!')
            }else
            if(!isNaN(t1) && !isNaN(t2)){
              setResul('Resultado: '+(Number(t1)/Number(t2)))
            }else{
              setResul('Valores invalidos!')
            }
        }}/>
      </View>
    );
  }

  const [t1,setT1] = useState('')
  const T1 = () =>{
    return(
      <TextInput style={{
        backgroundColor: 'white'
      }}
      defaultValue={t1}
      onChangeText={newText => setT1(newText)}>
      </TextInput>
    );
  }

  const [t2,setT2] = useState('')
  const T2 = () =>{
    return(
      <TextInput style={{
        backgroundColor: 'white',
        marginTop: 10
      }}
      defaultValue={t2}
      onChangeText={newText => setT2(newText)}>
      </TextInput>
    );
  }

  const [resul,setResul] = useState('Resultado:')
  const Resultado = () =>{
    return(
      <View
        style={{
          backgroundColor: 'black',
          marginTop: 10,
          padding: 10,  
        }}
      >
        <Text
        style={{
          color:'white'
        }}>{resul}</Text>
      </View>
    );
  }
  return (
    <View 
      style={{
        backgroundColor: 'lightblue',
        alignItems: 'center',
        marginTop: 200,
        marginLeft: 100,
        marginRight: 100,
        paddingBottom: 50,
        paddingTop: 50   
      }}>
      <T1/>
      <T2/>
      <View style={{flexDirection:'row'}}>
        <View style={{flexDirection:'column'}}>
          <Soma/>
          <Subtrai/>
        </View>
        <View style={{flexDirection:'column'}}>
          <Multiplica/>
          <Divide/>
        </View>
      </View>
      <Resultado/>
    </View>
  );
};
