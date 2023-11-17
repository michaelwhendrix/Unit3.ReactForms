import { useState } from "react"

const Authenticate = ({token}) => {
    const [error, setError] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)

    const handleClick = async(tokenB) => {
            console.log("authenticating",token)
        try{
        const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', 
              { 
                method: "GET", 
                headers: { 
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${tokenB}` 
                }
              })
        const result = await response.json()
        console.log(result)
        }catch(error){console.log(error)}
    }
    return (
    <>
        <h2>Authenticate</h2>
        <button onClick={() => {handleClick(token)}}>Authenticate Submit</button>
    
    </>
    )

}
export default Authenticate