var input1=confirm("ready to play");
console.log(input1)
if(input1){
    playgame();
}
function playgame(){
    if(input1!==null){
        console.log("ok")
        var input2=prompt("enter rock or paper or scissor")
        if(input2!==null&&input2){
            var c=["rock","paper","scissor"];
            var a=Math.floor(Math.random()*3)
    
            var user=input2
            // console.log(`user${user}`)
            var computer=c[a]
            // console.log(`computer${computer}`)
             if(input2==="rock"||input2==="paper"||input2==="scissor"){
                console.log(`computer ${computer}`)
                console.log(`user${user}`)
               
                const final = user === computer
    ? "tie"
    : (user === "rock" && computer === "paper")
        ? "computer wins"
        : (user === "paper" && computer === "scissor")
            ? "computer wins"
            : (user === "scissor" && computer === "rock")
                ? "computer wins"
                : (user === "rock" && computer === "scissor")
                    ? "user wins"
                    : (user === "paper" && computer === "rock")
                        ? "user wins"
                        : (user === "scissor" && computer === "paper")
                            ? "user wins"
                            : "computer wins";

                alert(`user entered:${user}\n computer entered :${computer}\n final result:${final}`)
             }
             else{
                alert("enter valid values");
                playgame()
             }
}


         
input1=confirm("play again?")
if(input1){
    playgame();
}
        else{
            console.log("thanks for playing")
            alert("Thanks for playing")
        }

    }

}
