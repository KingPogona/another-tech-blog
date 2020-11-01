async function postFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#postTitle').value.trim();
    const post_content = document.querySelector('#postContent').value.trim();

    if (postTitle && postContent) {

        const response = await fetch('/api/posts', {
            method: 'post',
            body: JSON.stringify({
                title,
                post_content
                // in theory user_id will be handled by the api and session
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            location.reload();
        } else {
            alert(response.statusText);
        }
    }
}


document.querySelector('#postForm').addEventListener('submit', postFormHandler);