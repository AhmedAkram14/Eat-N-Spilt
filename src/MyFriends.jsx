import React from 'react';

import AddFriend from './AddFriend';
import OneFriend from './OneFriend';

const MyFriends = ({
  friends,
  setFriends,
  billVisible,
  setBillVisible,
  selectedFriend,
  setSelectedFriend,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {friends.map((fr) => (
        <OneFriend
          key={fr.id}
          name={fr.name}
          id={fr.id}
          photo={fr.photo}
          balance={fr.balance}
          billVisible={billVisible}
          setBillVisible={setBillVisible}
          selectedFriend={selectedFriend}
          setSelectedFriend={setSelectedFriend}
        ></OneFriend>
      ))}
      <AddFriend friends={friends} setFriends={setFriends} />
    </div>
  );
};

export default MyFriends;
