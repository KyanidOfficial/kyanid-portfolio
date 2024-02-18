window.addEventListener("load", () => {
    const loader = document.querySelector(".__loading_screen_box");
    const body = document.querySelector("body");    

    setTimeout(() => {
        loader.classList.add("__hidden");
        body.style.overflowY = "scroll";
        console.log("Website LOADED.");
    }, 4000);
    
    setTimeout(() => {
        loader.remove(".__loading_screen_box");
        console.log("Loader REMOVED.")
    }, 4100);
});