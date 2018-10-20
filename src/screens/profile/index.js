import React from 'react'
import { View, Image } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Header, Text, Avatar, Icon, Button } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ComponentConst } from '../../configs'
import style from "./style"
import { red } from 'ansi-colors';


class ProfileView extends React.Component {
  componentDidMount() {
    this.props.onFetchProfile()
  }
  render() {
    // const { imgHeight, imgWidth } = this.state
    return (
      <SafeAreaView forceInset={{ horizontal: 'always', top: 'always' }}>
        <Header
          leftComponent = {
            <View>
              <Text style={ComponentConst.header}>Tài khoản của tôi</Text>
            </View>
          }
          rightComponent = {
            <View>
              <Icon 
                name= 'shopping-cart'
                size= {30}
                color= 'white' />
            </View>
          }
          />
         
        <View style={style.profileView}>
          <Avatar
            xlarge
            rounded
            source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
          
          <View style={style.profileName}>
            <View style={style.row}>
              <Icon 
                name= 'account-box'
                size= {20}
                color= 'green' />
                <Text style={{fontSize: 25, color: "red", marginLeft: 5}}>Lê Viết Học</Text>
            </View>
            <View style={style.row}>
              <Icon 
                name= 'phone'
                size= {15}
                color= 'green'
              />
              <Text style={style.profilePhone}>0388534943</Text>
            </View>
          </View>

          <View style={style.EditProfile}>
            <Icon 
                name= 'edit'
                size= {27}
                color= 'green' />
           </View>
        </View>
        
        <View  style={style.statisticUser}>
          <View style={style.statisticUserStase}>
            <Text style={style.statisticText}>Đơn hàng</Text>
            <Text>2</Text>
          </View>
          <View style={style.statisticUserStaseMid}>
            <Text style={style.statisticText}>Sản Phẩm</Text>
            <Text>3</Text>
          </View>
          <View style={style.statisticUserStase}>
            <Text style={style.statisticText}>Tổng số tiền</Text>
            <Text>100,000 vnđ</Text>
          </View>
        </View>

        <View style={style.ActionUser}>
          <View style={style.Action}>
              <Icon
                marginLeft= {2}
                name="receipt"
              />
              <Text style={style.ActionText}>Quản lý đặt hàng</Text>
          </View>
          <View style={style.ActionDetail}>
            <View style={style.ActionChild}>
              <Text style={style.ActionChildText}>Đơn hàng đang vận chuyển</Text>
            </View>

            <View style={style.ActionChild}>
              <Text style={style.ActionChildText}>Đơn hàng thành công</Text>
            </View>

            <View style={style.ActionChild}>
              <Text style={style.ActionChildText}>Đơn hàng đã hủy</Text>
            </View>
          </View>
          <View style={style.Action}>
            <Icon
              marginLeft= {2}
              name="location-on"
            />
            <Text style={style.ActionText}>Sổ địa chỉ</Text>
          </View>
          <View style={style.Action}>
            <Icon
              marginLeft= {2}
              name="comment"
            />
            <Text style={style.ActionText}>Nhận xét của tôi</Text>
          </View>
        </View>

        <View style={style.Logout}>
          <Button
            raised
            icon={{name: 'cached'}}
            title='Đăng xuất' />
        </View>
        
      </SafeAreaView>
    )
  }
}
ProfileView.navigationOptions = {
  tabBarLabel: 'Tài khoản',
  tabBarIcon: ({ tintColor, horizontal }) => (
    <Ionicons
      name="ios-person"
      size={horizontal ? 20 : 26}
      style={{ color: tintColor }}
    />
  ),
}

const mapStateToProps = state => ({
  profile: state.productReducers
})

const mapDispatchToProps = dispatch => ({
  onFetchProfile: () => {
    dispatch(fetchUser())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView)