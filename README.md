# jquery-language-resource

Firstly define your browser language on your code

1. Add selected language to data attribute on html tag like <html data-lang="en"

2. Import resource file
  
3. Call resource key => Resource.{ResourceKey}.[lang]


SAMPLE
  
$.get('/provider/getdata',{id:1})
  .success(function() {
    consolo.log(Resource.Succes[lang]);
  })
  .fail(function() {
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
