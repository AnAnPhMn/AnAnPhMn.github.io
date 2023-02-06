import React, { Component } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, ImageBackground, TouchableOpacity } from 'react-native'

export default Star = ({ navigation }) => {
    return (
        <View style={{ height: 900, backgroundColor: '#EAF0F8', }} >
            <View style={{ justifyContent: 'center' }}>

                <Image style={styles.Aqua} source={require('../images/aquafina.png')} />
                <Image style={styles.chairong} source={require('../images/chairong.png')} />
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Huongdan');
                }}>
                    <ImageBackground style={styles.bghuongdan} source={require('../images/xemlaihuongdan.png')} />

                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    navigation.navigate('Loading');
                }}>
                <Image style={styles.btnKetthuc} source={require('../images/end.png')} />
                </TouchableOpacity>

            </View>


        </View >
    )
}
const styles = StyleSheet.create({
    Aqua: {
        width: 132,
        height: 43,
        marginTop: 50,
        alignSelf: 'center',
    },
    chairong: {
        width: 330,
        height: 23,
        marginTop: 15,
        alignSelf: 'center',
    },
    bghuongdan: {
        width: 380,
        height: 430,
        alignSelf: 'center',
        marginTop: 50,

    },

    btnKetthuc: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginTop: 20
    }
})
