import { ConnectButton } from '@rainbow-me/rainbowkit'

export const CustomConnectButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        return (
          <div className="w-full">
            {(() => {
              if (!mounted || !account || !chain) {
                return (
                  <button
                    onClick={openConnectModal}
                    className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Connect Wallet
                  </button>
                )
              }

              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    className="w-full py-3 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    Wrong network
                  </button>
                )
              }

              return (
                <button
                  onClick={openAccountModal}
                  className="w-full py-3 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  {account.displayName}
                </button>
              )
            })()}
          </div>
        )
      }}
    </ConnectButton.Custom>
  )
}
