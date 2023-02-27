class GuessingGame {
    constructor() {
        this.max = 0;
        this.min = 0;
      }
      middle() {
        return Math.round((this.max+this.min)/2);
      }
      setRange(min, max) {
        this.min = min;
        this.max = max;
      }
  
      guess() {
          return this.middle();
      }
  
      lower() {
        this.max = this.middle();
      }
  
      greater() {
        this.min = this.middle();
      }
}


module.exports = GuessingGame;
