const api = "https://cleanuri.com/api/v1/shorten"


// blocked by cors request so I literally cannot test if this works
// but we can make the assumption it does work and that blocker
// sucks lol
function shortenLink() {
    const userInput = document.getElementById("user_input").value;
    fetch(api, {
        method: "POST",
        headers: {
            'Content-Type': "application/x-www-form-urlencoded"
        },
        body: `url=${encodeURIComponent(userInput)}`
    })
    .then((response) => {
        if(!response.ok) {
            throw new Error("Error: Could not connect to API", ErrorEvent);
        }
        return response.json();
    })
    .then((data) => {
        const url = data.result_url;
        console.log(url);
    })
}