import Image from 'next/image';
import { FaDiscord, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light p-6">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        <div className="mb-4 md:mb-0">
          <Image src="/StreamStaking-logo.png" alt="Logo" width={80} height={80} />
        </div>

        <div className="flex">
          <a
            href="https://discord.gg/yourdiscordlink" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl mx-4 hover:scale-110 transition-transform" 
          >
            <FaDiscord className="text-3xl" />
            <span className="text-xs mt-1">anth.eth_</span>
          </a>
          <a
            href="https://github.com/anth-riv/StakeStream"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl mx-4 hover:scale-110 transition-transform"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
