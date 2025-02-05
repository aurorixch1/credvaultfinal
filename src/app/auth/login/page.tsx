'use client'

import { CustomConnectButton } from '@/components/auth/ConnectButton'
import { motion } from 'framer-motion'

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E1E2E] to-[#6D28D9] flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Welcome Back</h2>
        <div className="space-y-6">
          <CustomConnectButton />
          <p className="text-center text-[#F8FAFC]/60 text-sm">
            Connect your wallet to access your credentials
          </p>
        </div>
      </motion.div>
    </div>
  )
}
