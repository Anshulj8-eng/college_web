
const mybuttons1 = document.getElementById('mybuttons1');
const mybuttons2 = document.getElementById('mybuttons2');
const mybuttons3 = document.getElementById('mybuttons3');
const mybuttons4 = document.getElementById('mybuttons4');
const mybuttons5 = document.getElementById('mybuttons5');
const mybuttons6 = document.getElementById('mybuttons6');
const mybuttons7 = document.getElementById('mybuttons7');

mybuttons1.addEventListener('click', () => {
    window.location.href = 'https://www.shiksha.com/engineering/colleges/b-tech-colleges-alwar';
});

mybuttons2.addEventListener('click', () => {
    window.location.href = 'https://www.shiksha.com/engineering/colleges/m-tech-colleges-alwar';
});

mybuttons3.addEventListener('click', () => {
    window.location.href = 'https://www.shiksha.com/humanities-social-sciences/colleges/b-a-colleges-alwar';
});

mybuttons4.addEventListener('click', () => {
    window.location.href = 'https://www.shiksha.com/science/colleges/b-sc-colleges-alwar';
});

mybuttons5.addEventListener('click', () => {
    window.location.href = 'https://www.shiksha.com/science/colleges/m-sc-colleges-alwar';
});

mybuttons6.addEventListener('click', () => {
    window.location.href = 'https://www.shiksha.com/accounting-commerce/colleges/b-com-colleges-alwar';
});

mybuttons7.addEventListener('click', () => {
    window.location.href = 'https://www.shiksha.com/science/colleges/b-sc-agriculture-colleges-alwar';
});




const scroll1 = document.getElementById('scroll1');
scroll1.addEventListener('click', () => {
    window.location.href = 'https://mitrc.ac.in/';
});
const scroll2 = document.getElementById('scroll2');
scroll2.addEventListener('click', () => {
    window.location.href = 'https://www.shiksha.com/college/presidency-college-alwar-192645/courses'
});
const scroll3 = document.getElementById('scroll3');
scroll3.addEventListener('click', () => {
    window.location.href = 'https://www.sunriseuniversity.in/';
});
const scroll4 = document.getElementById('scroll4');
scroll4.addEventListener('click', () => {
    window.location.href = 'https://lietalwar.org/';
});
const scroll5 = document.getElementById('scroll5');
scroll5.addEventListener('click', () => {
    window.location.href = 'https://www.lordsuni.edu.in/';
});





const searchInput = document.getElementById('ip');

searchInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {

        const value = searchInput.value.trim().toLowerCase();

        if (value === "btech") {
            window.location.href = "https://www.shiksha.com/engineering/colleges/b-tech-colleges-alwar";
        } 
        else if (value === "mtech") {
            window.location.href = "https://www.shiksha.com/engineering/colleges/m-tech-colleges-alwar";
        } 
        else if (value === "ba") {
            window.location.href = "https://www.shiksha.com/humanities-social-sciences/colleges/b-a-colleges-alwar";
        } 
        else if (value === "bsc") {
            window.location.href = "https://www.shiksha.com/science/colleges/b-sc-colleges-alwar";
        } 
        else if (value === "msc") {
            window.location.href = "https://www.shiksha.com/science/colleges/m-sc-colleges-alwar";
        } 
        else if (value === "bcom") {
            window.location.href = "https://www.shiksha.com/accounting-commerce/colleges/b-com-colleges-alwar";
        } 
        else if (value === "agriculture") {
            window.location.href = "https://www.shiksha.com/science/colleges/b-sc-agriculture-colleges-alwar";
        } 
        
        else {
            alert("No matching wallpaper found ");
        }
    }
});
