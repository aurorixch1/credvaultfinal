'use client'

import { AuthLayout } from '@/components/auth/AuthLayout'
import { CustomConnectButton } from '@/components/auth/ConnectButton'
import { useAccount } from 'wagmi'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Login() {
  const { isConnected } = useAccount()
  const router = useRouter()

  useEffect(() => {
    if (isConnected) {
      router.push('/dashboard')
    }
  }, [isConnected, router])

  return (
    <AuthLayout>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900">Sign in to CredVault</h3>
          <p className="mt-1 text-sm text-gray-500">
            Connect your wallet to access your credentials
          </p>
        </div>
        <CustomConnectButton />
        <div className="text-sm text-center">
          <a href="#" className="text-indigo-600 hover:text-indigo-500">
            Learn more about Web3 wallets
          </a>
        </div>
      </div>
    </AuthLayout>
  )
}
