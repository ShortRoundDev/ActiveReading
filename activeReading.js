document.styleSheets[0].insertRule(`
    .active-reading-read {
        position: relative;
    }`, 0);

document.styleSheets[0].insertRule(`
    .active-reading-read:before {
        content: "✅";
        position:absolute;
        left:-28px;
    }`, 0);

document.addEventListener('click', e => {
    if(e.target.tagName === 'P'){
        e.target.classList.toggle('active-reading-read');
    }
});