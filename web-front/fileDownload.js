async function handleFileDownload() {
  const response = await fetch('api address');
  const file = await response.blob(); 
  const downloadUrl = window.URL.createObjectURL(file); // 해당 file을 가리키는 url 생성
 
  const anchorElement = document.createElement('a');
  document.body.appendChild(anchorElement);
  anchorElement.download = 'some file'; // a tag에 download 속성을 줘서 클릭할 때 다운로드가 일어날 수 있도록 하기
  anchorElement.href = downloadUrl; // href에 url 달아주기
 
  anchorElement.click(); // 코드 상으로 클릭을 해줘서 다운로드를 트리거
 
  document.body.removeChild(anchorElement); // cleanup - 쓰임을 다한 a 태그 삭제
  window.URL.revokeObjectUrl(downloadUrl); // cleanup - 쓰임을 다한 url 객체 삭제
}

/* https://developer-alle.tistory.com/435 */