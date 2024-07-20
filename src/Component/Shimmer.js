const Shimmer = () => {
    return (
      <div className="card-container">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div key={index} className="shimmer-card"></div>
          ))}
      </div>
    );
  };
  
  export default Shimmer;
  