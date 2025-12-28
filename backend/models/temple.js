import mongoose from "mongoose";

const templeSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    like:{
        type:Array,
        default:[]
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    bookmarks:{
        type:Array,
        default:[]
    }
},{timestamp:true});
export const temple = mongoose.model("temple", templeSchema);