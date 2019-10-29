import React, {Component} from 'react';
import Button from 'react-native-button';
import {View, Text, Image, Alert, Platform} from 'react-native';

class CounterComponent extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                marginTop: 0,
                alignItems:'center'
            }}>
                <Text style={{
                    margin: 20,
                    fontWeight: 'bold',
                    color: 'forestgreen',
                    fontSize: 20,
                }}>
                    Redux Saga Tutorials
                </Text>
                <View style={{
                    height: 50, margin: 1, flexDirection: 'row',
                }}>
                    <Button
                        containerStyle={{
                            padding: 10,
                            height: 45,
                            borderRadius: 10,
                            marginRight:20,
                            backgroundColor: 'darkviolet',
                        }}
                        style={{
                            fontSize: 20,
                            color: 'white',
                        }}
                        onPress={() => {
                           this.props.onIncrement(1);
                        }}
                    >
                        Increment+
                    </Button>
                    <Button
                        containerStyle={{
                            padding: 10,
                            height: 45,
                            borderRadius: 10,
                            backgroundColor: 'darkviolet',
                        }}
                        style={{
                            fontSize: 20,
                            color: 'white',
                        }}
                        onPress={() => {
                            this.props.onDecrement(1);
                        }}
                    >
                        Decrement-
                    </Button>
                </View>
                <Text style={{
                    margin: 10,
                    fontWeight: 'bold',
                    color: 'darkblue',
                    fontSize: 17,
                }}>
                    Counts: {this.props.times}
                </Text>
            </View>
        );
    }
}

export default CounterComponent;
