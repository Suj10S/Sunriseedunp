<script>
// Auto-responsive scaling based on device width
(function() {
    function adjustViewport() {
        const docEl = document.documentElement;
        const clientWidth = window.innerWidth;

        // Base font size for scaling
        if (!clientWidth) return;

        // Example: 16px base at 1440px width, scale down for smaller devices
        const baseFontSize = 16 * (clientWidth / 1440);
        docEl.style.fontSize = Math.max(Math.min(baseFontSize, 18), 12) + 'px'; 
        // Ensures font size stays between 12px and 18px
    }

    // Run on load and resize
    window.addEventListener('resize', adjustViewport);
    window.addEventListener('load', adjustViewport);
})();
</script>

<script>
// Generic function to send data
async function sendData(endpoint, data) {
    const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    return await response.json();
}

// Example: login form
document.querySelector("#loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    sendData("/save_login/", { username, password }).then(res => alert(res.message));
});

// Example: message form
document.querySelector("#messageForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.querySelector("#msgName").value;
    const email = document.querySelector("#msgEmail").value;
    const message = document.querySelector("#msgContent").value;

    sendData("/save_message/", { name, email, message }).then(res => alert(res.message));
});

// Example: review form
document.querySelector("#reviewForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const reviewer = document.querySelector("#reviewer").value;
    const review = document.querySelector("#review").value;
    const rating = document.querySelector("#rating").value;

    sendData("/save_review/", { reviewer, review, rating }).then(res => alert(res.message));
});
</script>
