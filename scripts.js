const commentInput = document.getElementById('comment-input');
const saveButton = document.getElementById('save-comment');
const commentList = document.getElementById('comment-list');

// Load comments from localStorage and display them in the comment list
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  if (key.startsWith('comment_')) {
    const comment = localStorage.getItem(key);
    addCommentToList(comment);
  }
}

// Save the comment to localStorage and add it to the comment list when the save button is clicked
saveButton.addEventListener('click', () => {
  const comment = commentInput.value;
  const timestamp = new Date().getTime();
  const key = `comment_${timestamp}`;
  localStorage.setItem(key, comment);
  addCommentToList(comment);
  commentInput.value = '';
});

// Add a comment and timestamp to the comment list
function addCommentToList(comment, timestamp) {
  const li = document.createElement('li');
  const date = new Date(timestamp);
  const timeString = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  li.textContent = `${timeString}: ${comment}`;
  commentList.appendChild(li);
}
