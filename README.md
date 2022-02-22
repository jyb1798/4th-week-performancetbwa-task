# 4th-week-performancetbwa-task

### [Go Demo🚀](https://clever-archimedes-f474ab.netlify.app/)

## Member

<table>
<tr>
<td align="center"><a href="https://github.com/yunred"><img src="https://avatars.githubusercontent.com/u/84527643?v=4" width="90%" /></a></td>
<td align="center"><a href="https://github.com/zerochae"><img src="https://avatars.githubusercontent.com/u/84373490?v=4" width="90%" /></a></td>
<td align="center"><a href="https://github.com/WongueShin"><img src="https://media.vlpt.us/images/yeonbee/post/a3b02f02-0826-4cc9-b63e-9ddce5fbd857/wongyu.jpg" width="100%" /></a></td>
<td align="center"><a href="https://github.com/jyb1798"><img src="https://avatars.githubusercontent.com/u/64634495?s=400&u=3da5cb5a3ff4338da83a58a23df0608da5092ddc&v=4" width="100%" /></a></td>
</tr>
<tr>
<td align="center"><b>김서윤(팀장)</b></td>
<td align="center"><b>권영채</b></td>
<td align="center"><b>신원규</b></td>
<td align="center"><b>지연비</b></td>
</tr>
<tr>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
</tr>
</table>

<br />

## 역할 분담

<table>
<tr>
<td align="center"><b>팀원<b></td>
<td align="center"><b>역할</b></td>
</tr>
<tr>
<td>김서윤</td>
<td> 프로젝트 매니지먼트 / GNB / Image(플라워클래스) </td>
</tr>
<tr>
<td>권영채</td>
<td style="font-size:14px"> Footer / 팝업 /</td>
</tr>
<tr>
<td>신원규</td>
<td> 배너 / </td>
</tr>
<tr>
<td>지연비</td>
<td> Iframe / Image(플라워클래스)</td>
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
- 화살표 버튼 선택 시 이미지 자리 교체

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

## 이슈정리

---

### ⚡구현 중 기술적 이슈들

#### addEventListener & attachEvent

`IE8` 이하에서는 `addEventListener` 리스너가 동작하지 않았기 때문에, 대신에 `attachEvent`를 사용하였습니다.

```js
  if(element.addEventListener) element.addEventListener('click',function(){...})
  else element.attachEvent('onclick',function(){...})
```

두 방법 모두 이벤트를 요소에 연결하는 역할을 하지만,
attachEvent는 IE의 [Trident Rendering Engines(MSHTML)](https://en.wikipedia.org/wiki/MSHTML) 환경(IE5-8)에서만 동작하며,
addEventListener는 대부분의 브라우저(IE9 이상,크롬 등)에서 동작하는 W3 표준입니다.

#### NodeList.prototype.forEach

`IE`에서는 NodeList API의 `forEach`가 지원되지 않았습니다. popUp의 슬라이드 구현을 위해서 편의상 `forEach`가 필요했기 때문에 Polyfill을 통해서 forEach를 사용하였습니다.

```js
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

var nodeList = document.querySelector(node);
nodeList.forEach(function(){...})
```

#### AlphaImageLoader

`IE8` 이하에서는 CSS property `background-size`를 지원하지 않았습니다. 여기서 [AlphaImageLoader](<https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/ms532969(v=vs.85)>)를 이용할 수 있었습니다. 필터를 거친 이미지소스는 `width:100%,height:100%`의 속성을 가지고 변환되었습니다.

```css
filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='', sizingMethod='scale');
-ms-filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='', sizingMethod='scale')";
```

<br/>

#### GNB 크로스 브라우징 이슈

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

#### 스크롤 애니메이션 효과

GNB 영역의 header 클릭 시, 해당 영역으로 페이지 내 위치를 이동시키는 기능에서 애니메이션 효과를 적용해야 했습니다. 하지만 scroll-behavior은 IE에서 지원하지 않는 CSS코드였고, JQuery를 통해 해결할 수 있었습니다.

```
$('a[href^="#"]').click(function () {
var the_id = $(this).attr("href");

$("html, body").animate(
  {
    scrollTop: $(the_id).offset().top - 50,
  },
  "slow"
);
return false;
});
```

<br/>

## 프로젝트 후기

🎇김서윤 : 다양한 브라우저에 대한 이해가 필요했던 프로젝트였습니다. 크로스브라우징 과정에서 제가 작성하는 코드의 스타일이 심하게 깨졌고, 이것을 수정하는 과정이 까다롭기도 했지만 흥미로웠습니다.

🎈권영채 :

🎹신원규 : IE8 지원을 위해 많은 스타일의 많은부분을 JS 코드로 해결했어야 한 부분이 인상깊었습니다. 특히 폴리필을작성하며 기술적으로 성장할 수 있는 경험을 겪었습니다.

💖지연비 : 크로스브라우징에 대해서 팀원들과 지속적인 커뮤니케이션을 나눴던 부분이 인상적 프로젝트였습니다.
