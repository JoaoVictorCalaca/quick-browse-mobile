import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native'
import React, { FC, useState } from 'react'
import Ionicons from "@expo/vector-icons/Ionicons"
import * as Linking from 'expo-linking'
import * as Clipboard from 'expo-clipboard'

interface HeaderProps {
  onSearch: (text: string) => void;
  goHomePage: () => void;
  refreshPage: () => void;
  goToGitHub: () => void;
}

const Header: FC<HeaderProps> = ({ onSearch, goHomePage, refreshPage, goToGitHub }) => {
  const [text, setText] = useState('')
  const [modalVisible, setModalVisible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(text);
  };

  const handleSearch = ()=> {
    onSearch(text)
  }

  const goToInstagram = ()=> {
    const instagram = 'https://www.instagram.com/jv_calaca?igsh=MWN3MnBnYWlpMGhweg=='
    Linking.openURL(instagram)
  }


  return (
    <View className='h-28 justify-center items-center flex flex-row bg-gray-900 px-7 gap-5'>
      <TouchableOpacity onPress={()=>{goHomePage(); setText('google.com')}}>
        <Ionicons className='mt-8' name='home-outline' color={'rgb(241 245 249)'} size={20}/>
      </TouchableOpacity>

      <TextInput value={text} onChangeText={setText} className='bg-gray-800 h-12 flex-1 mt-8 px-7 color-slate-100 text-lg rounded-full' placeholderTextColor={'rgb(241 245 249)'} autoCapitalize='none' returnKeyType="search" autoCorrect={false} placeholder='type url...' onSubmitEditing={handleSearch}/>

      <TouchableOpacity onPress={refreshPage}>
        <Ionicons className='mt-8' name='refresh-outline' color={'rgb(241 245 249)'} size={20}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {setModalVisible(true)}}>
        <Ionicons className='mt-8' name='ellipsis-vertical' color={'rgb(241 245 249)'} size={20}/>
      </TouchableOpacity>

      <Modal className='relative' animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => { setModalVisible(!modalVisible);}}>
        <View className='bg-gray-800 w-2/3 h-2/3 right-0 absolute rounded-l-md p-4 gap-6'>
          <TouchableOpacity onPress={() => {setModalVisible(false)}}>
              <Ionicons className='absolute right-0' name='close-circle' size={26} color={'rgb(241 245 249)'}/>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={()=> { goHomePage(); setModalVisible(false); setText('google.com') }}>
            <View className='mt-4 flex flex-row items-center gap-2 border-solid border-b-4 pb-2 border-slate-700'>
              <Ionicons name='home-sharp' size={26} color={'rgb(241 245 249)'}/>
              <Text className='text-xl color-slate-100'>Go to home page</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> { copyToClipboard(); setModalVisible(false); setModal2Visible(true)}}>
            <View className='flex flex-row items-center gap-2 border-solid border-b-4 pb-2 border-slate-700'>
              <Ionicons name='share-social-outline' size={26} color={'rgb(241 245 249)'}/>
              <Text className='text-xl color-slate-100'>Share</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> { refreshPage(); setModalVisible(false) }}>
            <View className='flex flex-row items-center gap-2 border-solid border-b-4 pb-2 border-slate-700'>
              <Ionicons name='refresh-circle-sharp' size={26} color={'rgb(241 245 249)'}/>
              <Text className='text-xl color-slate-100'>Refresh page</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity  onPress={()=> { goToInstagram(); setModalVisible(false) }}>
            <View className='flex flex-row items-center gap-2 border-solid border-b-4 pb-2 border-slate-700'>
              <Ionicons name='logo-instagram' size={26} color={'rgb(241 245 249)'}/>
              <Text className='text-xl color-slate-100'>Creator's Instagram</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> { goToGitHub(); setModalVisible(false); setText('https://github.com/JoaoVictorCalaca')}}>
            <View className='flex flex-row items-center gap-2 border-solid border-b-4 pb-2 border-slate-700'>
              <Ionicons name='logo-github' size={26} color={'rgb(241 245 249)'}/>
              <Text className='text-xl color-slate-100'>Creator's Github</Text>
            </View>
          </TouchableOpacity>

          <Text className='text-xl color-slate-100 absolute bottom-3 left-3'>Created by <Text className='color-blue-500'>@jv_calaca</Text> for study purposes only. You can visit my github for more projects like this</Text>
        </View>
      </Modal>

      <Modal className='relative' animationType="fade" transparent={true} visible={modal2Visible} onRequestClose={() => { setModal2Visible(!modal2Visible);}}>
            <View className='w-72 h-1/4 rounded-xl bg-gray-800 absolute self-center top-1/4 justify-center items-center gap-8'>
              <Text className='color-slate-100 text-lg'>The url has been uccessfully copied to your clipboard</Text>

              <TouchableOpacity onPress={() => { setModal2Visible(false) }}>
                <View className='bg-blue-500 py-4 w-56 rounded-lg'>
                  <Text className='color-slate-100 text-center text-lg'>Proceed</Text>
                </View>
              </TouchableOpacity>
            </View>
        </Modal>
    </View>
  )
}

export default Header
