import { useRoute, useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DraggableFlatList from 'react-native-draggable-flatlist';
import Icon from 'react-native-vector-icons/Ionicons';
import globalStyles from '../../../styles';
import {UserContext} from '../../common/context'

const renderItem = ({ item, index, drag, isActive }, editList, setList, deleteList, setDeleteList) => {
    return (
        <View style={[{ width: "100%", paddingHorizontal: 20 }, isActive && { transform: [{ scale: 1.02 }] }]}>
            <View style={{ flexDirection: "row", paddingVertical: 20 }}>
                <Icon
                    name="checkmark-circle"
                    size={20}
                    color={deleteList.includes(item) ? "#FAD939" : "#D1D1D1"}
                    style={{ flex: 0.15 }}
                    onPress={() => {
                        const index = deleteList.indexOf(item)
                        index === -1 ? deleteList.push(item) : deleteList.splice(index, 1)
                        setDeleteList([...deleteList])
                    }}
                />
                <View style={{ flexDirection: "row", flex: 0.85 }}>
                    <Text style={{ flex: 0.6, color: "#828282" }}>
                        <Text
                        style={[{color: "#828282"}, deleteList.includes(item) && {color: "black", fontWeight: "bold"}]}>
                            {item.currency}
                        </Text>
                        <Text> / {item.city}</Text>
                    </Text>
                    <Icon name="arrow-up-outline" size={20} color="#D1D1D1" style={{ flex: 0.2, textAlign: "center" }}
                        onPress={() => {
                            let temp = editList[0]
                            editList[0] = item
                            editList[index] = temp
                            setList([...editList])
                        }}
                    />
                    <Icon name="menu-outline" size={20} color="#D1D1D1" style={{ flex: 0.2, textAlign: "center" }} onLongPress={drag} />
                </View>
            </View>
            {
                index !== editList.length - 1 &&
                <View style={{ height: 0.5, backgroundColor: "#D7E4F3", width: "85%", marginLeft: "auto" }} />
            }
        </View>
    )
}

//main
const EditFollowList = () => {
    const route = useRoute()
    const navi = useNavigation()
    const [editList, setList] = useState(route.params.list || [])
    const [deleteList, setDeleteList] = useState([])
    const {user, setUser} = useContext(UserContext)

    useEffect(() => {
        navi.setOptions({
            headerRight: () => (
                <Text onPress={() => {
                    setUser({...user, followList: editList})
                    navi.navigate('Market', {
                        list: editList
                    })
                }}
                    style={{ marginRight: 20, fontWeight: "bold", fontSize: 16 }}>
                    Done
                </Text>
            )
        })
    }, [editList])

    return (
        <View style={[globalStyles.smallContainer, { paddingHorizontal: 0 }]}>
            <View style={{ width: "100%", paddingHorizontal: 20 }}>
                <View style={{ flexDirection: "row", width: "85%", marginLeft: "auto", marginBottom: 10 }}>
                    <Text style={{ flex: 0.6, color: "#828282" }}>Currency</Text>
                    <Text style={{ flex: 0.2, textAlign: "center", color: "#828282" }}>Top</Text>
                    <Text style={{ flex: 0.2, textAlign: "center", color: "#828282" }}>Sort</Text>
                </View>
            </View>
            <DraggableFlatList
                data={editList}
                style={{ flex: 1}}
                renderItem={({ item, index, drag, isActive }) =>
                    renderItem({ item, index, drag, isActive }, editList, setList, deleteList, setDeleteList)}
                keyExtractor={(item) => `drag-item-${item.id}`}
                onDragEnd={({ data }) => {
                    setList([...data])
                }}
            />
            <View style={styles.bottom}>
                <Icon
                    name="checkmark-circle"
                    size={20}
                    color={deleteList.length === editList.length ? "#FAD939" : "#d1d1d1"}
                    style={{flex: 0.15}}
                    onPress={() => {
                        deleteList.length === editList.length ? setDeleteList([]) : setDeleteList([...editList])
                    }}
                />
                <Text
                style={{flexGrow: 1, color: "#828282"}}
                >
                    Select all
                </Text>
                <Text
                onPress={() => {
                    if(deleteList.length === editList.length){
                        setList([])
                    }
                    else{
                        let cloneArr = editList.slice()
                        deleteList.forEach(item => {
                            cloneArr.splice(cloneArr.indexOf(item), 1)
                        })
                        
                        setList([...cloneArr])
                    }
                    setDeleteList([])
                }}
                >Delete</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bottom: {
        width: "100%",
        marginBottom: 50,
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical: 10
    }
})

export default EditFollowList