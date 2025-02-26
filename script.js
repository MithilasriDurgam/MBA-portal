
document.addEventListener('DOMContentLoaded', function() {

    const applyButton = document.querySelector('.apply-button');
    if (applyButton) {
        applyButton.addEventListener('click', function() {
            alert('Apply Now button clicked!');
        });
    }
    const loginSpan = document.querySelector('.login');
    if(loginSpan){
        loginSpan.addEventListener('click', function(){
            alert('Login span clicked!');
        });
    }

    const registerButton = document.querySelector('.register-button');
    if(registerButton){
        registerButton.addEventListener('click', function(){
            alert('Register button clicked!');
        });
    }

    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            menuItems.forEach(menuItem => {
                menuItem.classList.remove('active');
            });
            item.classList.add('active');
            event.preventDefault();
        });
    });

    const shareIcons = document.querySelectorAll('.share-icon');
    shareIcons.forEach(icon => {
        icon.addEventListener('click', function(event) {
            alert(`Share icon ${icon.textContent} clicked!`);
            event.preventDefault(); 
        });
    });

    const sendMessageButton = document.querySelector('.send-message');
    if (sendMessageButton) {
        sendMessageButton.addEventListener('click', function() {
          
            const fullName = document.querySelector('input[placeholder="Full Name"]').value;
            const email = document.querySelector('input[placeholder="Email Address"]').value;
            const phone = document.querySelector('input[placeholder="Phone Number"]').value;
            const message = document.querySelector('textarea[placeholder="Your Message"]').value;

            /
            alert(`Full Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`);

            
        });
    }

    const relatedJobs = document.querySelectorAll('.related-job-item');
    relatedJobs.forEach(job => {
        job.addEventListener('click', function() {
            const jobTitle = job.querySelector('.job-title').textContent;
            alert(`Related job '${jobTitle}' clicked!`);
            
        });
    });
});