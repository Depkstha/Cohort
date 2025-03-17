document.addEventListener("DOMContentLoaded", function () {
  const calendarEl = document.getElementById("calendar");
  const calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: "title",
      right: "dayGridDay,dayGridWeek,dayGridMonth",
    },
  });
  calendar.render();

  calendar.addEvent();
});

const emotions = {
  happy: "happy.gif",
  neutral: "neutral.gif",
  sad: "sad.gif",
  angry: "angry.gif",
  excited: "excited.gif",
  tired: "tired.gif",
  love: "love.gif",
  sick: "sick.gif",
  unstable: "unstable.gif",
};
