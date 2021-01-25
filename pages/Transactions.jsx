import * as React from "react";
import { Text, View, StyleSheet, FlatList, SafeAreaView } from "react-native";

export default class Transactions extends React.Component {
    render() {
        var data = [
            { id: "SDUE72364792364", amount: "-50" },
            { id: "UWDI83769457523", amount: "+2000" },
            { id: "MAEF23747596766", amount: "+500" },
            { id: "WEIR36465565132", amount: "-150" },
            { id: "YUIW32463457684", amount: "-1230" },
            { id: "HSDF34637473458", amount: "-890" },
            { id: "GRYF90974753742", amount: "+250" },
            { id: "WEUD7386362546", amount: "+850" },
            { id: "GSFG32912364855", amount: "-230" },
            { id: "HDAS32486533458", amount: "-300" },
            { id: "ASFG23423873527", amount: "+2950" },
        ];
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => (
                        <View style={styles.itemContainer} key={index}>
                            <View style={styles.id}>
                                <Text>Transaction Id</Text>
                                <Text style={{ fontStyle: "italic" }}>{item.id}</Text>
                            </View>
                            <Text style={{ fontWeight: "bold" }}>{item.amount}</Text>
                        </View>
                    )}
                />
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 2,
        borderColor: "black",
        borderWidth: 1,
        margin: 5,
        minHeight: 50,
        paddingLeft: 10,
        paddingRight: 10,
    },
    id: {
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
    },
});