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

const idval = AsyncStorage.getItem('@userId')
const allUserCard = gql`
query ($user_id: ID!) {
    allCardLists(filter:{
      user:{
        id:$user_id
      }
    }){
        id
        cardName
        cardNo
        expMM
        expYY
        cardAndBank{
            bank{
                bankName
            }
            cardType{
                cardtypeName
            }
        }
    }
}`

class CreditCardList extends React.Component {
    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})
        this.state = {
            dataSource: ds.cloneWithRows(['row 1','row 2']),
        };
    }

    componentWillReceiveProps(nextProps) {
        //console.log(nextProps.data.CardList)
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
        /*console.log('------this is idval------')
        console.log(idval)
        console.log('------this is idval------')
        console.log('------this is data------')
        console.log(data)
        console.log('------this is data------')*/
        //this.cardGenerate(data)
        if(data.loading){
            return (
                <View style={[styles.container, styles.horizontal]}>
                  <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )
        }else if (data.error) {
            return(
              <Button
                backgroundColor= '#03A9F4'
                buttonStyle={{borderRadius: 10, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 15, width: '100%',}}
                title='Reload'
                onPress={() => data.refetch()}
              />
            )
          }else{
            return (
                <View style={styles.container}>
                    <ListView
                        enableEmptySections={true}
                        dataSource={this.state.dataSource}
                        renderRow={(data) => (
                            <CreditCard
                                cardName={data.cardName}
                                cardNo={data.cardNo}
                                expMM={data.expMM}
                                expYY={data.expYY}
                                cardbankno={data.cardAndBank.bank.bankName}
                                cardtype={data.cardAndBank.cardType.cardtypeName}
                            />
                        )}
                    />
                </View>
            )
          }
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