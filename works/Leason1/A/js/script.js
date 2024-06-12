function addToParagraphBody() {
    document.write(
        "<p><span id='bold'>Umm al fahm</span>, Ein alderwa street </p>"
    )

    document.getElementById('bold').style.fontWeight = 'bold'
}
addToParagraphBody()