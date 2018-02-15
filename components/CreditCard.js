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
            <Card>
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
  })