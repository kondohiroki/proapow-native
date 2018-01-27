import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'

export default class ProCard extends React.Component {

  state = {
    width: 0,
    height: 0,
  }

  componentDidMount() {
    Image.getSize(this.props.fileImg, (width, height) => {
      const imageHeight =  200
      const scaleFactor = height / imageHeight
      const imageWidth = (width / scaleFactor)
      this.setState({width: imageWidth, height: imageHeight})
    })
  }

  render () {
    const {width, height} = this.state
    return (
      <Card title={this.props.proTitle}>
  {
    <View style={styles.imageContainer}>
        <Image
          source={{ uri:this.props.fileImg}}
          style={{width, height}}
          resizeMode='contain'
        />
        {}

    </View>
  }
  <Button
    backgroundColor='#03A9F4'
    buttonStyle={{borderRadius: 2, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 10 }}
    title='VIEW NOW' />
</Card>
      // <View>
      //   <View style={styles.imageContainer}>
      //     <Image
      //       source={{ uri:this.props.fileImg}}
      //       style={{width, height}}
      //       resizeMode='contain'
      //     />
      //   </View>
      //   <Text style={styles.title}>
      //     {this.props.proTitle}
      //   </Text>
      // </View>
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
