import { useAccount, useSignMessage } from 'wagmi'
import { useRouter } from 'next/navigation'
import { SiweMessage } from 'siwe'
import { signIn as signInAuth } from 'next-auth/react'

export function useAuth() {
  const { address } = useAccount()
  const { signMessageAsync } = useSignMessage()
  const router = useRouter()

  const signIn = async () => {
    try {
      const message = new SiweMessage({
        domain: window.location.host,
        address,
        statement: 'Sign in with Ethereum to CredVault',
        uri: window.location.origin,
        version: '1',
        chainId: 80001, // Mumbai testnet
        nonce: await fetch('/api/auth/nonce').then(res => res.text())
      })

      const signature = await signMessageAsync({
        message: message.prepareMessage()
      })

      const response = await signInAuth('credentials', {
        message: JSON.stringify(message),
        signature,
        redirect: false,
      })

      if (response?.ok) {
        router.push('/dashboard')
      }
    } catch (error) {
      console.error('Error signing in:', error)
    }
  }

  return { signIn, address }
}
