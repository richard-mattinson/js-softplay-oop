// TODO: Write your class in this file

class SoftPlay {
  constructor (adults = 0, children = 0) {
    this.adults = adults
    this.children = children
  }

  occupancy () {
    return {
      adults: this.adults,
      children: this.children
    }
  }

  enter (numAdults, numChildren) {
    if (numChildren > numAdults) {
      return false
    }
    this.adults = this.adults + numAdults
    this.children = this.children + numChildren
    return true
  }

  leave (numAdults, numChildren) {
    if (numChildren > numAdults) {
      return false
    }
    if (this.adults - numAdults < 0) {
      // console.log('exited because adults are negative')
      return false
    }
    if (this.children - numChildren < 0) {
      // console.log('exited because children are negative')
      return false
    }
    // console.log('remaining adults:', (this.adults - numAdults), 'remaining child:', (this.children - numChildren), 'enough adults?', (this.adults - numAdults) < (this.children - numChildren))
    if ((this.adults - numAdults) < (this.children - numChildren)) {
      // console.log(numAdults, numChildren, this.adults, this.children, 'exited because fewer adults than children!')
      return false
    }

    this.adults = this.adults - numAdults
    this.children = this.children - numChildren
    return true
  }
}

// let softPlay = new SoftPlay()

// console.log(softPlay.occupancy())

// TODO: Change undefined to the name of your class
module.exports = {
  SoftPlay: SoftPlay
}
