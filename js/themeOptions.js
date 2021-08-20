function themesOptions() {
    const body = document.querySelector('body');
    const label = document.querySelectorAll('label');

    addEventListener('input', (e) => {
        const theme = e.target.id;
        const display = document.querySelector('.display span');
        if(theme == 'theme-one') {
            body.classList.add('theme-one')
            body.classList.remove('theme-two', 'theme-three');
        }
        if(theme == 'theme-two') {
            body.classList.add('theme-two')
            body.classList.remove('theme-one', 'theme-three');
        }
        if(theme == 'theme-three') {
            body.classList.add('theme-three')
            body.classList.remove('theme-one', 'theme-two');
            display.classList.toggle(".display_span", ".display");
        }
    })
}

themesOptions();