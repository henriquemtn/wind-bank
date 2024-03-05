import { Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function User() {
  return (
    <TouchableOpacity className='flex flex-col items-center justify-center'>
        <Image 
        className='w-[50px] h-[50px]'
        source={require('../../assets/avatar.jpg')}
        />
      <Text className="mt-1">Henry</Text>
    </TouchableOpacity>
  )
}