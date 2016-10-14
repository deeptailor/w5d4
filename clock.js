class Clock {
  constructor() {
     let today = new Date();

     this.hours = today.getHours();


     this.minutes = today.getMinutes();


     this.seconds = today.getSeconds();


     this.printTime();

     setInterval(this._tick.bind(this), 1000);
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
  }

  setTime(){
    if (this.seconds === 60){
      this.seconds %= 60;
      this.minutes += 1
    }
    if (this.minutes === 60){
      this.minutes %= 60;
      this.hour += 1;
    }
    if (this.hours === 24){
      this.hours = 0;
    }
  }

  printTime() {
    console.log(`${this.hours}: ${this.minutes}: ${this.seconds}`);
    // Format the time in HH:MM:SS
    // Use console.log to print it.
  }

  _tick() {
    this.seconds ++;
    this.setTime();
    this.printTime();
    // 1. Increment the time by one second.
    // 2. Call printTime.
  }
}

const clock = new Clock();
