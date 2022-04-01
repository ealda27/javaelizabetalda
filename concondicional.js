const answer = 120
const question = '100*9-(40*2)-700'

let ansUser
let win = true 

do{
    ansUser = prompt (question)
    if(ansUser == '0') {
win = false
break
    }
} while (parseInt(ansUser) !=answer)

if(win) {
    alert ('Acertaste la operación matemática')

}
else{ 
    alert ('fallaste')
}