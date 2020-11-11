import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

export default class UserPage extends Component {

   
    render(){
        return(
          
             <ScrollView style={styles.container}>
                 
                 <View style={styles.postContainer}>
                 <Text style={styles.postTitle}> Duvidas sobre react native</Text>
                 <Text style={styles.postDescription}> Não consigo achar nada no 
                 google sobre como importar dependenciasa no react-native</Text>
               </View>

               <View style={styles.postContainer}>
                 <Text style={styles.postTitle}> Duvidas sobre react native</Text>
                 <Text style={styles.postDescription}> Não consigo achar nada no 
                 google sobre como importar dependenciasa no react-native</Text>
               </View>

               <View style={styles.postContainer}>
                 <Text style={styles.postTitle}> Duvidas sobre react native</Text>
                 <Text style={styles.postDescription}> Não consigo achar nada no 
                 google sobre como importar dependenciasa no react-native</Text>
               </View>

               <View style={styles.postContainer}>
                 <Text style={styles.postTitle}> Duvidas sobre react native</Text>
                 <Text style={styles.postDescription}> Não consigo achar nada no 
                 google sobre como importar dependenciasa no react-native</Text>
               </View>

               <View style={styles.postContainer}>
                 <Text style={styles.postTitle}> Duvidas sobre react native</Text>
                 <Text style={styles.postDescription}> Não consigo achar nada no 
                 google sobre como importar dependenciasa no react-native</Text>
               </View>
             
            </ScrollView>
          
            
        )
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#000000',
    },
    postContainer: {
        margin: 20,
        padding: 20,
        backgroundColor: '#FFF',
        borderRadius:3,
        marginHorizontal: 20,
        marginVertical: 10
    },
    postDescription:{

    },
    postTitle:{
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5
    },
    scroll:{
        marginTop: 20
    }
})