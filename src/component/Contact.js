const Contact= ()=>{
    const containerStyle={
        backgroundImage: 'linear-gradient(lightBlue, grey)',
        margin: 'auto',
        marginTop: '40px',
        border: '2px solid black',
        borderRadius: '10px',
        fontSize: '20px',
        width:'800px'
    }
    return(
       <div style={containerStyle}>
       <h3  className="display-1">Contact Us</h3>
        <h3  className="display-5">Email:- Socialapp@gmail.com</h3>
        <h3  className="display-5">Contact:- 9955774422</h3>
    
       </div>
        
    )
}
export default Contact;