document.addEventListener("DOMContentLoaded", function () {
  const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  const income = JSON.parse(localStorage.getItem("income")) || [];
  const ctx = document.getElementById("reportChart").getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Income", "Expenses"],
      datasets: [{
        label: "Amount",
        data: [income.reduce((a, b) => a + b.amount, 0), expenses.reduce((a, b) => a + b.amount, 0)],
        backgroundColor: ["#28a745", "#dc3545"]
      }]
    },
    options: { responsive: true }
  });
});



  