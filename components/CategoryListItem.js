import React from 'react';
import {
    Image,
    Text,
    View, StyleSheet
} from 'react-native';
import SkiiImage from '../assets/skiing.png';

const styles = StyleSheet.create({
    image: {
        width: 64,
        height: 64,
    },
    container: {
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 4,
        shadowOffset: { width: 0, height: 0 },
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 7,
        marginBottom: 16
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
    }
});
export default function CategoryListItem(props) {
    return <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <Image
            style={styles.image}
            source={props.image}
        />
    </View>
}