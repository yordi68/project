const sidebar = document.getElementById('sidebar');
const closeMenuBtn = document.getElementById('close-menu');
const menuToggle = document.getElementById('menu-toggle');

closeMenuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
});

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');

});


const transaction_history = [
    { name: "John Doe", email: "ohndoe2211@gmail.com", payment: "****1234567", total: "$0.00 USD", date: "10-01-2024", avatar: './images/avatar.jpg' },
    { name: "Shelby Goode", email: "shelbygoode41@gmail.com", payment: "****1234567", total: "$0.00 USD", date: "12-01-2024", avatar: './images/avatar.jpg' },
    { name: "Robert Bacins", email: "robertbacins4128@gmail.com", payment: "****1234567", total: "$0.00 USD", date: "12-01-2024", avatar: './images/avatar.jpg'  },
    { name: "John Carilo", email: "johncarilo1829@gmail.com", payment: "****1234567", total: "$0.00 USD", date: "13-01-2024", avatar: './images/avatar.jpg'  },
    { name: "Adriene Watson", email: "adriene.W@gmail.com", payment: "****1234567", total: "$0.00 USD", date: "15-01-2024", avatar: './images/avatar.jpg'  },
    { name: "Jhon Deo", email: "jhon.deo@gmail.com", payment: "****1234567", total: "$0.00 USD", date: "17-01-2024", avatar: './images/avatar.jpg'  },
    { name: "Bethany Jackson", email: "beth.j@gmail.com", payment: "****1234567", total: "$0.00 USD", date: "19-01-2024", avatar: './images/avatar.jpg'  },
];

const transaction_review = [
    { id: "TD123456", category: "Financial Services", amount: "$0.00 USD", name: "John Doe", date: "10-01-2024" },
    { id: "TD123456", category: "Supermarket", amount: "$0.00 USD", name: "John Doe", date: "03-02-2024" },
    { id: "TD123456", category: "Merchandise Retail", amount: "$0.00 USD", name: "John Doe", date: "15-02-2024" },
    { id: "TD123456", category: "Supermarket", amount: "$0.00 USD", name: "John Doe", date: "24-02-2024" },
    { id: "TD123456", category: "Medical Services", amount: "$0.00 USD", name: "John Doe", date: "25-02-2024" },
    { id: "TD123456", category: "Medical Services", amount: "$0.00 USD", name: "John Doe", date: "01-03-2024" },
    { id: "TD123456", category: "Financial Services", amount: "$0.00 USD", name: "John Doe", date: "05-03-2024" },
    // Add more transactions here if needed
];

// Function to render the table rows
function renderTransactionHistory() {
    const tableBody = document.getElementById("transaction-history-body");
    tableBody.innerHTML = "";

    transaction_history.forEach((transaction) => {

        const row = document.createElement('tr');
        row.classList.add('border-b', 'hover:bg-gray-50', 'transition', 'cursor-pointer', 'border-gray-200', 'hover:bg-gray-50');

        row.innerHTML = `
      <td class="p-4 flex items-center gap-3 whitespace-nowrap">
        <img src="${transaction.avatar}" alt="avatar" class="w-10 h-10 rounded-lg">
        <span>${transaction.name}</span>
      </td>
      <td class="p-4 whitespace-nowrap">${transaction.email}</td>
      <td class="p-4 whitespace-nowrap">${transaction.payment}</td>
      <td class="p-4 whitespace-nowrap">${transaction.total}</td>
      <td class="p-4 whitespace-nowrap">${transaction.date}</td>
      <td class="py-2 px-4 text-blue-500 underline text-sm cursor-pointer whitespace-nowrap">View transactions</td>
    `;

        
        tableBody.appendChild(row);
    });
}







// Tabs functionality
const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");

tab1.addEventListener("click", function () {
    // Switch active tab styling
    tab1.classList.add("tab-active");
    tab1.classList.remove("tab-inactive");
    tab2.classList.add("tab-inactive");
    tab2.classList.remove("tab-active");

    // Display corresponding content
    document.getElementById("transaction-history-content").classList.remove("hidden");
    document.getElementById("transaction-review-content").classList.add("hidden");
});

tab2.addEventListener("click", function () {
    // Switch active tab styling
    tab2.classList.add("tab-active");
    tab2.classList.remove("tab-inactive");
    tab1.classList.add("tab-inactive");
    tab1.classList.remove("tab-active");

    // Display corresponding content
    document.getElementById("transaction-history-content").classList.add("hidden");
    document.getElementById("transaction-review-content").classList.remove("hidden");
});

// Initial table render
renderTransactionHistory();


// Function to render the transaction table
function renderTransactionReview() {
    const tbody = document.getElementById("transaction-review-body");
    tbody.innerHTML = ""; // Clear existing content

    transaction_review.forEach(transaction => {
        const row = document.createElement("tr");
        row.classList.add('border-b', 'hover:bg-gray-50', 'transition', 'cursor-pointer', 'border-gray-200', 'hover:bg-gray-50');

        row.innerHTML = `
            <td class="whitespace-nowrap px-4 py-4 flex gap-2 items-center">
                <input type="checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded" />
                <span>${transaction.id}</span>
            </td>
            <td class="whitespace-nowrap px-4 py-4">${transaction.category}</td>
            <td class="whitespace-nowrap px-4 py-4">${transaction.amount}</td>
            <td class="whitespace-nowrap px-4 py-4">${transaction.name}</td>
            <td class="whitespace-nowrap px-4 py-4">${transaction.date}</td>
            <td class="whitespace-nowrap px-4 py-4">
                <button class="bg-blue-500 hover:bg-blue-600 text-white  py-1 px-4 rounded">Review</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Render the table initially
renderTransactionReview();