# 크로스 브라우징을 곁들인 플라워 구독 서비스

## [Go Demo🚀](https://happy-ncnc.netlify.app/)

## Member

### 역할 분담

<table>
<tr>
<td align="center"><b>팀원<b></td>
<td align="center"><b>역할</b></td>
</tr>
<tr>
<td>지연비</td>
<td style="font-size:16px"> Image(플라워클래스) / Iframe </td>
</tr>
<tr>
<td>권영채</td>
<td> Footer / 팝업 </td>
</tr>
<tr>
<td>신원규</td>
<td> 배너 </td>
</tr>
<tr>
<td>김서윤</td>
<td> GNB / Image</td>
</tr>

</table>

<br/>

## 구현 기능

### ✅기술스택

Vanilla JS로 구현하였으며, jQuery는 선택적으로 사용하였습니다.

### ✅레이아웃 및 기능

#### 전체 레이아웃

- 배너를 제외한 나머지 영역은 양 옆 Margin 적용
- 배너의 경우 width 100%로 꽉 차도록 구성
- 반응형 웹으로 미디어쿼리 혹은 부트스트랩을 활용하여 모바일, 태블릿, PC레이아웃 구성

#### GNB

- 스크롤 이동시 상단 고정
- 메뉴 hover 시 글자 하단 밑줄
- GNB 하단 영역에 z-index 표현을 위한 그림자 효과
- 메뉴 아이템 두가지(동영상, 플라워클래스) 클릭 시 해당 영역으로 이동(애니메이션 효과 적용)

#### 동영상

- Iframe을 활용하여 웹디자인에 어울리는 동영상 삽입 및 크기 조절
- 동영상에 대한 간단한 caption 삽입 및 동영상 제목 클릭 시 영상 링크로 이동

#### Image(플라워클래스)

- 이미지 hover 시 줌 효과
- 왼쪽 큰 영역과 오른쪽 두개의 작은 영역을 화살표 선택 시 돌아갈 수 있도록 구현했습니다.
- 반응형 웹으로 구현하기 위해 미디어 쿼리를 사용하였습니다.

#### 배너

- Bootstrap4를 사용하여 레이아웃 구성하고, 사용하지 않을 경우 크로스 브라우징 처리

#### Footer

- Bootstrap을 쓰지않고 순수 CSS로 레이아웃 구성
- 크로스 브라우징 유의(IE 8버전 이상)
- SNS 아이콘 클릭 시 링크 이동(새창 열림)

<br/>

## 프로젝트 실행 방법

```
$ git clone https://github.com/PreOnboardingTeam-16/4th-week-performancetbwa-task.git

//http-server 없는 경우 코드 추가
$ npm install -g http-server

$ npx http-server

```

<br/>

## ⚡구현 중 기술적 이슈

### addEventListener & attachEvent

`IE8` 이하에서는 `addEventListener` 리스너가 동작하지 않았기 때문에, 대신에 `attachEvent`를 사용하였습니다.

```js
  if(element.addEventListener) element.addEventListener('click',function(){...})
  else element.attachEvent('onclick',function(){...})
```

두 방법 모두 이벤트를 요소에 연결하는 역할을 하지만,
attachEvent는 IE의 [Trident Rendering Engines(MSHTML)](https://en.wikipedia.org/wiki/MSHTML) 환경(IE5-8)에서만 동작하며,
addEventListener는 대부분의 브라우저(IE9 이상,크롬 등)에서 동작하는 W3 표준입니다.

### GNB 크로스 브라우징 이슈

```jsx
// css/header.css

@media \0screen\ {
  /* IE8 헤더 스타일*/
  .HeaderContainer {
    padding-bottom: 90px;
	...
  }
}
```

IE9버전까지는 정상적으로 작동했지만 IE8버전에서 CSS 호환이 되지않았고, 헤더 nav태그들을 선택할 수 없었습니다. 그래서 IE8에서만 따로 CSS를 제어하는 방법으로 스타일을 따로 적용시켜주었습니다.
