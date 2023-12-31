import { useState } from "react";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const App = () => {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [frinedArr, setFriendArr] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const handleClick = function () {
    setShowAddFriend((prev) => !prev);
  };
  const handleAddFriend = function (newFriend) {
    setFriendArr((prev) => [...prev, newFriend]);
    setShowAddFriend((prev) => !prev);
  };

  const handleSelectFriend = function (friend) {
    if (selectedFriend?.id === friend.id) setSelectedFriend(null);
    else setSelectedFriend(friend);
    setShowAddFriend(false);
  };

  const handleSplitBill = function (value) {
    console.log(value);
    setFriendArr((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : {
              ...friend,
            }
      )
    );
    setSelectedFriend(null);
    // if (paidBy === "friend")
    //   selectedFriend.balance = selectedFriend.balance - bill;
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={frinedArr}
          onClickBtn={handleSelectFriend}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

        <Button onClick={handleClick}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
};

const FriendList = function ({ friends, onClickBtn, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onClickBtn={onClickBtn}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
};

const Friend = function ({ friend, onClickBtn, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {" "}
          {friend.name} owe you {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && (
        <p className="black">You and {friend.name} are even</p>
      )}
      <Button onClick={() => onClickBtn(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
};

const FormAddFriend = function ({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const id = crypto.randomUUID();
  const handleSubmit = function (e) {
    e.preventDefault();
    if (!name || !image) return;
    const newFriend = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
      id,
    };
    console.log(newFriend);
    onAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👭Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🖼 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add Friend</Button>
    </form>
  );
};

const Button = function ({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

const FormSplitBill = function ({ selectedFriend, onSplitBill }) {
  const [paidBy, setPaidBy] = useState("user");
  const [bill, setBill] = useState("");
  const [userExpense, setUserexpense] = useState("");
  const friendAmount = bill ? bill - userExpense : "";
  const handleSubmit = function (e) {
    e.preventDefault();
    if (!paidBy || !bill) return;
    onSplitBill(paidBy === "user" ? friendAmount : -userExpense);
  };
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰 Bill Value </label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>🤵 Your Expense </label>
      <input
        type="text"
        value={userExpense}
        onChange={(e) =>
          setUserexpense(
            Number(e.target.value) > bill ? userExpense : Number(e.target.value)
          )
        }
      />
      <label>🤵 {selectedFriend.name}'s Expense </label>
      <input type="text" disabled value={friendAmount} />
      <label>🤑 Who's paying the bill </label>
      <select value={paidBy} onChange={(e) => setPaidBy(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
};
export default App;
