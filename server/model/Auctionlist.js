const mongoose = require("mongoose");

const auctionlistSchema = new mongoose.Schema(
  {
    auction_id: { type: Number, required: true },

    assets_on_auction: { type: String },

    bank_name: { type: String },
    city: { type: String },

    last_date: { type: String },
    price:{type:Number},
    Event_Type:{type:String},
    NIT_Ref_No:{type:String},
    Tender:{type:String},
    Event_Bank:{type:String},
    Event_Branch :{type:String},
    Property_Category:{type:String},
    Property_Sub_Category:{type:String},
    Property_Description:{type:String},
    Borrower_name:{type:String},
    Reserve_Price:{type:String},
    Tender_Fee :{type:Number},
    Price_bid:{type:Number},
  },
  { collection: "auctionlist" }
);

const auctionlist = new mongoose.model("auctionlist", auctionlistSchema);

module.exports = auctionlist;
