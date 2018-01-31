import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import { Card, Tile, List, ListItem, Button, CheckBox } from 'react-native-elements';
import { TextField } from 'react-native-material-textfield';
import PasswordInputText from 'react-native-hide-show-password-input';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class ProfileSettingScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            checkedMon: true,checkedTue: true,checkedWed: true,checkedThu: true,
            checkedFri: true,checkedSat: false,checkedSun: false,
            isOpenTimePickerVisible: false,
            isCloseTimePickerVisible: false,
        }
    }

    _showOpenTimePicker = () => this.setState({ isOpenTimePickerVisible: true });
    _hideOpenTimePicker = () => this.setState({ isOpenTimePickerVisible: false });
    _showCloseTimePicker = () => this.setState({ isCloseTimePickerVisible: true });
    _hideCloseTimePicker = () => this.setState({ isCloseTimePickerVisible: false });

    _handleTimePicked = (date) => {
        console.log('A date has been picked: ', date);
        this._hideOpenTimePicker();
        this._hideCloseTimePicker();
      };

    render() {
        const { checkedMon, checkedTue, checkedWed, checkedThu, checkedFri, checkedSat, checkedSun } = this.state;
        return (
        <ScrollView>
        <View style={styles.container}>
        <Card
            titleStyle={{color: 'navy',}}
            title='SHOP INFO'>
            <TextField
            label='Shop Name'
            placeholder='โคกู โคขุนโพนยางคำ'
            //onChangeText={(text) => this.setState({firstname: text})}
            />
            <TextField
            label='Shop Tel. Number'
            placeholder='0256582235'
            //onChangeText={(text) => this.setState({lastname: text})}
            />
            <Text style={styles.text}>Open Date : </Text>
            <View style={styles.checkGroup}>
                <CheckBox
                    title='Monday'
                    checked={checkedMon}
                    onPress={() => this.setState({checkedMon: !checkedMon})}
                />
                <CheckBox
                    title='Tuesday'
                    checked={checkedTue}
                    onPress={() => this.setState({checkedTue: !checkedTue})}
                />
            </View>
            <View style={styles.checkGroup}>
                <CheckBox
                    title='Wednesday'
                    checked={checkedWed}
                    onPress={() => this.setState({checkedWed: !checkedWed})}
                />
                <CheckBox
                    title='Thursday'
                    checked={checkedThu}
                    onPress={() => this.setState({checkedThu: !checkedThu})}
                />
            </View>
            <View style={styles.checkGroup}>
                <CheckBox
                    title='Friday'
                    checked={checkedFri}
                    onPress={() => this.setState({checkedFri: !checkedFri})}
                />
                <CheckBox
                    title='Saturday'
                    checked={checkedSat}
                    onPress={() => this.setState({checkedSat: !checkedSat})}
                />
            </View>
            <View style={styles.checkGroup}>
                <CheckBox
                    title='Sunday'
                    checked={checkedSun}
                    onPress={() => this.setState({checkedSun: !checkedSun})}
                />
            </View>
            <Text style={styles.text}>Open Time : </Text>
            <View style={styles.timePicker}>
                <Button
                backgroundColor= '#03A9F4'
                buttonStyle={{borderRadius: 10, marginLeft: 0, marginRight: 0, marginTop: 10, width: '100%',}} 
                title='Open Time Picker'
                onPress={this._showOpenTimePicker}/>
                <DateTimePicker
                    isVisible={this.state.isOpenTimePickerVisible}
                    onConfirm={this._handleTimePicked}
                    onCancel={this._hideOpenTimePicker}
                    mode='time'
                />
            </View>
            <Text style={styles.text}>Close Time : </Text>
            <View style={styles.timePicker}>
                <Button
                backgroundColor= '#03A9F4'
                buttonStyle={{borderRadius: 10, marginLeft: 0, marginRight: 0, marginTop: 10, width: '100%',}} 
                title='Close Time Picker'
                onPress={this._showCloseTimePicker}/>
                <DateTimePicker
                    isVisible={this.state.isCloseTimePickerVisible}
                    onConfirm={this._handleTimePicked}
                    onCancel={this._hideCloseTimePicker}
                    mode='time'
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
  timePicker: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  }
});
