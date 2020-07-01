let window_w = window.innerWidth;
let window_h = window.innerHeight;
let canvasStyle, canvasWidth, canvasHeight;

let normalWidth = 256;
let normalHeight = 200;

let canvasContainer = document.getElementById("canvas-container");
let mapContainer = document.getElementById("map");
let mapImg = document.getElementById("map-img");
let mobile;

function createMapButton() {
    mobile = isMobile();

    let button = document.createElement("button");

    button.textContent = "SHOW MAP";

    button.style.zIndex = "1";
	button.style.position = "absolute";
    button.style.font = "32px monogram";
	button.style.lineHeight= "1em";
	button.style.margin = "0px";
	button.style.display = "inline-block";
	button.style.border = "none";
	button.style.textAlign = "center";
	button.style.color = "white";
	button.style.background = "#ff004d";
	button.style.outline = "none";
	button.style.borderBottom = "4px solid#424242";
	button.style.marginLeft = "auto";
	button.style.marginRight = "auto";
	button.style.paddingTop = "2px";
	button.style.paddingBottom = "5px";
	button.style.paddingLeft = "8px";
	button.style.paddingRight = "8px";
    button.style.cursor = "pointer";
    
    canvasContainer.appendChild(button);

    button.onmouseenter = () => {
        button.style.background = "#ff77a8";
    };

    button.onmouseleave = () => {
        button.style.background = "#ff004d";
        button.style.marginTop = "0px";
        button.style.borderBottom = "4px solid#424242";
    };

    button.onmousedown = () => {
        button.style.borderBottom = "none";
        button.style.marginTop = "4px";
    }

    button.onmouseup = () => {
        button.style.borderBottom = "4px solid#424242";
        button.style.marginTop = "0px";
        mapButton(button, mapContainer);
    }

    getDimensions();
    setMapPosition(button);

    window.addEventListener("resize", () => {
        getDimensions();
        setMapPosition(button);
    });
}

function getDimensions() {
    if (window_w > window_h) {
        canvasScale = window_h / normalWidth;
        canvasWidth = normalWidth * canvasScale;
        canvasHeight = normalHeight * canvasScale;
    } else {
        canvasScale = window_w / normalWidth;
        canvasWidth = normalWidth * canvasScale;
        canvasHeight = normalHeight * canvasScale;
    }
    window_w = window.innerWidth;
    window_h = window.innerHeight;
}

function setMapPosition(btn) {
    if (!mobile) {
        let mapBottom = window_h - canvasHeight;
        let mapRight = window_w - (window_w - canvasWidth) / 2;
        btn.style.left = "-120px";
        btn.style.bottom = "0";
        mapContainer.style.bottom = `${mapBottom}px`;
        mapContainer.style.right = `${mapRight}px`;
        mapImg.style.objectPosition = "right bottom";
    }
    if (mobile) {
        let buttonVertical = -130;
        let mapTop = canvasHeight - buttonVertical;
        let mapLeft = (window_w - canvasWidth) / 2;
        let mapHeight = window_h - canvasHeight + buttonVertical;
        btn.style.left = "0px";
        btn.style.bottom = `${buttonVertical}px`;
        mapContainer.style.top = `${mapTop}px`;
        mapContainer.style.left = `${mapLeft}px`;
        mapContainer.style.height = `${mapHeight}px`;
        mapImg.style.objectPosition = "left top";
    }
}

function isAndroid() {
    return /Android/i.test(navigator.userAgent);
}

function isiOS() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function isMobile() {
    return isAndroid() || isiOS();
}

function mapButton(btn, container) {
    if (container.style.display === "block") {
        container.style.display = "none"
        btn.value = "SHOW MAP";
        btn.innerHTML = "SHOW MAP";
    } else { 
        container.style.display = "block";
        btn.value = "HIDE MAP";
        btn.innerHTML = "HIDE MAP";
    }
}