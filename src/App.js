import './App.css';

import { useState } from 'react';

import Bill from './Bill';
import MyFriends from './MyFriends';

const intialFriends = [
  {
    name: "Hesham",
    photo:
      "https://lh3.googleusercontent.com/proxy/aMTbLDKlIbZU5GUknZq3k-QAFJ817b032giiB3CcSbo35NssKvlR-BLhEbLyujjrmszRm5qm0DqpSioNtEu_pM3xgkmLKQlOo7GUCgU3qqxywk-lTf6--Q",
    id: "1",
    balance: 0,
  },
  {
    name: "Khaled",
    photo:
      "https://lh3.googleusercontent.com/proxy/aMTbLDKlIbZU5GUknZq3k-QAFJ817b032giiB3CcSbo35NssKvlR-BLhEbLyujjrmszRm5qm0DqpSioNtEu_pM3xgkmLKQlOo7GUCgU3qqxywk-lTf6--Q",
    id: "2",
    balance: 0,
  },
  {
    name: "Emad",
    photo:
      "https://lh3.googleusercontent.com/proxy/aMTbLDKlIbZU5GUknZq3k-QAFJ817b032giiB3CcSbo35NssKvlR-BLhEbLyujjrmszRm5qm0DqpSioNtEu_pM3xgkmLKQlOo7GUCgU3qqxywk-lTf6--Q",
    id: "3",
    balance: 0,
  },
];
function App() {
  const [friends, setFriends] = useState(intialFriends);
  const [billVisible, setBillVisible] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  return (
    <>
      <h1 style={{ textAlign: "center", margin: "10px 0px" }}>
        {" "}
        🤤 Eat N Split
      </h1>
      <div className="app">
        <div className="left" style={{ width: "fit-content" }}>
          <MyFriends
            friends={friends}
            setFriends={setFriends}
            billVisible={billVisible}
            setBillVisible={setBillVisible}
            selectedFriend={selectedFriend}
            setSelectedFriend={setSelectedFriend}
          />
        </div>
        <div className="right">
          <Bill
            billVisible={billVisible}
            selectedFriend={selectedFriend}
            friends={friends}
            setFriends={setFriends}
          />
        </div>
      </div>
    </>
  );
}

export default App;
