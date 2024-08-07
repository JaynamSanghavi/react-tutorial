const Shimmer = () => {
    return (
      <div className="flex flex-wrap">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div key={index} className="w-52 h-52 bg-gray-400 m-4"></div>
          ))}
      </div>
    );
  };
  
  export default Shimmer;
  