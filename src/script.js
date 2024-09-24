document.addEventListener('DOMContentLoaded', () => {
    const customers = [
        { name: 'John Doe', email: 'ohndea2118@gmail.com', paymentMethod: '****1234', totalSpend: '$0.00 USD', payments: '$0.00 USD', avatar: 'https://via.placeholder.com/40' },
        { name: 'Shelby Gook', email: 'shelbygook44@gmail.com', paymentMethod: '****1234', totalSpend: '$0.00 USD', payments: '$0.00 USD', avatar: 'https://via.placeholder.com/40' },
        { name: 'Robert Badr', email: 'robertbadr118@gmail.com', paymentMethod: '****1234', totalSpend: '$0.00 USD', payments: '$0.00 USD', avatar: 'https://via.placeholder.com/40' },
        { name: 'John Doe', email: 'ohndea2118@gmail.com', paymentMethod: '****1234', totalSpend: '$0.00 USD', payments: '$0.00 USD', avatar: 'https://via.placeholder.com/40' },
        { name: 'Shelby Gook', email: 'shelbygook44@gmail.com', paymentMethod: '****1234', totalSpend: '$0.00 USD', payments: '$0.00 USD', avatar: 'https://via.placeholder.com/40' },
        { name: 'Robert Badr', email: 'robertbadr118@gmail.com', paymentMethod: '****1234', totalSpend: '$0.00 USD', payments: '$0.00 USD', avatar: 'https://via.placeholder.com/40' },
        { name: 'John Doe', email: 'ohndea2118@gmail.com', paymentMethod: '****1234', totalSpend: '$0.00 USD', payments: '$0.00 USD', avatar: 'https://via.placeholder.com/40' },
        { name: 'Shelby Gook', email: 'shelbygook44@gmail.com', paymentMethod: '****1234', totalSpend: '$0.00 USD', payments: '$0.00 USD', avatar: 'https://via.placeholder.com/40' },
    ];

    const customerList = document.getElementById('customerList');
    const addCustomerModal = document.getElementById('addCustomerModal');
    // const menuIcon = document.getElementById('menuIcon');
    const closeModal = document.getElementById('closeModal');
    const addCustomerBtn = document.getElementById('addCustomerBtn');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const sidebarDrawer = document.getElementById('sidebarDrawer');



    const modal = document.getElementById('addCustomerModal');
    const closeModalButton = document.getElementById('closeModalButton');
    const togglePaymentMethod = document.getElementById('togglePaymentMethod');
    const paymentOptions = document.getElementById('paymentOptions');
    const creditCardRadio = document.getElementById('creditCardRadio');
    const bankACHRadio = document.getElementById('bankACHRadio');
    const creditCardDetails = document.getElementById('creditCardDetails');
    const bankACHDetails = document.getElementById('bankACHDetails');



    // Populate customer list
    customers.forEach((customer) => {
        const row = document.createElement('tr');
        row.classList.add('border-b', 'hover:bg-gray-50', 'transition');
        row.innerHTML = `
      <td class="p-4 flex items-center gap-3">
        <input type="checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded" />
        <img src="${customer.avatar}" alt="avatar" class="w-10 h-10 rounded-lg">
        <span>${customer.name}</span>
      </td>
      <td class="p-4">${customer.email}</td>
      <td class="p-4">${customer.paymentMethod}</td>
      <td class="p-4">${customer.totalSpend}</td>
      <td class="p-4">${customer.payments}</td>
      <td class="p-4"><span class="cursor-pointer text-gray-600">⋮</span></td>
    `;
        customerList.appendChild(row);
    });

    // Open and close modal
    addCustomerBtn.addEventListener('click', () => {
        addCustomerModal.classList.remove('hidden');
    });

    closeModalButton.addEventListener('click', () => {
        addCustomerModal.classList.add('hidden');
    });


    // Filter buttons
    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            filterButtons.forEach((btn) => btn.classList.remove('bg-blue-600', 'text-white'));
            button.classList.add('bg-blue-600', 'text-white');
        });
    });


    // Show or hide modal
    document.getElementById('addCustomerBtn').addEventListener('click', () => {
        modal.classList.remove('hidden');
    });

    closeModalButton.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    
    // Handle payment method checkbox toggle
    togglePaymentMethod.addEventListener('change', (event) => {
        if (event.target.checked) {
            paymentOptions.classList.remove('hidden');
            creditCardDetails.classList.remove('hidden');
        } else {
            paymentOptions.classList.add('hidden');
            creditCardDetails.classList.add('hidden');
            bankACHDetails.classList.add('hidden');
        }
    });

    // Show/hide payment method details
    creditCardRadio.addEventListener('change', () => {
        creditCardDetails.classList.remove('hidden');
        bankACHDetails.classList.add('hidden');
    });

    bankACHRadio.addEventListener('change', () => {
        bankACHDetails.classList.remove('hidden');
        creditCardDetails.classList.add('hidden');
    });


    // const sidebar = document.getElementById("sidebar");
    // const closeMenu = document.getElementById("close-menu");

    // closeMenu.addEventListener("click", function () {
    //     sidebar.classList.add("-translate-x-full");
    // });
});
