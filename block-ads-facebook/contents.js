window.onscroll = function (e) {
// called when the window is scrolled.
    let div_1= document.querySelectorAll("[data-pagelet='FeedUnit_1']");
    if(div_1.length>0 && div_1[0].innerHTML.indexOf("Được tài trợ")!==-1) div_1[0].children[0].innerHTML = changeAds();
    let elements = document.querySelectorAll("[data-pagelet='FeedUnit_{n}']");
    elements.forEach(function (ele, i) {
        if (elements[i].innerHTML.indexOf("Được tài trợ") !== -1) {
           return elements[i].children[0].innerHTML = changeAds();
        }
    })
}

changeAds = () => {
    return '<div style="background: aliceblue;border-radius: 5px;padding: 2rem;text-align: center"><h1 style="text-align: center">Đây là nội dung quảng cáo facebook, <strong style="color: brown">đã bị xoá</strong></h1></div>';
}