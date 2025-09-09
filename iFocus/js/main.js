// GASデプロイURL　仮置き
const GAS_URL = "https://script.google.com/macros/s/AKfycbwJu1ZoWmY6KkckqNvtG23G0skApPD28ZB-dbUkAuAu-E35TyyJ-t660dP44YhvLJ3v/exec";

// フォームデータを送信する関数
async function sendData(buttonValue) {
    const work = document.getElementById("workSelect").value;
    const endTime = document.getElementById("endTime").value;
    const title = document.getElementById("workInput").value;

    const payload = {
        work: work,
        endTime: endTime,
        title: title,
        button: buttonValue
    };

    try {
        const response = await fetch(GAS_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        const result = await response.json();
        console.log("API Response: ", result);
        alert("送信成功: " + JSON.stringify(result));

    } catch (error) {
        console.error("Error: ", error);
        alert("送信に失敗しました: " + error.message);
    }
}

// ボタンイベント
document.getElementById("startBtn").addEventListener("click", () => {
    sendData("Start");
});

document.getElementById("cancelBtn").addEventListener("click", () => {
    sendData("Canel");
});