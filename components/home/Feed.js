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
                'https://media-exp1.licdn.com/dms/image/C5603AQGvm80VWkz21w/profile-displayphoto-shrink_800_800/0/1641269680921?e=1659571200&v=beta&t=yhSFupR1mHO3l0g_5HcA3mk3dupxQSX7w9XdncmZYnQ',
            text: 'gm',
            isProfileImageNft: false,
            timestamp: '2020-06-01T12:00:00.000Z'
        },
        {
            displayName: 'Shoyeb',
            userName: '0x8Cd390f697ffDc176f1870D2F3883883698434fD',
            avatar:
                'https://media-exp1.licdn.com/dms/image/C5603AQGvm80VWkz21w/profile-displayphoto-shrink_800_800/0/1641269680921?e=1659571200&v=beta&t=yhSFupR1mHO3l0g_5HcA3mk3dupxQSX7w9XdncmZYnQ',
            text: 'gm',
            isProfileNft: false,
            timestamp: '2020-06-01T12:00:00.000Z'
        },
        {
            displayName: 'Shoyeb',
            userName: '0x8Cd390f697ffDc176f1870D2F3883883698434fD',
            avatar:
                'https://media-exp1.licdn.com/dms/image/C5603AQGvm80VWkz21w/profile-displayphoto-shrink_800_800/0/1641269680921?e=1659571200&v=beta&t=yhSFupR1mHO3l0g_5HcA3mk3dupxQSX7w9XdncmZYnQ',
            text: 'gm',
            isProfileNft: false,
            timestamp: '2020-06-01T12:00:00.000Z'
        },
        {
            displayName: 'Shoyeb',
            userName: '0x8Cd390f697ffDc176f1870D2F3883883698434fD',
            avatar:
                'https://media-exp1.licdn.com/dms/image/C5603AQGvm80VWkz21w/profile-displayphoto-shrink_800_800/0/1641269680921?e=1659571200&v=beta&t=yhSFupR1mHO3l0g_5HcA3mk3dupxQSX7w9XdncmZYnQ',
            text: 'gm',
            isProfileNft: false,
            timestamp: '2020-06-01T12:00:00.000Z'
        }
    ]


    return (
        <div className={`${style.wrapper}`}>
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