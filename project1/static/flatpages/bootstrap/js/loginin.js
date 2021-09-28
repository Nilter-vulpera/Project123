document.getElementById('registerbtn').onclick= function(){
    let PswName=document.getElementById('psw');
    let LoginName=document.getElementById('email');

    let comment = {
        name:PswName.value,
        body:LoginName.value,

    }
    commentName.value='';
    commentBody.value='';

    comments.push(comment);
    console.log(comment);
}

