
const whiteboard = document.getElementsByClassName("whiteboard")[0];
let markerNo = 0;
const marker = document.getElementsByClassName("marker");
let randomNos = []
const root = document.documentElement;
const colorChangeTimer = 10000
const HeroAboutAssecentColor = document.getElementsByClassName("AssestColor")[1]
const aboutColor = document.getElementById("aboutColor")
document.documentElement.style.setProperty("--herofontgradient", colorChangeTimer * 1.5  + "ms")
for (let i = 1; i < 100; i++) {
    randomNos.push(i)
}

let saturation = []
for (let i = 0; i <= 100; i++) {
    saturation.push(i)
}
let brightness = []
for (let i = 0; i <= 100; i++) {
    brightness.push(i)
}
let randomColor = []
for (let i = 1; i <= 360; i++) {
    randomColor.push(i)
}

for (let i = 0; marker.length < window.innerWidth; i++) {

    let childer = document.createElement("div");
    childer.classList.add("marker");
    whiteboard.appendChild(childer);
    
}


function BGcreator() {
    const colorSS = randomColor[parseInt(Math.random() * randomColor.length)]
    for (let i = 0; i < window.innerWidth; i++) {
        const saturationSS = saturation[parseInt(Math.random() * saturation.length)]
        const brightnessSS = brightness[parseInt(Math.random() * brightness.length)]
        let m = marker[markerNo];
        const heightSS = randomNos[parseInt(Math.random() * randomNos.length)]
        m.style.height = heightSS + "%";
        m.style.background = "linear-gradient(hsl(" + colorSS + "," + saturationSS + "%," +  50 + "%),hsl(" + colorSS + "," + saturationSS + "%," +  brightnessSS + "%)"
        if (markerNo < marker.length - 1) {
            markerNo++;
        } else {
            markerNo = 0;
        }
        marker[0].style.height = 100 + "%"
        let colorses = colorSS + ", 50%, 100%"
        document.documentElement.style.setProperty("--color",colorSS)
        // aboutColor.style.fill ="hsl(" + colorses + ")" 


    }
}

setInterval(() => {
    BGcreator();
}, colorChangeTimer);

BGcreator();
window.addEventListener("resize",(()=> {
    location.reload();
}))