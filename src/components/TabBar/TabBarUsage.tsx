import React from 'react'
import TabBar from '.'
import Tab from './Tab'
import HomeIcon from '@icons/General/home-01.svg'
import SearchIcon from '@icons/General/search-lg.svg'
import ZapIcon from '@icons/General/zap.svg'
import HeartIcon from '@icons/General/heart.svg'
import UserIcon from '@icons/Users/user-01.svg'
import Marker from './Marker'

const TabBarUsage = () => {
  return (
    <div className='h-[200vh] bg-red-400 w-full'>
        <TabBar type='sticky' blur>
            <Tab icon={HomeIcon} active caption='Home'/>
            <Tab icon={SearchIcon} caption='Search'/>
            <Tab icon={ZapIcon} caption='Now'/>
            <Tab icon={HeartIcon} caption='Favourite' marker={<Marker type='1digit' text='2' color='orange-dark'/>}/>
            <Tab icon={UserIcon} caption='Profile'/>
        </TabBar>
    </div>
  )
}

export default TabBarUsage