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

import { Card, ListItem, Button } from 'react-native-elements';

const users = [
  {
     name: 'brynn',
     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
 ]

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Card
            titleStyle={{color: 'navy',}}
            title='รีบเลย!! ช้าหมดอดเจอคู่กับ KFC ชุดไก่เลิฟเวอร์ ชุดละ 99 บาท'
            imageStyle={{height: 250}}
            image={require('../images/kfc1.jpg')}>
            <Text style={{marginBottom: 10}}>
              Follow me เบบี๋!!...มากู่ร้องบอกรักให้โลกอิจฉาไปกับความน่ากัด น่ากินเกินห้ามใจที่ใครได้เห็นเป็นต้องชอบ...เนื้อคู่ที่คุณมองหา ตอนนี้มาอยู่กันพร้อมหน้าแล้วที่เคเอฟซี รีบเลย!! ช้าหมดอด
            </Text>
            <Button
              //icon={{name: 'code'}}
              backgroundColor= '#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='อ่านต่อ'
            />
          </Card>

          <Card
            titleStyle={{color: 'navy',}}
            title='Sizzler Bar อิ่มอร่อย ตักกันได้ไม่อั้น ไม่ว่าจะเป็นซุป สลัด พาสต้า ของหวาน และผลไม้มากมาย ในราคาพิเศษ เพียง 139 บาท'
            imageStyle={{height: 250}}
            image={require('../images/siz1.jpg')}>
            <Text style={{marginBottom: 10}}>
              พบกับ Sizzler Bar ที่ให้คุณอิ่มอร่อย ตักกันได้ไม่อั้น ไม่ว่าจะเป็นซุป สลัด พาสต้า ของหวาน และผลไม้มากมาย ในราคาพิเศษเพียง 139 บาท  ทุกช่วงเวลา ทุกสาขา พร้อมเสิร์ฟแล้วตั้งแต่วันนี้ ถึง 31 มกราคม 2561 แล้วมาเจอกันที่ซิซซ์เล่อร์นะครับ
            </Text>
            <Button
              //icon={{name: 'code'}}
              backgroundColor= '#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='อ่านต่อ'
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
});
