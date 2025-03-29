gsap.to(".container", {
    duration: 1.5,
    opacity: 1,
    scale: 1,
    ease: "power3.out",
    delay: 1
});

gsap.to(".input-group", {
    duration: 0.8,
    opacity: 1,
    y: 0,
    stagger: 0.2,
    ease: "power3.out",
    delay: 1.5
});

gsap.to("button", {
    duration: 0.8,
    opacity: 1,
    y: 0,
    ease: "power3.out",
    delay: 2
});

window.addEventListener("load", () => {
    gsap.to(".loader-ring", {
        opacity: 0,
        scale: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5 
    });
});

document.getElementById('predictionForm').addEventListener('submit', function(e) {
    e.preventDefault();

    document.getElementById('loading').style.display = 'block';
    document.getElementById('output-text').style.display = 'none';

    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';

        const resultBox = document.querySelector('.output-box');
        resultBox.style.display = 'block';
        gsap.fromTo(resultBox, { opacity: 0 }, { opacity: 1, duration: 1.5, ease: "power3.out" });

        document.getElementById('output-text').textContent = 'Low risk of diabetes (This is a demo result)';
    }, 1500);
});



