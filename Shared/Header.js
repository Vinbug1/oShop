import React  from 'react';
import { StyleSheet,Image,SafeAreaView } from 'react-native';

 const Header = () => { 

    return (
        <SafeAreaView style={styles.header}>
                <Image
                    source={require('../assets/data/onlineShop.png')}
                    resizeMode="contain"
                    style={{ height:80}}
                />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    header: {            
        width:"100%",
        flexDirection:'row',
        alignContent: "center",
        justifyContent: "center",
        
    }
})

export default Header;