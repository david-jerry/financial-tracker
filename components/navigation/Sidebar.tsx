"use client";

import Link from 'next/link'
import Image from "next/image"

import React from 'react'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

export default function Sidebar({ user }: SiderbarProps) {
  const pathname = usePathname()
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="" className="flex mb-12 cursor-pointer items-center gap-2">
          <Image className="size-[24px] max-xl:size-14" src={'/icons/logo.svg'} alt={'logo'} height={34} width={34} />
          <h1 className="sidebar-logo">FinTracker</h1>
        </Link>

        {sidebarLinks.map((item) => {

          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
          return (
            <Link className={cn('sidebar-link', {
              'bg-bank-gradient': isActive
            })} key={item.label} href={item.route}>
              <div className="relative size-6">
                <Image src={item.imgURL} alt={item.label} fill className={cn({
                  'brightness-[3] invert-0': isActive
                })} />
              </div>
              <p className={cn(
                'sidebar-label', { 
                '!text-white': isActive
              })}>{item.label}</p>
            </Link>
          )
        })}
      </nav>
    </section>
  )
}
