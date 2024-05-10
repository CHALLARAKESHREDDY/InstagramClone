import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
           <Image source={require("../../assets/instagram.png")} style={styles.instaImage} />
        </TouchableOpacity>
        <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.headerIconTouch}>
                <Image source={require("../../assets/plus.png")} style={styles.headerIcon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerIconTouch}>
                <Image source={require("../../assets/heart.png")} style={styles.headerIcon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerIconTouch}>
                <View style={styles.unreadMsg}>
                    <Text style={styles.unReadCount}>11</Text>
                </View>
                <Image source={require("../../assets/messenger.png")} style={styles.headerIcon}/>
            </TouchableOpacity>
        
        </View>
        
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    instaImage:{
       height:40,
       width:40,
       resizeMode: 'contain'
    },
    container:{
        paddingHorizontal:25,
        marginTop:10,
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:"center",
        width:"100%"
    },
    headerIcons:{
        flexDirection:"row",
        justifyContent:"space-around",
    },
    headerIconTouch:{
        marginHorizontal:12,
    },
    headerIcon:{
        height:23,
        width:23
    },
    unreadMsg:{
        position:"absolute",
        backgroundColor:"#FF3250",
        borderRadius:25,
        left:10,
        bottom:14,
        width:25,
        height:18,
        zIndex:100,
        justifyContent:"center",
        alignItems:"center"
    },
    unReadCount:{
        color:"white",
        fontSize:12
    }
})