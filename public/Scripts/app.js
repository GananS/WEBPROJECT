// IIFR --> Immediately invoked function expression
(function () {
    function Start() {
        console.log("App Started")
        let deleteButtons = document.querySelectorAll('.btn-danger');
        for (button of deleteButtons) {
            button.addEventListener('click', (event) => {
                if (!confirm("Are you sure you want to do that?")) {
                    event.preventDefault();
                    window.location.assign('/schedule-list');
                }
            });
        }
    }
    window.addEventListener("load", Start);
})();
