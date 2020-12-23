import React, { useState } from 'react'
import { Dimensions, Image, Modal, StyleSheet, Text, View } from 'react-native'
import globalStyles from '../../styles';

const color = {
    success: "#27AE60",
    fail: "#EB5757"
}

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const CustomDialog = ({customAlert}) => {
    const {success, visible, title, subtitle} = customAlert
    console.log(customAlert);
    const [show, setShow] = useState(visible)
    
    return(
        <Modal
        style={[globalStyles.modal, {width: windowWidth, height: windowHeight, backgroundColor: "black"}]}
        animationType="slide"
        transparent={true}
        visible={show}
        >
            <View style={{width: "80%"}}>
                <View style={styles.modalContainer}>
                    <Image
                    source={
                        success ? require('../../assets/img/success.png') : require('../../assets/img/fail.png')}
                        />

                    <Text
                    style={{fontSize: 16,
                    color: success ? color.success : color.fail}}>
                        {title}
                    </Text>

                    <Text style={{textAlign: "center"}}>
                        {subtitle}
                    </Text>
                </View>
                <View style={{flexDirection: "row", width: "100%"}}>

                        <Text
                        onPress={()=>setShow(false)}
                        style={[styles.button,
                        {borderColor: success ? color.success : color.fail,
                        color: success ? color.success : color.fail}]}>
                            OK
                        </Text>

                        <Text
                        onPress={()=>setShow(false)}
                        style={[styles.button,
                        {borderRightWidth: 0,
                        borderColor: success ? color.success : color.fail,
                        color: "#828282"}]}>
                            Cancel
                        </Text>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 0.5,
        textAlign: "center",
        borderTopWidth: 1,
        borderRightWidth: 1,
        paddingVertical: 10
    },
    modalContainer: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})

export default CustomDialog