import { MenuItems } from "./MenuItems";
import { itemmenu } from "./itemsmenu";



export const Navbar = () => {
  return (
    <nav>
      <ul className="menus">
        {
          itemmenu.map((menu, index) => {
            const depthLevel = 0;
            return <MenuItems items={menu} key={index} depthLevel={depthLevel} />
          })
        }
      </ul>
    </nav>
  )
}