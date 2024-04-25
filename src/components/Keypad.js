// Code Keypad Component Here

function Keypad (){
    function keydata(){
        console.log("Entering password...")
    }
    return (    
        <div>
            <input type="password" placeholder="Enter Password ...."  onChange={keydata}/>
        </div>
    )
}

export default Keypad;