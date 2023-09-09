import { useState } from "react";
import { FriendType } from "./types";
import FriendList from "./FriendList";
import SplitForm from "./splitForm";

function Main() {
  const [selectedFriend, setSelectedFriend] = useState("");
  const [friends, setFriends] = useState<FriendType[]>([
    {
      id: "i6qFltnrqGFO0eQIzLyTB",
      name: "Dev",
      image: "https://i.pravatar.cc/150?u=i6qFltnrqGFO0eQIzLyTB",
      balance: 100,
    },
  ]);

  const friendObj = friends.find((friend) => friend.id === selectedFriend);

  //   console.log(selectedFriend);

  return (
    <div className="grid md:grid-cols-[1fr,1fr] gap-10">
      <FriendList
        friends={friends}
        setSelectedFriend={(val: string) => setSelectedFriend(val)}
        selectedFriend={selectedFriend}
        setFriends={(friend: FriendType) => setFriends([...friends, friend])}
      />
      {friendObj && (
        <SplitForm selectedFriend={friendObj} setFriends={splitExpense} />
      )}
    </div>
  );

  function splitExpense(updatedFriend: FriendType) {
    setFriends((friends) =>
      friends.map((fr) => {
        if (fr.id === updatedFriend?.id) {

          return { ...fr, balance: updatedFriend.balance };
        }
        return fr;
      })
    );
  }
}

export default Main;
