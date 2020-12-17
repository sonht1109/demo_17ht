import React, { useState } from 'react';
import {
	Alert,
	Keyboard, Modal, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View
}
	from 'react-native';
import { Picker } from '@react-native-community/picker';
import globalStyles from '../../styles';

const Signup = ({ navigation }) => {
	const [selectedItem, setSelectedItem] = useState('+84');
	const [locale, setLocale] = useState('en');
	const [text, setText] = useState('');
	const [pass, setPass] = useState('');
	const [showModal, setShowModal] = useState(false);
	const [isLogin, setIsLogin] = useState(false);
	const [code, setCode] = useState('');

	const checkSubmit = () => {
		// if (text !== '') {
		// 	if (pass.length > 7) {
		// 		if (code === '') {
		// 			if (isLogin) {
		// 				return true;
		// 			}
		// 			return false;
		// 		}
		// 		else return true;
		// 	}
		// }
		return false;
	}

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={globalStyles.container}>
				<View style={{ width: "100%" }}>

					<Modal
						animationType="fade"
						transparent={true}
						visible={showModal}
						style={globalStyles.modal}
						// onRequestClose={() => setShowModal(false)}
					>
						<View style={globalStyles.modal}>
							<Text style={[styles.modalPicker, { padding: 20, textAlign: "center" }]}>Language</Text>

							<View style={styles.modalPicker}>
								<View style={locale === 'vi' && styles.isPicked}>
									<Text style={{ padding: 20 }} onPress={() => {
										setLocale("vi");
										setShowModal(false);
									}}>Tieng Viet</Text>
								</View>
								<View style={locale === "en" && styles.isPicked}>
									<Text style={{ padding: 20 }} onPress={() => {
										setLocale("en");
										setShowModal(false);
									}}>English</Text>
								</View>
							</View>
						</View>
					</Modal>

					<View style={{ display: 'flex', flexDirection: 'row', alignItems: "center" }}>

						<Text style={globalStyles.title}>
							{isLogin ? "Log In" : "Sign Up"}
						</Text>

						<Text
							style={{ marginLeft: 'auto', fontWeight: "400", color: "#7a7a7a", fontSize: 20, marginBottom: 60 }}
							onPress={() => setShowModal(true)}
						>
							{locale}
						</Text>

					</View>
					<View style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
						<Picker
							style={[{ width: '30%' }, globalStyles.input]}
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
							style={[globalStyles.input, { width: '70%' }]}
							placeholder="Phone number"
							defaultValue={selectedItem}
							keyboardType="numeric"
							onChangeText={(text) => setText(text)}
						/>
					</View>

					<TextInput
						style={[globalStyles.input,
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

					{
						isLogin === false &&
						<TextInput
							style={globalStyles.input}
							placeholder="Code"
							onChangeText={(text) => setCode(text)} />
					}
					<View style={{ flexDirection: "row" }}>
						<Text style={{ color: "#f2c94c" }}
							onPress={() => {
								setIsLogin(!isLogin);
								setCode('');
							}}>
							{isLogin ? "or Sign up" : "or Log in"}
						</Text>

						{
							isLogin &&
							<Text
								style={{ marginLeft: "auto", color: "#f2c94c" }}
								onPress={()=>navigation.navigate("Forgot password")}>
								Forgot password ?
							</Text>
						}
					</View>

					<View style={{ width: '100%', marginTop: 30 }}>
						<TouchableOpacity
							style={globalStyles.button}
							onPress={() => {
								var mess = 'Wrong info !';
								if (checkSubmit()) {
									mess = `You have ${isLogin ? "log in" : "signed up"} with phone: ${text}`
								}
								Alert.alert(mess);
							}}>
							<Text style={{ fontWeight: "bold", textAlign: "center" }}>
								{isLogin ? "Log in" : "Sign up"}
							</Text>
						</TouchableOpacity>
					</View>

				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	modalPicker: {
		backgroundColor: "white",
		width: "70%",
		fontWeight: "100",
	},
	isPicked: {
		backgroundColor: "#f2c94c",
	}
});

export default Signup;