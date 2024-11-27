$(document).ready(function() {
    var quotes = [
      // 한국인 명언
      "\"성공은 작은 노력을 반복적으로 쌓아올린 결과입니다.\" - 이건희 (삼성그룹 회장)",
      "\"변화를 두려워하지 말고, 변화를 기회로 만들어라.\" - 정주영 (현대그룹 창업자)",
      "\"지금 하지 않으면 10년 후에도 똑같은 자리에서 똑같은 후회를 할 것입니다.\" - 김연아 (올림픽 금메달리스트)",
      "\"배움에는 끝이 없습니다. 작은 것이라도 배우고 실천하세요.\" - 박지성 (전 축구 국가대표 선수)",
      "\"어제보다 나은 오늘을 위해, 한 걸음씩 전진하라.\" - 유재석 (방송인)",
      "\"문제를 해결하는 방법은 문제 안에 있다.\" - 장영실 (조선 시대 과학자)",
      "\"어려움은 새로운 기회를 창출하는 출발점입니다.\" - 김구 (독립운동가)",
      "\"기술은 인간을 돕기 위해 존재합니다. 기술을 통해 세상을 더 나은 곳으로 만들어라.\" - 이병철 (삼성 창업자)",
  
      // 외국인 명언
      "\"Programs must be written for people to read, and only incidentally for machines to execute.\" - Harold Abelson",
      "\"Talk is cheap. Show me the code.\" - Linus Torvalds (Creator of Linux)",
      "\"The only way to learn a new programming language is by writing programs in it.\" - Dennis Ritchie (Creator of C)",
      "\"Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.\" - Mark Zuckerberg (Meta, Co-Founder)",
      "\"The art of programming is the art of organizing complexity.\" - Edsger W. Dijkstra",
      "\"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.\" - Albert Schweitzer",
      "\"Your time is limited, so don't waste it living someone else's life.\" - Steve Jobs (Apple, Co-Founder)",
      "\"Innovation distinguishes between a leader and a follower.\" - Steve Jobs",
      "\"If you don't fail at least 90 percent of the time, you're not aiming high enough.\" - Alan Kay (Pioneer in Object-Oriented Programming)",
      "\"It always seems impossible until it’s done.\" - Nelson Mandela"
    ];
  
    function randomize() {
      var random = Math.floor(Math.random() * quotes.length);
      $(".message").html(quotes[random]);
    }
  
    $("#getMessage").on("click", function() {
      randomize();
    });
  });
  