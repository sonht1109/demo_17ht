import { useRoute, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DraggableFlatList from 'react-native-draggable-flatlist';
import Icon from 'react-native-vector-icons/Ionicons';
import globalStyles from '../../../styles';

const renderItem = ({ item, index, drag, isActive }, list, setList, deleteList, setDeleteList) => {
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
                            let temp = list[0]
                            list[0] = item
                            list[index] = temp
                            setList([...list])
                        }}
                    />
                    <Icon name="menu-outline" size={20} color="#D1D1D1" style={{ flex: 0.2, textAlign: "center" }} onLongPress={drag} />
                </View>
            </View>
            {
                index !== list.length - 1 &&
                <View style={{ height: 0.5, backgroundColor: "#D7E4F3", width: "85%", marginLeft: "auto" }} />
            }
        </View>
    )
}

const EditFollowList = () => {
    const route = useRoute()
    const navi = useNavigation()
    const [list, setList] = useState(route.params.list || [])
    console.log(route.params.list.length);
    const [deleteList, setDeleteList] = useState([])

    useEffect(() => {
        navi.setOptions({
            headerRight: () => (
                <Text onPress={() => {
                    navi.navigate('Market', {
                        list
                    })
                }}
                    style={{ marginRight: 20, fontWeight: "bold", fontSize: 16 }}>
                    Done
                </Text>
            )
        })
    }, [navi, list])

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
                data={list}
                style={{ flex: 1}}
                renderItem={({ item, index, drag, isActive }) =>
                    renderItem({ item, index, drag, isActive }, list, setList, deleteList, setDeleteList)}
                keyExtractor={(item) => `drag-item-${item.id}`}
                onDragEnd={({ data }) => {
                    setList([...data])
                }}
            />
            <View style={styles.bottom}>
                <Icon
                    name="checkmark-circle"
                    size={20}
                    color={deleteList.length === list.length ? "#FAD939" : "#d1d1d1"}
                    style={{flex: 0.15}}
                    onPress={() => {
                        deleteList.length === list.length ? setDeleteList([]) : setDeleteList([...list])
                    }}
                />
                <Text
                style={{flexGrow: 1, color: "#828282"}}
                >
                    Select all
                </Text>
                <Text
                onPress={() => {
                    if(deleteList.length === list.length){
                        setList([])
                    }
                    else{
                        deleteList.forEach(item => {
                            list.splice(list.indexOf(item), 1)
                        })
                        setList([...list])
                    }
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