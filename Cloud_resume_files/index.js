const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://oow24ewgv67u2ufmi5ppcwnsme0howsm.lambda-url.eu-north-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` This page has ${data} Views!`;
}

updateCounter();
