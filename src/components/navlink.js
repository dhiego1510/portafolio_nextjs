"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLink = ({ link }) => {

  const pathName = usePathname();
   

  return (
    <Link className={pathName === link.url ? "active" : undefined} href={link.url}>
      {link.title}
    </Link>
  )
}

export default NavLink