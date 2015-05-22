function sleepFor(ms) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + ms){}
}
sleepFor(3000);
document.getElementById('content').innerHTML = 'This is the content after delay';