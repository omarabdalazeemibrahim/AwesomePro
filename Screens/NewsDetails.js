import React from 'react';
import {
    View, StyleSheet, Text, Dimensions, Image, ScrollView,
    SafeAreaView, StatusBar, ImageBackground, TouchableOpacity, Linking
} from 'react-native';
import { useRoute } from '@react-navigation/native';
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const NewsDetails = () => {
    const { params } = useRoute();
    console.log(params.detailedItem)
    const item = params.detailedItem;
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.title}>{item.title}</Text>
                {
                    item.urlToImage ?
                        (<Image style={styles.image} source={{ uri: item.urlToImage }} />) :
                        (<Image style={styles.image} source={require("../Images/newError.webp")} />)
                }
                <View>
                    <Text style={styles.description}>{item.description}</Text>
                    <Text style={styles.description}>Written By :
                   {
                            item.author ? (<Text> {item.author}</Text>) :
                                (<Text>{" Unknown"}</Text>)
                        }
                    </Text>

                    <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
                        <Text style={styles.newsLink}> News Link</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL(item.url)}>

                        <ImageBackground
                            blurRadius={30}
                            style={styles.imageBackground}
                            source={{ uri: item.urlToImage }}
                        >
                            <Text style={styles.readMore1}>
                                Read More.. Click Here
                            </Text>



                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view: {
        flex: 1,
        height: windowHeight,
        width: windowWidth,
        backgroundColor: "black",

    },
    scrollView: {
        backgroundColor: 'black',
        height: windowHeight,
        width: windowWidth,
        padding: 5
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        paddingBottom: 10,
        color: "white"
    },
    image: {
        height: 250,
        resizeMode: "cover",
        width: windowWidth - 10,
        borderRadius: 20,

    },
    imageBackground: {

        height: 100,
        width: windowWidth,
        justifyContent: "center",
        borderRadius: 20,
        resizeMode: "cover"


    },
    description: {
        padding: 5,
        flex: 1,
        fontSize: 16,
        fontWeight: "600",
        paddingTop: 15,
        paddingBottom: 10,
        color: "white"
    },
    newsLink: {
        borderBottomColor: "#007FFF",
        borderBottomWidth: 5,
        borderRadius: 10,
        padding: 15,
        flex: 1,
        marginBottom: 10,
        fontSize: 20,
        fontWeight: "900",
        color: "white",
        alignContent: "center",
        alignItems: "center",
        textAlign: "center"
    },
    readMore: {

        borderRadius: 10,
        padding: 25,
        marginTop: 20,
        flex: 1,
        marginBottom: 10,
        fontSize: 10,
        fontWeight: "900",
        color: "white",
        alignContent: "center",
        alignItems: "center",
        textAlign: "center"
    },

    readMore1: {

        borderRadius: 10,
        padding: 5,
        flex: 1,
        marginBottom: 10,
        fontSize: 20,
        fontWeight: "900",
        color: "white",
        alignContent: "center",
        alignItems: "center",
        textAlign: "center"
    },


})

export default NewsDetails;
