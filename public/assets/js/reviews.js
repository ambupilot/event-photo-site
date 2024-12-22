document.addEventListener("DOMContentLoaded", function () {
    fetch('/public/api/reviews.php')
        .then(response => response.json())
        .then(data => {
            const reviewsContainer = document.getElementById('reviews-container');
            data.forEach(review => {
                const reviewDiv = document.createElement('div');
                reviewDiv.innerHTML = `
                    <h3>${review.name}</h3>
                    <p>${review.comment}</p>
                    <small>${review.date}</small>
                    <div>${'★'.repeat(review.rating)}</div>
                `;
                reviewsContainer.appendChild(reviewDiv);
            });
        });
});
