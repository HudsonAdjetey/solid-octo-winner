/* 

SCENERIO
You’re developing a highly interactive dashboard that updates data in real-time from multiple sources. The application also listens for user interactions, such as filtering, sorting, and clicking on elements. However, the application starts to feel sluggish, especially when real-time data updates overlap with user interactions like filtering or selecting items.



Question:
How would you manage the different types of events (real-time data updates, user interactions, and expensive operations) using the event loop’s task and microtask queues to ensure a highly responsive UI?
*/

// 1.
function debounce(fnc, delay) {
  let timeout;

  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      //   fnc.apply(this, args);
      return fnc(...args);
    }, delay);
  };
}

const addBtn = document.querySelectorAll("button");

const expensiveFn = requestAnimationFrame(() => {
  // expensive operation
  addBtn.forEach((btn) => {
    btn.classList.remove("active");

    btn.addEventListener("click", () => {
      btn.classList.add("active");
      // expensive operation
      setTimeout(() => {
        btn.classList.remove("active");
      }, 1000);
    });
  });
});
