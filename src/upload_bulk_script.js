
const sidebar = document.getElementById('sidebar');
const closeMenuBtn = document.getElementById('close-menu');
const menuToggle = document.getElementById('menu-toggle');

closeMenuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
});

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');

});// Sample file data
const files = [
    { name: "filename.docx", location: "Lorem ipsum sit aem", owner: "John Dow", size: "2.5mb", date: "10-01-2024" },
    { name: "filename.pdf", location: "Lorem ipsum sit aem", owner: "Zim Baber", size: "1.7kb", date: "12-01-2024" },
    { name: "filename.xls", location: "Lorem ipsum sit aem", owner: "Kim John", size: "2.6kb", date: "12-01-2024" },
    { name: "filename.png", location: "Lorem ipsum sit aem", owner: "Saurav P", size: "5.8kb", date: "13-01-2024" }
];

// Render table rows dynamically
const fileTableBody = document.getElementById('fileTableBody');
files.forEach(file => {
    const row = `
      <tr class="border-t border-gray-200">
        <td class="p-4 whitespace-nowrap flex items-center gap-3">
            <input type="checkbox" />
            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.73334 1.13332C1.43879 1.13332 1.2 1.3721 1.2 1.66665V12.3333C1.2 12.6278 1.43879 12.8667 1.73334 12.8667H10.2667C10.5612 12.8667 10.8 12.6278 10.8 12.3333V5.39998H7.06667C6.77212 5.39998 6.53334 5.1612 6.53334 4.86665V1.13332H1.73334ZM7.6 1.88757L10.0458 4.33332H7.6V1.88757ZM0.133335 1.66665C0.133335 0.782992 0.849676 0.0666504 1.73334 0.0666504H7.06667C7.20812 0.0666504 7.34378 0.122842 7.44379 0.222864L11.7105 4.48953C11.8105 4.58954 11.8667 4.7252 11.8667 4.86665V12.3333C11.8667 13.2169 11.1503 13.9333 10.2667 13.9333H1.73334C0.849676 13.9333 0.133335 13.2169 0.133335 12.3333V1.66665Z" fill="#000714" fill-opacity="0.623529"/>
</svg>

            <span>${file.name}</span> 
        </td>
        <td class="p-4 whitespace-nowrap">${file.location}</td>
        <td class="p-4 whitespace-nowrap">${file.owner}</td>
        <td class="p-4 whitespace-nowrap">${file.size}</td>
        <td class="p-4 whitespace-nowrap">${file.date}</td>
        <td class="p-4 whitespace-nowrap">
          <button class="text-gray-500 hover:text-blue-500">
            <svg
                    class="w-6 h-6 text-gray-800 cursor-pointer"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-width="2"
                      d="M6 12h.01m6 0h.01m5.99 0h.01"
                    />
                  </svg>
          </button>
        </td>
      </tr>`;
    fileTableBody.innerHTML += row;
});


// Add your JavaScript functions here
function downloadFile() {
    alert("Download triggered!");
    // Implement actual download functionality
}

function deleteFile() {
    if (confirm("Are you sure you want to delete this file?")) {
        alert("File deleted!");
        // Implement actual delete functionality
    }
}

document.getElementById('uploadLink').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function () {
    const fileName = this.files[0] ? this.files[0].name : 'No file chosen';
    alert('Selected file: ' + fileName);
});