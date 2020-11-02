async function postClickHandler(event) {
    const check = event.target.nodeName.trim().toUpperCase();
    const submitComment = event.target.classList.contains('submitComment');

    if (check == 'BUTTON' && submitComment) {
        const postListItemEl = event.target.closest(".postListItem")

        const post_id = postListItemEl.id

        const comment_content = postListItemEl.querySelector('#commentInput' + post_id).value.trim();

        if (comment_content) {

            const response = await fetch('/api/comments', {
                method: 'post',
                body: JSON.stringify({
                    comment_content,
                    post_id
                    //user_id will be handled by the api/comments and will get the session variable
                }),
                headers: { 'Content-Type': 'application/json' }
            });

            if (response.ok) {
                console.log("success")
                location.reload();
            } else {
                alert(response.statusText);
            }
        }
    } else if (check !== 'TEXTAREA' && check !== 'INPUT') {
        const postListItemEl = event.target.closest(".postListItem")

        const id = postListItemEl.id;

        const cardFooterEl = postListItemEl.querySelector(".card-footer")

        cardFooterEl.classList.remove("d-none");
    }

}























document.addEventListener('click', postClickHandler)