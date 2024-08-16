import { Typography } from "@mui/material";
import { url } from "../api/api";
import ComponentA from "../components/ComponentA";
import { getData } from "../services/apiRequests";
import { useEffect, useState } from "react";


console.log("Data: ", data);
//This is outside the component
const Home = () => {
 const [data, setData] = useState(null);

 useEffect(()=>{
  if (!data){
    getData(url).then((response) =>{
      setData(response.data);
    });
  }
 }, [data]);
  //This is inside the component
  return (
    <div>
      <Typography variant="h6" component="h2">
        Home
      </Typography>
      <ComponentA data={data} setData={setData}/>
    </div>
  );
};
//This is outside the component
export default Home;
