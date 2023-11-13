const Form = (props) => {

    /*const handleSubmit = (event) => {
        event.preventDefault()
        console.log(props.superFormData)

        props.superFormData.password===props.superFormData.confirmPassword? console.log("correct login") : console.log("password incorrect")
        props.superFormData.isSignup===true? console.log("Thanks for signing up") : console.log("You are missing")
    
    }*/
    return ( 
        <div className="container">
            <form onSubmit={props.handleSubmit} className="main-form">
                <div className="main-input">
                    <input onChange={props.handleChange}
                    value={props.superFormData.email}
                    type="email" name="email"  placeholder="Email" id="email"/>
                </div>
                <div className="main-input">
                    <input onChange={props.handleChange}
                    value={props.superFormData.password} 
                    type="password" name="password" placeholder="Password" id="password1" />
                </div>
                <div className="main-input">
                    <input onChange={props.handleChange}
                    value={props.superFormData.confirmPassword}
                    type="password" name="confirmPassword" placeholder="Confirm Password" id="password2" />
                </div>
                <div className="main-input">
                    <input onChange={props.handleChange}
                    type="checkbox" name="isSignup" checked={props.superFormData.isSignup} id="news-letter"/>
                    <label htmlFor="news-letter">I want to join the newsletter!</label>
                </div>
                <div className="main-input">
                <button >Signup</button>
                </div>
                
            </form>
        </div>
     );
}
 
export default Form;