import { BsStars } from 'react-icons/bs'
import TweetBox from './TweetBox'
import Post from '../Post'

const style = {
    wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
}



function Feed() {
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


    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <div className={style.headerTitle}>Home</div>
                <BsStars />
            </div>
            <TweetBox />
            {
                tweets.map((tweet, index) =>
                    <Post
                        key={index}
                        tweet={tweet}
                    />
                )
            }
        </div>
    )
}

export default Feed