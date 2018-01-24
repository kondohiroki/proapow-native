import React from 'react'
import ProCard from './ProCard'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import {
  View,
  TouchableHighlight,
  ListView,
  Modal,
  StyleSheet,
  Text
} from 'react-native'

const allPostsQuery = gql`
  query {
    allPromotions {
      id
      proTitle
      fileImg {
        url
      }
      proDesc
      proStart
      proEnd
      shops{
        shopName
      }
      user{
        id
      }
    }
  }`


class ProCardList extends React.Component {

  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows([]),
      modalVisible: false,
      user: undefined,
    }

  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.allPostsQuery.loading && !nextProps.allPostsQuery.error) {
      const {dataSource} = this.state
      this.setState({
        dataSource: dataSource.cloneWithRows(nextProps.allPostsQuery.allPromotions),
      })
    }
  }

  render () {
    if (this.props.allPostsQuery.loading) {
      return (<Text>Loading..</Text>)
    }

    return (
      <View style={styles.container}>
        <Modal
          animationType='slide'
          transparent={true}
          visible={this.state.modalVisible}
        >
        </Modal>

        <ListView
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={(post) => (
            <ProCard
              proTitle={post.proTitle}
              fileImg={post.fileImg.url}
            />
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
  }
})

export default graphql(allPostsQuery, {name: 'allPostsQuery'})(ProCardList)
