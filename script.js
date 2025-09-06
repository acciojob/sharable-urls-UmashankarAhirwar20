// your code here
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value;
    const year = document.getElementById("year").value;

    let baseUrl = "https://localhost:8080/";
    let params = [];

    if (name) {
        params.push("name=" + encodeURIComponent(name));
    }
    if (year) {
        params.push("year=" + encodeURIComponent(year));
    }

    if (params.length > 0) {
        baseUrl += "?" + params.join("&");
    }

    document.getElementById("url").textContent = baseUrl;
});
