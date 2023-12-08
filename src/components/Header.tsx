import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-dark shadow-lg">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6 md:px-12">
        <div className="flex items-center">
          <Link href="/" passHref>
            <div className="flex items-center cursor-pointer">
              <Image src="/StreamStaking-logo.png" alt="Logo" width={40} height={40} />
              <span className="text-lg font-bold text-primary hover:text-light transition-colors ml-2">
                Stream Staking
              </span>
            </div>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/staking" passHref><span className="text-light hover:text-primary transition-colors cursor-pointer">Staking</span></Link>
          <Link href="/portfolio" passHref><span className="text-light hover:text-primary transition-colors cursor-pointer">Portfolio</span></Link>
          <Link href="/dashboard" passHref><span className="text-light hover:text-primary transition-colors cursor-pointer">Dashboard</span></Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;


  

