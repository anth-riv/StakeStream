import React, { useState } from 'react';
import { ethers } from 'ethers';

const WalletConnect = () => {
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const connectWalletHandler = async () => {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            try {
                await provider.send("eth_requestAccounts", []);
                const signer = provider.getSigner();
                const address = await signer.getAddress();
                
                setDefaultAccount(address);
            } catch (err) {
                setErrorMessage("Error connecting to MetaMask");
            }
        } else {
            setErrorMessage("Please install MetaMask");
        }
    };

    const shortenAddress = (address: string) => {
        return `${address.slice(0, 6)}...${address.slice(-4)}`;
    }

    return (
        <div className="WalletCard">
            {!defaultAccount ? (
                <button className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition duration-300" onClick={connectWalletHandler}>
                    Connect Wallet
                </button>
            ) : (
                <button className="bg-green-500 text-white py-2 px-4 rounded" disabled>
                    Connected: {shortenAddress(defaultAccount)}
                </button>
            )}
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
};

export default WalletConnect;
