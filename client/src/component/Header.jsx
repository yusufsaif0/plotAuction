import React,{useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
	Navbar,
	NavItem,
	NavbarToggler,
	Collapse,
	NavLink,
	Nav,
	NavbarBrand
} from 'reactstrap';

function Header() {
	const [status, setStatus] = useState(false);


	useEffect(() => {
	
	  const usertype = localStorage.getItem('token')
	  const data = JSON.parse(usertype)
	  if (typeof data.email != "undefined") {
	   setStatus(true)
	  }
  
	}, []);


	// Collapse isOpen State
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<div>
			<Navbar color="light" light expand="md">
				<NavbarBrand href="/">Ploat Auction</NavbarBrand>
				<NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<NavLink href="/">Home</NavLink>
						</NavItem>
						{status=== true ?
						<>
						
						</>
:<><NavItem>
<NavLink href="/login">Login</NavLink>
</NavItem>
<NavItem>
<NavLink href="/singup">Signup</NavLink>
</NavItem></>}
					</Nav>
				</Collapse>
			</Navbar>
		</div >
	);
}

export default Header;
