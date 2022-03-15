import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class CounterClass extends Component {

    constructor(props) {
        super(props)
        this.state = {
            number : 0
        }
    }

    render() {
        return (
            <View>
                <Text style={this.props.NumberStyle}>{this.state.number}</Text>
                <TouchableOpacity onPress={() => { this.setState({number:this.state.number+1}), this.props.ButtonAction() }} style={this.props.ButtonStyle}>
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
        );
    }
}