people = ["Ada", "Brendan", "Ali"]

/*function writeCards(persons, occasion= "birthday"){
    for (let i=0; i<persons.length; i++ ){
        console.log `Thankyou, ${persons[i]}, for the wonderful ${occasion} gift!`
    }
}

writeCards(people)*/

function writeCards(persons, occasion = "birthday") {
    let message = [];
    for (let i=0; i <persons.length; i++)(
        message.push(`Thankyou, ${persons[i]}, for the wonderful ${occasion} gift!`)
    )
    console.log(message)
}
writeCards(people)

function countDown(startingNumber) {
    for (let startingNumber = 10; startingNumber >=0; startingNumber -=1){
        console.log(startingNumber)}
}
countDown(10)

/*function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
      console.log( startingNumber );
      startingNumber -= 1;
    }*/