import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ExampleDoc1 from '../uploadpdf/23888abdf34108c3b63a1cdddd7beeee.pdf'
import ExampleDoc2 from '../uploadpdf/bd29cb9af79785c2e04da0415d4d550b.pdf'
import ExampleDoc3 from '../uploadpdf/d0d13b833f57dd0b84e5553f21da3bd2.pdf'
import { useParams,Redirect } from 'react-router-dom'

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button,
  Modal, ModalHeader, ModalBody, ModalFooter,
  Progress,
} from "reactstrap";
function AuctionDetaiils() {

  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

  const [modal, setModal] = useState(false);
  const [priceOftender, setpriceOftender] = useState("");
  const [ReciveData, setReciveData] = useState({})
  const [Event_Type, setEvent_Type] = useState()
  const [auction_id, setauction_id] = useState()
  const [NIT_Ref_No, setNIT_Ref_No] = useState()
  const [Tender, setTender] = useState()
  const [Event_Bank, setEvent_Bank] = useState()
  const [Event_Branch, setEvent_Branch] = useState()
  const [Property_Category, setProperty_Category] = useState()
  const [Property_Sub_Category, setProperty_Sub_Category] = useState()
  const [Property_Description, setProperty_Description] = useState()
  const [Borrower_name, setBorrower_name] = useState()
  const [Tender_Fee, setTender_Fee] = useState()
  const [Price_bid, setPrice_bid] = useState()
  const { id } = useParams()

  const toggle = () => setModal(!modal);
  const toggle1 = () => {
    <Redirect
    to={{
      pathname: "/payment",
    }}
  />
    // <Redirect to="/payment" />
  }

  useEffect(() => {

    fun1();

  }, [])

  const fun1 = () => {
    axios.get(`http://localhost:4000/api/auctionlistbyid/${id}`).then((result) => {
      console.log(result);
      setReciveData(result)
      setEvent_Type(result.data.result.Event_Type)
      setauction_id(result.data.result.auction_id)
      setNIT_Ref_No(result.data.result.NIT_Ref_No)
      setTender(result.data.result.Tender)
      setEvent_Bank(result.data.result.Event_Bank)
      setEvent_Branch(result.data.result.Event_Branch)
      setProperty_Category(result.data.result.Property_Category)
      setProperty_Sub_Category(result.data.result.Property_Sub_Category)
      setProperty_Description(result.data.result.Property_Description)
      setBorrower_name(result.data.result.Borrower_name)
      setNIT_Ref_No(result.data.result.NIT_Ref_No)
      setTender_Fee(result.data.result.Tender_Fee)
      setPrice_bid(result.data.Price_bid)
    })
  };

  return (
    <div>
      <Row>
        <Col md="1">

        </Col>
        <Col md="10">
          <h4 style={mystyle}>Event Details</h4>
          <p>Event Type : {Event_Type}</p>
          <p>Event No.  : {auction_id}</p>
          <p>NIT Ref. No. : {NIT_Ref_No}</p>
          <p>Tender / Event Title  : {Tender}</p>
          <p>Event Bank : : {Event_Bank}</p>
          <p>Event Branch :{Event_Branch}</p>
          <br />
          <br />
          <h4 style={mystyle}>Property Details</h4>
          <p>Property Category : {Property_Category}</p>
          <p>Property Sub Category : {Property_Sub_Category}</p>
          <p>Property Description : {Property_Description}</p>
          <p>Borrower's Name  : {Borrower_name}</p>
          <br></br><br></br>
          <h4 style={mystyle}>Auction Details</h4>
          <p>Reserve Price : {NIT_Ref_No}</p>
          <p>Tender Fee  : {Tender_Fee}</p>
          <p>Price Bid : {Price_bid}</p>
          <p>Bid Increment value : 50000.00</p>
          <p>Auto Extension time : 5 (In Minutes)</p>
          <p>No. of Auto Extension : Unlimited Extension</p>
          <br /> <br />

          <h4 style={mystyle}>Auction Related Documents</h4>
          <p>View NIT Documents : <a href={ExampleDoc1} download="ExampleDoc1" target='_blank'>
            Download
          </a></p>
          <p>Documents to be Submitted : Pan Card,Annexure 3/Declaration Form,Annexure 2/Details of Bidder,Proof Of Address</p>
          <p>Tender Documents : <a href={ExampleDoc2} download="ExampleDoc1" target='_blank'>
            Download
          </a></p>
          <p>Annexure 2/Details of Bidders : <a href={ExampleDoc3} download="ExampleDoc1" target='_blank'>
            Download
          </a></p>
          <br /> <br />
          <button onClick={toggle}>Apply</button>
          <br></br>
          <br></br>


          <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
            <ModalBody>
              <form onSubmit>
                <div className="form-group ">
                  Tender Price : 100000
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Price"
                    value={priceOftender}
                    onChange={(e) => setpriceOftender(e.target.value)}
                    required
                  />
                </div>

              </form>
            </ModalBody>
            <ModalFooter>
            <a href="/payment">
            <Button color="primary" onClick={toggle1}>
                Do Something
              </Button>
              </a>  
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>

        </Col>


        <Col md="1">

        </Col>
      </Row>
    </div>
  )
}

export default AuctionDetaiils