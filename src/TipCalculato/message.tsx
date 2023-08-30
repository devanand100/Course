type PropType = {
  total: number;
  tip: number;
};
function Message({ total, tip }: PropType) {
  return (
    <p>
      {total > 0 ? (
        <h1 className="text-2xl">{` You pay $${total} ($${
          total - tip
        }+$${tip}tip)`}</h1>
      ) : (
        ""
      )}
    </p>
  );
}

export default Message;
