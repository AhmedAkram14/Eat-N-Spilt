import React, { useState } from 'react';

const AddFriend = ({ friends, setFriends }) => {
  const [visibleAdd, setVisibleAdd] = useState(false);
  const [newName, setNewName] = useState("");
  const [newPhoto, setNewPhoto] = useState(
    "https://lh3.googleusercontent.com/proxy/aMTbLDKlIbZU5GUknZq3k-QAFJ817b032giiB3CcSbo35NssKvlR-BLhEbLyujjrmszRm5qm0DqpSioNtEu_pM3xgkmLKQlOo7GUCgU3qqxywk-lTf6--Q"
  );

  const changeAddVisibilty = () => {
    setVisibleAdd((prev) => !prev);
  };
  const addFriend = () => {
    if (!newName || !newPhoto) return;
    const newFriend = {
      name: newName,
      photo: newPhoto,
      balance: 0,
      id: new Date(),
    };
    setFriends((prev) => [...prev, newFriend]);
    setNewName("");
    setNewPhoto(
      "https://lh3.googleusercontent.com/proxy/aMTbLDKlIbZU5GUknZq3k-QAFJ817b032giiB3CcSbo35NssKvlR-BLhEbLyujjrmszRm5qm0DqpSioNtEu_pM3xgkmLKQlOo7GUCgU3qqxywk-lTf6--Q"
    );
    changeAddVisibilty();
  };
  return (
    <>
      <div style={{ alignSelf: "flex-end", margin: "5% 3%" }}>
        {visibleAdd && (
          <div
            className="new-friend"
            style={{
              backgroundColor: "rgb(255, 245, 200)",
              borderRadius: "8PX",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              padding: "30px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <label htmlFor="newName">👨🏻‍🤝‍👨🏻 Friend Name </label>
              <input
                type="text"
                id="newName"
                name="newName"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Enter your friend's name"
                style={{
                  border: "none",
                  padding: "0.5em",
                  borderRadius: "8PX",
                  outline: "none",
                }}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <label htmlFor="Imgurl">🌆 Img URL </label>
              <input
                type="text"
                id="Imgurl"
                name="Imgurl"
                value={newPhoto}
                onChange={(e) => setNewPhoto(e.target.value)}
                placeholder="Enter Img URL"
                style={{
                  border: "none",
                  padding: "0.5em",
                  borderRadius: "8PX",
                  outline: "none",
                }}
              />
            </div>
            <button
              style={{
                backgroundColor: "orange",
                padding: "8px 12px",
                color: "#444",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
              onClick={addFriend}
            >
              Add
            </button>
          </div>
        )}
      </div>
      <button
        style={{
          backgroundColor: "orange",
          padding: "8px 12px",
          color: "#444",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
          alignSelf: "flex-end",
          margin: "5% 3%",
        }}
        onClick={changeAddVisibilty}
      >
        {visibleAdd ? `Close ` : "AddFriend"}
      </button>
    </>
  );
};

export default AddFriend;
