
const database=firebase.database().ref();

const allMessages=document.getElementById("all-messages");
const usernameElem=document.getElementById("username");
const messageElem=document.getElementById("message");
const sendBtn = document.getElementById("send-btn");
sendBtn.addEventListener("click",updateDB);
function updateDB(event){
    event.preventDefault();
    const data={
        USERNAME: usernameElem.value,
        MESSAGE:messageElem.value
    }

    console.log(data);
    database.push(data);
    messageElem.value=" ";

}

database.on("child_added",addMessageToBoard);



function addMessageToBoard(rowData){
    const data=rowData.val();

    console.log(data);
    
    let singleMessage=makeSingleMessageHTML(data.USERNAME, data.MESSAGE);

    allMessages.append(singleMessage);
}
function makeSingleMessageHTML(usernameTxt,messageTxt){
    let parentDiv=document.createElement("div");
    parentDiv.classList.add("single-message");

    let usernameP=document.createElement("p");
    usernameP.classList.add("single-message-username");
    usernameP.innerHTML=usernameTxt+":";
    parentDiv.append(usernameP);

    let messageP=document.createElement("p");
    messageP.innerHTML=messageTxt;
    parentDiv.append(messageP);

    return parentDiv
}

/**
 * @BONUS add an onkeyup event handler to the form HTML
 * element so the user can also submit the form with the
 * Enter key
 * 
 * @BONUS use an arrow function
 */
