import { useState } from "react"


const SignUpForm = () => {
    const [username, setUserName] = useState(" ")
    const [password, setPassword] = useState(" ")
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("submitted")
    }
    return <>
            <h2>SignUp</h2>

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