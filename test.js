function change_theme1() {

    let b1 = document.getElementById('theme1');
    let body = document.getElementById('body');
    let title = document.getElementById('title');
    let b2 = document.getElementById('theme2');
    let paragraphe = document.getElementById('paragraphe');
    body.style.backgroundColor = 'black';
    title.style.color = 'aliceblue';
    b1.style.border = '1px solid aliceblue';
    paragraphe.style.color = 'aliceblue';
    b1.style.visibility = 'hidden';
    b2.style.visibility = 'visible';


}

function change_theme2() {
    let b1 = document.getElementById('theme1');
    let paragraphe = document.getElementById('paragraphe');
    let b2 = document.getElementById('theme2');
    let body = document.getElementById('body');
    let title = document.getElementById('title');
    body.style.backgroundColor = 'aliceblue';
    title.style.color = 'black';
    paragraphe.style.color = 'black';
    b2.style.visibility = 'hidden';
    b1.style.visibility = 'visible';
    b1.style.border = '1px solid black';

}