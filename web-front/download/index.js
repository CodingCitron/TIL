/* data = image, video, file */
/* type = content-type, response.headers['content-type'] */

// const url = URL.createObjectURL(
//     new Blob([data], { type: response.headers['content-type'] })
// ); 

// const link = document.createElement('a');    
// link.href = url;

// link.setAttribute('download', fileName);
// document.body.appendChild(link);
// link.click();

// URL.revokeObjectURL(url); 

// 이미지 다운로드 참조: https://alikong.tistory.com/12
// blob 데이터 참조: https://ko.javascript.info/blob
// https://developer-alle.tistory.com/435
// a 링크 다운로드: https://mine-it-record.tistory.com/445

function fileDownload(data, type, fileName) {
    const url = URL.createObjectURL(
        new Blob([data], { type: type })
    ); 
    
    const link = document.createElement('a');    
    link.href = url;
    
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    
    URL.revokeObjectURL(url); 
}

const img = new Image()
img.src = "./test1.jpg"

const btn = document.querySelector('#image-download')

img.onload = () => {
    btn.addEventListener('click', () => {
        // console.log(img)
        fileDownload(img.src, 'image/jpg', '이미지 다운로드')
    })
}