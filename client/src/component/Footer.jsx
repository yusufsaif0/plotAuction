import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Row,
    Col
} from 'reactstrap';

function Footer() {


	return (
		<div>
		<Row style={{"backgroundColor":"dodgerblue",'color':"#fff"}}>
            <Col md="4" >
                <br></br>
                <h5>About Us</h5>
                <p>Bankeauctions.com is the most trusted portal in India for auction of bank foreclosed properties including movable and immovable properties. Almost all the leading public sector as well as private banks have used our portal for auctioning their NPAs. For buyers, our portal provides opportunity to own a property at a price substantially lower than market price.</p>
            </Col>
            <Col md="4" >
            <br></br>

                <h5>UseFull link</h5>
                <p>Home</p>
                <p>Contact Us</p>
                <p>Blogs</p>
            </Col>
            <Col md="4" >
            <br></br>

                <h5>Get in touch</h5>
                <p>Support | Helpdesk
+91-124-4302020 / 21 / 22 / 23
+91- 7291981124 / 1125 / 1126
support@bankeauctions.com
Sales Enquiries : +91- 7291981129</p>
            </Col>
            <br></br>
            <hr />
            <Col md="12">
                <h6>© Copyright 2023 C1 India - All Rights Reserved
Terms of Use | Privacy Policy</h6>
            </Col>
        </Row>
		</div >
	);
}

export default Footer;
