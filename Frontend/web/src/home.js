import React from "react";
import {
    ScrollView,
    ActivityIndicator,
    StyleSheet
} from "react-native";

class Home extends React.Component {
    state = {
        users: [],
        loading: true
    };
    componentDidMount() {
        // TODO: get users
    }

    render() {
        return (
            <ScrollView
        noSpacer={true}
        noScroll={true}
        style={styles.container}
            >
            <ActivityIndicator
        style={[styles.centering, styles.gray]}
        color="#ff8179"
        size="large"
            />
            </ScrollView>
    );
    }
}

var styles = StyleSheet.create({
    container: {
        backgroundColor: "whitesmoke"
    },
    centering: {
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
        height: '100vh'
    },
});

export default Home;