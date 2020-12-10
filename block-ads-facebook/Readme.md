# Trình chặn quảng cáo facebook 

 - hướng dẫn cho người chưa biết về lập trình
 - tự viết extension trong 5 phút
 
[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

# Bắt đầu
- tìm hiểu về extension [chrome_developers](https://developer.chrome.com/docs/extensions/mv2/getstarted/) - Làm quen với code
- tạo 1 thư mục [facebook_block_ads]
- tạo 1 file manifest.json trong thư mục
- tạo 1 file contents.js trong thư mục
```sh
#cấu trúc thưc mục

facebook_block_ads
 - manifest.json
 - content.js
```

### Facebook_block_ads cần những gì ?
- đơn giản chỉ là việc xoá những bài viết có quảng cáo [|Được tài trợ]()
- Cũng có thể thay thế vị trí bài viết đó bằng những gì bạn muốn

### Extension cần những gì ?
- 1 File manifest.json để khai báo, 1 File content.js để thực hiện  xoá bài viết có quảng cáo
- Chúng ta khai báo những gì trong manifest.json 
```sh
{
  "name": "Getting Started Example",
  "version": "1.0",
  "description": "Build an Extension!",
  "content_scripts": [
   {
     "matches": ["http://*.facebook.com/*"],
     "js": ["content.js"],
     "run_at": "document_end"
   }
  "manifest_version": 2
}
```

```sh
giải thích một chút về khai báo content_scripts
- matches : khai báo url mà file content.js có thể hoạt động
- js : khai báo file content.js :)
```

```sh
Ý tưởng để viết file content.js
- lấy ra tất cả bài viết đang hiển thị trên màn hình
- tìm những bài viết có nội dung quảng cáo [Được tài trợ]
- Xoá những bài viết đó
```
- trong file content.js có những gì
```sh
window.onscroll = function (e) {
// called when the window is scrolled.
    let elements = document.querySelectorAll("[data-pagelet='FeedUnit_{n}']");
    elements.forEach(function (ele, i) {
        if (elements[i].innerHTML.indexOf("Được tài trợ") !== -1) {
            elements[i].remove();
        }
    })
}
```

```sh
#giải thích 1 chút về file content.js
let elements = document.querySelectorAll("[data-pagelet='FeedUnit_{n}']"); // tìm ra tất cả các bài viết
elements.forEach(function (ele, i) {... // vòng lặp để  duyệt qua các bài viết
    if (elements[i].innerHTML.indexOf("Được tài trợ") !== -1) {... // tìm bài viết chứa quảng cáo
       elements[i].remove();  //xoá các bài viết đó
window.onscroll //phát hiện ra hành động lăn chuột
```

# Một phút dành cho quảng cáo

[![N|Solid](https://is4-ssl.mzstatic.com/image/thumb/Purple114/v4/85/22/5a/85225a73-b5aa-3002-0843-b23c05d1faf2/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.webp)](https://apps.apple.com/us/app/drumtify-music-for-life/id1530173879)

## Drumtify - Music For Life - Ứng dụng xem/ nghe nhạc youtube khi tắt màn hình
 - Link cài : [Drumtify - Music For Life](https://apps.apple.com/us/app/drumtify-music-for-life/id1530173879)
 - Cam kết không quảng cáo

![N|Solid](https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/69/1e/41/691e41b3-b5c7-ed07-18b1-a984555956bc/fa935e74-89c8-4fc6-8abe-0e845a9a997c_image4.png/230x0w.webp)

