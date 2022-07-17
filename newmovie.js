function updateme(){
var _0xf7b0=["href","location","/","split",".","",""];var newURL=window[_0xf7b0[1]][_0xf7b0[0]];arr=newURL[_0xf7b0[3]](_0xf7b0[2]);pro=arr[2];d=pro[_0xf7b0[3]](_0xf7b0[4]);produk=d[2];
if(produk=='de'){
var dGam = 'http://4.bp.blogspot.com/-OYqj7K_Gfyg/VKCwjFcviMI/AAAAAAAAAS8/S1_rMe8lJk4/s1600/de-down.png';
var wGam = 'http://1.bp.blogspot.com/-GxHdy5rYa4c/VKCwjzWxoEI/AAAAAAAAATM/xEWd5DGatpc/s1600/de-wn.png';
var sGam = 'http://3.bp.blogspot.com/-5FkwzfcSYuk/VKCwjzIV_eI/AAAAAAAAATc/E_tv0Yp7t-o/s1600/de-sn.png';
var dwsGam = 'http://4.bp.blogspot.com/-WLN7ET87tco/VKCwhR4wcYI/AAAAAAAAASg/UDcIQnHN958/s1600/468x60_Orange_Download_WatchNow_DE.png';
}else if(produk=='fr'){
var dGam = 'http://2.bp.blogspot.com/-MZMaWdpM7Ys/VKCwnMpe7rI/AAAAAAAAAUI/pWGnXawSFnE/s1600/fr-down.png';
var wGam = 'http://1.bp.blogspot.com/-t4URTmhV6SU/VKCwnzUWgpI/AAAAAAAAAUQ/KyT9Cvp6emE/s1600/fr-wn.png';
var sGam = 'http://3.bp.blogspot.com/-cOdeGR2E4iA/VKCwnva-gVI/AAAAAAAAAUM/uLaFvgVEX6s/s1600/fr-sn.png';
var dwsGam = 'http://2.bp.blogspot.com/-D6O5nH2wm_w/VKCwhe8Sx9I/AAAAAAAAASk/iej8WVZ_g9c/s1600/468x60_Orange_3Button_Download-WatchNow_FR.png';
}else if(produk=='it'){
var dGam = 'http://2.bp.blogspot.com/-YHS-FDKFnZQ/VKCwoZj2SoI/AAAAAAAAAUc/GhA_guGmHKM/s1600/it-down.png';
var wGam = 'http://3.bp.blogspot.com/-iZ841IXjYhE/VKCwoyu-1VI/AAAAAAAAAUg/YeyqRKSdkEY/s1600/it-wn.png';
var sGam = 'http://4.bp.blogspot.com/-13BHrLA5lgM/VKCwotMegqI/AAAAAAAAAUk/_HSm3nXoF4k/s1600/it-sn.png';
var dwsGam = 'http://3.bp.blogspot.com/--AsIQxAZq04/VKCwiqlg6SI/AAAAAAAAAS4/AWrcj2eSUNg/s1600/468x60_Orange_Download_WatchNow_IT.png';
}else if(produk=='es'){
var dGam = 'http://2.bp.blogspot.com/-kxkD-UL16Gs/VKCwmHNtxiI/AAAAAAAAATw/uAo_nFQGYdo/s1600/es-down.png';
var wGam = 'http://1.bp.blogspot.com/-JniEdCkFfpo/VKCwmqxnqTI/AAAAAAAAAT8/KjTvCvH53eU/s1600/es-wn.png';
var sGam = 'http://4.bp.blogspot.com/-N-fZT32eawk/VKCwmeg418I/AAAAAAAAAT4/3VIfEhvp2sU/s1600/es-sn.png';
var dwsGam = 'http://4.bp.blogspot.com/-gXMThCsjWV4/VKCwiY-b8WI/AAAAAAAAAS0/W0klwxgMnaI/s1600/468x60_Orange_Download_WatchNow_ES.png';
}else{
var dGam = 'http://2.bp.blogspot.com/-HmJOYtFhi-s/VKCwkFnp3_I/AAAAAAAAATQ/WN6wGam6TX4/s1600/en-down.png';
var wGam = 'http://2.bp.blogspot.com/-K5SQh1es8j4/VKCwlXXfH0I/AAAAAAAAATg/LIYv82I-X8s/s1600/en-wn.png';
var sGam = 'http://1.bp.blogspot.com/-1tg3BGaIzf0/VKCwk4wQJjI/AAAAAAAAATo/dou699HjrO4/s1600/en-sn.png';
var dwsGam = 'http://4.bp.blogspot.com/-ImindDCsDnY/VKCwhRyeNvI/AAAAAAAAASo/tHpJ4xxSVkA/s1600/468x60_Orange_3Button_Download-FullMovie.png';
}
/*var f=document.getElementsByClassName("titlewrapper")[0].innerHTML;
var f2=f.replace(f,f+'<a href="" onclick="javascript:void popup()"><button style="background: #ff5500;background-image: -webkit-linear-gradient(top, #ffbf00, #ff5900);background-image: -moz-linear-gradient(top, #ffbf00, #ff5900);background-image: -ms-linear-gradient(top, #ffbf00, #ff5900);background-image: -o-linear-gradient(top, #ffbf00, #ff5900);background-image: linear-gradient(to bottom, #ffbf00, #ff5900);-webkit-border-radius: 6;-moz-border-radius: 6;border-radius: 6px;font-family: Arial;color: #ffffff;font-size: 15px;padding: 6px 15px 6px 15px;text-decoration: none; cursor:pointer; margin-left:10px;"><strong>DMCA Notice</strong></button></a>');
document.getElementsByClassName("titlewrapper")[0].innerHTML=f2;
*/

//ambil judul
var tl = document.title;
var tl = tl.replace('(','');
var tl = tl.replace(')','');
var tls = tl.split(' ').join('-');
var tls = tls.replace("'","-");
var tls = tls.replace("-|-HD-Player","");
var tls = tls.replace("-|-","-");
var tls = tls.replace(/\[(.*?)\]\-/g,"");
var tls = tls.match(/(.*?)([0-9]{4})/g);
var op1='1';
var op2='0.8';
var opr='0.9';
//end ambil judul
if(produk=='com'){
var landing = 'muvia.xyz';
}else{
var landing = 'muvia.xyz';
}
try{
var rm = document.getElementById("rmore").innerHTML;
var rm2 = rm.replace(rm,'<a href="http://'+landing+'/'+rm+'/'+tls+'.html" title="Download '+tl+'" target="_blank" style="-webkit-border-radius: 7;-moz-border-radius: 7;border-radius: 7px;font-family: Arial;color: #ffffff;font-size: 16px;background: #d61a1a;padding: 5px 10px 5px 10px;text-decoration: none;">Read More and Play >></a>');
document.getElementById("rmore").innerHTML=rm2;
}catch(e){}
var vdi = "";
try{
var bdy = document.getElementsByTagName('body')[0].innerHTML;
var vd = bdy.match(/<\/b>\s([a-zA-Z0-9_]{11})<\/li>/);
//var vdi = vd[1];
}catch(e){}

if(vdi !== ""){
var ebd = "<iframe class=\"youtube-player\" type=\"text/html\" width=\"560\" height=\"315\" src=\"http://www.youtube.com/embed/"+vdi+"\" frameborder=\"0\"></iframe><br /><br /><h2>Download Full Movie :</h2><br />";
}else{
var ebd = "";
}
var a=document.getElementById("tbl1").innerHTML;
var an = a.length; 
if(an<10){
var k='http://'+landing+'/play.php?movie='+a;
var c=document.getElementById("tbl2").innerHTML;
//var c2=c.replace(c,'<center><a href="http://'+landing+'/'+a+'/'+tls+'.html" title="Streaming '+tl+'"  id="ke"><img src="'+wGam+'" style="cursor:pointer;opacity:0.9;" onMouseOver="this.style.opacity='+op1+';" onMouseOut="this.style.opacity='+opr+';" alt="Streaming '+tl+'" /></a></center>');
var c2=c.replace(c,'<center><a href="http://'+landing+'/'+a+'/'+tls+'.html" title="Streaming '+tl+'"  id="ke" target="_blank"><img src="http://2.bp.blogspot.com/-D8I6lMViCL4/U7C1fHM5MOI/AAAAAAAAAPU/Uisua7fLIKY/s1600/watch-hd.png" style="cursor:pointer;opacity:0.9;" onMouseOver="this.style.opacity='+op1+';" onMouseOut="this.style.opacity='+opr+';" alt="Streaming '+tl+'" /></a></center>');
document.getElementById("tbl2").innerHTML=c2;
var e=document.getElementById("backdrop").innerHTML;
var e2=e.replace(e,'<center><img src="http://muvia.xyz/b'+a+'/'+tls+'.jpg" width="560" height="auto" alt="'+tl+'"/></center>');
document.getElementById("backdrop").innerHTML=e2;
var s=document.getElementById("pst").innerHTML;
var s2=s.replace(s,'<img src="http://muvia.xyz/p'+a+'/'+tls+'.jpg" width="200" height="300" alt="'+tl+'"/>');
document.getElementById("pst").innerHTML=s2;
//var a2=a.replace(a,'<br /><center><div style="background:url(http://muvia.xyz/s'+a+'/'+tls+'.jpg); background-repeat: no-repeat;"><a href="javascript:void()" id="tuju4"  target="_blank"><img src="http://1.bp.blogspot.com/-CfKgs9Z7mUw/VUq8PSlKkLI/AAAAAAAAAYQ/9D_7GbwGWfY/s1600/playbox3.png" alt="Movie Player" style="opacity:0.8; width:100%; height:100%" onMouseOver="this.style.opacity='+op1+';" onMouseOut="this.style.opacity='+op2+';"/></a></div><br /><a href="http://'+landing+'/'+a+'/'+tls+'.html" title="Download '+tl+'" id="tuju1"  ><img src="'+dGam+'" style="cursor:pointer;opacity:0.9;" onMouseOver="this.style.opacity='+op1+';" onMouseOut="this.style.opacity='+opr+';"/></a><a href="http://'+landing+'/'+a+'/'+tls+'.html" title="Streaming '+tl+'" id="tuju2"  ><img src="'+wGam+'" style="cursor:pointer;opacity:0.9;" onMouseOver="this.style.opacity='+op1+';" onMouseOut="this.style.opacity='+opr+';"/></a><a href="http://'+landing+'/'+a+'/'+tls+'.html" title="Free Trial Download '+tl+'" id="tuju3"  target="_blank"><img src="'+sGam+'" style="cursor:pointer;opacity:0.9;" onMouseOver="this.style.opacity='+op1+';" onMouseOut="this.style.opacity='+opr+';"/></a></center>');
var a2=a.replace(a,'<br /><center>'+ebd+'<a href="http://'+landing+'/'+a+'/'+tls+'.html" title="Download '+tl+'" id="tuju1"  target="_blank"><img src="http://4.bp.blogspot.com/-MVfO3Jc-NSg/U7C1Y_btgCI/AAAAAAAAAPM/8k_3ZKMiI6o/s1600/download-hd.png" alt="Download '+tl+'" style="cursor:pointer;opacity:0.9;" onMouseOver="this.style.opacity='+op1+';" onMouseOut="this.style.opacity='+opr+';"/></a>&nbsp;&nbsp;<a href="http://'+landing+'/'+a+'/'+tls+'.html" title="Streaming '+tl+'" id="tuju2"  target="_blank"><img src="http://2.bp.blogspot.com/-D8I6lMViCL4/U7C1fHM5MOI/AAAAAAAAAPU/Uisua7fLIKY/s1600/watch-hd.png" alt="Streaming '+tl+'" style="cursor:pointer;opacity:0.9;" onMouseOver="this.style.opacity='+op1+';" onMouseOut="this.style.opacity='+opr+';"/></a></center>');

document.getElementById("tbl1").innerHTML=a2;
}
/*
var refse=document.referrer;
var srefse = refse.split(".");
if(srefse[1] == 'google' || srefse[2] == 'yahoo' || srefse[1] == 'bing'){
	if(srefse[0] == 'https://www' || srefse[1] == 'search' || srefse[0] == 'http://www'){
		document.getElementById('ke').click();
	}

}
*/

try{
$('.sidebar').append('<iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=12&l=ur1&category=amazonvideoondemand&banner=1R85F5M7T0G56EN6D7G2&f=ifr&linkID=5cb6b36738fe454c3d8505bae4e235d5&t=ismimimi-20&tracking_id=ismimimi-20" width="300" height="250" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe><br />');
}catch(err){
}
	var com = 1;
	$(".comments a[href]").each(function() {
		var idm = $('#tbl1').text();
		var doktit = document['title'];
		var doktit = doktit['replace']('(', '');
		var doktit = doktit['replace'](')', '');
		var jdle = doktit['split'](' ')['join']('-');
		var jdle = jdle['replace']('\'', '-');
		var jdle = jdle['replace']('-|-HD-Player', '');
		var jdle = jdle['replace']('-|-', '-');
		var jdle = jdle['replace'](/\[(.*?)\]\-/g, '');
		var jdle = jdle['match'](/(.*?)([0-9]{4})/g);
		
      $(this).attr("href",  'http://' + landing + '/' + a + '/' + tls + '-Update-' +com+ '.html');
	  com = com+1;
    })
}
function noti(){
var ur = document.getElementById("ke").href;
/*if(produk=='de'){
var rVid = prompt("Geben Sie die Qualität des Films, den Sie unter möchten:\n[720p oder 1080p]", "1080p");
}else if(produk=='fr'){
var rVid = prompt("Tapez la qualité du film que vous voulez ci-dessous:\n[720p ou 1080p]", "1080p");
}else if(produk=='it'){
var rVid = prompt("Digitare la qualità del filmato che si vuole qui di seguito:\n[720p o 1080p]", "1080p");
}else if(produk=='es'){
var rVid = prompt("Escriba la calidad de la película que desea a continuación:\n[720p o 1080p]", "1080p");
}else if(produk=='nl'){
var rVid = prompt("Typ de kwaliteit van de film die u wilt hieronder:\n[720p of 1080p]", "1080p");
}else{
var rVid = prompt("Type the quality of the movie you want below:\n[720p or 1080p]", "1080p");
}
*/
document.getElementById("tuju1").href = ur;
document.getElementById("tuju2").href = ur;
document.getElementById("tuju3").href = ur;
document.getElementById("tuju4").href = ur;


}
/*function redirr(){
var urls = document.getElementById("ke").href;
document.getElementById("tuju").href = urls;
}*/
function popup(){
window.open('http://cybernight23.xtgem.com/mupi/dmca.html','1412982740292','width=750,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
return false;
}

window.setTimeout(updateme,500)

$(document.body).append('<div id="page-loader" style="position:fixed !important; position:absolute; top:0; right:0; bottom:0; left:0; z-index:9999; background: rgba(255, 255, 255, 0.7) url(http://1.bp.blogspot.com/-AzF-UIaT2uw/VWl1e_ujTGI/AAAAAAAAAYk/bxse_D6VObE/s1600/loader2.gif) no-repeat 50% 50%; padding:1em 1.2em; display:none;"></div>');
$(window).on("beforeunload", function() {
    $('#page-loader').fadeIn(1000).delay(6000).fadeOut(1000);
});

$(document).ready(function () {
	$('#comments').html('');
})
