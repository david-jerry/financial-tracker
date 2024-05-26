import { formatAmount } from '@/lib/utils'
import React from 'react'
import AnimateCountUp from '@/components/general/AnimateCountUp'
import DoughnutChart from '@/components/charts/DoughnutChart'

export default function BalanceComp({ accounts = [], totalBanks, totalCurrentBalance }: BalanceBoxProps) {
    return (
        <section className="total-balance">
            <div className="total-balance-chart">
                {/* Doughnut chart */}
                <DoughnutChart accounts={accounts} />
            </div>

            <div className="flex flex-col gap-6">
                <h2 className="header-2">
                    Bank Accounts: {totalBanks}
                </h2>
                <div className="flex flex-col gap-2">
                    <p className='total-balance-label'>
                        Total Current Balance
                    </p>
                    <div className="total-balance-amount flex-center gap-2">
                        <AnimateCountUp value={totalCurrentBalance} />
                    </div>
                </div>
            </div>
        </section>
    )
}
