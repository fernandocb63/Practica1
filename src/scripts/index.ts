let noticias=require('./noticias');
declare let Handlebars;
console.log(noticias());

noticias('bitcoin').then(response=>{
    let news=response.data;
    let art=news.art;
    console.log(news);
    let templateSource = $('#entry-template').html();
    let template = Handlebars.compile(templateSource);
    $('.row').html(template(news));

}).catch(err=>{
    console.log('error: '+err);
})

jQuery(document).ready(function(){
    noticias('bitcoin').then(response=>{
        let news=response.data;
        let art=news.art;
        console.log(news);
        let templateSource = $('#entry-template').html();
        let template = Handlebars.compile(templateSource);
        $('.row').html(template(news));
    
    }).catch(err=>{
        console.log('error: '+err);
    })
})





