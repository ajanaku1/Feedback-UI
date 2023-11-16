//creating varriables

const iconBox = document.querySelector('.icon-container');
const submitBtn = document.getElementById('submit-btn');
let unsatisfiedBtn = document.getElementById('unsatisfied');
let satisfiedBtn = document.getElementById('satisfied');
let neutralBtn = document.getElementById('neutral');
let submitScreen = document.querySelector('.rated');
let review = document.querySelector('h4');

//adding event listners

iconBox.addEventListener('click', function(e) {

    unsatisfiedBtn.classList.remove('active-unsatisfied');
    neutralBtn.classList.remove('active-neutral');
    satisfiedBtn.classList.remove('active-satisfied');

    if (e.target === unsatisfiedBtn) {
        unsatisfiedBtn.classList.add('active-unsatisfied')
    } else if (e.target === satisfiedBtn) {
        satisfiedBtn.classList.add('active-satisfied')
    } else if (e.target === neutralBtn) {
        neutralBtn.classList.add('active-neutral')
    }

})

submitBtn.addEventListener('click', function() {

    if (unsatisfiedBtn.classList.contains('active-unsatisfied')) {
        iconBox.style.display = 'none';
        submitBtn.style.display = 'none';
        submitScreen.style.display = 'block';
        review.textContent += " Unsatisfied!";
    } else if (satisfiedBtn.classList.contains('active-satisfied')) {
        iconBox.style.display = 'none';
        submitBtn.style.display = 'none';
        submitScreen.style.display = 'block';
        review.textContent += " Satisfied!";
    } else if (neutralBtn.classList.contains('active-neutral')) {
        iconBox.style.display = 'none';
        submitBtn.style.display = 'none';
        submitScreen.style.display = 'block';
        review.textContent += " Neutral!";
    } else {
        alert('Please select a rating');
    }
})