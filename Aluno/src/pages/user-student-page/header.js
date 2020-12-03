import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Header(){
    return (
        <>
           <View style={styles.header}>
               <Text style={styles.headerTitle}>Class Search</Text>
           </View>
        </>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center'
    },
    headerTitle:{
        fontWeight: 'bold',
        fontSize: 34,
        color: '#836FFF',
        letterSpacing: 1
    }
})