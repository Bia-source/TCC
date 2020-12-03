import React, { useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, TouchableOpacity, FlatList, TextInput
} from 'react-native';
import api from '../../services/api';
import Header from './header';

// export const category = [
//   {name: 'Português', value: 'Português'},
//   {name: 'Matemática', value: 'Matemática'},
//   {name: 'Informática', value: 'Informática'}
// ];

export function UserPage(){
   const [questions, setQuestions] = useState([]);
   
    const category = [
    {name: 'Português', value: 1},
    {name: 'Matemática', value: 2},
    {name: 'Informática', value: 3}
  ];

   useEffect(()=>{
     api.get('/question').then(response =>{
      console.log(response.data); 
      setQuestions(response.data);
     });
   }, []);

   

   function getCategory(value){
    const valie = value; 
    return console.log(valie);
   }
  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
           <SafeAreaView style={styles.container}>
           <Header/>
           <View style={styles.esp}></View>
           <View style={styles.techsCategory}>
           {category.map((item)=>{
              return (
              <TouchableOpacity
                activeOpacity={0.6} 
                style={styles.button} 
                onPress={getCategory(item.value)}
             > 
             <Text key={item.value} style={styles.category}> {item.name}</Text>
             </TouchableOpacity>
             )
           })}
           
           </View>

           
           <View style={styles.containerList}>
           <View style={styles.questionsContainerCreate}>
                     <Text style={styles.questionsTitle}> Crie uma nova pergunta </Text>
                     <TextInput placeholder='Digite um titulo para sua pergunta'style={styles.textInput}></TextInput>
                     <Text style={{fontSize:20,marginLeft: 4, color: '#836FFF'}}>Adicione uma descrição:</Text>
                     <TextInput placeholder='Explique sua duvida aqui'style={styles.textInput}></TextInput>
                     <Text style={{fontSize:20,marginLeft: 4, color: '#836FFF'}}>Selecione uma Categoria:</Text>
                     <View style={styles.techsCategory}>    
                      {category.map((item)=>{
              return (
              <TouchableOpacity
                activeOpacity={0.6} 
                style={styles.buttonSubmitCategory} 
                onPress={getCategory(item.value)}
             > 
             <Text key={item.value} style={styles.categoryText}> {item.name}</Text>
             </TouchableOpacity>
             )
           })}
           </View>
           <View style={styles.esp}></View>
                     <TouchableOpacity
                       activeOpacity={0.6} 
                       style={styles.categorySubmit} 
                       onPress={()=>{}}
                      > 
           
                     <Text style={styles.category}> Enviar </Text>
                    </TouchableOpacity>
                     </View>
             {/* {questions.map(question => <Text style={styles.texto} key={question.id}> {question.title} </Text>)} */}
              <FlatList 
                contentContainerStyle={styles.list}
                data={questions}
                keyExtractor={question => question.id}
                renderItem={({ item }) =>{
                   return(
                     <>
                     <View style={styles.questionsContainer}>
                     <Text style={styles.questionsTitle} key={item.id}> {item.title} </Text>
                     <Text style={{fontSize:20,marginLeft: 4, color: '#836FFF'}}>Descrição:</Text>
                     <Text style={styles.questionsDescription} key={item.id}> {item.description} </Text>
                     <Text style={{fontSize:20, marginLeft: 4, color: '#836FFF'}}>Respostas encontradas:</Text>
                     {item.answer ?
                     <Text style={styles.questionsAnswer} key={item.id}> {item.answer} </Text>
                     : <Text style={{color: 'green'}}> Seja o primeiro a responder!!</Text>
                     }
                     <TextInput style={styles.textInput} placeholder='Escreva sua resposta aqui'></TextInput>
                     {/* <Input placeholder='digite sua resposta'></Input> */}
                     <TouchableOpacity
                       activeOpacity={0.6} 
                       style={styles.button} 
                       onPress={()=>{}}
             > 
                     <Text key={item.value} style={styles.category}> Responder </Text>
                    </TouchableOpacity>
                     </View>
                    
                    
                    </>
                   )
                }
                  
                }
              />
           </View>       

      </SafeAreaView>
         
           
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  containerList:{
    backgroundColor: '#fafafa',
    flex: 1
  },  
  list:{
      padding: 20,
  },
  questionsContainer:{
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20
  },
  questionsContainerCreate:{
    backgroundColor: '#000000',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    padding: 20,
    margin:20
  },
  questionsTitle:{
    fontSize:24,
    fontWeight: 'bold',
    color: "#333",
  },
  questionsDescription:{
    fontSize: 16,
    color: "#999",
    marginTop: 5,
    lineHeight: 24,
  },
  container:{
        backgroundColor: '#000000',
         flex: 1,
         paddingBottom: 50
       },
  esp:{
     marginTop:20,
  },
  textInput:{
    backgroundColor: '#D3D3D3',
    marginBottom: 20,
    borderColor:'#DDD',
    borderRadius: 10,
    marginTop: 10,
    fontSize: 16,
    padding: 25,
    color: '#222'
  },
  buttonSubmitCategory:{
    flexDirection: "row",
    marginTop: 10,
    backgroundColor: '#836FFF'
  },

  techsContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft:30
  },
  techsCategory: {
    flexDirection: "row",
    marginTop: 10
  },
  techs:{
      color: "#00FFFF",
      fontSize: 20
  },
  texto:{
    color: '#00CED1',
    fontSize: 18
  },
  description:{
    fontSize:14,
    color: '#B0C4DE'
  },
  answer:{
    backgroundColor:'#000000'
  },
  buttonCategory:{
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 10,
    backgroundColor: "#836FFF",
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: "#000000",
    
  },
  category:{
      color:"#000000",
      fontSize:20,
      justifyContent: 'center',
      alignItems: 'center',
      margin:5
  },
  categoryText:{
    color:"#000000",
    fontSize:18,
    justifyContent: 'center',
    alignItems: 'center',
    margin:5
},
 
  categorySubmit:{
    margin: 10,
    height: 50,
    width: '90%',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green'
},
 
  tech: {
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 10,
    backgroundColor: "#836FFF",
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: "#fff",
  },
  project: {
    color: '#fff',
    fontSize: 30,
  },

  button: {
    backgroundColor: '#836FFF',
    margin: 10,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  }
});

//const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

export default UserPage;
