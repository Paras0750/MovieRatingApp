import { Link } from "react-router-dom"
import { ModeToggle } from "./mode-toggle"

export const Navbar = () => {
  return (
    <div className="font-bold text-2xl">
      <div className="flex items-center justify-between">
        <div className="flex gap-5">
          <div><Link to={"/"}><h5>Home</h5></Link></div>
          <div><Link to={"/rated"}><h5>Rated</h5></Link></div>
        </div>
        <div className="flex gap-5 items-center">
          <Link to={"/auth"} ><h5>Auth </h5></Link>
          <ModeToggle />
        </div>
      </div>
    </div >
  )
}

