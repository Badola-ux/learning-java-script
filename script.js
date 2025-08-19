let country = document.getElementById("country");
let center = document.querySelector(".center");
let second = document.querySelector(".second");

function generate(key, value) {
    let keyDiv = document.createElement("div");
    keyDiv.innerHTML = key;

    let valueDiv = document.createElement("div");
    if (key.toLowerCase() === "flags") {
        let img = document.createElement("img");
        img.src = value;
        valueDiv.append(img);
    } else if (key.toLowerCase() === "maps") {
        let a = document.createElement("a");
        a.href = value;
        a.innerHTML = "Google Map";
        a.target = "_blank";
        valueDiv.appendChild(a);
    } else {
        valueDiv.innerHTML = value;
    }

    let items = document.createElement("div");
    items.classList.add("items");
    items.appendChild(keyDiv);
    items.appendChild(valueDiv);
    second.appendChild(items);
}

function getAPIData() {
    let name = "bharat";
    if (country.value.trim() !== "") {
        name = country.value.trim();
        country.value = "";
    }

    let request = new XMLHttpRequest();
    request.open("get", "https://restcountries.com/v3.1/name/" + name);
    request.send();

    request.addEventListener("load", () => {
        let data = JSON.parse(request.responseText);
        center.removeChild(second);
        second = document.createElement("div");
        second.classList.add("second");
        center.appendChild(second);

        data.forEach(country => {
            generate("Name", country.name.official);
            generate("Capital", country.capital);
            generate("Flags", country.flags.png);
            generate("Area", country.area);
            generate("Population", country.population);
            generate("Region", country.region);
            generate("Subregion", country.subregion);
            generate("Continents", country.continents);
            generate("Independent", country.independent);
            generate("Landlocked", country.landlocked);
            generate("UN Member", country.unMember);
            generate("Timezones", country.timezones);
            generate("Borders", country.borders);
            generate("Maps", country.maps.googleMaps);
            generate("Currencies", Object.values(country.currencies)[0].name);
            generate("Languages", Object.values(country.languages).join(", "));
        });
    });
}

getAPIData();
