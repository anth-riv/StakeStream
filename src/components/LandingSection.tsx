import Image from 'next/image';

const LandingSection = () => {
  return (
    <div className="gradient flex flex-col items-center justify-center py-12 px-4 text-center">
      <h1 className="mt-8 mb-8 text-4xl md:text-6xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-primary">
        Welcome to Stream Staking
      </h1>
      <p className="mt-8 text-lg md:text-xl text-light">
        Engage in cryptocurrency staking with ease. Explore various staking options,
        manage your portfolio, and connect your Ethereum wallet seamlessly.
      </p>
      <div className="mt-8 w-full max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl h-auto overflow-hidden">
        <Image
          src="/Mascot-StreamStaking.png"
          alt="Mascot-logo"
          width={400} 
          height={200} 
          layout="responsive"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default LandingSection;
