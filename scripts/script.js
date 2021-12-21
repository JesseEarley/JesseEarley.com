document.addEventListener("DOMContentLoaded", function(event) { 
    const sliders = document.querySelectorAll(".slideIn");
    const appearOptions = {
        threshold: 0,
        rootMargin: "0px 0px -200px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach( entry => {
            if (!entry.isIntersecting){
                return;
            }
            else{
                entry.target.classList.add('slid');
                appearOnScroll.unobserve(entry.target);

            }
        })
    }, appearOptions);

    sliders.forEach(slider =>{
        appearOnScroll.observe(slider);
    })

    let date =  new Date().getFullYear();
    document.getElementById('FooterText').innerHTML = "Copyright &copy; " + date + " JesseEarley.com. All Rights Reserved";
});