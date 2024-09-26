function switchTab(event, tabId) {
    event.preventDefault();

    // Hide all tab content
    const tabContents = document.querySelectorAll(".tab-content");
    tabContents.forEach((content) => content.classList.add("hidden"));

    // Remove active class from all tabs
    const tabs = document.querySelectorAll("ul > li > a");
    tabs.forEach((tab) => tab.classList.remove("active-tab"));

    // Show the current tab content
    document.getElementById(tabId).classList.remove("hidden");

    // Set the current tab to active
    event.currentTarget.classList.add("active-tab");
}

const sidebar = document.getElementById('sidebar');
const closeMenuBtn = document.getElementById('close-menu');
const menuToggle = document.getElementById('menu-toggle');

closeMenuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
});

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');

});

const addContactModal = document.getElementById('addContactModal');
const overlay = document.getElementById('overlay');
const closeModalButton = document.getElementById('closeModalButton');
const addContactButton = document.getElementById('addContactButton');


// Open and close modal
addContactButton.addEventListener('click', () => {
    overlay.classList.remove('hidden');
    addContactModal.classList.remove('hidden');
});

closeModalButton.addEventListener('click', () => {
    overlay.classList.add('hidden');
    addContactModal.classList.add('hidden');
});

document
    .getElementById("add-phone")
    .addEventListener("click", function (event) {
        event.preventDefault();
        const phoneNumbersDiv = document.getElementById("phone-numbers");
        const newPhoneInput = document.createElement("input");
        newPhoneInput.type = "tel";
        newPhoneInput.className =
            "input-field w-full border border-gray-300 rounded-lg p-4 transition outline-none   focus:border-blue-500 hover:border-blue-300";
        newPhoneInput.placeholder = "Enter phone number";
        phoneNumbersDiv.appendChild(newPhoneInput);
    });

const activities = [
    { type: 'paid', message: 'Invoice #123 was paid', timestamp: '12:20:31 PM - June, 2024', id: 123 },
    { type: 'sent', message: 'Invoice #123 was sent', timestamp: '12:20:21 PM - June, 2024', id: 123 },
    { type: 'added', message: 'John Doe was added in the customer list', timestamp: '12:20:19 PM - June, 2024' },
    { type: 'added', message: 'John Doe was added in the customer list', timestamp: '12:20 PM - June, 2024' },
    { type: 'added', message: 'John Doe was added in the customer list', timestamp: '12:20 PM - June, 2024' },
    { type: 'added', message: 'John Doe was added in the customer list', timestamp: '12:20 PM - June, 2024' },
    { type: 'added', message: 'John Doe was added in the customer list', timestamp: '12:20 PM - June, 2024' },
    { type: 'added', message: 'John Doe was added in the customer list', timestamp: '12:20 PM - June, 2024' },
];

// Function to create log HTML
const createLogHTML = (activity) => {
    const iconColor = activity.type === 'paid' ? 'bg-green-500' : 'bg-gray-300';
    const textColor = activity.type === 'paid' ? 'text-green-600' : 'text-gray-600';

    return `
      <div class="flex space-x-4 items-start">
        <div class="mt-1">
          <div class="${iconColor} w-5 h-5 rounded-full flex items-center justify-center">
            ${activity.type === 'paid' ?
            `<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 4.293a1 1 0 00-1.414 0L8 11.586 4.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clip-rule="evenodd" />
              </svg>`
            : `<span class="${textColor} font-semibold">+</span>`}
          </div>
        </div>
        <div>
          <p>${activity.message}</p>
          <p class="text-gray-500 text-sm">${activity.timestamp}</p>
        </div>
      </div>
    `;
};

// Render logs
const activityLog = document.getElementById('activity-log');
activities.forEach(activity => {
    activityLog.innerHTML += createLogHTML(activity);
});


