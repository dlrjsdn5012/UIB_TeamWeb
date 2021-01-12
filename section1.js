var currentContent = 0;
const right = document.getElementsByClassName("content-btn-right"); //오른쪽 버튼
const left = document.getElementsByClassName("content-btn-left"); //왼쪽 버튼


document.addEventListener('click', function (event) {
    if (event.target.matches('.content-btn-left')) {
        currentContent += 1
        if (currentContent % 2 == 0) {
          document.querySelector('.content1').style.display = 'flex'
          document.querySelector('.content2').style.display = 'none'
          document.querySelector('.content1').style.width = '50%'
        } else {
          document.querySelector('.content1').style.display = 'none'
          document.querySelector('.content2').style.display = 'flex'
          document.querySelector('.content2').style.width = '50%'
        }
    } else if (event.target.matches('.content-btn-right')) {
        currentContent += 1
      if (currentContent % 2 == 0) {
        document.querySelector('.content1').style.display = 'flex'
        document.querySelector('.content2').style.display = 'none'
        document.querySelector('.content1').style.width = '50%'
      } else {
        document.querySelector('.content1').style.display = 'none'
        document.querySelector('.content2').style.display = 'flex'
        document.querySelector('.content2').style.width = '50%'
      }
    }
});

// window.onload = function() {
//     document.querySelector('.content-btn-right').addEventListener('click', function(){
//         document.querySelector('.section1').style.transform = 'translate(-100vw)'
//     });

//     document.querySelector('.content-btn-left').addEventListener('click', function(){
//         document.querySelector('.section1').style.transform = 'translate(0vw)'
//     });
// }