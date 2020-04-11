import { secretButton, secretParagraph } from './dom-loader';

var showSecret = false;

secretButton.addEventListener('click', toggleSecretState);
updateSecretParagraph();

function toggleSecretState(){
    showSecret = !showSecret;
    updateSecretParagraph();
    updateSecretButton();
}

function updateSecretButton(){
    if(showSecret == true){
        secretButton.textContent = 'Hide the Secret';
    } else {
        secretButton.textContent = 'Show the Secret';
    }
}

function updateSecretParagraph(){
    if(showSecret == true){
        secretParagraph.style.display = 'block';
    } else {
        secretParagraph.style.display = 'none';
    }
}