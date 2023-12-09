const StakingPools = () => {
  return (
    <div className="mt-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a href="/pool/1" className="card bg-dark text-light p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl md:text-3xl font-bold">Pool #1</h3>
          <p className="mt-4 text-lg md:text-xl">Some details about this staking pool.</p>
        </a>
        <a href="/pool/2" className="card bg-dark text-light p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl md:text-3xl font-bold">Pool #2</h3>
          <p className="mt-4 text-lg md:text-xl">Some details about this staking pool.</p>
        </a>
        <a href="/pool/3" className="card bg-dark text-light p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl md:text-3xl font-bold">Pool #3</h3>
          <p className="mt-4 text-lg md:text-xl">Some details about this staking pool.</p>
        </a>
      </div>
    
      <div className="mt-12 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-light">
          Discover More Pools
        </h2>
        <p className="mt-4 text-lg md:text-xl text-light">
          Explore a wide range of staking options to maximize your earnings.
        </p>
        <a href="/pools" className="mt-8 inline-block bg-primary text-white py-3 px-6 rounded-lg text-lg md:text-xl font-medium hover:bg-opacity-90 transition-all duration-300">
          See More Pools
        </a>
      </div> 
    </div>
  );
};

export default StakingPools;