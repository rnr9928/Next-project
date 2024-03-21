
# Gurello

## 🖥️ Project Page  

<li><a href = "https://gurelllo.vercel.app/">http://15.164.221.206</a></li>
<br><br>


## 🧾 Project Description

Nextjs와 TypeScript로 만든 협업 웹페이지


<br><br>



## 🛠 Tech Stack

### Front: Next.js , TypeScript , tailwind  
### Back: Next-auth , liveblock

<br><br>

## 🎨 Preview

![화면 캡처 2024-03-20 001156](https://github.com/rnr9928/Next-project/assets/97073355/5b6736c3-f232-4fc9-a6cd-7d31a489932f)  
![화면 캡처 2024-03-20 001530](https://github.com/rnr9928/Next-project/assets/97073355/a10e495d-014b-406e-9ad4-668098702a88)

<br><br>

---

## next-auth로 간편하게 Oauth 인증하기

```
npm install next-auth
```

/app/api/auth/[...nextauth]/route.ts 경로 파일 생성  


![화면 캡처 2024-03-21 145454](https://github.com/rnr9928/Next-project/assets/97073355/a0ac7ce0-b310-4db6-bdc7-fd776739de00)
구글뿐만 아니라 네이버 , 카카오, 인스타그램 등등 여러 로그인 인증기반이 있습니다  


![화면 캡처 2024-03-21 145454](https://github.com/rnr9928/Next-project/assets/97073355/9843ceb5-f1f7-4f8a-9e01-1169f890d609)

구글 클라우드에 들어가서 프로젝트를 생성한 다음 
사용하고 있는 주소를 추가  


![화면 캡처 2024-03-21 150632](https://github.com/rnr9928/Next-project/assets/97073355/cf19494a-ed6a-48cc-be1e-18cd9a707224)

아까 생성한 경로 파일에  클라이언트 id와 password를 .env파일에 넣고
적용하면 끝  

![화면 캡처 2024-03-21 151152](https://github.com/rnr9928/Next-project/assets/97073355/c6f8a713-2e40-46ac-91d1-8136c833efe9)
로그인 페이지 만들어서 signIn 함수를 import하시면 완성


