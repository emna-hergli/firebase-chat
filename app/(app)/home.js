import { View, Text, Pressable, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/authContext';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import ChatList from '../../components/ChatList';
import Loading from '../../components/Loading'; // not yet used
import { usersRef } from '../../firebaseConfig';
import { query, getDocs, where } from 'firebase/firestore';

export default function Home() {
  const { logout, user } = useAuth();
  const [users, setUsers] = useState([]); // temporary placeholder

console.log()
  useEffect(() => {
    if (user?.uid) {
      getUsers();
    }
  }, []);

  const getUsers = async () => {
    
    const q = query(usersRef, where('userId', '!=', user?.uid));

    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach(doc=>{
      data.push({...doc.data()});
    });

    setUsers(data);

  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="light" />

      {
      users.length > 0 ? (
        <ChatList currentUser={user} users={users} />
      ) : (
        <View className="flex items-center" style={{ top: hp(30) }}>
          <ActivityIndicator size="large" />
          {/* Or replace with <Loading size={hp(10)} /> */}
        </View>
      )}
    </View>
  );
}
