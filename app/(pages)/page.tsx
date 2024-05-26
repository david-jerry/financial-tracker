import BalanceComp from '@/components/general/BalanceComp'
import GreetingComp from '@/components/general/GreetingComp'
import React from 'react'
import users from "@/dummy-data/users.json"
import RightSidebar from '@/components/home/RightSidebar'

export default function Dashboard() {
  const user = users[0]

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <GreetingComp type={'greeting'} subtext={'Access and Manage your account and transactions efficiently'} title="Welcome" user={user.firstName || "Anonymous"} />

          <BalanceComp accounts={[]} totalBanks={1} totalCurrentBalance={1250.00} />
        </header>

        {/* recent transaction */}
      </div>
      <RightSidebar user={user} transactions={[]} banks={[]}/>
    </section>
  )
}
