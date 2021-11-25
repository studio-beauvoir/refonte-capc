document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('light-theme-btn').addEventListener('click', function() {
        document.querySelector('html').dataset.theme="dark";
    })
    document.getElementById('dark-theme-btn').addEventListener('click', function() {
        document.querySelector('html').dataset.theme="light";
    })
})