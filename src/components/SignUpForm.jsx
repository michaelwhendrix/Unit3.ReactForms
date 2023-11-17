import { useState } from "react"


const SignUpForm = ({setToken}) => {
    const [username, setUserName] = useState(" ")
    const [password, setPassword] = useState(" ")
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', 
            { 
              method: "POST", 
              headers: { 
                "Content-Type": "application/json" 
              }, 
              body: JSON.stringify({ 
                username: username, 
                password: password 
              }) 
            })
            const result = await response.json()
            setToken(result.token)
            console.log(result.token)
        }catch(error){setError(error.message)}
    }
    return <>
            <h2>SignUp</h2>
            {
                error? <p>{error}</p> :
                <p>Everything ok</p>
            }
            <form onSubmit={handleSubmit}>
                <label>Username
                    <input value={username} onChange={(e) => {
                        setUserName(e.target.value)
                    }}></input>
                </label>
                <label>Password
                    <input value={password} onChange={(e) =>{
                        setPassword(e.target.value)
                    }}>

                    </input>
                </label>
                <button>Submit</button>
            </form>
            </>
}
export default SignUpForm