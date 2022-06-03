import React, { useState } from 'react';


const style = {
    wrapper: `px-4 flex flex-row border-b border-[#38444d] pb-4`,
    tweetBoxLeft: `mr-4`,
    tweetBoxRight: `flex-1`,
    profileImage: `height-12 w-12 rounded-full`,
    inputField: `w-full h-full outline-none bg-transparent text-lg`,
    formLowerContainer: `flex`,
    iconsContainer: `text-[#1d9bf0] flex flex-1 items-center`,
    icon: `mr-2`,
    submitGeneral: `px-6 py-2 rounded-3xl font-bold`,
    inactiveSubmit: `bg-[#196195] text-[#95999e]`,
    activeSubmit: `bg-[#1d9bf0] text-white`,
  }

const TweetBox = () => {
    const [tweetMessage,setTweetMessage]=useState('')

    console.log(tweetMessage)
    return (
        <div className={style.wrapper}>
            <div className={style.tweetBoxLeft}>
                <img
                src="https://media-exp1.licdn.com/dms/image/C5603AQGvm80VWkz21w/profile-displayphoto-shrink_800_800/0/1641269680921?e=1659571200&v=beta&t=yhSFupR1mHO3l0g_5HcA3mk3dupxQSX7w9XdncmZYnQ"
                alt="profile image"
                className={style.profileImage}
                />
            </div>
            <div className={style.tweetBoxRight}>
                <form>
                    <textarea
                    className={style.inputField}
                    placeholder="What's happening?"
                    value={tweetMessage}
                    onChange={(e)=>setTweetMessage(e.target.value)}
                    />
                    <div className={style.formLowerContainer}>
                        <div className={style.iconsContainer}></div>
                        <button
                        type='submit'
                        className={`${style.submitGeneral} ${
                            tweetMessage ? style.activeSubmit : style.inactiveSubmit
                        }`}
                        >Tweet</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TweetBox;