import Button from "./Button";
import { FriendType } from "./types";

type PropTypes = {
  friend: FriendType;
  onButtonClick: () => void;
  selected: boolean;
};

function Friend({ friend, onButtonClick, selected }: PropTypes) {
  return (
    <div
      className={`grid grid-cols-[auto,1fr,auto] p-4 border-2 cursor-pointer ${
        selected ? "bg-orange-100" : ""
      }`}
      onClick={onButtonClick}
    >
      <img
        src={friend.image}
        alt="friend image"
        className="rounded-full h-14 mx-2 border-2 border-orange-500"
      />
      <div>
        <p className="font-bold text-xl">{friend.name}</p>

        <p className="">
          {friend.balance === 0 && `You and ${friend.name} are even`}
        </p>
        <p className="text-red-800">
          {friend.balance < 0 &&
            `You Owes ${Math.abs(friend.balance)}$ ${friend.name}`}
        </p>
        <p className="text-green-500">
          {friend.balance > 0 && `${friend.name} Owes you ${friend.balance}$ `}
        </p>
      </div>

      <Button onClick={onButtonClick} classes="w-20">
        {selected ? "Close" : "Select"}
      </Button>
    </div>
  );
}

export default Friend;
