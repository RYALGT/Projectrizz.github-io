document.addEventListener('DOMContentLoaded', (event) => {
    const webhookURL = 'https://discord.com/api/webhooks/1251273027103096953/5gC5-OI1hx3d42KOCGiCAYWMhQ9ai2slEv_xoB57tqlQUSXzF75PBNRX8HTk6419XKL-'; // Replace with your webhook URL

    function sendWebhookMessage() {
        const date = new Date();
        const embed = {
            title: "New Visitor",
            description: `A user has visited the website on ${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`,
            color: 5814783 // Some color in decimal
        };

        const payload = JSON.stringify({
            username: "Website Visitor Bot",
            embeds: [embed]
        });

        fetch(webhookURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: payload
        })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch((error) => console.error('Error:', error));
    }

    sendWebhookMessage();
});
