'use client'

import { CustomConnectButton } from '@/components/auth/ConnectButton'
import { Shield, Lock, CheckCircle, Key } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-12">
          <div className="flex items-center justify-center space-x-4">
            <Shield className="w-12 h-12 text-indigo-500" />
            <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 font-sans">
              CredVault
            </h1>
          </div>
          
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Revolutionizing credential management with blockchain security. 
            <span className="block mt-2 text-indigo-400">Your credentials. Your control. Your future.</span>
          </p>
          
          <div className="max-w-xs mx-auto transform hover:scale-105 transition-transform duration-300">
            <CustomConnectButton />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <FeatureCard 
              icon={<Lock className="w-8 h-8" />}
              title="Military-Grade Security"
              description="Advanced encryption with blockchain-powered protection"
            />
            <FeatureCard 
              icon={<CheckCircle className="w-8 h-8" />}
              title="Instant Verification"
              description="Real-time credential validation with zero-knowledge proofs"
            />
            <FeatureCard 
              icon={<Key className="w-8 h-8" />}
              title="Sovereign Control"
              description="Full authority over your digital credentials"
            />
          </div>
        </div>
      </div>
    </main>
  )
}

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-indigo-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20">
    <div className="text-indigo-500 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
)
