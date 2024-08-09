
function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
    return (
        rect.top < window.innerHeight &&
        rect.bottom > 0
    );
}

function checkTextVisibility() {
    let paragraphs = document.getElementsByClassName('text-animation');
    for (let i = 0; i < paragraphs.length; i++) {
        if (isElementInViewport(paragraphs[i])) {
            paragraphs[i].classList.add('visible-text');
        } else {
            paragraphs[i].classList.remove('visible-text');
        }
    }
}

function updateSectionStyles() {
    let section = document.querySelector('.section-second');
    if (section) {
        let viewportHeight = window.innerHeight;
        let scrollTop = window.scrollY;
        let documentHeight = document.documentElement.scrollHeight;

        if (scrollTop > 0) {
            section.classList.add('expanded-section');
        } else {

            section.classList.remove('expanded-section');
        }


        if (scrollTop + viewportHeight >= documentHeight) {
            section.classList.remove('expanded-section');
        }
    }
}


function onScroll() {
    requestAnimationFrame(() => {
        updateSectionStyles();
        checkTextVisibility();
    });
}


window.addEventListener('scroll', onScroll);


document.addEventListener('DOMContentLoaded', function() {
    updateSectionStyles();
    checkTextVisibility();
});
