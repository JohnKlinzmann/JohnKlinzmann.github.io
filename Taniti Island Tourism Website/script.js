// --------- BOOKING FORM ---------
const bookNowBtn = document.querySelectorAll('.book-now-btn');
const bookNowFormCont = document.getElementById('book-now-form-container');
const bookNowForm = document.getElementById('book-now-form')

// When 'Book Now!' button is presses, booking form opens
bookNowBtn.forEach(button => {
    button.addEventListener('click', (e) => {
        bookNowFormCont.style.display = "block";
    })
})

// Close Booking Form
const closeFormBtn = document.getElementById('close-book-now-form');

closeFormBtn.addEventListener('click', () => {
    bookNowFormCont.style.display = "none";
})

// ---------- PAGE HIGHLIGHTS DROPDOWN---------
const learnMoreBtn = document.querySelectorAll('.read-more-btn');

// When 'Read more...' button is pressed, more text info about highlight is displayed
learnMoreBtn.forEach((button, index) => {
    button.addEventListener('click', () => {

        const moreHighlight = document.querySelectorAll('.more-highlight')[index];

        if (moreHighlight.style.display === "block") {
            moreHighlight.style.display = "none";
            button.innerHTML = "Read more... <i class=\"fa-solid fa-arrow-down\"></i>";
        } else {
            moreHighlight.style.display = "block";
            button.innerHTML = "Read less... <i class=\"fa-solid fa-arrow-up\"></i>";
        }
    });
});

// ---------- FAQ ANSWERS DROPDOWN ---------
const getAnswer = document.querySelectorAll('.get-answer');

getAnswer.forEach((arrow, index) => {
    arrow.addEventListener('click', () => {
        const answer = document.querySelectorAll('.answer')[index];

        if (answer.style.display === "block") {
            answer.style.display = "none";
            // arrow.innerHTML = "<i class=\"fa-solid fa-arrow-down\"></i>";
        } else {
            answer.style.display = "block";
            // arrow.innerHTML = "<i class=\"fa-solid fa-arrow-up\"></i>";
        }
    });
});
