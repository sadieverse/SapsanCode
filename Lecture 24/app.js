// import 'bootstrap';
// import 'node_modules/bootstrap/dist/css/bootstrap.min.css';


const box = document.createElement('div');
box.id = 'box';
document.body.appendChild(box);

// const button = document.createElement('button');
// button.innerText = 'Get me some img';
// button.id = 'button-1';
// box.appendChild(button);


async function getLink() {
    try{
        let result = await fetch('https://my-json-server.typicode.com/sadieverse/myserver/profile')
        .then(res => res.json())
        .then(result => {return result["avatar"]});
        const myImage = document.createElement('img');
        document.body.appendChild(myImage);
        myImage.id = 'bubbles';
        myImage.src = `${result}`;

    }
    catch{
        console.error(`FAIL`)
    }
}
