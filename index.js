// code your solution here
function saturdayFun(value="roller-skate"){
    return (`This Saturday, I want to ${value}!`)
}
function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  }

 function wrapAdjective(mem="*"){
    return function(name="special"){
        return (`You are ${mem}${name}${mem}!`)

    }
 }