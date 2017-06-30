
import React from 'react-native';

var {
    StyleSheet,
    Dimensions,
    Platform
    } = React;

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#ddd',
        overflow: 'hidden'
    },
    image: {
        width: Dimensions.get('window').width
    },
    sequences: {
        height: 20,
        width: 45,
        bottom: 20,
        position: 'absolute',
        right: 15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'rgba(74,73,74,0.3)',
        borderRadius: 10
    },
    sequence: {
        color: '#fff',
        fontSize: 12,
    },
    count: {
        height: 36,
        width: 36,
        top: 40,
        right: 20,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(74,73,74,0.3)',
        borderRadius: 18
    },
    countText: {
        color: '#fff',
        fontSize: 18,
    }
});

export default styles;