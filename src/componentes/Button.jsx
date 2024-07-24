import { Link } from "react-router-dom"

function Boton({ children, type, to}) {

  const buttonTypes = {
    "primary": " w-32 h-10 text-white bg-blue-500 mb-3 rounded-full",
    "link": "w-32 h-10 text-white bg-blue-500 mb-3 rounded-full flex justify-center pt-[7px] no-underline hover:bg-blue-800 "
  }

  if(type === "link"){
    return(
      <Link to={to} className={buttonTypes[type]}>
      {children}
      </Link>
    )
  } return (
    <button className={buttonTypes["primary"]}>{children}</button>
  )


}


export default Boton