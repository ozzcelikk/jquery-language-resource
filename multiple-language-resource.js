// jQuery multiple resouce :  (2017/09/05 17:08:11)

//Firstly define your browser language on your code

//Sample
//<html data-lang="en">
//......
//</html>


var lang = $('html').attr('data-lang');

var Resource = {
    Warning: {
        en: "Warning",
        tr: "Uyarı",
        nl: "Waarschuwing",
        ko: "경고"
    },

    Success: {
        en: "Success",
        tr: "Başarılı",
        nl: "Succes",
        ko: "성공"
    },

    Accepted: {
        en: "Accepted",
        tr: "Kabul Edildi",
        nl: "Aanvaard",
        ko: "수락 됨"
    },

    Access: {
        en: "Access",
        tr: "Erişim",
        nl: "Toegang",
        ko: "접속하다"
    },

    Time: {
        en: "Time",
        tr: "Zaman",
        nl: "Tijd",
        ko: "시각"
    },

    Error: {
        en: "Error",
        tr: "Hata",
        nl: "Fout",
        ko: "오류"
    },
    
    SometingWentWrong: {
        en: "Someting went wrong",
        tr: "Birşeyler ters gitti",
        nl: "Someting ging fout",
        ko: "측정 오류가 잘못되었습니다"
    }
   
    /*
    .
    .
    .
    .
    .
    etc.
    */
}

/* ----> SAMPLE <---- 

$.get('/provider/getdata',{id:1})
.success(function(){
consolo.log(Resource.Succes[lang]);
})
.fail(function(){
consolo.log(Resource.Error[lang] +":" Resource.SometingWentWrong[lang])
});


if success
Output => en : Success
          tr : Başarılı
          nl : Succes
          ko : 성공


if fail
Output => en : Error : Someting went wrong
          tr : Hata : Birşeyler ters gitti
          nl : Fout : Someting ging fout
          ko : 오류: 측정 오류가 잘못되었습니다

           
 ----> END <----  */

