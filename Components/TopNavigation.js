import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons";
import DiscoverScreen from '../Screens/DiscoverScreen'
import NewsScreen from '../Screens/NewsScreen'
import { bold } from 'ansi-colors';
import { NewsContext } from '../API/Context';


const TopNavigation = ({ index, setIndex }) => {
    const { fetchNews } = useContext(NewsContext);
    return (
        <View
            style={{
                ...styles.container,
                backgroundColor: "#282C35",
            }}
        >
            {index === 0 ? (
                <TouchableOpacity style={styles.left}>
                    <Text
                        style={{ ...styles.text, color: "lightgrey" }}>
                        <Icon
                            name="theme-light-dark"
                            size={24}
                            color="#007FFF"
                        />
                    </Text>
                </TouchableOpacity>
            ) : (
                    <TouchableOpacity
                        style={styles.left}
                        onPress={() => setIndex(index === 0 ? 1 : 0)}
                    >
                        <Icon name="arrow-left-thick" size={15} color="#007FFF" />
                        <Text style={{ ...styles.text, color: "lightgrey" }}>
                            Discover
                        </Text>
                    </TouchableOpacity>
                )}

            <Text style={{ ...styles.center, color: "white" }}>
                {index ? "All News" : "Discover"}
            </Text>
            {index ? (
                <TouchableOpacity
                    style={styles.right}
                    onPress={() => fetchNews("general")}
                >
                    <Text style={styles.text}>
                        <Icon name="reload" size={24} color="#007FFF" />
                    </Text>
                </TouchableOpacity>
            ) : (
                    <TouchableOpacity
                        style={styles.left}
                        onPress={() => setIndex(index === 0 ? 1 : 0)}
                    >
                        <Text style={{ ...styles.text, color: "white" }}>
                            All News
                        </Text>
                        <Icon name="arrow-right-thick" size={15} color="#007FFF" />
                    </TouchableOpacity>
                )}
        </View>
    );
};

export default TopNavigation;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        alignItems: "center",
        borderBottomColor: "black",
        borderBottomWidth: 0.5,
    },
    center: {
        paddingBottom: 6,
        borderBottomColor: "#007FFF",
        borderBottomWidth: 5,
        borderRadius: 10,
        fontSize: 16,
        fontWeight: "700",
    },
    left: {
        flexDirection: "row",
        alignItems: "center",
        width: 80,
        justifyContent: "space-between",
    },
    text: {
        fontSize: 16,
    },
    right: {
        width: 80,
        alignItems: "flex-end",
    },
});