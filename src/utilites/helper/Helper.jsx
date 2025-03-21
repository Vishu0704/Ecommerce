import { Dimensions, Image,TouchableOpacity,View,Text} from "react-native"

export const height = Dimensions.get('window').height
export const width =Dimensions.get('window').width

export const Header = ({onPress,txt})=>{
    return(
        <View style={{flexDirection:"row",alignItems:'center',justifyContent:'space-between',width:'60%'}}>
            <TouchableOpacity onPress={onPress}>
            <Image source={require("../images/back.png")} style={{height:22,width:50}} resizeMode="contain"/>
            </TouchableOpacity>
            <Text style={{fontSize:25,fontWeight:'700'}}>{txt}</Text>
         
        </View>
    )
}
export const Category = ({onPress,Source,txt})=>{
    return(
        <View >
        <TouchableOpacity
          style={{
            borderRadius: 10,
            shadowOpacity: 0.07,
            shadowRadius: 3,
            elevation: 4,
            alignSelf: 'center',
          
            width: width / 1.1,
            backgroundColor: '#ffffff',
            margin: 10,
            height: width / 2.5,
          }}
          onPress={onPress}>
            <View style={{flexDirection:'row'}}>
          <Image
            source={Source}
            style={{
                height: width / 2.5,
                width: width / 2.5,
                borderRadius: 8,
                borderWidth:0.2,
                borderColor:'lightgrey'
              }}
            resizeMode="contain"
          />
          <Text style={{fontSize:30,fontWeight:'600',alignSelf:'center',marginLeft:40}}>{txt}</Text>
          </View>
        </TouchableOpacity>
    
      </View>
    )
}

export const Orders = ({onPress,txt})=>{
    return(
        <TouchableOpacity onPress={onPress}>
        <View style={{flexDirection:"row",alignItems:'center',justifyContent:'space-between',width:'100%',
        borderBottomWidth:0.5,
        borderColor:'lightgrey',
        height:80
        }}>
             <Text style={{fontSize:22,fontWeight:'600'}}>{txt}</Text>
            
            <Image source={require("../images/next.png")} style={{height:22,width:50}} resizeMode="contain"/>
          
           
        </View>
        </TouchableOpacity>
    )
}