import React, { useContext, useState } from "react";

function Faq() {
    return (
        <div>
      <section class="text-gray-700">
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              Frequently Asked Question
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              The most common questions about how our business works and what
              can do for you.
            </p>
          </div>
          <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div class="w-full lg:w-1/2 px-4 py-2">
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                
                How can I make my automatic will transfer contract accessible to beneficiaries?
                
                </summary>

                <span>
                
                To make your automatic will transfer contract accessible to beneficiaries, you will need to provide them with the necessary information to access the blockchain platform where the contract is deployed. This may include providing instructions for creating a digital wallet and accessing the blockchain network, as well as ensuring that beneficiaries have the necessary private keys to access their assets.
                
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
               
                How can I ensure the security of my automatic will transfer contract on a blockchain platform?
                </summary>

                <span>
                To ensure the security of your automatic will transfer contract on a blockchain platform, you should follow best practices for smart contract development, such as conducting thorough testing, using secure coding practices, and performing regular security audits. You should also ensure that the blockchain platform you are using has appropriate security measures in place, such as encryption and access controls.
                
                
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                Is automatic will transfer using blockchain legally valid?
                </summary>

                <span>
                The legality of automatic will transfer using blockchain depends on the laws of the jurisdiction where the will is created and executed. While some jurisdictions have not yet recognized the use of blockchain technology for legal purposes, others have passed legislation that recognizes the validity of blockchain-based transactions and smart contracts.
                </span>
              </details>
            </div>
            <div class="w-full lg:w-1/2 px-4 py-2">
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                What are the technical requirements for deploying automatic will transfer contracts on a blockchain platform?
                </summary>

                <span class="px-4 py-2">
                The technical requirements for deploying automatic will transfer contracts on a blockchain platform will depend on the specific platform being used. Generally, you will need to have a basic understanding of programming languages such as Solidity (for Ethereum) or Go (for Hyperledger Fabric) and be able to use development tools such as Truffle or Remix to create and test your smart contracts.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                How does automatic will transfer using blockchain work?
                </summary>

                <span class="px-4 py-2">
                Automatic will transfer using blockchain works by creating a smart contract on a blockchain network that is programmed to execute the transfer of assets according to the terms of a will. When the conditions of the smart contract are met, such as the death of the testator, the assets are automatically transferred to the designated beneficiaries.
                
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                What is automatic will transfer using blockchain?
                </summary>

                <span class="px-4 py-2">
                Automatic will transfer using blockchain is a system that allows for the automatic transfer of assets according to the terms of a will without the need for intermediaries or manual intervention. The transfer is initiated and executed through smart contracts on a blockchain network.
                
                </span>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
}

export default Faq;