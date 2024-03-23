import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ArticleComponent = (props) =>{

    const accessToken = useSelector(state => state.pkce.accessToken)

    const[articalResponse, setArticalResponse] = useState("");


    useEffect(()=>{


        callArticalAPI()

    },[accessToken])


    const callArticalAPI = () =>{

        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+accessToken);
        

        const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
        };

        fetch("http://localhost:9001/articles", requestOptions)
        .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.text()
          })
          .then(data => {
            // Work with JSON data here
            console.log(data);
            setArticalResponse(data)
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
          });


        
            }


            const reload = () =>{
                callArticalAPI()
            }


    return <><p>Article component</p><br></br><p>{articalResponse}</p><p><button onClick={reload}>Re-load</button></p></>

}

export default ArticleComponent;