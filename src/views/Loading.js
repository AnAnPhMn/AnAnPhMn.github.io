import React, { Component, useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, ImageBackground, TouchableOpacity, Modal } from 'react-native'


export default Loading = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const [countdown, setCountdown] = useState(30)
    const timeId = useRef()
    useEffect(() => {
        timeId.current = setInterval(() => {
            setCountdown(prevState => prevState - 1)
        }, 1000)

    }, [])
    useEffect(() => {
        if (countdown <= 0) {
            clearInterval(timeId.current)
            navigation.navigate('QrCode')
        }
    }, [countdown])

    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>

                        <ImageBackground style={styles.bgcamon} source={require('../images/bgxoay.png')}>
                            <Image style={styles.tichdiem} source={require('../images/tichdiem.png')} />
                            <Image style={styles.textCamera} source={require('../images/camera.png')} />
                            <TouchableOpacity onPress={() => {
                                setModalVisible(!modalVisible) &
                                    navigation.navigate('QrCode')
                            }}>
                                <Image style={styles.btnTichdiem} source={require('../images/btnTichdiem.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() =>setModalVisible(!modalVisible)}>
                                
                                <Image style={styles.btnKhong} source={require('../images/btnKhong.png')} />

                            </TouchableOpacity>
                        </ImageBackground>

                    </View>
                </View>
            </Modal>

        


            <View style={{ height: 900, backgroundColor: '#EAF0F8', }} >
                <View style={{ justifyContent: 'center' }}>
                    <Image style={styles.Aqua} source={require('../images/aquafina.png')} />
                    <Image style={styles.xuly} source={require('../images/xuly.png')} />
                    <ImageBackground style={styles.bgxoay} source={require('../images/bgxoay2.png')}>

                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('Star');
                            }}>
                                <Image style={{ width: 36, height: 36, marginLeft: 10, marginTop: 6 }}
                                    source={require('../images/btnBack.png')} />
                            </TouchableOpacity>
                            <Image style={{ width: 80, height: 65, marginLeft: 230 }} source={require('../images/tramtaisinhvuong.png')} />
                        </View>

                        <Image style={{ width: 100, height: 130, alignSelf: 'center', marginTop: 75, alignSelf: 'center', backgroundColor: 'white', borderRadius: 20 }}
                            source={require('../images/30diem.png')} />
                        <Image style={{ width: 300, height: 64, alignSelf: 'center', marginTop: 50 }}
                            source={require('../images/2chainuoc.png')} />

                        <View style={{ flexDirection: 'row', marginTop: 15, alignSelf: 'center' }}>
                            <Text style={{ color: '#707172', fontWeight: 'bold', paddingRight: 5 }} >Tự động kết thúc sau:</Text>
                            <Text style={{ color: 'red', fontWeight: 'bold', paddingRight: 5 }}>{countdown}</Text>
                            <Text style={{ color: 'red', fontWeight: 'bold', paddingRight: 5 }}>GIÂY NỮA</Text>
                        </View>

                    </ImageBackground>



                    <TouchableOpacity onPress={() => {
                        setModalVisible(!modalVisible)
                    }
                    }>
                        <Image style={styles.btnHoantat} source={require('../images/hoantat.png')} />
                    </TouchableOpacity>
                </View>


            </View>
        </View>
    );

}
const styles = StyleSheet.create({
    Aqua: {
        width: 132,
        height: 43,
        marginTop: 50,
        alignSelf: 'center',
    },
    xuly: {
        width: 330,
        height: 23,
        marginTop: 15,
        alignSelf: 'center',
    },
    bgxoay: {
        width: 380,
        height: 430,
        alignSelf: 'center',
        marginTop: 50,
        backgroundColor: 'white',
        borderRadius: 15
    },
    btnHoantat: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginTop: 20
    },
    centeredView: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
    },
    modalView: {
        position: "absolute",
        width: 400,
        height: 400,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 2,
        shadowRadius: 4,
        elevation: 5,
    },
    bgcamon: {
        position: 'absolute',
        width: 400,
        height: 500,
    },
    textcamon: {
        width: 250,
        height: 290,
        alignSelf: 'center',

    },
    btnXacnhanModal: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginTop: 10
    },
    btnKhong: {
        width: 70,
        height: 70,
        alignSelf: 'center',
        marginTop: 5,
        borderRadius: 50
    },
    tichdiem: {
        width: 300,
        height: 60,
        alignSelf: 'center',
        marginTop: 10
    },
    textCamera: {
        alignSelf: 'center',
        width: 220,
        height: 35,
        marginTop: 30
    },
    btnTichdiem: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginTop: 8
    },

    btnKhong: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginTop: 5,
        borderRadius: 50
    },

})
