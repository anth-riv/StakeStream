import Image from 'next/image';

const LandingSection = () => {
  return (
    <div className="gradient flex flex-col items-center justify-center py-12 px-4 text-center">
      <h1 className="mt-8 mb-8 text-4xl md:text-6xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-primary">
        Welcome to Stream Staking
      </h1>
      <p className="mt-8 text-lg md:text-xl text-light">
        Engage in cryptocurrency staking with ease. Explore various staking options, manage your portfolio, and connect your Ethereum wallet seamlessly
      </p>
      <div className="mt-8 mb-12 w-full max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl h-auto overflow-hidden">
        <Image
          src="/Mascot-StreamStaking.png"
          alt="Mascot-logo"
          width={400} 
          height={200} 
          layout="responsive"
          objectFit="contain"
        />
      </div>

      <div className="mt-12 px-4 text-light">
        <h2 className="text-3xl md:text-4xl font-bold">
          Explore Our Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <a href="/staking" className="flex flex-col">
            <div className="card bg-dark text-light p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex-grow">
              <h3 className="text-2xl md:text-3xl font-bold">Staking Pools</h3>
              <p className="mt-4 text-lg md:text-xl">Access a variety of staking pools to maximize your earnings</p>
            </div>
          </a>

          <a href="/portfolio" className="flex flex-col">
            <div className="card bg-dark text-light p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex-grow">
              <h3 className="text-2xl md:text-3xl font-bold">Portfolio Management</h3>
              <p className="mt-4 text-lg md:text-xl">Efficiently manage and track your crypto assets</p>
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <a href="/dashboard" className="flex flex-col">
            <div className="card bg-dark text-light p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex-grow">
              <h3 className="text-2xl md:text-3xl font-bold">Dashboard</h3>
              <p className="mt-4 text-lg md:text-xl">Get detailed insights into your staking activities</p>
            </div>
          </a>

          <a href="https://github.com/anth-riv/StakeStream" className="flex flex-col" target="_blank" rel="noopener noreferrer">
            <div className="card bg-dark text-light p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex-grow">
              <h3 className="text-2xl md:text-3xl font-bold">Open Source</h3>
              <p className="mt-4 text-lg md:text-xl">Join the development on GitHub</p>
            </div>
          </a>
        </div>
      </div>

      <div className="mt-12 mb-8">
        <a href="/get-started" className="inline-block py-3 px-6 rounded-lg text-lg font-medium transition-all duration-300 bg-gradient-to-r from-blue-300 to-blue-400 hover:from-blue-400 hover:to-blue-500 text-white shadow-md hover:shadow-lg transform hover:scale-105">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default LandingSection;