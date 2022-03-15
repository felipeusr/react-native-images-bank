import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function CounterFunction(props) {
    const [number, setNumber] = useState(0);
    return (
        <View>
            <Text style={props.NumberStyle}>{number}</Text>
            <TouchableOpacity onPress={() => { setNumber(number+1), props.ButtonAction() }} style={props.ButtonStyle}>
                <Text>Add</Text>
            </TouchableOpacity>
        </View>
    );
}