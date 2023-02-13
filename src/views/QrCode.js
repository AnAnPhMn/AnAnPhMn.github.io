import React, { Component, useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, ImageBackground, TouchableOpacity, Modal } from 'react-native'

export default QrCode = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [countdown2, setCountdown2] = useState(40)
    const timeId2 = useRef()
    useEffect(() => {
        timeId2.current = setInterval(() => {
            setCountdown2(prevState => prevState - 1)
        }, 1000)

    }, [])
    useEffect(() => {
        if (countdown2 <= 0) {
            clearInterval(timeId2.current)
            setModalVisible2(!modalVisible2) & navigation.navigate('Welcome')
        }
    }, [countdown2])
    // 
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
            setModalVisible2(!modalVisible2)
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
                            <Image style={styles.textcamon} source={require('../images/textcamon.png')} />

                            <TouchableOpacity onPress={() => {
                                setModalVisible(!modalVisible) &
                                    navigation.navigate('Welcome')
                            }}>
                                <Image style={styles.btnXacnhanModal} source={require('../images/xacnhan.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>

                                <Image style={styles.btnKhong} source={require('../images/btnKhong.png')} />

                            </TouchableOpacity>

                        </ImageBackground>

                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible2}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible2(!modalVisible2);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>

                        <ImageBackground style={styles.bgcamon} source={require('../images/bgxoay.png')}>
                            <View style={{ justifyContent: 'center' }}>
                                <Image style={styles.tramtaisinh} source={require('../images/tramtaisinhvuong.png')} />
                                <Image style={styles.textThemtg} source={require('../images/themthoigian.png')} />
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 15, alignSelf: 'center' }}>
                                <Text style={{ color: '#707172', fontWeight: 'bold', paddingRight: 5 }} >Trở về màn hình chính sau:</Text>
                                <Text style={{ color: 'red', fontWeight: 'bold', paddingRight: 5 }}>{countdown2}</Text>
                                <Text style={{ color: 'red', fontWeight: 'bold', paddingRight: 5 }}>GIÂY NỮA</Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={() => {
                                    setModalVisible2(!modalVisible2) &
                                        navigation.navigate('Welcome');
                                }}>
                                    <Image style={styles.btn1} source={require('../images/btnManhinhchinh.png')} />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => {
                                    setModalVisible2(!modalVisible2) &
                                        navigation.navigate('QrTime');
                                }}>
                                    <Image style={styles.btn2} source={require('../images/btnThemtg.png')} />
                                </TouchableOpacity>
                            </View>

                        </ImageBackground>

                    </View>
                </View>
            </Modal>

            <View style={{ height: 900, backgroundColor: '#EAF0F8', }} >
                <View style={{ justifyContent: 'center' }}>
                    <Image style={styles.Aqua} source={require('../images/aquafina.png')} />
                    <Image style={styles.taisinh} source={require('../images/tramtaisinh.png')} />
                    <Image style={{ width: 380, height: 80, alignSelf: 'center', borderRadius: 5, marginTop: 20 }} source={require('../images/diemquydoi.png')} />

                    <View style={{ marginTop: 10 }}>
                        <ImageBackground style={styles.bgxoay} source={require('../images/bgxoay2.png')}>

                            <View style={{ flexDirection: 'row' }}>

                                <Image style={{ width: 80, height: 65, marginLeft: 280 }} source={require('../images/tramtaisinhvuong.png')} />
                            </View>

                            <Image style={{ width: 185, height: 70, alignSelf: 'center' }} source={require('../images/quetmaQR.png')} />
                            <Image style={{ width: 185, height: 185, alignSelf: 'center', marginTop: 30 }} source={require('../images/bigQR.png')} />


                            <View style={{ flexDirection: 'row', marginTop: 15, alignSelf: 'center' }}>
                                <Text style={{ color: '#707172', fontWeight: 'bold', paddingRight: 5 }} >Tự động kết thúc sau:</Text>
                                <Text style={{ color: 'red', fontWeight: 'bold', paddingRight: 5 }}>{countdown}</Text>
                                <Text style={{ color: 'red', fontWeight: 'bold', paddingRight: 5 }}>GIÂY NỮA</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <TouchableOpacity onPress={() => {
                        setModalVisible(!modalVisible)
                    }}>
                        <Image style={styles.btnXacnhan} source={require('../images/xacnhan.png')} />
                    </TouchableOpacity>

                </View>

            </View>

        </View>
    )
}
const styles = StyleSheet.create({
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
    bgxoay: {
        position: 'absolute',
        width: 380,
        height: 430,
        alignSelf: 'center',
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 15
    },
    bgcamon: {
        position: 'absolute',
        width: 400,
        height: 500,
    },
    tramtaisinh: {
        alignSelf: 'center',
        width: 120,
        height: 100
    },
    textThemtg: {
        alignSelf: 'center',
        width: 310,
        height: 35,
        marginTop: 30
    },

    textcamon: {
        width: 250,
        height: 290,
        alignSelf: 'center',

    },
    Aqua: {
        width: 132,
        height: 43,
        marginTop: 50,
        alignSelf: 'center',
    },
    taisinh: {
        width: 330,
        height: 23,
        marginTop: 15,
        alignSelf: 'center',
    },
    qr: {
        width: 380,
        height: 430,
        alignSelf: 'center',
        marginTop: 50
    },
    btnXacnhan: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginTop: 500
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
    btn1: {
        width: 150,
        height: 45,
        marginTop: 50,
        alignSelf: 'center'
    },
    btn2: {
        width: 150,
        height: 45,
        marginTop: 50,
        alignSelf: 'center'

    },
})
