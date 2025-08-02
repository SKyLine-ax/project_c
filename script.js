let balance = 1000000000;
const symbols = ['🍒','🍋','🍇','🍉','⭐','💎'];

function spin() {
    const slot = [
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)]
    ];
    document.getElementById("slot").innerText = slot.join(" | ");

    let win = 0;
    if (slot[0] === slot[1] && slot[1] === slot[2]) {
        win = Math.floor(Math.random() * 100_000_000) + 10_000_000;
    } else {
        win = Math.floor(Math.random() * 5_000_000) + 1_000_000;
    }

    balance += win;
    document.getElementById("balance").innerText = balance.toLocaleString() + "$";
}


Telegram.WebApp.ready();
Telegram.WebApp.expand();
