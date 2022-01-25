const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    console.log(event.platforms)
    event.userChoice.then(function(choiceResult) {
        console.log(choiceResult(choiceResult)) 
        }, handleError);
    });

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    console.log("butInstall-clicked")
    const propmptEvent= window.deferredPrompt;
    if(!propmptEvent){
        return;
    }
    propmptEvent.prompt();
    const result = await propmptEvent.userChoice;
    console.log("userChoice", result);
    window.deferredPrompt = null;
    divInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('appinstalld', event);
    window.deferredPrompt = null;
});
