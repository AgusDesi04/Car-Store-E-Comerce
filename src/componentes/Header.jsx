import CartWidget from "./CartWidget";
import NavBar from "./NavBar";



function Header() {


  return (
    <div className="box-content h-32 w-fullsize bg-[#242424] border-b-4 border-[#DAA520] ">
      <header className="bg-[#242424]">
        <NavBar isHeader={true} />
        <CartWidget />

      </header>
    </div>


  )
}

export default Header