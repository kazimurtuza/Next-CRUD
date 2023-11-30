import mongoose from "mongoose";
import { NextResponse } from "next/server";




export async function GET(){
    let info=mongoose.connect("mongodb+srv://kazimurtuza11:OTmsAneICOrbaRlD@projectsdb.wqlak8u.mongodb.net/gdesh?retryWrites=true&w=majority");
    

    return NextResponse.json(info);
}