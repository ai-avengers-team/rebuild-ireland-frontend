import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaUser } from "react-icons/fa";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function AuthDropdown() {
  return (
    <div className="flex items-center">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-customGreen py-2 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-customGreen data-[open]:bg-customGreen data-[focus]:outline-1 data-[focus]:outline-customGreen">
          <FaUser />
          <IoChevronDownCircleOutline className="size-4 fill-white/60" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right rounded-xl border border-customGreen bg-white text-customGreen p-1 text-sm/6 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 "
        >
          <MenuItem>
            <NavLink
              to="login"
              className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-customLightGreen/10"
            >
              Login
            </NavLink>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-customLightGreen/10">
              Register
            </button>
          </MenuItem>
          {/* <div className="my-1 h-px bg-white/5" /> */}
        </MenuItems>
      </Menu>
    </div>
  );
}