import React from 'react';
import { View, Text } from 'react-native';

const HomeStack = ({ navigation }) => {

    return (
        <View style={{ marginTop: 300, alignItems: 'center' }}>
            <Text>Click on this button if you want to go back</Text>
            <Text
                onPress={() => navigation.navigate('Info')}
                style={{
                    marginTop: 20,
                    backgroundColor: 'red',
                    paddingTop: 10,
                    paddingBottom:10,
                    paddingStart:20,
                    paddingEnd:20,
                    borderRadius:50
                }}>
                Go Info Page
            </Text>
        </View>
    );
}

export default HomeStack;
