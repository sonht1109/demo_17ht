import React, { useRef, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { RNCamera } from 'react-native-camera'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Camera = () => {
    const camera = useRef(null)
    const [path, setPath] = useState('')

    const takePicture = async () => {
        try {
            const options = {
                quality: 0.5, base64: false,
            }
            const data = await camera.current.takePictureAsync(options)
            setPath(data.uri)
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <View style={styles.container}>
            {
                path === "" &&
                <>
                    <RNCamera
                        style={[styles.preview]}
                        ref={camera}
                        // ratio={'1:1'}
                        autoFocus={RNCamera.Constants.AutoFocus.on}
                        type={RNCamera.Constants.Type.back}
                        flashMode={RNCamera.Constants.FlashMode.off}
                    />
                    <View style={{ flex: 1, width: '100%', flexDirection: 'row', justifyContent: 'center', position: 'absolute', bottom: 20 }}>
                        <TouchableOpacity style={styles.capture} onPress={takePicture} />
                    </View>
                </>
            }
            {
                path !== "" &&
                <>
                    <Image source={{ uri: path }}
                        style={{  position: "absolute", top: 0 }}
                        width={"100%"} height={"100%"} />

                    <View style={{ flex: 1, justifyContent: "flex-end" }}>
                        <View style={{flexDirection: "row", width: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)"}}>

                            <Text
                            style={styles.text}
                            onPress={()=>{setPath("")}}>
                                Reshoot
                            </Text>

                            <Text style={styles.text}>Upload</Text>
                        </View>
                    </View>
                </>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
        position: "relative",
        justifyContent: "center"
    },
    preview: {
        flex: 1,
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 30,
        width: 60,
        height: 60,
        alignSelf: 'center',
        margin: 20,
    },
    text:{
        color: "white",
        fontSize: 16,
        flex: 0.5,
        paddingVertical: 15,
        textAlign: "center"
    }
})


export default Camera