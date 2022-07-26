import React from 'react'
import Post from '../Post'

const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

const tweets = [
  {
      displayName: 'Shoyeb',
      userName: '0x8Cd390f697ffDc176f1870D2F3883883698434fD',
      avatar:
          'https://media-exp1.licdn.com/dms/image/C5603AQGF0BgXZMc8KA/profile-displayphoto-shrink_200_200/0/1656483439417?e=1662595200&v=beta&t=WuXBqXwxXgbG-OgV3AGw5xGTepWrFfWXip5tEnUdCBk',
      text: 'gm',
      isProfileImageNft: false,
      timestamp: '2022-05-01T12:00:00.000Z'
  },
  {
      displayName: 'Shoyeb',
      userName: '0x8Cd390f697ffDc176f1870D2F3883883698434fD',
      avatar:
          'https://media-exp1.licdn.com/dms/image/C5603AQGF0BgXZMc8KA/profile-displayphoto-shrink_200_200/0/1656483439417?e=1662595200&v=beta&t=WuXBqXwxXgbG-OgV3AGw5xGTepWrFfWXip5tEnUdCBk',
      text: 'gm',
      isProfileNft: false,
      timestamp: '2021-04-01T12:00:00.000Z'
  },
  {
      displayName: 'Shoyeb',
      userName: '0x8Cd390f697ffDc176f1870D2F3883883698434fD',
      avatar:
          'https://media-exp1.licdn.com/dms/image/C5603AQGF0BgXZMc8KA/profile-displayphoto-shrink_200_200/0/1656483439417?e=1662595200&v=beta&t=WuXBqXwxXgbG-OgV3AGw5xGTepWrFfWXip5tEnUdCBk',
      text: 'gm',
      isProfileNft: false,
      timestamp: '2022-05-01T12:00:00.000Z'
  },
  {
      displayName: 'Shoyeb',
      userName: '0x8Cd390f697ffDc176f1870D2F3883883698434fD',
      avatar:
          'https://media-exp1.licdn.com/dms/image/C5603AQGF0BgXZMc8KA/profile-displayphoto-shrink_200_200/0/1656483439417?e=1662595200&v=beta&t=WuXBqXwxXgbG-OgV3AGw5xGTepWrFfWXip5tEnUdCBk',
      text: 'gm',
      isProfileNft: false,
      timestamp: '2022-02-14T12:00:00.000Z'
  }
]


const ProfileTweets = () => {
  return (
    <div className={style.wrapper}>
      {
      tweets?.map((tweet,index)=>{
        return(
          <Post
        key={index}
        tweet={tweet}
        displayName="Shoyeb Akter"
        userName={`$(tweet.userName.slice(0,4))...$(tweet.userName.slice(-4))`}
        />
        )
      })}
    </div>
  )
}

export default ProfileTweets