import { Box, Grid, Text ,Button } from "theme-ui";
import { useState } from "react";import { useState } from "react";
import WithdrawComponent from "./WithdrawComponent";
export default function AtmViewController(){
    const [atmState, setAtmState]= useState(true);
    return <Box sx={{textAlign:"center"}}>
        <Text sx={{color:"#aed581" , display:"block" }} >Select the Operation you want to do</Text>
        <Box sx ={{m:"20px"}}>
        <Button sx ={{mr:"20px", backgroundColor:"#f44336"}} onClick={()=>{
            setAtmState(true)
        }} >Withdraw</Button><Button sx ={{ml:"20px" ,backgroundColor:"#81c784"}} nClick={()=>{
            setAtmState(false)
        }} >Deposit</Button>
        </Box>
        <>
        {/* {atmState?<WithdrawComponent/>:<></>} */}
        </>
    </Box>
}