// User-defined Object: 객체 리터럴 방식
var car = {
  name: "Sonata",
  speed: 100,
  color: "white",
  door: 4,
  start: function () {
    // return speed + 10; // X
    return this.speed + 10;
  },
  stop: function () {
    console.log("this:", this);
    this.speed = 0;
  },
  // arrow function에서의 this는 최상위 객체인 window를 의미
  // stop: () => {
  //   console.log("this:", this);
  //   this.speed = 0;
  // },
};
