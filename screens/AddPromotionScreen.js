import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import { Card, Tile, List, ListItem, Button, CheckBox } from 'react-native-elements';
import { TextField } from 'react-native-material-textfield';
import { Dropdown } from 'react-native-material-dropdown';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class ShopSettingScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isOpenDatePickerVisible: false,
            isCloseDatePickerVisible: false,
            checkedVISA: false,checkedAme: false,
            checkedJCB: false,checkedMas: false,checkedUni: false,
        }
    }

    _showOpenDatePicker = () => this.setState({ isOpenDatePickerVisible: true });
    _hideOpenDatePicker = () => this.setState({ isOpenDatePickerVisible: false });
    _showCloseDatePicker = () => this.setState({ isCloseDatePickerVisible: true });
    _hideCloseDatePicker = () => this.setState({ isCloseDatePickerVisible: false });

    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        this._hideOpenDatePicker();
        this._hideCloseDatePicker();
    };

    render() {
        const category = [{
            value: 'Food',
        }, {
            value: 'Dessert',
        }, {
            value: 'Travel',
        }, {
            value: 'Discount',
        }],
        { checkedVISA, checkedAme, checkedJCB, checkedMas, checkedUni } = this.state
        return (
        <ScrollView>
        <View style={styles.container}>
        <Card
            titleStyle={{color: 'navy',}}
            title='PROMOTION EDIT'>
            <TextField
                label='Promotion Name'
                placeholder=''
                //onChangeText={(text) => this.setState({firstname: text})}
            />
            <Dropdown
                label= 'Category'
                data={category}
            />
            <TextField
                label='Promotion Description'
                placeholder=''
                multiline={true}
                numberOfLines={10}
            />
            <Text style={styles.text}>Open Date : </Text>
            <View style={styles.datePicker}>
                <Button
                backgroundColor= '#03A9F4'
                buttonStyle={{borderRadius: 10, marginLeft: 0, marginRight: 0, marginTop: 10, width: '100%',}} 
                title='Start Date Picker'
                onPress={this._showOpenDatePicker}/>
                <DateTimePicker
                    isVisible={this.state.isOpenDatePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideOpenDatePicker}
                    mode='date'
                />
            </View>
            <Text style={styles.text}>Close Date : </Text>
            <View style={styles.datePicker}>
                <Button
                backgroundColor= '#03A9F4'
                buttonStyle={{borderRadius: 10, marginLeft: 0, marginRight: 0, marginTop: 10, width: '100%',}} 
                title='End Date Picker'
                onPress={this._showCloseDatePicker}/>
                <DateTimePicker
                    isVisible={this.state.isCloseDatePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideCloseDatePicker}
                    mode='date'
                />
            </View>
            <Text style={styles.text}>Card Support : </Text>
            <View style={styles.checkGroup}>
                <CheckBox
                    title='VISA'
                    checked={checkedVISA}
                    onPress={() => this.setState({checkedVISA: !checkedVISA})}
                />
                <CheckBox
                    title='American Express'
                    checked={checkedAme}
                    onPress={() => this.setState({checkedAme: !checkedAme})}
                />
            </View>
            <View style={styles.checkGroup}>
                <CheckBox
                    title='JCB'
                    checked={checkedJCB}
                    onPress={() => this.setState({checkedJCB: !checkedJCB})}
                />
                <CheckBox
                    title='Master Card'
                    checked={checkedMas}
                    onPress={() => this.setState({checkedMas: !checkedMas})}
                />
            </View>
            <View style={styles.checkGroup}>
                <CheckBox
                    title='UnionPay'
                    checked={checkedUni}
                    onPress={() => this.setState({checkedUni: !checkedUni})}
                />
            </View>
            <Button
            backgroundColor= '#03A9F4'
            buttonStyle={{borderRadius: 10, marginLeft: 0, marginRight: 0, marginTop: 10, width: '100%',}}
            title='SAVE'
            onPress={() => this.createPost()}
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
  checkGroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    //borderWidth: 1,
  },
  text: {
    flex: 1,
    color: 'rgba(0, 0, 0, 0.4)'
  },
  datePicker: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  }
});
