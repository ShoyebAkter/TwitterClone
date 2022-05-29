import React from 'react';


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
    return (
        <div className={style.wrapper}>
            <div className={style.tweetBoxLeft}>
                <img
                src='https://www.facebook.com/photo.php?fbid=3499300786962997&set=pb.100006493302398.-2207520000..&type=3'
                alt="profile image"
                className={style.profileImage}
                />
            </div>
        </div>
    );
};

export default TweetBox;