const nav = document.querySelector(".nav")
window.addEventListener("scroll",(()=>{
    let e = scrollY;
    if (e > window.innerHeight){
        console.log("fixed")
        nav.classList.add("navfixed")
    } else {
        console.log("absolute")
        nav.classList.remove("navfixed")

    }
}))
