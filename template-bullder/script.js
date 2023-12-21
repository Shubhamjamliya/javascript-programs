function createCard(title,cname,views,monthsOld,duration,thumbnail) {
     let viewStr;
    if(views <1000) {
         viewStr=views;
    }
    else if(views > 1000000) {
        viewStr=views/1000000 + "M";
    }
    else{
        viewStr=views/1000 +"K";
    }


    
    let html=`<div class="box">
    <div class="thumbnail">
        <div class="tag">${duration}</div>
        <div class="image-box"><img src=${thumbnail}></div>
    </div>
    <div class="text">
      <h3 id="title">${title}</h3>
      <div class="text-below">
        <span> ${cname}</span>
        <div class="separator">•</div>
        <span>
        ${viewStr}</span>
        <div class="separator">•</div>
        <span>${monthsOld} Month Ago</span>
      </div>
    </div>
    </div>`;

    let con=document.querySelector(".container");
    con.insertAdjacentHTML('afterbegin',html);
}



createCard("Introduction to Backend | Sigma Web Dev video #2","Code with Harry", 560,7,"31.22","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");
createCard("Introduction to Backend | Sigma Web Dev video #2","Code with Harry", 84000,7,"31.22","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");
createCard("Introduction to Backend | Sigma Web Dev video #2","Code with Harry", 6000000,7,"31.22","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");