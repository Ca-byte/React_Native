import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import starwar from './assets/starwar.png'




 class MyFetchly extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }
  

  loadStarWar = async () => {
    const response =   await fetch('https://swapi.dev/api/people')
    const data = await response.json();
    console.log(data.results[1])
    this.setState({ data: data.results })

    // Closures 
    // // fetch('https://swapi.dev/api/people')
    // //   .then( res => res.json() )
    // //   .then( res => {
    // //     this.setState({
    // //        data: res.api || []
    // //     })
        
    // //   }).catch((error)=> console.log(error))


  }

 async componentDidMount(){
    
    await this.loadStarWar();

  }
  render() {

    return(
      <View style={styles.container}>
        <Image 
        style={{width: 280, height: 190, borderRadius: 60}}
        source={starwar}/>
        <Text 
           style={styles.title}>
           "Do. Or do not. There is no try." – Yoda
        </Text>

        <FlatList
          data={this.state.data}
          renderItem={({item}) => (
            <View style={styles.container}>
              <Text style={styles.info}>{item.name}</Text>
              <Text style={styles.info}>{item.hair_color}</Text>
            </View>
          )}
          keyExtractor={item => item.name}
        />

      </View>
  
    )
  }
     

}

    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingVertical: 90,
    
  },
  title:{
    fontSize: 20,
    paddingVertical: 20,
    fontWeight: '600',
    color: '#ffff'

  },
 info: {
   flex: 1,
   textAlign: 'center',
   fontSize: 23,
   color: 'red',
  

  },
   
});

export default MyFetchly;


