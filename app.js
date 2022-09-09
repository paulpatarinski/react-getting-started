console.log('Hello from the js');

window.addEventListener("DOMContentLoaded", () => {
    console.log('Doc is ready test');

    let paragraphElm = document.getElementsByTagName("p")[0];
    
    console.log(paragraphElm);

    paragraphElm.style = "font-size:200px";
});

