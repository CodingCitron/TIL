## HTTP(HyperText Transfer Protocol) 하이퍼텍스트 전송 프로토콜

- 월드 와이드 웹의 토대이며 하이퍼텍스트 링크를 사용하여 웹 페이지를 로드하는 데 사용됩니다.
- 하이퍼텍스트 전송 프로토콜은 HTML과 같은 하이퍼미디어 문서를 정송하기 위한 애플리케이션 계층 프로토콜입니다.

## content type(MIME) 정리

- HTTP Request 4개의 파트로 나눌 수 있다.
- Request Line, HTTP Header, Empty Line, Message Body
- Message Body에 들어가는 타입을 HTTP Header에 명시해 줄 수 있는데 이때 명시해줄 수 있도록 해주는 필드가 Content-Type

1. Multipart Related MIME 타입

- Content-Type: Multipart/related <-- 기본형태
- Content-Type: Application/X-FixedRecord

2. XML Media 타입

- Content-Type: text/xml
- Content-Type: Application/xml
- Content-Type: Application/xml-external-parsed-entity
- Content-Type: Application/xml-dtd
- Content-Type: Application/mathtml+xml
- Content-Type: Application/xslt+xml

3. Application 타입

- Content-Type: Application/EDI-X12 #Defined in RFC 1767
- Content-Type: Application/EDIFACT #Defined in RFC 1767
- Content-Type: Application/javascript #Defined in RFC 4329
- Content-Type: Application/octet-stream : #디폴트 미디어 타입은 운영체제 종종 실행파일, 다운로드 의미
- Content-Type: Application/ogg #Defined in RFC 3534
- Content-Type: Application/x-shockwave-flash #Adobe Flash files
- Content-Type: Application/json #Javascript Object Notation JSON; Defeined in RFC 4627
- Content-Type: Application/x-www-form-urlencode #HTML Form

4. 오디오 타입

- Content-Type: audio/mpeg #MP3 or other MPEG Audio
- Content-Type: audio/x-ms-wma #Windows Media Audio
- Content-Type: audio/vnd.rn-realaudio #RealAudio

5. Multipart 타입

- Content-Type: multipart/mixed: MIME E-mail
- Content-Type: multipart/alternative: MIME E-mail
- Content-Type: multipart/related: MIME E-mail #Defined in RFC 2387 and used by MHTML(HTML mail)
- Content-Type: multipart/formed-data

6. Text 타입

- Content-Type: text/css
- Content-Type: text/html
- Content-Type: text/javascript
- Content-Type: text/plain
- Content-Type: text/xml

### HTTP STATUS

[MDN](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/401)
