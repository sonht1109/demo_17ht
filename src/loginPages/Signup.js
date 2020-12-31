import React, { useContext, useState } from 'react';
import {
	Alert,
	Keyboard, Modal, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View
}
	from 'react-native';
import { Picker } from '@react-native-community/picker';
import globalStyles from '../../styles';
import locales from '../locales';
import CustomButton from '../components/CustomButton';
import { AuthContext } from '../common/context';
import userInfo from '../useInfo';
import CustomDialog from '../components/CustomDialog';

const mapLocale = (locale, setLocale, setShowModal) => {
	return locales.map((item, index) => {
		return (
			<View style={locale === item.key && styles.isPicked} key={index}>
				<Text style={{ padding: 20 }} onPress={() => {
					setLocale(item.key);
					setShowModal(false);
				}}>{item.name}</Text>
			</View>
		)
	})
}

const checkBtn = (isLogin, text, pass, code)=>{
	if(text !== ""){
		if(pass.length > 7){
			if(isLogin ){
				if( code === ""){
					return true;
				}
			}
			else{
				if(code !== ""){
					return true;
				}
			}
		}
	}
	return false;
}

const Signup = ({ navigation }) => {
	const [selectedItem, setSelectedItem] = useState('+84');
	const [locale, setLocale] = useState('en');
	const [text, setText] = useState('');
	const [pass, setPass] = useState('');
	const [showModal, setShowModal] = useState(false);
	const [isLogin, setIsLogin] = useState(false);
	const [code, setCode] = useState('');
	const [customAlert, setCustomAlert] = useState({
		visible: false,
		success: false,
		title: "",
		subtitle: ""
	});

	const authContext = useContext(AuthContext)

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

	const checkLogin = ()=>{
		if(pass === userInfo.password && text === userInfo.phone){
			authContext.setAuth(true)
		}
		else{
			setCustomAlert({
				...customAlert,
				visible: true,
				title: "User is invalid !",
				subtitle: "Please try again !"
			})
		}
	}

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={globalStyles.container}>
				<View style={{ width: "100%" }}>

					<Modal
						animationType="fade"
						transparent={true}
						visible={showModal}
					>
						<View style={globalStyles.modal}>
							<Text style={[styles.modalPicker, { padding: 20, textAlign: "center" }]}>Language</Text>

							<View style={styles.modalPicker}>
								{mapLocale(locale, setLocale, setShowModal)}
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
								onPress={() => navigation.navigate("ForgotPass")}>
								Forgot password ?
							</Text>
						}
					</View>

					<CustomButton
					text={isLogin ? "Log in" : "Sign up"}
					active={checkBtn(isLogin, text, pass, code)}
					onHandlePress={checkLogin}
					/>

					<CustomDialog customAlert={customAlert} />

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