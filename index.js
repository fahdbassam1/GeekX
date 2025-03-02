document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.fade-in');

    function checkScroll() {
        elements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight * 0.85) {
                el.classList.add('visible');
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});
document.getElementById('dark-mode-btn').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
<div id="comments-section">
    <h3>التعليقات</h3>
    <textarea id="comment-box" placeholder="أضف تعليقك..."></textarea>
    <button onclick="addComment()">إرسال</button>
    <ul id="comments-list"></ul>
</div>
function addComment() {
    let commentBox = document.getElementById('comment-box');
    let commentText = commentBox.value.trim();
    if (commentText !== "") {
        let commentList = document.getElementById('comments-list');
        let newComment = document.createElement("li");
        newComment.textContent = commentText;
        commentList.appendChild(newComment);
        commentBox.value = "";
    }
}
document.addEventListener("DOMContentLoaded", function() {
    let articleCount = document.querySelectorAll('article').length;
    document.getElementById('article-counter').textContent = articleCount;
});
setTimeout(() => {
    document.getElementById('new-post-alert').style.display = 'block';
}, 3000); // يظهر الإشعار بعد 3 ثوانٍ
let scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

scrollTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
function ratePost(stars) {
    document.getElementById("rating-result").innerText = `لقد قمت بتقييم المقال بـ ${stars} نجوم!`;
}