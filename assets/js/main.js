document.addEventListener('DOMContentLoaded', function() {
    const algorithmLinks = document.querySelectorAll('.algorithm-link');

    algorithmLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetPage = this.getAttribute('href');
            loadAlgorithmPage(targetPage);
        });
    });

    function loadAlgorithmPage(page) {
        const contentArea = document.getElementById('content');
        fetch(page)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                contentArea.innerHTML = data;
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }
});