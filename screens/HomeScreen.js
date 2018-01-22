import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


import { Card, ListItem, Button } from 'react-native-elements';

import { MonoText } from '../components/StyledText';

class PromotionCard extends Component{
  render(){
    return (
      <Card
        // promotion title
        titleStyle={{color: 'navy',}}
        title='รีบเลย!! ช้าหมดอดเจอคู่กับ KFC ชุดไก่เลิฟเวอร์ ชุดละ 99 บาท'

        // promotion image
        imageStyle={{height: 250}}
        image={require('../images/kfc1.jpg')}>

        {/* promotion description */}
        <Text style={{marginBottom: 10}}>
          Follow me เบบี๋!!...มากู่ร้องบอกรักให้โลกอิจฉาไปกับความน่ากัด น่ากินเกินห้ามใจที่ใครได้เห็นเป็นต้องชอบ...เนื้อคู่ที่คุณมองหา ตอนนี้มาอยู่กันพร้อมหน้าแล้วที่เคเอฟซี รีบเลย!! ช้าหมดอด
        </Text>

        {/* read more button */}
        <Button
          //icon={{name: 'code'}}
          backgroundColor= '#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='อ่านต่อ'
        />
      </Card>
    );
  }
}

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
      
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>

          {/* create promotion card by create PromotionCard object here  */}
          <PromotionCard/>
          <PromotionCard/>
          <PromotionCard/>

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
});
