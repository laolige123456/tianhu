function search() {
    if (document.getElementById("main").value != "") {
        window.location.href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=" + document.getElementById("main").value;
        document.getElementById("main").value = "";
    }
    return false;
}