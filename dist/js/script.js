const dailyBtn = document.getElementById("daily-btn");
const weeklyBtn = document.getElementById("weekly-btn");
const monthlyBtn = document.getElementById("monthly-btn");

async function populate() {
    const requestURL = "./data.json";
    const response = await fetch(requestURL);
    const data = await response.json();

    dailyBtn.addEventListener("click", () => {
        populateDaily(data);
    });

    weeklyBtn.addEventListener("click", () => {
        populateWeekly(data);
    });

    monthlyBtn.addEventListener("click", () => {
        populateMonthly(data);
    });
}

function populateDaily(data) {
    data.forEach(item => {
        const container = document.querySelector(`.container.${item.title.toLowerCase()}`);
        const time = container.querySelector(".time");
        const lastTime = container.querySelector(".last-time");

        time.innerHTML = `${item.timeframes.daily.current}hrs`;
        lastTime.innerHTML = `Last Day - ${item.timeframes.daily.previous}hrs`;
    });
}

function populateWeekly(data) {
    data.forEach(item => {
        const container = document.querySelector(`.container.${item.title.toLowerCase()}`);
        const time = container.querySelector(".time");
        const lastTime = container.querySelector(".last-time");

        time.innerHTML = `${item.timeframes.weekly.current}hrs`;
        lastTime.innerHTML = `Last Week - ${item.timeframes.weekly.previous}hrs`;
    });
}

function populateMonthly(data) {
    data.forEach(item => {
        const container = document.querySelector(`.container.${item.title.toLowerCase()}`);
        const time = container.querySelector(".time");
        const lastTime = container.querySelector(".last-time");

        time.innerHTML = `${item.timeframes.monthly.current}hrs`;
        lastTime.innerHTML = `Last Month - ${item.timeframes.monthly.previous}hrs`;
    });
}

populate();