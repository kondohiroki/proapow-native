import React from 'react'
import CreditCard from './CreditCard'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import {
  View,
  TouchableHighlight,
  ListView,
  Modal,
  StyleSheet,
  Text,
  ActivityIndicator,
  AsyncStorage,
  ScrollView,
} from 'react-native'

const idval = AsyncStorage.getItem('@id')
const allUserCard = gql`
query {
    allCardLists(filter:{
      user:{
        id:"$user_id"
      }
    }){
      cardName
      cardNo
      expMM
      expYY
      cardType {
        cardtypeName
      }
    }
  }
`

class CreditCardList extends React.Component {
    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})
        this.state = {
            dataSource: ds.cloneWithRows(['row 1','row 2']),
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.data.allCardLists)
        if(!nextProps.data.loading && !nextProps.data.error){
            const {dataSource} = this.state
            this.setState({
                dataSource: dataSource.cloneWithRows(nextProps.data.allCardLists)
            })
        }
    }

    /*cardGenerate(data){
        console.log('cardgen')
        console.log(data.allCardLists.cardType.cardtypename)
    }*/

    render () {
        const {data} = this.props;
        //console.log(data.allCardLists)
        //this.cardGenerate(data)
        if(data.loading){
            return (
                <View style={[styles.container, styles.horizontal]}>
                  <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <ListView
                    enableEmptySections={true}
                    dataSource={this.state.dataSource}
                    renderRow={(rowdata) => (
                        <text>dddd</text>
                    )}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22
    },
  
    createPostButton: {
      backgroundColor: 'black',
      color: 'white',
      textAlign: 'center',
      fontSize: 22,
      height: 60,
      width: 480,
      paddingTop: 18,
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10
    }
  })

  export default graphql(allUserCard, {
    options:()=> {
        name: 'allUserCard'
        return {variables:{user_id:idval._55}}
    }
  })(CreditCardList)