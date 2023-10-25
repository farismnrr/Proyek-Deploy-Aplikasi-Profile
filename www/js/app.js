var form = document.getElementById('my-form');

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById('my-form-status');
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            Accept: 'application/json',
        },
    })
        .then((response) => {
            if (response.ok) {
                status.innerHTML = 'Thank you for contacting us!';
                form.reset();
            } else {
                response.json().then((data) => {
                    if (Object.hasOwn(data, 'errors')) {
                        status.innerHTML = data['errors']
                            .map((error) => error['message'])
                            .join(', ');
                    } else {
                        status.innerHTML =
                            'Oops! There was a problem submitting your form';
                    }
                });
            }
        })
        .catch((error) => {
            status.innerHTML = 'Oops! There was a problem submitting your form';
        });
}
form.addEventListener('submit', handleSubmit);

$(document).ready(function () {
    //Owl
    $('.hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        navText: ['PREV', 'NEXT'],
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            },
        },
    });

    $('#projects-slider').owlCarousel({
        loop: true,
        nav: false,
        items: 2,
        dots: true,
        smartSpeed: 600,
        center: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
                margin: 8,
            },
        },
    });

    $('.reviews-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 900,
        items: 1,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 4000,
    });
});

document.getElementById('userName').addEventListener('focus', function () {
    this.classList.add('custom-input');
});

document.getElementById('userName').addEventListener('blur', function () {
    this.classList.remove('custom-input');
});
