import { View, Text, Platform } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { blurhash } from '../utils/common';
import { Feather, AntDesign } from '@expo/vector-icons';

import { useAuth } from '../context/authContext';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';
  import { MenuItem } from './CustomMenuItems';

const ios = Platform.OS === 'ios';

export default function HomeHeader() {
  const { user, logout } = useAuth();
  const { top } = useSafeAreaInsets();
  const handleProfile=()=>{

  }
const handleLogout = async ()=>{
    await logout();
}
  return (
    <View
      style={{ paddingTop: ios ? top + 10 : top }}
      className="flex-row justify-between px-5 bg-indigo-500 pb-6"
    >
      <View>
        <Text style={{ fontSize: hp(3) }} className="font-medium text-white">
          Chats
        </Text>
      </View>

      <View>
      <Menu>
      <MenuTrigger customStyles={{
        triggerWrapper:{

        }
      }}>
      <Image
          style={{ height: hp(4.3), aspectRatio: 1, borderRadius: 100 }}
          source={user?.profileUrl}
          placeholder={{ blurhash }}
          transition={500}
        />
        </MenuTrigger>
      <MenuOptions
        customStyles={{
            optionsContainer: {
              borderRadius: 10,
              borderCurve: 'continuous',
              marginTop: 40,
              marginLeft: -30,
              backgroundColor: 'white',
              shadowOpacity: 0.2,
              shadowOffset: { width: 0, height: 0 },
              width: 160,
            },
          }}
      >
         <MenuItem
        text="Profile"
        action={handleProfile}
        value={null}
        icon={<Feather name="user" size={hp(2.5)} color="#373737" />}
      />
      <Divider />

<MenuItem
        text="Sign Out"
        action={handleLogout}
        value={null}
        icon={<AntDesign name="logout" size={hp(2.5)} color="#373737" />}
      />
      </MenuOptions>
    </Menu>

       
      </View>
    </View>
  );
}

const Divider = () => {
    return (
        <View className="p-[1px] w-full bg-neutral-200" />
  
    )
}