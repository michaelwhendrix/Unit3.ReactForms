import { useState } from "react"

const Authenticate = ({token}) => {
    const [error, setError] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)

    const handleClick = async(tokenB) => {
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
        setSuccessMessage(result.message)
        }catch(err){setError(err)}
    }
    return (
    <>
        <h2>Authenticate</h2>
        <button onClick={() => {handleClick(token)}}>Authenticate Submit</button>
        {error? <h3>{error}</h3> :
        <h3>{successMessage}</h3>}
    </>
    )

}
export default Authenticate