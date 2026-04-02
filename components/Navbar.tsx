import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 md:p-9 p-3">
        <Image src="/images/nav-logo.svg" alt="nav-logo" width={150} height={150} className="md:w-24 w-20"/>
    </nav>
  )
}

export default Navbar