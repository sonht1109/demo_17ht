import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Picker } from '@react-native-community/picker';
import vnicon from './../../assets/img/vn.png'

const Signup = () => {
    const [selectedItem, setSelectedItem] = useState('+84');
    const [locale, setLocale] = useState('vi');
    const [text, setText] = useState('');
    const [pass, setPass] = useState('');
    const [showModal, setShowModal] = useState(false);
    console.log(text);

    return (
        <View style={{ width: "100%" }}>

            <Modal
            animationType="fade"
            transparent={true}
            visible={showModal}
            style={styles.modal}
            onRequestClose={()=>setShowModal(false)}
            >
                <View style={styles.modal}>
                    <Text
                    style={{width:"70%", textAlign: "right", color: "white", marginBottom: 10}} onPress={()=>setShowModal(false)}>
                        X
                    </Text>

                    <Picker
                    style={styles.modalPicker}
                    selectedValue={locale}
                    onValueChange={(val, idx)=>setLocale(val)}
                    >
                        <Picker.Item label="Tieng Viet" value="vi" />
                        <Picker.Item label="English" value="en" />
                    </Picker>
                </View>
            </Modal>

            <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 60, alignItems: "center" }}>

                <Text style={{ fontSize: 36, fontWeight: "bold" }}>Sign up</Text>

                <Text
                style={{ marginLeft: 'auto', fontWeight: "400", color: "#7a7a7a" }}
                onPress={() => setShowModal(true)}
                >
                    Language
                </Text>

            </View>
            <View style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
                <Picker
                    style={[{ width: '30%' }, styles.input]}
                    selectedValue={selectedItem}
                    onValueChange={(val, idx) => {
                        setSelectedItem(val);
                    }}>
                    <Picker.Item label="Vietnam" value="+84" />
                    <Picker.Item label="USA" value="+1" />
                    <Picker.Item label="Thailand" value="+66" />
                    <Picker.Item label="Singapore" value="+65" />
                    <Picker.Item label="Russia" value="+7" />
                </Picker>
                <TextInput
                    style={[styles.input, { width: '70%' }]}
                    placeholder="Phone number"
                    // value={text}
                    // onChangeText={(text) => setText(text)}
                >
                    <Text>{selectedItem}</Text>
                </TextInput>
            </View>

            <TextInput
                style={[styles.input,
                { borderColor: pass.length < 8 && pass.length > 0 ? "#EB5757" : "#DFDFDF" }]}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(text) => { setPass(text) }}
            />

            {
                pass.length < 8 && pass.length > 0 &&
                <Text style={{ color: '#eb5757', fontSize: 12, lineHeight: 16 }}>
                    Password must be at least 8 characters, uppercase letters and numbers
                </Text>
            }

            <TextInput style={styles.input} placeholder="Code" />

            <Text style={{ color: "#f2c94c" }}>or Login</Text>

            <View style={{ width: '100%', marginTop: 30 }}>
                <TouchableOpacity style={{ width: "100%", backgroundColor: "#d1d1d1", paddingVertical: 15 }}>
                    <Text style={{ fontWeight: "bold", textAlign: "center" }}>
                        Sign up
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        borderColor: '#DFDFDF',
        borderWidth: 1,
        marginVertical: 6,
        paddingHorizontal: 10
    },
    modal: {
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    modalPicker: {
        backgroundColor: "white",
        width: "70%"
    }
});

export default Signup;
