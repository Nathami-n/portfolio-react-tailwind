import { Link } from "react-router-dom"


const Footer = () => {
  return (
<div className="
max-w-[1250px]
mx-auto
mt-12
md:mt-12
h-[50vh]
">
 <div className="
 w-full
 flex
 flex-col
 md:flex-row
 md:justify-between
 md:items-center
 
 " 
 >
  <h1 className="
  uppercase
  text-2xl
  font-bold
  text-gray-300
  text-center

  mb-6
  "
  >
    Nathan.
  </h1>
<div className="
md:w-[600px]
">
  <ul className="
  flex
  w-full
  items-center
  justify-around
  md:justify-between
  flex-wrap
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
  max-md:text-center
  max-md:mt-9
  ">Built by Nathan with Love</p>
</div>
 </div>

</div>
  )
}

export default Footer