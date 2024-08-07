const data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];
const container = document.querySelector("#container");
function display(period) {
  container.innerHTML = ` <div id="user">
        <div id="user-info">
          <img src="./images/image-jeremy.png" alt="user" />
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>

        <ul id="filters">
          <li>
            <a href="#" data-time="daily">Daily</a>
          </li>
          <li>
            <a href="#" data-time="weekly">Weekly</a>
          </li>
          <li>
            <a href="#" data-time="monthly">Monthly</a>
          </li>
        </ul>
      </div>`;
  data.forEach(function (v) {
    container.innerHTML += `<div class="activity">
              <div>
                <span>${v.title}</span>
                <img src="./images/icon-ellipsis.svg" alt="icon-ellipsis" />
              </div>
              <h1> ${v.timeframes[period].current} hrs</h1>
              <p>Yesterday - ${v.timeframes[period].previous}hrs</p>
            </div>`;
  });
  const li = document.querySelectorAll("li");
  li.forEach(function (v, i) {
    v.addEventListener("click", function (e) {
      console.log(e.target.getAttribute("data-time"));
      display(e.target.getAttribute("data-time"));
    });
  });
}

display("daily");
