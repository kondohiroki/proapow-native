import React from 'react'
import ProCardSearch from './ProCardSearch'
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
} from 'react-native'

const idval2 = AsyncStorage.getItem('@userId')
const allPostsQuerySeacrh = gql`
query ($userid: ID!){
  allPromotions(filter:{
    cardAndBanks_some:{
     	cardLists_some:{
      	user:{
        	id:$userid
      	}
    	}
    }
  }){
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
}
`


class ProCardListSeacrh extends React.Component {

  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows([]),
    }
  }


  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceivePropsInprocardlistSearch*******');
    if (!nextProps.data.loading && !nextProps.data.error) {
      const {dataSource} = this.state
      this.setState({
        dataSource: dataSource.cloneWithRows(nextProps.data.allPromotions),
      })
    }
  }


  render () {
    const {data} = this.props;
    console.log('------this is idval------')
    console.log(idval2._55)
    console.log('------this is data------')
    console.log(data)

    if (data.loading) {
      return (//<Text>Loading..</Text>
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }
    console.log('------loaded------')

    return (
      <View style={styles.container}>
        <ListView
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={(data) => (
            <ProCardSearch
              proTitle={data.proTitle}
              fileImg={data.fileImg.url}
              proDesc={data.proDesc}
              navigation={this.props.navigation}
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
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})
export default graphql(allPostsQuerySeacrh, {
  options:()=> {
      //console.log('------options------')
      name: 'allPostsQuerySeacrh'
      return {variables:{userid:idval2._55}}
  }
})(ProCardListSeacrh)
