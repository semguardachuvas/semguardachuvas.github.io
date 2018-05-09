//----------------------------Defaults       
var ListBlogLink = window.location.hostname;       
var ListCount = 5;       
var TitleCount = 70;       
var ListLabel =" ";       
var ChrCount = 80;

    
var ImageSize = 100;

    
//----------------------------Function Start      
function mbtlist(json) {       
document.write('<ul class="mbtlist">');       
for (var i = 0; i < ListCount; i++)       
{       
      
//-----------------------------Variables Declared       
var listing= ListUrl = ListTitle = ListConten = ListContent =ListImage =thumbUrl =sk = "";       
//----------------------------- Title URL       
for (var j = 0; j < json.feed.entry[i].link.length; j++) {       
if (json.feed.entry[i].link[j].rel == 'alternate') {       
break;       
}       
}       
ListUrl= "'" + json.feed.entry[i].link[j].href + "'";       
//----------------------------------- Title Stirng       
if (json.feed.entry[i].title!= null)       
{       
ListTitle= json.feed.entry[i].title.$t.substr(0, TitleCount);       
} 

    
//----------------------------------- Content Check

    
ListConten = json.feed.entry[i].content.$t;       
ListContent= ListConten.replace(/(<([^>]+)>)/ig,"").substr(0, ChrCount);

    
//------------------------------------ Thumbnail Check

    
if (json.feed.entry[i].media$thumbnail)      
{       
thumbUrl = json.feed.entry[i].media$thumbnail.url; 

    
sk= thumbUrl.replace("/s72-c/","/s"+ImageSize+"/");       
ListImage= "'" + sk.replace("?imgmax=800","") + "'";       
}

    
// Support For 3rd Party Images      
else if (json.feed.entry[i].content.$t.match(/src=(.+?[\.jpg|\.gif|\.png]")/) != null)       
{       
ListImage =  json.feed.entry[i].content.$t.match(/src=(.+?[\.jpg|\.gif|\.png]")/)[1];       
}

    
else      
{       
ListImage= "'http://4.bp.blogspot.com/-HALLtgFeep0/VfryhQ0C5oI/AAAAAAAAPcY/77mSGND4q84/s200/Icon.png'";       
}

    
     
//----------------------------------- Printing List       
var listing = "<li><a href="          
+ ListUrl+           
  "><img src="           
+ListImage+           
"/></a><a class='mbttitle' href="       
+ListUrl+       
"target='_blank'>"       
+ListTitle+       
"</a><span class='icontent'>"          
+ListContent+           
" ...  <a href="           
+ListUrl+           
" class='imore'>»</a></span></li>";       
document.write(listing);       
}       
document.write("</ul>");       
}       
</script>       
<!-- ######### Invoking the Callback Function ############# -->       
<script>       
ListBlogLink = "http://www.mybloggertricks.com";       
ListCount = 4;       
TitleCount = 70;       
ListLabel = "Announcement";       
ChrCount = 150;

    
document.write("<script src='"+ListBlogLink+"/feeds/posts/default/-/"+ListLabel+"?alt=json-in-script&callback=mbtlist'></"+"script>");     