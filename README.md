
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

next-auth 페이지   -> Providers -> Google 
<br><br>

![화면 캡처 2024-03-21 150056](https://github.com/rnr9928/Next-project/assets/97073355/9af145e5-638b-46ae-96f0-c350f4d89be2)


구글 클라우드에 들어가서 프로젝트를 생성한 다음 
사용하고 있는 주소를 추가  
<br><br>

![화면 캡처 2024-03-21 150632](https://github.com/rnr9928/Next-project/assets/97073355/cf19494a-ed6a-48cc-be1e-18cd9a707224)

아까 생성한 경로 파일에  클라이언트 id와 password를 .env파일에 넣고
적용  
<br><br>

![화면 캡처 2024-03-21 151152](https://github.com/rnr9928/Next-project/assets/97073355/c6f8a713-2e40-46ac-91d1-8136c833efe9)  
로그인 페이지 만들어서 signIn 함수를 import하면 완성
<br><br><br><br>


---
## liveblocks 라이브러리

![logo-liveblocks-organization-schema](https://github.com/rnr9928/Next-project/assets/97073355/053bdc44-8d66-4f36-9b8f-4530c48bacde)  

liveblocks은 실시간 협업 기능들을 중점에 둔 라이브러리 입니다  

![화면 캡처 2024-03-21 210451](https://github.com/rnr9928/Next-project/assets/97073355/8d1bfcfa-4555-424a-bba5-e381d3715b72)  
getServerSession함수로 사용자의 이메일 주소를 가져옵니다  
구글에 인증된 메일이 있을시 unqid.time()를 이용해 현재 시각 기준으로 고유한 방 id를 생성하고
없을 경우 false로 리턴했습니다  

[ getServerSession 함수는 NextAuth에서 제공되는 함수중 하나로 서버측에서 세션을 가져오는데 쓰입니다 ]  

![화면 캡처 2024-03-21 211025](https://github.com/rnr9928/Next-project/assets/97073355/99de92b6-1634-4701-adbb-4c5b672c6485)  
liveblock 프로젝트 페이지에서 유저 정보를 확인할 수 있습니다


## 초대하기  
![화면 캡처 2024-03-26 223129](https://github.com/rnr9928/Next-project/assets/97073355/6efc0cd6-5ba3-4c07-bbb8-e782b5148e2a)  

이메일을 추가해서 자신의 작업물에 초대할수 있습니다  
```
export default function NewBoardSetting({boardId}:{boardId:string}){
    const router = useRouter()
    const inputRef = useRef<HTMLInputElement>(null)
   async function actionEamil(formData: FormData){
        const email = formData.get('email')?.toString() || ''
        await AddEmail(boardId,email)
        if(inputRef.current){
            inputRef.current.value =''
        }
        router.refresh()
    }
```
input에서 입력된 값이 들어갈 예정이므로 useRef() 타입에 제너릭으로 설정했습니다  
이메일은 FormData의 기능을 사용하여 email필드를 가져와 문자열로 변환 없으면 빈문자열  
```
export async function AddEmail(boardId:string, email:string){
    const room = await liveblocks.getRoom(boardId)
    const usersAccesses = room.usersAccesses
    usersAccesses[email] = ['room:write']
    await liveblocks.updateRoom(boardId,{usersAccesses})
    return true
}
```
liveblocks.getRoom(boardId)를 호출하여 boardId 에 해당하는 정보를 가져오고 room에 할당  

usersAccesses[email] = ['room:write'] 는 liveblocks의 기능입니다 초대된 이메일에 쓰기 권한을 가질 수 있습니다

