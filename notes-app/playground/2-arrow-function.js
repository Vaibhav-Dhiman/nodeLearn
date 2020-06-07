// arrow functions don't bind to there own this value they take this value from its scope/context
const event = {
    name: 'Birthday party',
    guestList: ['Vaibhav', 'Piyush', 'Ganja'],
    printGuestList() {
        console.log('Guest list for ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + 'is attending ' + this.name )
        })
    }
}

event.printGuestList()