"use client";

import React from 'react'
import Image from "next/image"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function MobileNav({ user }: MobileNavProps) {
    const pathname = usePathname();

    return (
        <section className="w-full max-w-[264px]">
            <Sheet>
                <SheetTrigger>
                    <Image src={'/icons/hamburger.svg'} alt={'menu-icon'} width={30} height={30} className={`cursor-pointer`} />
                </SheetTrigger>
                <SheetContent side="left" className="bg-white border-none">
                    <Link href="" className="flex cursor-pointer items-center gap-1 px-4">
                        <Image src={'/icons/logo.svg'} alt={'logo'} height={34} width={34} />
                        <h1 className="sidebar-logo text-26 font-ibm-plex-serif">FinTracker</h1>
                    </Link>

                    <div className="mobilenav">
                        <SheetClose asChild>
                            <nav className="flex h-full flex-col gap-2 pt-16 text-white">
                                {sidebarLinks.map((item) => {

                                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                                    return (
                                        <SheetClose asChild key={item.route}>
                                            <Link className={cn('mobilenav-sheet_close w-full', {
                                                'bg-bank-gradient': isActive
                                            })} key={item.label} href={item.route}>
                                                <Image src={item.imgURL} alt={item.label} width={20} height={20} className={cn({
                                                    'brightness-[3] invert-0': isActive
                                                })} />
                                                <p className={cn(
                                                    'text-16 font-semibold text-black-2', {
                                                    'text-white': isActive
                                                })}>{item.label}</p>
                                            </Link>
                                        </SheetClose>
                                    )
                                })}

                                {/* user component with data */}
                            </nav>
                        </SheetClose>

                        {/* footer component */}
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    )
}
