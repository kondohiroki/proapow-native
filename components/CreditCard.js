import React from 'react'
import { Alert, View, Image, Text, StyleSheet } from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'
import { NavigationActions } from 'react-navigation'

export default class CreditCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            width: 0,
            height: 0
        }
    }

    render() {
        const {width, height} = this.state
        console.log('cardad')
        return (
            <Card  title={this.props.cardName} 
            titleStyle={{backgroundColor: '#FF7D61'}}
            wrapperStyle={{backgroundColor: '#FF7D61'}}
            containerStyle={{backgroundColor: '#FF7D61'}}>
            <View style={styles.container_2}>
                    <Text>{this.props.cardbankno}</Text>
                    <Text>{this.props.cardtype}</Text>
                </View>
                <View style={styles.container}>
                    <Text>{this.props.cardNo}-xxxx-xxxx-xxxx</Text>
                </View>
                <View style={styles.container}>
                    <Text>{this.props.expMM}/{this.props.expYY}</Text>
                </View>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    imageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff'
    },
    title: {
      padding: 22,
      color: 'rgba(0,0,0,.8)',
      fontWeight: '300',
      fontSize: 16,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    container_2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
  })