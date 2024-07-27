document.getElementById('profilePhoto').addEventListener('click', function () {
    document.getElementById('profileSection').style.display = 'block';
});

document.querySelector('.close-profile-icon').addEventListener('click', function () {
    document.getElementById('profileSection').style.display = 'none';
});

function showSection(section) {
    const sections = ['videos', 'shorts', 'posts', 'liked', 'saved', 'commented'];
    sections.forEach(sec => {
        const elements = document.querySelectorAll(`#${sec}Content .${sec}-item`);
        if (sec === section) {
            elements.forEach(el => el.style.display = 'block');
        } else {
            elements.forEach(el => el.style.display = 'none');
        }
    });
}

// Initialize the sections to hide all items except the default one (e.g., videos)
document.addEventListener('DOMContentLoaded', () => {
    showSection('videos');
});

// JavaScript for Options Dropdown Functionality
document.addEventListener('DOMContentLoaded', function() {
    const optionsIcon = document.querySelector('.options-icon');
    const optionsDropdown = document.querySelector('.options-dropdown');

    optionsIcon.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent event bubbling
        optionsDropdown.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        if (!optionsDropdown.contains(event.target) && !optionsIcon.contains(event.target)) {
            optionsDropdown.classList.remove('active');
        }
    });

    document.getElementById('logout').addEventListener('click', function(event) {
        event.preventDefault();
        alert('Logged out');
        // Add your logout functionality here
    });

    document.getElementById('deactivate').addEventListener('click', function(event) {
        event.preventDefault();
        alert('Account deactivated');
        // Add your deactivate functionality here
    });
});
document.getElementById('editProfileBtn').addEventListener('click', function() {
    document.querySelectorAll('.edit-input').forEach(input => input.style.display = 'block');
    document.querySelectorAll('.additional-info span').forEach(span => span.style.display = 'none');
    document.getElementById('editProfileBtn').style.display = 'none';
    document.getElementById('updateProfileBtn').style.display = 'inline-block';
});

document.getElementById('updateProfileBtn').addEventListener('click', function() {
    document.getElementById('fullNameText').innerText = document.getElementById('fullNameInput').value;
    document.getElementById('dobText').innerText = document.getElementById('dobInput').value;
    document.getElementById('emailText').innerText = document.getElementById('emailInput').value;
    document.getElementById('locationText').innerText = document.getElementById('locationInput').value;

    document.querySelectorAll('.edit-input').forEach(input => input.style.display = 'none');
    document.querySelectorAll('.additional-info span').forEach(span => span.style.display = 'block');
    document.getElementById('editProfileBtn').style.display = 'inline-block';
    document.getElementById('updateProfileBtn').style.display = 'none';
});


function showSection(section) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(function(content) {
        content.classList.remove('active');
    });

    // Remove active class from all tabs
    document.querySelectorAll('.tab').forEach(function(tab) {
        tab.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(section + 'Content').classList.add('active');
    document.getElementById(section + 'Tab').classList.add('active');
}

// Set the default active tab and content
document.getElementById('videosTab').classList.add('active');
document.getElementById('videosContent').classList.add('active');

document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelector('.profile-section .tabs');
    let isDown = false;
    let startX;
    let scrollLeft;

    const startSwipe = (e) => {
        isDown = true;
        tabs.classList.add('active');
        startX = e.pageX - tabs.offsetLeft || e.touches[0].pageX - tabs.offsetLeft;
        scrollLeft = tabs.scrollLeft;
    };

    const endSwipe = () => {
        isDown = false;
        tabs.classList.remove('active');
    };

    const moveSwipe = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - tabs.offsetLeft || e.touches[0].pageX - tabs.offsetLeft;
        const walk = (x - startX) * 3; // scroll-fast
        tabs.scrollLeft = scrollLeft - walk;
    };

    tabs.addEventListener('mousedown', startSwipe);
    tabs.addEventListener('mouseleave', endSwipe);
    tabs.addEventListener('mouseup', endSwipe);
    tabs.addEventListener('mousemove', moveSwipe);

    tabs.addEventListener('touchstart', startSwipe);
    tabs.addEventListener('touchend', endSwipe);
    tabs.addEventListener('touchmove', moveSwipe);
});