const contacts = [
    { name: 'Thomas Edison', role: 'Founder', phone: '+1 234567', email: 'thomas.e@gmail.com', initial: 'TE', primary: true },
    { name: 'Emma C', role: 'Founder', phone: '+1 234567', email: 'emma.c@gmail.com', initial: 'EC', primary: false },
    { name: 'Robert Bacins', role: 'Founder', phone: '+1 234567', email: 'robert.b@gmail.com', initial: 'RB', primary: false },
    { name: 'John Carlo', role: 'Founder', phone: '+1 234567', email: 'john.c@gmail.com', initial: 'JC', primary: false },
    { name: 'Adriene Watson', role: 'Founder', phone: '+1 234567', email: 'adriene.w@gmail.com', initial: 'AW', primary: false },
    { name: 'Emma C', role: 'Founder', phone: '+1 234567', email: 'emma.c@gmail.com', initial: 'EC', primary: false },
    { name: 'Robert Bacins', role: 'Founder', phone: '+1 234567', email: 'robert.b@gmail.com', initial: 'RB', primary: false },
    { name: 'John Carlo', role: 'Founder', phone: '+1 234567', email: 'john.c@gmail.com', initial: 'JC', primary: false },
    { name: 'Adriene Watson', role: 'Founder', phone: '+1 234567', email: 'adriene.w@gmail.com', initial: 'AW', primary: false },
    // Add more contacts as needed
];

// Function to create contact card HTML
const createContactHTML = (contact) => {
    const primaryBadge = contact.primary ?
        `<span class="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded absolute top-2 left-2">Primary</span>`
        : '';
    const moreinfo = `<button class="text-gray-500 hover:text-gray-700 absolute top-4 right-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v.01M12 12v.01M12 18v.01" />
</svg>
          </button>`

    return `
      <div class="bg-white p-4 md:p-6 lg:p-8 flex flex-col gap-4 items-center justify-center shadow-md rounded-md relative border border-gray-200">
        ${primaryBadge}
        ${moreinfo}
        <div class="flex justify-center items-center ">
          <div class="bg-[#A6A4FF] text-white w-20 h-20 flex items-center justify-center rounded font-semibold text-lg">
            ${contact.initial}
          </div>
          
        </div>
        <div class="text-center">
          <h3 class="text-gray-800 font-semibold mb-2">${contact.name}</h3>
          <p class="text-gray-500 text-sm">${contact.role}</p>
        </div>
        <div class="w-full">
          <p class=" text-sm flex gap-2 items-center mb-4 ">
            <svg
                        width="10"
                        height="14"
                        viewBox="0 0 10 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1.26662 1.66665C1.26662 1.3721 1.5054 1.13332 1.79995 1.13332H8.19995C8.49446 1.13332 8.73328 1.3721 8.73328 1.66665V12.3333C8.73328 12.6278 8.49446 12.8667 8.19995 12.8667H1.79995C1.5054 12.8667 1.26662 12.6278 1.26662 12.3333V1.66665ZM1.79995 0.0666504C0.916293 0.0666504 0.199951 0.782992 0.199951 1.66665V12.3333C0.199951 13.2169 0.916293 13.9333 1.79995 13.9333H8.19995C9.08358 13.9333 9.79995 13.2169 9.79995 12.3333V1.66665C9.79995 0.782992 9.08358 0.0666504 8.19995 0.0666504H1.79995ZM3.39995 11.4267C3.19376 11.4267 3.02662 11.5938 3.02662 11.8C3.02662 12.0062 3.19376 12.1733 3.39995 12.1733H6.59995C6.80614 12.1733 6.97329 12.0062 6.97329 11.8C6.97329 11.5938 6.80614 11.4267 6.59995 11.4267H3.39995Z"
                          fill="#1C2024"
                        />
                      </svg>
            <span class="text-gray-600">${contact.phone}</span>
          </p>
          <p class="text-sm flex gap-2 items-center">
             <svg
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1.06667 0.133301C0.477563 0.133301 0 0.610869 0 1.19997V10.8C0 11.3891 0.477563 11.8666 1.06667 11.8666H14.9333C15.5225 11.8666 16 11.3891 16 10.8V1.19997C16 0.610869 15.5225 0.133301 14.9333 0.133301H1.06667ZM1.06667 1.19997H14.9333V2.18657C14.8452 2.18649 14.7561 2.21064 14.6762 2.26135L8 6.49813L1.32386 2.26135C1.24396 2.21064 1.15477 2.18649 1.06667 2.18657V1.19997ZM1.06667 3.23514V10.8H14.9333V3.23514L8.25719 7.47191C8.1002 7.57154 7.8998 7.57154 7.74281 7.47191L1.06667 3.23514Z"
                          fill="#1C2024"
                        />
                      </svg>
            <span class="text-gray-600">${contact.email}</span>
          </p>
        </div>
      </div>
    `;
};

// Render contacts dynamically
const contactsGrid = document.getElementById('contacts-grid');
contacts.forEach(contact => {
    contactsGrid.innerHTML += createContactHTML(contact);
});