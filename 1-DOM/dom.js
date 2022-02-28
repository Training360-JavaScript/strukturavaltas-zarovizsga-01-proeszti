function manipulateDom() {
    document.querySelectorAll(".quote").forEach(e => {
        e.style.borderColor = "blue";
        e.style.backgroundColor = "lightblue";
        e.style.fontStyle = "italic";
    });
};

export { manipulateDom };