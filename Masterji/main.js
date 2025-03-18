const calendarEl = document.getElementById("calendar");
const moodOptionsContainer = document.querySelector(".mood-option-container");
const moodTrackForm = document.getElementById("mood-track-form");
const submitBtn = document.getElementById("submit-btn");

const MOOD_SET = [
  { id: "happy", label: "Happy", emoji: "happy.gif" },
  { id: "neutral", label: "Neutral", emoji: "neutral.gif" },
  { id: "sad", label: "Sad", emoji: "sad.gif" },
  { id: "angry", label: "Angry", emoji: "angry.gif" },
  { id: "excited", label: "Excited", emoji: "excited.gif" },
  { id: "tired", label: "Tired", emoji: "tired.gif" },
  { id: "love", label: "Love", emoji: "love.gif" },
  { id: "sick", label: "Sick", emoji: "sick.gif" },
  { id: "unstable", label: "Unstable", emoji: "unstable.gif" },
];

class MoodEntry {
  constructor(date, mood) {
    this.date = date;
    this.mood = mood;
  }
}

const existingMoodLogs = JSON.parse(localStorage.getItem("moodLogs"));
const moodLogs = existingMoodLogs || [];

document.addEventListener("DOMContentLoaded", function () {
  const calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: "title",
      right: "dayGridDay,dayGridWeek,dayGridMonth",
    },
    events: getDataForCalendar(moodLogs),
    eventContent: function (info) {
      return { html: info.event.title };
    },
  });

  calendar.render();

  MOOD_SET.forEach((mood) => {
    let moodOption = createMoodOption(mood);
    let wraperDiv = document.createElement("div");
    wraperDiv.classList.add("wrapper");
    wraperDiv.innerHTML = moodOption;

    moodOptionsContainer.append(wraperDiv);
  });
});

const createMoodOption = (mood) => {
  return `<div class="mood-option">
              <input class="mood-input" type="radio" name="mood" id="${mood.id}" value="${mood.id}">
              <label class="mood-label" for="${mood.id}">
                  <img src="./assets/${mood.emoji}" alt="${mood.id}" class="mood-gif">
                  <span class="mood-text">${mood.label}</span>
              </label>
          </div>`;
};

moodTrackForm.addEventListener("submit", function (event) {
  event.preventDefault();
  submitBtn.classList.add("loading");

  const formData = new FormData(this);
  const mood = formData.get("mood");

  if (!mood) {
    submitBtn.classList.remove("loading");
    return;
  }

  this.reset();

  const newEntry = new MoodEntry(new Date().toLocaleDateString(), mood);
  moodLogs.push(newEntry);

  localStorage.setItem("moodLogs", JSON.stringify(moodLogs));

  submitBtn.classList.remove("loading");

  // console.log(moodLogs);
  
});

const getMoodData = (mood) => {
  return MOOD_SET.find((e) => e.id === mood);
}

const getDataForCalendar = (moodLogs) => {
  return moodLogs.map((log, index) => {
    const moodData = getMoodData(log.mood);
    console.log(moodData, log);
    
    return {
      id: index,
      title: `<img src="./assets/${moodData.emoji}" 
               alt="${moodData.label}" 
               class="mood-gif" 
               width="30" 
               height="30">`,
      start: new Date(log.date), 
      allDay: true,
      editable: false,
      extendedProps: {
        label: moodData.label,
      }
    };
  });
};



