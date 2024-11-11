//flag로 양식집 비교
let flag = document.querySelector("title").innerText === "포도집";
// Youtube IFrame API를 비동기로 로드합니다.
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

if (flag) {
    videoId = "iBs5__7f3AA";
    playlist = "iBs5__7f3AA";
    timestamp = "1631552082394";
    key = "27csh";
} else {
    videoId = "S7UWTyrKH_8";
    playlist = "S7UWTyrKH_8";
    timestamp = "1631562761307";
    key = "27csq";
}

// onYouTubePlayerAPIReady 함수 이름은,
// Youtube IFrame Player API에서 사용하는 이름이기 때문에,
// 다르게 지정하면 동작하지 않습니다!
// 그리고 함수는 전역(Global) 등록해야 합니다!
function onYouTubePlayerAPIReady() {


    // <div id="player"></div>
    new YT.Player('player', {

        videoId: videoId, // 최초 재생할 유튜브 영상 ID
        playerVars: {
            autoplay: true, // 자동 재생 유무
            loop: true, // 반복 재생 유무
            playlist: playlist // 반복 재생할 유튜브 영상 ID 목록
        },
        events: {
            // 영상이 준비되었을 때,
            onReady: function (event) {
                event.target.mute() // 음소거!
            }
        }
    })
}
if (flag) {
    const toTopEl = document.querySelector('#to-top')
    // 페이지에 스크롤 이벤트를 추가!
    // 스크롤이 지나치게 자주 발생하는 것을 조절(throttle, 일부러 부하를 줌)
    window.addEventListener('scroll', _.throttle(function () {
        // 페이지 스크롤 위치가 500px이 넘으면.
        if (window.scrollY > 500) {
            // 상단으로 스크롤 버튼 보이기!
            gsap.to(toTopEl, .2, {
                x: 0
            })

            // 페이지 스크롤 위치가 500px이 넘지 않으면.
        } else {
            // 상단으로 스크롤 버튼 숨기기!
            gsap.to(toTopEl, .2, {
                x: 100
            })
        }
    }, 300))
    // 상단으로 스크롤 버튼을 클릭하면,
    toTopEl.addEventListener('click', function () {
        // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
        gsap.to(window, .7, {
            scrollTo: 0
        })
    })
    //이미지 클릭할때 저작권 창 뜨게 
    let imgs = document.getElementsByTagName("img");

    for (var x = 0; x < imgs.length; x++) {
        imgs[x].onclick = function () {
            alert("사진을 가져갈수없습니다.", "무단도용은 저작권에 위배됩니다.", "warning");
        };
    }
    //sweet alert
    let alert = function (title, text, icon) {
        swal({
            title: title,
            text: text,
            icon: icon,
        });
    }
    //날짜
    let today = new Date();
    document.querySelector(".date").innerText = today.toDateString();;
} else {
    $(document).ready(function () {
        // Initialize Tooltip
        $('[data-toggle="tooltip"]').tooltip();

        $(".navbar a, footer a[href='#menu']").on('click', function (event) {

            if (this.hash !== "") {

                event.preventDefault();

                // Store hash
                var hash = this.hash;

                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 900, function () {

                    window.location.hash = hash;
                });
            } // End if
        });
    })
    /**
     * 슬라이드 요소 관리
     */
    new Swiper('.promotion .swiper-container', {

        autoplay: { // 자동 재생 여부
            delay: 5000 // 5초마다 슬라이드 바뀜
        },
        loop: true, // 반복 재생 여부
        slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
        spaceBetween: 10, // 슬라이드 사이 여백
        centeredSlides: true, // 1번 슬라이드가 가운데 보이기
        pagination: { // 페이지 번호 사용 여부
            el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
            clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
        },
        navigation: { // 슬라이드 이전/다음 버튼 사용 여부
            prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
            nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
        }
    })
    //데이터 정보보기 뿌려주기
    $("#listButton").click(function () {
        $("#listButton").css("display", "none");
        $.ajax({
            type: 'get',
            url: 'information.html',
            dataType: 'html',
            success: function (data) {
                $(".ajax_list").append(data);
            }
        });
    });
}
//카카오맵
new daum.roughmap.Lander({
    "timestamp": timestamp,
    "key": key,
    "mapWidth": "640",
    "mapHeight": "360"
}).render();