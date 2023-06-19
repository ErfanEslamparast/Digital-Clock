$(document).ready(function () {
    function getTime () {
      let date = new Date()

      let hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
      let minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
      let second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
      let ampm = date.getHours() < 12 ? "AM" : "PM"
      $(".hour").html(hour)
      $(".minute").html(":"+minute)
      $(".second").html(":"+second)
      $(".ampm").html(ampm)
    }
    setInterval(getTime,1000)
});