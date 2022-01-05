const data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

const cardType = document.querySelector('.card__content--type');
let allCards = document.querySelector('.all-cards__grid');
const daily = document.querySelector('.daily');
const weekly = document.querySelector('.weekly');
const monthly = document.querySelector('.monthly');

function handleClick(e){
  e.preventDefault();

  allCards.innerHTML = `
  `;

  data.forEach(obj => {
    let name = e.currentTarget.name;
    let currentWeeklyData = obj.timeframes[name].current;
    let previousWeeklyData = obj.timeframes[name].previous;
    const title = obj.title;
    const titleForClassName = obj.title.replace(/\s/g, "").toLowerCase();
    const html = `
    <section class="card ${titleForClassName}">
      <div class="card__top--${titleForClassName} card__top"></div>
      <div class="card__content">
          <div class="card__content--title">
          <p class="card__content--type">${title}</p>
          <p class="card__content--options">...</p>
          </div>
          <div class="card__content--data">
          <p class="card__content--time">${currentWeeklyData}hrs</p>
          <p class="card__content--last">Last week - ${previousWeeklyData}hrs</p>
          </div>
      </div>
      </section>
    `

    allCards.innerHTML += html;
  });
}

function handleOnLoad(){
  allCards.innerHTML = `
  `;
  data.forEach(obj => {
    let currentWeeklyData = obj.timeframes.daily.current;
    let previousWeeklyData = obj.timeframes.daily.previous;
    const title = obj.title;
    const titleForClassName = obj.title.replace(/\s/g, "").toLowerCase();
    const html = `
    <section class="card ${titleForClassName}">
      <div class="card__top--${titleForClassName} card__top"></div>
      <div class="card__content">
          <div class="card__content--title">
          <p class="card__content--type">${title}</p>
          <p class="card__content--options">...</p>
          </div>
          <div class="card__content--data">
          <p class="card__content--time">${currentWeeklyData}hrs</p>
          <p class="card__content--last">Last week - ${previousWeeklyData}hrs</p>
          </div>
      </div>
      </section>
    `

    allCards.innerHTML += html;
  });
}


window.addEventListener('load', handleOnLoad);
daily.addEventListener('click', handleClick);
weekly.addEventListener('click', handleClick);
monthly.addEventListener('click', handleClick);