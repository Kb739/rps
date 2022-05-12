let options=['rock','paper','scissors'];
function computerPlay()
{
const index=Math.floor(Math.random()*3);
return options[index];
}
console.log(computerPlay());