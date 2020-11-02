function addPostHandler() {
    const element = document.getElementById("addPostContainer");
    element.classList.remove("d-none");
}

async function postFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#postTitle').value.trim();
    const post_content = document.querySelector('#postContent').value.trim();

    if (title && post_content) {

        const response = await fetch('/api/posts', {
            method: 'post',
            body: JSON.stringify({
                title,
                post_content
                //user_id will be handled by the api/posts and will get the session variable
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


async function postClickHandler(event) {

    const check = event.target.nodeName.trim().toUpperCase();
    const postSubmit = event.target.classList.contains('editPostSubmit');
    const postDelete = event.target.classList.contains('editPostDelete');

    if (check == 'BUTTON' && postSubmit) {

        const postListItemEl = event.target.closest(".postListItem")


        const id = postListItemEl.id;
        const title = postListItemEl.querySelector('#editPostTitle' + id).value.trim();
        const post_content = postListItemEl.querySelector('#editPostContent' + id).value.trim();

        if (title && post_content) {

            const response = await fetch('/api/posts/' + id, {
                method: 'put',
                body: JSON.stringify({
                    title,
                    post_content
                    //user_id will be handled by the api/posts and will get the session variable
                }),
                headers: { 'Content-Type': 'application/json' }
            });

            if (response.ok) {
                // console.log("success")
                location.reload();
            } else {
                alert(response.statusText);
            }
        }
    }
    else if (check == 'BUTTON' && postDelete) {

        const postListItemEl = event.target.closest(".postListItem")

        const id = postListItemEl.id;

        const response = await fetch('/api/posts/' + id, {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            console.log("success")
            location.reload();
        } else {
            alert(response.statusText);
        }
    }
    else if (check !== 'TEXTAREA' && check !== 'INPUT') {
        const postListItemEl = event.target.closest(".postListItem")

        const postEl = postListItemEl.querySelector(".postCard");
        const titleEl = postEl.querySelector(".postTitle");
        const bodyEl = postEl.querySelector(".postBody");

        const id = postListItemEl.id;
        const title = titleEl.innerHTML.trim();
        const body = bodyEl.innerHTML.trim();

        const editFormEl = postListItemEl.querySelector(".editPostContainer");

        const editTitleEl = postListItemEl.querySelector("#editPostTitle" + id);
        const postContentEl = postListItemEl.querySelector("#editPostContent" + id);

        editTitleEl.value = title;
        postContentEl.value = body;

        editFormEl.classList.remove('d-none');
        postEl.classList.add('d-none');
    }
};


document.getElementById('addPost').addEventListener('click', addPostHandler);
document.getElementById('postForm').addEventListener('submit', postFormHandler);

document.addEventListener('click', postClickHandler)
