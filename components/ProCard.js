import React from 'react'
import { Alert, View, Image, Text, StyleSheet } from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'
import { NavigationActions } from 'react-navigation'

export default class ProCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
    };
  }


  componentDidMount() {
    Image.getSize(this.props.fileImg, (width, height) => {
      const imageHeight =  200
      const scaleFactor = height / imageHeight
      const imageWidth = (width / scaleFactor)
      this.setState({width: imageWidth, height: imageHeight})
    })
  }
  onReadMore = (d) =>{
    this.props.navigation.navigate('Detail', {proTitle: d.proTitle, proDesc: d.proDesc, fileImg:d.fileImg} )
  }

  render () {
    const {width, height } = this.state;
    //const { navigate } = this.props.navigation;

    return (
      <Card title={this.props.proTitle}>{
        <View style={styles.imageContainer}>
          <Image
            source={{ uri:this.props.fileImg}}
            style={{width, height}}
            resizeMode='contain'
          />
        </View>}
        <Button
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 2, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 10 }}
          title='READ MORE'
          onPress={() => this.onReadMore(this.props)}
        />
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
