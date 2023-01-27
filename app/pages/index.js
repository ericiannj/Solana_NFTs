import React from "react";
import dynamic from 'next/dynamic';
import CandyMachine from "../components/CandyMachine";
import { useWallet } from "@solana/wallet-adapter-react";

const Home = () => {
    const WalletMultiButtonDynamic = dynamic(
        async () => (
            await import("@solana/wallet-adapter-react-ui")).WalletMultiButton, {ssr: false}
    )
    const wallet = useWallet();
    const renderNotConnectedContainer = () => (
        <div>
            <img src="https://media.giphy.com/media/58Fr0zNVJyoRX6H3wY/giphy.gif" alt="emoji"/>

            <div className="button-container">
                <WalletMultiButtonDynamic className="cta-button connect-wallet-button" />
            </div>
        </div>
    )

    return (
        <div className="App">
            <div className="container">
                <div className="header-container">
                    <p className="header">🍭 Candy Drop</p>
                    <p className="sub-text">NFTs Machine</p>
                    {wallet.publicKey ? < CandyMachine walletAddress={wallet} /> : renderNotConnectedContainer()}
                </div>
                <div className="footer-container">
                    <img alt="GitHub Logo" className="github-logo" src="github-logo.png" />
                    <a className="footer-text" href="https://github.com/ericiannj" target="_blank" rel="noreferrer">By @ericiannj</a>
                </div>
            </div>
        </div>
    );
};

export default Home;
