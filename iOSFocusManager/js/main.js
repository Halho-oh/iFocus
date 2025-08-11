// Service Worker登録
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
}

document.getElementById('startBtn').addEventListener('click', () => {
    alert('Focus Mode Started!');
});