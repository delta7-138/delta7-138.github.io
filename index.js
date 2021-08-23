var elem = document.getElementById("github");
var url = "https://api.github.com/users/delta7-138"
fetch(url , {method : "GET"})
.then((response)=>{
    return response.json();
}).then((data)=>{
    let repos = data["public_repos"]
    let followers = data["followers"]
    let following = data["following"]
    let avatarurl = data["avatar_url"]
    elem.innerHTML+= "<img width = '20%' src = " + avatarurl + "><h3>Repositories : " + repos + "</h3>"
     + "<h3>Followers : " + followers + "</h3>"
     + "<h3>Following : " + following + "</h3>"
    console.log(data);
}).catch((err)=>{
    console.log("Error");
})

