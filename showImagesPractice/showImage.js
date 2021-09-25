// variables of the HTML elements
let btnShowImage = document.getElementById('btn-show-image');
let imageContainer = document.getElementById('image-container');
let textTransformed = document.getElementById('text-transformed');
let mainTitle = document.getElementById('main-title');
let linkHome = document.getElementById('link-home');

// variables to create the HTML element(image) that will appear
let image = document.createElement('img');

// content of the image
image.src = 'https://images.unsplash.com/photo-1527161153332-99adcc6f2966?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80';

// flag
let flag = true ;

// onclick event to the button to show and hide the image 
btnShowImage.addEventListener('click', () => {
    if (flag === true) {
        // show the image
        imageContainer.append(image);

        // hide the main title
        mainTitle.remove()
        linkHome.remove()

        // update text 
        textTransformed.innerHTML = 'Da clic en el siguiente botón para ocultar la imagen';

        // update text in the button
        btnShowImage.innerText = "Ocultar imagen"

        // toggle class to the "show image" button to style it different
        btnShowImage.classList.toggle('btn-warning');

        // flag changed to false 
        flag = false;
    } else {
        // remove image 
        image.remove()

        // Show the main title
        textTransformed.insertAdjacentElement('beforebegin', mainTitle);
        mainTitle.insertAdjacentElement('beforebegin', linkHome);

        //update text
        textTransformed.innerHTML = 'Por favor da clic en el botón si quieres ver mi imagen favorita';

        // update text in the button
        btnShowImage.innerText = "Mostrar imagen"

        // toggle class to the "show image" button to style it different
        btnShowImage.classList.toggle('btn-warning');

        //flag changed to true
        flag = true;
    }
})
