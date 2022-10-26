export const Frame = ({ filepath }) => {
  console.log("path : ", filepath);
  return (
    <div className="frame">
      <img src={filepath} alt="filepath" className="image" />
    </div>
  );
};
