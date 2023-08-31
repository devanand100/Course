import { useState } from "react";
import Button from "./Button";
import Friend from "./Friend";
import { FriendType } from "./types";
import AddFriendForm from "./AddFriendForm";

type PropTypes = {
  friends: FriendType[];
  setSelectedFriend: (arg0: string) => void;
  selectedFriend: string;
  setFriends: (arg: FriendType) => void;
};

function FriendList({
  friends,
  setSelectedFriend,
  selectedFriend,
  setFriends,
}: PropTypes) {
  const [addFriend, setAddFriend] = useState(false);

  return (
    <div className="flex flex-col p-5">
      <div className=" flex flex-col gap-3">
        {friends.map((friend) => (
          <Friend
            friend={friend}
            onButtonClick={() => buttonClickHandler(friend.id)}
            selected={selectedFriend === friend.id}
            key={friend.id}
          />
        ))}
      </div>

      {addFriend && <AddFriendForm setFriends={setFriends} />}
      <Button
        onClick={() => setAddFriend((b) => !b)}
        classes="w-28 self-end mt-5 "
      >
        {addFriend ? "Close" : "Add Friend"}
      </Button>
    </div>
  );

  function buttonClickHandler(id: string) {
    if (selectedFriend === id) {
      setSelectedFriend("");
    } else {
      setSelectedFriend(id);
    }
  }
}

export default FriendList;
