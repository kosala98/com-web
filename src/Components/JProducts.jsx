const JProducts = ({ Image, Description }) => {
  return (
    <div className="card shadow-sm">
      <img src={Image} alt="" style={{ height: "200px" }} />
      <div className="card-body">
        <p>{Description}</p>
      </div>
    </div>
  );
};

export default JProducts;
