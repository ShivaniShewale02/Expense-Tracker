let incomeTotal = 0;
let expenseTotal = 0;

document.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('loggedIn')) {
    window.location.href = 'greatePage/login.html';
  }

  const transactionForm = document.getElementById('transaction-form');
  const incomeHistory = document.getElementById('income-history');
  const expenseHistory = document.getElementById('expense-history');
  const totalIncome = document.getElementById('total-income');
  const totalExpense = document.getElementById('total-expense');
  const balance = document.getElementById('balance');

  transactionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;
    const category = document.getElementById('category').value;
    const date = new Date().toLocaleString();

    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid amount.');
      return;
    }

    const transactionItem = document.createElement('li');
    transactionItem.className = type;
    transactionItem.dataset.amount = amount; // Store amount in data attribute
    transactionItem.innerHTML = `
      <span>${description} - ${category} - ₹${amount.toFixed(2)} - ${date}</span>
      <button onclick="deleteTransaction(this)"><i class="fas fa-trash icon"></i> Delete</button>
    `;

    if (type === 'income') {
      incomeHistory.appendChild(transactionItem);
      incomeTotal += amount;
      totalIncome.textContent = `₹${incomeTotal.toFixed(2)}`;
    } else {
      expenseHistory.appendChild(transactionItem);
      expenseTotal += amount;
      totalExpense.textContent = `₹${expenseTotal.toFixed(2)}`;
    }

    balance.textContent = `₹${(incomeTotal - expenseTotal).toFixed(2)}`;

    transactionForm.reset();
  });
});

function deleteTransaction(button) {
  const item = button.parentElement;
  const amount = parseFloat(item.dataset.amount); // Retrieve amount from data attribute
  const type = item.className;

  if (type === 'income') {
    incomeTotal -= amount;
    totalIncome.textContent = `₹${incomeTotal.toFixed(2)}`;
  } else {
    expenseTotal -= amount;
    totalExpense.textContent = `₹${expenseTotal.toFixed(2)}`;
  }

  item.remove();
  balance.textContent = `₹${(incomeTotal - expenseTotal).toFixed(2)}`;
}

// Fade-in effect for newly added transactions
function addTransaction(description, amount, type, category, date) {
  const transactionItem = document.createElement('li');
  transactionItem.className = `${type} fade-in`;  // Adding fade-in class
  transactionItem.dataset.amount = amount;
  transactionItem.innerHTML = `
    <span>${description} - ${category} - ₹${amount.toFixed(2)} - ${date}</span>
    <button onclick="deleteTransaction(this)"><i class="fas fa-trash icon"></i> Delete</button>
  `;

  if (type === 'income') {
    document.getElementById('income-history').appendChild(transactionItem);
  } else {
    document.getElementById('expense-history').appendChild(transactionItem);
  }

  setTimeout(() => {
    transactionItem.classList.remove('fade-in');
  }, 500);
}













