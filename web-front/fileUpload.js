const inputElement = document.getElementById("input");

inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
  const fileList = this.files; /* 이제 파일 리스트로 작업할 수 있습니다 */
}

/* https://developer.mozilla.org/ko/docs/Web/API/File_API/Using_files_from_web_applications */