import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const FacultyDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div >
      <Dropdown  isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu container="body">
          <DropdownItem>Action 1</DropdownItem>
          <DropdownItem>Action 2</DropdownItem>
          <DropdownItem>Action 3</DropdownItem>
        </DropdownMenu >
      </Dropdown>
    </div>
  );
}

export default FacultyDropdown;