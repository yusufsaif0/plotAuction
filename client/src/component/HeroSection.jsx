import React, { useState,useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

import {
Table,
  Row,
  Col
} from 'reactstrap';



function HeroSection(args) {
    const [auctionlist, setauctionlist] = useState([])
    useEffect(()=>{
        fun1();
    },[])
    
      const fun1 = () => {
        const requestOptions = {
          method: "get",
          headers: { "Content-Type": "application/json" },
        };
       
        fetch("http://localhost:4000/api/auctionlist", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            setauctionlist(result)
            console.log(result);
          })
          .catch((error) => {
            console.error("There was an error!", error);
          });
      };
  return (
    <><h3>Online E Auction Properties For Sale</h3>
    <Table responsive>
    <thead>
      <tr>
     
        <th>
          Auction Id
        </th>
        <th>
          Bank Name
        </th>
        <th>
          Assets on Auction
        </th>
        <th>
          City
        </th>
        <th>
          Last date
        </th>
        <th>
          Reverse Price
        </th>
      </tr>
    </thead>
    <tbody>
    {(auctionlist.result || []).map((item,index) => (
                      <tr key={item._id}>
                      
                          <td style={{ cursor: "pointer" }}>
                          <Link to={`/getauctionbyid/${item.auction_id}`}>
                          {item.auction_id}
                        </Link>
                         </td>
                         <td>{item.bank_name}</td>
                         <td>{item.assets_on_auction}</td>

                         <td>{item.city}</td>

                        
                        <td>{item.last_date}</td>
                        <td>{item.price}</td>
                       
                      
                      </tr>
                    ))}
    </tbody>
  </Table>
  </>
  );
}

export default HeroSection;