document.querySelector('#vibe-check').addEventListener('click', checkVibe)
var thumbDown = document.getElementsByClassName("fa-thumbs-down");
var trash = document.getElementsByClassName("fa-trash");

// Array.from(liked).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const mood = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         const liked = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//         fetch('mood-post', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'mood': mood,
//             'msg': msg,
//             'liked':liked
//           })
//         })
//         .then(response => {
//           if (response.ok) return response.json()
//         })
//         .then(data => {
//           console.log(data)
//           window.location.reload(true)
//         })
//       });
// });


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const mood = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('mood-delete', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'mood': mood,
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});

function checkVibe() {
  const moodPosts = document.querySelectorAll(".mood-post")
  const mood = document.querySelector('.moods')
   document.querySelector('#the-vibe').innerText = mood.innerText

}