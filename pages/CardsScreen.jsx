import React, { useState } from "react";
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View,
    SafeAreaView
} from "react-native";

const Cards = () => {
    const [modalOneVisible, setModalOneVisible] = useState(false);
    const [modalTwoVisible, setModalTwoVisible] = useState(false);
    return (
        <SafeAreaView style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalOneVisible}
                onRequestClose={() => {
                    setModalOneVisible(false)
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>7863 7867 8796 1293</Text>
                        <View style={styles.modalDate}>
                            <Text style={styles.date}>JOHN</Text>
                            <Text style={styles.date}>07/27</Text>
                        </View>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity style={styles.btnStyles}
                onPress={() => {
                    setModalOneVisible(true);
                }}>
                <Text style={styles.txtStyles}>Debit Card</Text>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalTwoVisible}
                onRequestClose={() => {
                    setModalTwoVisible(false)
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>8762 2335 8127 1236</Text>
                        <View style={styles.modalDate}>
                            <Text style={styles.date}>JOHN</Text>
                            <Text style={styles.date}>02/26</Text>
                        </View>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity style={styles.btnStyles}
                onPress={() => {
                    setModalTwoVisible(true);
                }}>
                <Text style={styles.txtStyles}>Credit Card</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    modalView: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        margin: 20,
        backgroundColor: "#134374",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        width: 280,
        height: 150,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    },
    modalDate: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        // alignItems: "space-between",
        marginTop: 30

    },
    date: {
        color: "white",
        fontWeight: "bold",
    },
    btnStyles: {
        borderColor: "black",
        borderWidth: 1,
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        width: 200,
    },
    txtStyles: {
        color: 'black',
        fontWeight: 'bold',
    }
});

export default Cards;