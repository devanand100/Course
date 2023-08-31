import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { nanoid } from "nanoid";
import { FriendType } from "./types";

type PropTypes = {
  setFriends: (arg: FriendType) => void;
};
function AddFriendForm({ setFriends }: PropTypes) {
  const uniqueId = nanoid();
  const [friendName, setFriendName] = useState("");
  const [profileUrl, setProfileUrl] = useState(
    `https://i.pravatar.cc/150?u=${uniqueId}`
  );

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="p-5 flex flex-col flex-wrap bg-gray-100 shadow-md  shadow-orange-100 mt-4 rounded-md items-end gap-5 w-80"
    >
      <div>
        <label className="flex">
          <p> 🙍️ Friends Name :</p>
        </label>

        <Input
          type="text"
          value={friendName}
          onChange={(e) => setFriendName(e.target.value)}
        />
      </div>

      <div>
        <label className="flex">
          <p>🖼️Image Url :</p>
        </label>

        <Input
          type="text"
          value={profileUrl}
          onChange={(e) => setProfileUrl(e.target.value)}
        />
      </div>

      <Button classes="self-end">Add</Button>
    </form>
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (friendName.length < 1 || profileUrl.length < 5) {
      return;
    }

    const newFriend = {
      id: uniqueId,
      name: friendName,
      image: profileUrl,
      balance: 0,
    };

    setFriends(newFriend);
    setProfileUrl("");
    setFriendName("");
  }
}

export default AddFriendForm;
