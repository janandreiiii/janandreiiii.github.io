// Get references to the floating button and the modal
const floatingBtn = document.getElementById('floatingBtn');
const emailModal = document.getElementById('emailModal');
const closeBtn = document.getElementById('closeBtn');

// Function to open the modal
function openModal() {
    emailModal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    emailModal.style.display = 'none';
}

// Event listeners
floatingBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

// Close the modal if the user clicks outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === emailModal) {
        closeModal();
    }
});