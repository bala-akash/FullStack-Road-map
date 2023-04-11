const user = {
  name: "Coder",
  imageUrl:
    "https://i.pinimg.com/236x/6a/25/ff/6a25ff0e2c8d33e6ede55cb939774ce2.jpg",
  imageSize: 300,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        style={{ width: user.imageSize - 100, height: user.imageSize }}
      />
    </>
  );
}
