import React, { useState } from 'react';

const Bill = ({ billVisible, selectedFriend, friends, setFriends }) => {
  const [billValueInput, setBillValueInput] = useState("");
  const [yourValueInput, setYourBillValueInput] = useState("");
  const [whoPay, setWhoPay] = useState("you");
  const splitBill = () => {
    const newFriends = friends.map((friend) => {
      if (friend.id === selectedFriend.id) {
        return {
          ...friend,
          balance:
            whoPay === "you" ? yourValueInput - billValueInput : yourValueInput,
        };
      }
      return friend;
    });
    setFriends(newFriends);
    // console.log(newFriends);
    setBillValueInput("");
    setYourBillValueInput("");
    setWhoPay("you");
  };
  return (
    <>
      {billVisible && (
        <div className="bill">
          <h2 style={{ textTransform: "uppercase", fontSize: "30px" }}>
            Split Bill With {selectedFriend.name}
          </h2>
          <div className="value bill-input">
            <label htmlFor="">💰 Bill Value</label>
            <input
              type="text"
              name="billValue"
              id="billValue"
              value={billValueInput}
              onChange={(e) => setBillValueInput(e.target.value)}
            />
          </div>
          <div className="your-expenses bill-input">
            <label htmlFor="">🙎‍♂️ Your Expenses</label>
            <input
              type="text"
              name="yourExpenses"
              id="yourExpenses"
              value={yourValueInput}
              onChange={(e) => setYourBillValueInput(e.target.value)}
            />
          </div>
          <div className="friend-expenses bill-input">
            <label htmlFor="">👨🏻‍🤝‍👨🏻 {selectedFriend.name}'s Expenses</label>
            <input
              type="text"
              name="friendExpenses"
              id="friendExpenses"
              disabled
              value={billValueInput - yourValueInput}
            />
          </div>
          <div className="who-pay bill-input">
            <label htmlFor="">🤑 Who's Paying The Bill ?</label>
            <select
              name="whoPay"
              id="whoPay"
              value={whoPay}
              onChange={(e) => setWhoPay(e.target.value)}
            >
              <option value="you">You</option>
              <option value={selectedFriend.name}>{selectedFriend.name}</option>
            </select>
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "orange",
              padding: "8px 12px",
              color: "#444",
              border: "none",
              width: "100px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              alignSelf: "flex-end",
              margin: "5% 0%",
            }}
            onClick={splitBill}
          >
            Split Bill
          </button>
        </div>
      )}
    </>
  );
};

export default Bill;
