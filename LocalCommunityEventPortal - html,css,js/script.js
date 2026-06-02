console.log("Welcome to the Community Portal");

window.onload = function () {
    alert("Page Loaded Successfully");
    loadPreference();
    displayEvents();
};

const eventName = "Music Festival";
const eventDate = "2026-06-15";
let seats = 50;

console.log(`${eventName} on ${eventDate} | Seats Available: ${seats}`);

class Event {
    constructor(name, category, seats) {
        this.name = name;
        this.category = category;
        this.seats = seats;
    }

    checkAvailability() {
        return this.seats > 0;
    }
}

const events = [
    new Event("Music Festival", "Music", 20),
    new Event("Sports Day", "Sports", 15),
    new Event("Art Exhibition", "Art", 10)
];

events.forEach(event => {
    console.log(Object.entries(event));
});

events.push(
    new Event("Book Fair", "Education", 25)
);

const musicEvents = events.filter(
    event => event.category === "Music"
);

console.log(musicEvents);

const formattedEvents = events.map(
    event => `Workshop on ${event.name}`
);

console.log(formattedEvents);

function addEvent(name, category, seats) {
    events.push(
        new Event(name, category, seats)
    );
}

function registerUser(eventName) {
    console.log(
        `Registered successfully for ${eventName}`
    );
}

function filterEventsByCategory(category) {
    return events.filter(
        event => event.category === category
    );
}

function registrationCounter() {
    let totalRegistrations = 0;

    return function () {
        totalRegistrations++;
        console.log(
            `Total Registrations: ${totalRegistrations}`
        );
    };
}

const countRegistration = registrationCounter();

function searchEvents(callback) {
    return callback(events);
}

searchEvents(function (data) {
    console.log(data);
});

function displayEvents() {
    const container =
        document.getElementById("eventContainer");

    if (!container) return;

    container.innerHTML = "";

    events.forEach(event => {
        const card =
            document.createElement("div");

        card.className = "eventCard";

        card.innerHTML = `
            <h3>${event.name}</h3>
            <p>Category: ${event.category}</p>
            <p>Seats: ${event.seats}</p>
        `;

        container.appendChild(card);
    });
}

function validatePhone() {
    const phone =
        document.getElementById("phone").value;

    if (phone.length < 10) {
        alert(
            "Phone number must contain at least 10 digits"
        );
    }
}

function showFee() {
    const eventType =
        document.getElementById("eventType").value;

    let fee = "";

    if (eventType === "Music") {
        fee = "$20";
    }
    else if (eventType === "Sports") {
        fee = "$15";
    }
    else if (eventType === "Art") {
        fee = "$10";
    }

    document.getElementById("feeDisplay")
        .innerText = "Event Fee: " + fee;

    localStorage.setItem(
        "preferredEvent",
        eventType
    );
}

const feedback =
    document.getElementById("feedback");

if (feedback) {
    feedback.addEventListener(
        "keyup",
        function () {
            document.getElementById("charCount")
                .innerText =
                feedback.value.length;
        }
    );
}

const form =
    document.getElementById("registrationForm");

if (form) {
    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            try {

                const name =
                    document.getElementById("name").value;

                if (name === "") {
                    throw new Error(
                        "Name cannot be empty"
                    );
                }

                document.getElementById(
                    "confirmationMessage"
                ).innerText =
                    "Registration Successful!";

                alert(
                    "Thank you for registering!"
                );

                seats--;

                countRegistration();

            }
            catch (error) {
                alert(error.message);
            }
        }
    );
}

const images =
    document.querySelectorAll(".gallery-img");

images.forEach(function (img) {
    img.addEventListener(
        "dblclick",
        function () {
            img.style.transform =
                "scale(1.5)";
        }
    );
});

function videoReady() {
    document.getElementById(
        "videoMessage"
    ).innerText =
        "Video ready to play";
}

function loadPreference() {
    const savedEvent =
        localStorage.getItem(
            "preferredEvent"
        );

    if (savedEvent) {
        document.getElementById(
            "eventType"
        ).value = savedEvent;

        showFee();
    }
}

function clearPreferences() {
    localStorage.clear();
    sessionStorage.clear();
    alert("Preferences Cleared");
}

function findLocation() {
    if (navigator.geolocation) {

        navigator.geolocation
            .getCurrentPosition(

                function (position) {

                    document.getElementById(
                        "locationResult"
                    ).innerText =

                        "Latitude: "
                        + position.coords.latitude
                        + " | Longitude: "
                        + position.coords.longitude;
                },

                function () {
                    alert(
                        "Unable to fetch location"
                    );
                }
            );
    }
}

function fetchEventsPromise() {
    return new Promise(
        function (resolve) {

            setTimeout(
                function () {
                    resolve(events);
                },
                2000
            );
        }
    );
}

fetchEventsPromise()
    .then(data => console.log(data))
    .catch(error => console.log(error));

async function loadEvents() {

    try {

        const data =
            await fetchEventsPromise();

        console.log(data);

    }
    catch (error) {
        console.log(error);
    }
}

loadEvents();

fetch(
    "https://jsonplaceholder.typicode.com/posts"
)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));

const {
    name,
    category,
    seats: availableSeats
} = events[0];

console.log(
    name,
    category,
    availableSeats
);

const copiedEvents = [...events];

console.log(copiedEvents);

window.onbeforeunload = function () {
    return "You have unsaved changes.";
};