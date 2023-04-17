const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    // sets deferredPrompt to event object
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const prompt = window.deferredPrompt;
 if (!prompt){
        return;
    }
    // if not prompt event returns
     prompt.prompt();
    // shows prompt if prompt event
    window.deferredPrompt = null;
    // stops prompt from appearing if app installed
butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
    //stops prompts from appearing if app installed
});
