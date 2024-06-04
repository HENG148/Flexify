import { useEffect, useRef, useState } from "react"
import { Dropdown } from "./DropDown";


export const MenuItems = ({ items, depthlevel }) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.removeEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  }

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  }

  return (
    <li className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {
        items.submenu ? (<>
          <button type="button" aria-haspopup='menu' aria-expanded={ dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)
          }>
            {items.title
            } {
              ''
            } {
              depthlevel > 0 ? <span> & raquo;</span> : <span className="arrow" />
            } </button> <Dropdown depthlevel={depthlevel
            }
            submens={
              items.submenu
            }
            dropdown={dropdown}
          /> </>

        ) : (<a href='/#'>
            { items.title}
        </a>)
      }
    </li>
  )
}