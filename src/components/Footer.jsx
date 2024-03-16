import { Link } from "react-router-dom"


const Footer = () => {
  return (
<div className="
w-full
mt-20
h-[50vh]
">
 <div className="
 w-full
 flex
 flex-col
 md:flex-row
 
 " 
 >
  <h1 className="
  uppercase
  text-2xl
  font-bold
  text-gray-300
  text-center
  mt-3
  mb-6
  "
  >
    Nathan.
  </h1>
<div>
  <ul className="
  flex
  items-center
  justify-around 
  flex-wrap
  p-3
  ">
    <li className="text-xl font-bold text-gray-200"><Link>Home</Link></li>
    <li><Link className="text-xl font-bold text-gray-200">About</Link></li>
    <li className="text-xl font-bold text-gray-200"><Link>Work</Link></li>
    <li className="text-xl font-bold text-gray-200"><Link>Contact</Link></li>
  </ul>

</div>
<div>
  <p className="
  text-gray-400
  text-xl
  font-bold
  text-center
  mt-9
  ">Built by Nathan with Love</p>
</div>
 </div>

</div>
  )
}

export default Footer