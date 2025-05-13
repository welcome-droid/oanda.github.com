function showDashboard() {
    document.getElementById("info-section").innerHTML = `
        <h2>Bank App Information</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
    `;
}

function showTransactions() {
    document.getElementById("info-section").innerHTML = `
        <h2>Transaction History</h2>
        <ul>
            <li>Transaction 1</li>
            <li>Transaction 2</li>
            <li>Transaction 3</li>
        </ul>
    `;
}

function showPayments() {
    document.getElementById("info-section").innerHTML = `
        <h2>Make a Payment</h2>
        <form>
            <label for="amount">Amount:</label>
            <input type="number" id="amount" name="amount">
            <button>Pay</button>
        </form>
    `;
}

function showSettings() {
    document.getElementById("info-section").innerHTML = `
        <h2>Account Settings</h2>
        <p>Update your account settings here.</p>
    `;
}
