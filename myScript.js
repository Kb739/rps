let options=['rock','paper','scissors'];

function playerPlay()
{
    let choice=prompt("Enter choice").toLowerCase();
   choice=options.find((value)=>value==choice);
   if(!choice)
   {
       alert("invalid input");
       playerPlay();
   }
   return choice;

}
function computerPlay()
{
const index=Math.floor(Math.random()*3);
return options[index];
}
console.log(computerPlay());