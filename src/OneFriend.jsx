import React from 'react';

const OneFriend = (props) => {
  const changeBillVisibilty = () => {
    props.setBillVisible(true);
    props.setSelectedFriend(props);

    console.log(props);
  };
  return (
    <div
      className="friend"
      style={{
        display: "flex",
        gap: "30px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        className="user"
        style={{ display: "flex", alignItems: "center", gap: "15px" }}
      >
        <div className="img">
          <img src={props.photo} alt={props.name} style={{ width: "50px" }} />
        </div>
        <div className="details">
          <h3 style={{ marginBottom: "0" }}>{props.name}</h3>
          <h4
            style={{
              marginTop: "0",
              fontSize: "14px",
              fontWeight: "normal",
              color:
                props.balance > 0
                  ? "#ef5555"
                  : props.balance < 0
                  ? "green"
                  : "#444",
            }}
          >
            {props.balance > 0
              ? `${props.name} owes you ${props.balance} $`
              : props.balance < 0
              ? `You owe ${props.name} ${Math.abs(props.balance)} $`
              : `Your and ${props.name} are even`}
          </h4>
        </div>
      </div>
      <div className="select">
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
          onClick={changeBillVisibilty}
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default OneFriend;
