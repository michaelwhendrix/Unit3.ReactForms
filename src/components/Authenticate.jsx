import { useState } from "react"

const Authenticate = ({token}) => {
    const [error, setError] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)

    const handleClick = async() => {
        try{
        const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', 
              { 
                method: "GET", 
                headers: { 
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${token}` 
                }
              })
        const result = await response.json()
        console.log(result)
        result.success ? setSuccessMessage(result.message):
        setSuccessMessage('Please Enter a valid username and password')
        }catch(err){setError(true)}
    }
    return (
    <>
        <h2>Authenticate</h2>
        <button onClick={() => {handleClick()}}>Authenticate Submit</button>
        {error ? <h3>Something Went Wrong</h3> :
        <h3>{successMessage}</h3>}
    </>
    )

}
export default Authenticate