let balance = 1000000000;
const symbols = ['🍒','🍋','🍇','🍉','⭐','💎'];

function spin() {
    const slot = [
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)]
    ];
    document.getElementById("slot").innerText = slot.join(" | ");

    let resultText = "";
    let amount = 0;

    if (slot[0] === slot[1] && slot[1] === slot[2]) {
        // Выиграл
        amount = Math.floor(Math.random() * 100_000_000) + 10_000_000;
        balance += amount;
        resultText = `🎉 Выиграл ${amount.toLocaleString()}₽`;
    } else {
        // Проиграл
        amount = Math.floor(Math.random() * 5_000_000) + 1_000_000;
        balance = Math.max(0, balance - amount); // чтобы не уйти в минус
        resultText = `💀 Проиграл ${amount.toLocaleString()}₽`;
    }

    document.getElementById("balance").innerText = balance.toLocaleString() + "₽";
    document.getElementById("result").innerText = resultText;
}

Telegram.WebApp.ready();
Telegram.WebApp.expand();
