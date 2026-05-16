document.addEventListener('DOMContentLoaded', function () {
    const teamMembers = document.querySelectorAll('.team li');
    
    teamMembers.forEach(member => {
        member.addEventListener('click', () => {
            member.classList.toggle('active');
        });
    });
});
