"use client"
import React from 'react'
import Image from 'next/image'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from 'next/link'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import { navLinks } from '@/constants'
  

const MobileNav = () => {

    const pathname = usePathname()
  return (
    <header className='header'>
        <Link href="/" className="flex items-center gap-2 md:py-2">
            <Image src={'/assets/images/logo-text.svg'} alt={'logo'} width={180} height={28}/>
        </Link>

        <nav className='flex gap-2'>
        <Sheet>
            <SheetTrigger>
                <Image src='/assets/icons/menu.svg' alt='menu' height={32} width={32} className='cursor-pointer'/>
            </SheetTrigger>
            <SheetContent className='sheet-content sm:w-64'>
                <>
                    <Image src={"/assets/images/logo-text.svg"} alt='logo' width={152} height={23}/>
                    <ul className='header-nav_elements'>
                        {navLinks.map((link) => {
                            const isActive = link.route === pathname

                            return (
                                <li key={link.route} className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-dark-700`}>
                                    <Link className='sidebar-link cursor-pointer' href={link.route}>
                                        <Image src={link.icon} alt='logo' width={24} height={24} />
                                        {link.label}
                                    </Link>
                                </li>
                            )
                        })}
                        <li className='flex-center cursor-pointer gap-2 p-4'>
                            <UserButton showName/>
                        </li>
                    </ul>
                </>
            </SheetContent>
            </Sheet>
        </nav>
    </header>
  )
}

export default MobileNav