import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Picker,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import { TextField } from 'react-native-material-textfield';
import { Tile, List, ListItem, Button, Card } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import graphql from 'react-apollo/graphql';
import gql from 'graphql-tag'
//import { INT } from '../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/graphql/language/kinds';

const addCardMutate = gql`
  mutation ($cabid: ID!, $cardnumber: String!, $cardname: String!, $expmnumber: Int!, $expynumber: Int!, $useridfromparam: ID!) {
  createCardList(
    cardName: $cardname
    cardNo: $cardnumber
    expMM: $expmnumber
    expYY: $expynumber
    userId: $useridfromparam
    cardAndBankId: $cabid
  ){
    id
  }
}`

class AddCardScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      typename: '',
      bankname: '',
      cardnumber: '',
      cardname: '',
      expm: '',
      expy: '',
      bankandtype: '',
      useridfromparam: props.navigation.state.params.userid
    }
  }

  checkingBank = () => {
    const {bankname, typename, bankandtype} = this.state
    if(bankname=='GOVERNMENT SAVING BANK' && typename==='VISA'){
      this.setState({bankandtype: 'cjdoryntw0cc40170h44d2ggl'})
    }else if(bankname=='KRUNGSRI BANK' && typename=='VISA'){
      this.setState({bankandtype: 'cjdoruz770cb10170dx9sg1ql'})
    }else if(bankname=='TMB BANK' && typename=='VISA'){
      this.setState({bankandtype: 'cjdorukpj0cao0170wmdqxcqo'})
    }else if(bankname=='SCB BANK' && typename=='VISA'){
      this.setState({bankandtype: 'cjdorl0s60c7i0170r6z3981k'})
    }else if(bankname=='KTB BANK' && typename=='VISA'){
      this.setState({bankandtype: 'cjdork6ls0c720170ua5naxko'})
    }else if(bankname=='KASIKORN BANK' && typename=='VISA'){
      this.setState({bankandtype: 'cjdorga700c5j0170v1uomtis'})
    }else if(bankname=='BANKKOK BANK' && typename=='VISA'){
      //console.log('check run')
      this.setState({bankandtype: 'cjdoqc1pc0bzk01700g9nd06r'}, function () {
        const cabid = this.state.bankandtype
        this.createPost(cabid)
        //console.log(cabid)
      })
    }
  }

  createPost = async (cabid) => {
   // const prop = this.props
    const { cardnumber, cardname, expm, expy, useridfromparam} = this.state
    expmnumber=expm*1
    expynumber=expy*1
    await this.props.addCardMutate({
      variables: {cabid, cardnumber, cardname, expmnumber, expynumber, useridfromparam}
    })
    //this.props.navigation.navigate('EditCard',{userid:this.props.navigation.state.params.useridfromparam})
    //this.props.navigation.navigate('Home')
  }

  render() {
    /*const {expm} = this.state
    var nummonth = expm*1
    console.log('------testparse------')
    console.log(nummonth);
    console.log('------testparse------')*/
    let bankdata = [{
      value: 'GOVERNMENT SAVING BANK',
    }, {
      value: 'KRUNGSRI BANK',
    }, {
      value: 'TMB BANK',
    }, {
      value: 'SCB BANK',
    }, {
      value: 'KTB BANK',
    }, {
      value: 'KASIKORN BANK',
    }, {
      value: 'BANKKOK BANK',
    }];

    let typedata = [{
      value: 'VISA',
    },{
      value: 'MASTER CARD',
    },{
      value: 'JCB',
    },{
      value: 'AMERICAN EXPRESS',
    },{
      value: 'UNIONPAY',
    },]

    return (
      <ScrollView>
      <View style={styles.container}>
      <Card
        titleStyle={{color: 'navy',}}
        title='NEW CARD'>

        <Dropdown
          label='BANK NAME'
          data={bankdata}
          onChangeText={(text) => this.setState({bankname: text})}
        />

        <Dropdown
          label='TYPE'
          data={typedata}
          onChangeText={(text) => this.setState({typename: text})}
        />

        <TextField
          label='CARD NUMBER'
          //placeholder='Jiradej'
          onChangeText={(text) => this.setState({cardnumber: text})}
        />
        <TextField
          label='CARD NAME'
          //placeholder="korn@gmail.com"
          onChangeText={(text) => this.setState({cardname: text})}
          //value={this.state.email}
        />
        <TextField
          label='EXP month'
          placeholder='MM'
          onChangeText={(text) => this.setState({expm: text})}
          //value={this.state.email}
        />
        <TextField
          label='EXP year'
          placeholder='YY'
          onChangeText={(text) => this.setState({expy: text})}
          //value={this.state.email}
        />


        <Button
          backgroundColor= '#03A9F4'
          buttonStyle={{borderRadius: 10, marginLeft: 0, marginRight: 0, marginTop: 10, width: '100%',}}
          title='SAVE'
          onPress={() => this.checkingBank()}
        />
      </Card>
      </View>
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  img: {
    width: 300,
    height:250,
    resizeMode: 'contain',
    marginLeft:22,
  }
});

export default graphql(addCardMutate, {name: 'addCardMutate'})(AddCardScreen)
