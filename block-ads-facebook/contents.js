window.onscroll = function (e) {
// called when the window is scrolled.
    let elements = document.querySelectorAll("[data-pagelet='FeedUnit_{n}']");
    elements.forEach(function (ele, i) {
        if (elements[i].innerHTML.indexOf("Được tài trợ") !== -1) {
            elements[i].children[0].innerHTML = changeAds();
        }
    })
}

changeAds = () => {
    return '<div style="background: aliceblue;border-radius: 5px;padding: 1rem"><h1 style="text-align: center">Đây là nội dung đã thay cho quảng cáo facebook <strong style="color: brown">Drumtify - Music For Life</strong></h1>' +
        '<div>' +
        '<img width="150px" src="https://is4-ssl.mzstatic.com/image/thumb/Purple114/v4/85/22/5a/85225a73-b5aa-3002-0843-b23c05d1faf2/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.webp">' +
        '<br/>' +
        '<img width="150px" src="https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/69/1e/41/691e41b3-b5c7-ed07-18b1-a984555956bc/fa935e74-89c8-4fc6-8abe-0e845a9a997c_image4.png/230x0w.webp">' +
        '<img width="150px" src="https://is5-ssl.mzstatic.com/image/thumb/Purple114/v4/fe/10/2e/fe102e89-6cd4-5154-edc7-7c5a2b944b12/5427bfc6-dbab-4fa7-80c3-4123998b4ab6_image2.png/230x0w.webp">' +
        '<img width="150px" src="https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/4d/80/64/4d8064a6-e09e-678c-7c62-d1538abb1ce0/1b2496d0-b449-4d1d-9734-16186fc107ed_image1.png/230x0w.webp">' +
        '</div>' +
        '</div>';
}