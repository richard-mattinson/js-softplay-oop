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
    if (numChildren > numAdults ||
      this.adults - numAdults < 0 ||
      this.children - numChildren < 0 ||
      (this.adults - numAdults) < (this.children - numChildren)) {
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
