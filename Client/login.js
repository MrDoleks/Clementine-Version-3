async function login(){
    const password = document.querySelector("#password").value;
    const token = window.btoa("admin:" + password)
    const headers=new Headers();
    headers.set("Authorization", "Basic " + token);  
    const response = await fetch(`${window.location.origin}/helloworld`, {
        method: "GET",
        headers:headers, 
    });
    if (response.ok){
        window.sessionStorage.setItem("clem_token", token);
        window.location.assign("index.html");
    } else {
        window.alert("Sorry, wrong password :(") 
    }
}

// created by David Oleksy 6/15/2022