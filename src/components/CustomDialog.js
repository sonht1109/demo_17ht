import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Image, Modal, StyleSheet, Text, View } from 'react-native'
import globalStyles from '../../styles';

const color = {
    success: "#27AE60",
    fail: "#EB5757"
}

const CustomDialog = ({customAlert}) => {
    const {success, visible, title, subtitle} = customAlert
    const [show, setShow] = useState(visible)
    useLayoutEffect (()=> {
        setShow(visible)
    }, [customAlert])
    
    return(
        <Modal
        animationType="fade"
        transparent={true}
        visible={show}
        >
            <View style={globalStyles.modal}>
                <View style={styles.modalContainer}>
                    <Image
                    source={
                        success ? require('../../assets/img/success.png') : require('../../assets/img/fail.png')}
                        />

                    <Text
                    style={{fontSize: 16,
                    color: success ? color.success : color.fail,
                    marginBottom: 15, marginTop: 5}}>
                        {title}
                    </Text>

                    <Text style={{textAlign: "center", color: "#828282", fontSize: 13, marginBottom: 20, lineHeight: 20}}>
                        {subtitle}
                    </Text>
                </View>
                <View style={{flexDirection: "row", width: "80%"}}>

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
        paddingVertical: 10,
        backgroundColor: "white",
        lineHeight: 20
    },
    modalContainer: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        width: "80%"
    }
})

export default CustomDialog