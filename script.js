const calendarGrid = document.querySelector(".calendar-grid");

// 예시 일정 (나중에 노션에서 가져올 자리)
const events = {
  "2025-12-11": "회의",
  "2025-12-19": "서녁 약속",
  "2025-12-20": "캘린더 위젯 구매하기"
};

// 2025년 12월 세팅
const year = 2025;
const month = 11; // 0부터 시작 (11 = 12월)

function renderCalendar() {
  // 요일 아래 날짜 초기화
  document.querySelectorAll(".day").forEach(d => d.remove());

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  // 빈칸 채우기
  for (let i = 1; i < firstDay; i++) {
    const empty = document.createElement("div");
    empty.className = "day";
    calendarGrid.appendChild(empty);
  }

  // 날짜 채우기
  for (let date = 1; date <= lastDate; date++) {
    const day = document.createElement("div");
    day.className = "day";
    day.textContent = date;

    const key = `2025-12-${String(date).padStart(2, "0")}`;

    if (events[key]) {
      day.classList.add("has-event");

      const tooltip = document.createElement("div");
      tooltip.className = "tooltip";
      tooltip.textContent = events[key];
      day.appendChild(tooltip);
    }

    calendarGrid.appendChild(day);
  }
}

renderCalendar();

// 새로고침 버튼
document.querySelector(".refresh").addEventListener("click", () => {
  location.reload();
});
