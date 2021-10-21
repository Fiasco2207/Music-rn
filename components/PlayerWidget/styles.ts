import React from "react";
import { StyleSheet } from "react-native";
import { AntDesign} from "@expo/vector-icons";
import colors from "../../config/colors";

const styles = StyleSheet.create({
    container:{
     position: 'absolute',
     bottom: 60,
     backgroundColor: '#bc81ea',   
     flexDirection:'row',
     height: 75,
     width: '100%',
     marginLeft: 3,
     marginRight: 6,
     alignItems: 'center',
     borderRadius: 10,
     elevation: 10,
    },
    image:{
        width:  60,
        height: 60,
        marginHorizontal: 10,
        },
    rightContainer: {
        flex: 1,
        flexDirection:'row',
        justifyContent:'space-between',

    },
    nameContainer:{

    },
    iconsContainer:{
    flexDirection: 'row',
    alignItems: "center"
    },
title: {
    color: colors.white,
    fontSize: 18,
    fontWeight:'bold',
    marginTop: 6, 
},
 artist:{
     color: 'lightgray',
     fontSize: 15,
     marginTop: 5,
     
 }
})

export  default  styles;
