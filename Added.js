(() => {
    function downloadSiteInfo(filename, text) {
        let elem = document.createElement('a');
        elem.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        elem.setAttribute('download', filename);

        elem.style.display = 'none';
        document.body.appendChild(elem);

        elem.click();
        elem.remove();
    }

    var html =
