// An element in the visible part of the screen
function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Text visibility checks
function checkTextVisibility() {
    let paragraphs = document.getElementsByClassName('text-animation');
    for (let i = 0; i < paragraphs.length; i++) {
        if (isElementInViewport(paragraphs[i])) {
            paragraphs[i].classList.add('visible-text');
        }
    }
}

//Checking the visibility of the section
function checkSectionVisibility() {
    let section = document.querySelector('.section-second');
    if (section) {
        let rect = section.getBoundingClientRect();
        let viewportHeight = window.innerHeight;


        if (rect.top <= 0 && rect.bottom >= viewportHeight) {
            section.classList.add('expanded-section');
        } else {
            section.classList.remove('expanded-section');
        }
    }
}

function onScroll() {
    requestAnimationFrame(() => {
        checkTextVisibility();
        checkSectionVisibility();
    });
}


document.addEventListener('DOMContentLoaded', function() {
    checkTextVisibility();
    checkSectionVisibility();
});

window.addEventListener('scroll', onScroll);