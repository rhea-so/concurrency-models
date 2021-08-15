# 7가지 동시성 모델

## 내가 하고 싶은 말

책을 읽으며 알게된 내용 등을 여기에 업데이트 하고 있습니다.  
도서는 코드가 Java로 작성되어있는데, 저는 이를 Typescript로 작성 중입니다.  

도서와 다른 부분이 많더라도 이해해주세요.

이 레포는 책을 그대로 옮기기 위해서 존재하는 것이 아닙니다.  
제가 읽고 배운 내용을 기록하기 위해서 존재합니다.

책 내용이 전부 그대로 올라가있지 않으니, 레포를 보다 내용이 궁금하신 분들은 책을 꼭 구매해주세요.

## 옮긴이의 말

자바 언어로 개발된 클라이언트와 서버 코드는 이곳저곳에 스레드와 잠금장치를 사용했다.  
2000년대 중반이었기 때문에 더그 리가 작성한 동시성 패키지가 뜨거운 환영을 받던 시절이었다.  
포크/조인 스레드 풀이 등장했을 때는 JVM에서 동시성과 병렬성 문제가 모두 해결되었다는 성급한 전망이 나오기도 했다.

하지만, 자바 동시성에 대한 브라이언 괴츠의 책이 시장을 강타하면서 개발자들은 망연자실했다.  
JVM 언어를 사용하는 개발자에게 국한된 이야기가 아니었다.  
'스레드와 잠금장치를 이용해서 코드를 작성하는 것이 이렇게 어렵고 복잡한 일이었던가!!' 하는 탄식과 깨달음이 쏟아졌고, 사람들은 자기 회사에서 사용하고 있는 코드가 멀티스레드 지원이라는 관점에서 보았을 때 완전히 엉망인 코드라는 사실을 알게 되었다.

어느 순간 스레드와 잠금장치를 이용한 코드의 정확성을 확신할 수 없게 되면서 새로운 방법론에 대한 열망을 품게 되었다.  
그 무렵에 잠금장치가 없는 자료구조, 소프트웨어 트랜잭션 메모리, 그리고 액터 모델이 주목을 받기 시작했다.  

코드에 synchronized 키워드를 사용하거나 스레드와 관련된 구조물을 직접 사용하는 개발자가 있으면 액터를 이용해서 코드를 다시 작성하라고 말할 정도로 액터 모델을 새로운 대안으로 신뢰하고 있다.  
그리고 지금까지 그런 판단과 결정은 대단히 성공적이었다.

폴 부처의 책은 액터 모델을 포함하여 동시성이나 병렬성을 지원하기 위한 다양한 방법론을 설명하고 있다.  
사용하는 언어가 무엇이든 간에 아직도 스스로 잠금장치, 세마포어, 뮤텍스 등을 만들고 있는 개발자라면 반드시 이 책을 봐야한다.

멀티코어, 멀티스레딩, 동시성, 병렬성과 같은 주제가 나오면 머리가 복잡해지는 초보 개발자도 이 책을 반드시 읽어야 한다.  

오늘날 동시성과 분산 컴퓨팅 개념을 제대로 이해하지 못하는 개발자는 1990년대 개발자가 인터넷 개념을 모르는 것과 마찬가지다.  
공부라고 생각하지 말고 상식의 지평을 넓힌다는 마음가짐으로 이 책을 읽기 바란다.

## 이 책에 대하여

동시성이라는 개념은 멀티코어를 어떻게 최대한 활용할 것인가라는 질문을 뛰어넘는다.  
동시성을 제대로 구현하는 것은 반응성, 장애 허용, 효율성, 그리고 단순성이라는 목적을 구현하는 열쇠를 제공한다.

이 책의 초점은 실전적인 예제 코드를 기본으로 하고 있다. 책을 읽는 동안 예제 코드를 반드시 공부할 것을 권장한다.  
실제로 동작하는 코드보다 더 확실한 공부는 없는 법이다.

## 참고

[동시성 프로그래밍 모델의 필요성](https://medium.com/@qwefgh90/%EC%83%88%EB%A1%9C%EC%9A%B4-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-%EB%AA%A8%EB%8D%B8%EC%9D%98-%ED%95%84%EC%9A%94%EC%84%B1-5682f91ebe4a)

## 도서

[7가지 동시성 모델](http://mobile.kyobobook.co.kr/showcase/book/KOR/9788968482984?OV_REFFER=https://www.google.com)