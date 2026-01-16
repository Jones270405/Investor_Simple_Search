async function searchInvestors() {
    const sector = document.getElementById("sector").value;
    const country = document.getElementById("country").value;
    const resultsDiv = document.getElementById("results");

    resultsDiv.innerHTML = "Fetching investors...";

    const response = await fetch("/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sector, country })
    });

    const data = await response.json();

    if (data.error) {
        resultsDiv.innerHTML = "Failed to fetch investors";
        return;
    }

    resultsDiv.innerHTML = `<pre>${data.result}</pre>`;
}
