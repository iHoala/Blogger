$(function(){var n,e=window.location.href,o=$(".toplevel-thread .top-comment-wrap>ol>li"),l="",t=o.length,r=0,m=0;if($("#top-continue").removeClass("hidden"),$(".comment a.comment-reply").click(function(e){top_li=$(this).parent().parent(),n=$("#comment-editor").attr("src"),$(".cancel-reply").remove(),$(".comment-actions .comment-reply").removeAttr("style");var t=$(this),o=t.attr("data-comment-id");n=n+"&parentID="+o,l=t.parent().parent().parent().attr("id"),$("#comment-editor").attr("src",n),t.hide(),$("#top-continue").next().addClass("hidden"),top_li.find(".comment-replybox-single").first().append($("#comment-editor")),top_li.find(".comment-replybox-single").first().append('<div class="cancel-reply"><button class="cancel-button" type="button">Cancel</button></div>'),$(".cancel-reply").click(function(){$(".cancel-reply").remove(),$(".comment-actions .comment-reply,#top-continue.continue,#top-ce").removeAttr("style"),$("#comment-editor").appendTo($("#top-ce"))}),$("#top-ce").attr("style","display:none")}),$("#top-continue.continue>a.comment-reply").click(function(e){e.preventDefault(),$(this).parent().hide(),$("#top-ce").hide(),$("#comments .cancel-reply").remove(),$(".comment-thread > .comment-replybox-thread").removeClass("hidden"),$(".comment-actions").removeAttr("style"),$("#comment-editor").appendTo($(this).parent().next()),$(".comment-replybox-thread").append('<div class="cancel-reply"><button class="cancel-button" type="button">Cancel</button></div>'),$(".cancel-reply").click(function(){$("#comments .cancel-reply").remove(),$("#top-continue.continue").removeClass("hidden"),$(".comment-thread > .comment-replybox-thread").addClass("hidden"),$("#top-ce").removeClass("hidden"),$(".comment-actions .comment-reply,#top-continue.continue,#top-ce").removeAttr("style"),$("#comment-editor").appendTo($("#top-ce"))})}),-1!=e.indexOf("?showComment"))if(-1!=e.indexOf("#c")){l="#"+e.substring(e.indexOf("#c")+1,e.length);if(5<=(r=($(l).parents(".comment-thread").hasClass("thirdlevel-thread")?$(l).parents("li").parents("li"):$(l).parents(".comment-thread").hasClass("secondlevel-thread")?$(l).parents("li"):$(l)).index()))for(var c=0;c<r+1;c++)$(o[c]).removeClass("hidden");else for(c=0;c<5;c++)$(o[c]).removeClass("hidden");r<t&&$("#comments .loadmore").removeClass("hidden")}else{for(c=0;c<5;c++)$(o[c]).removeClass("hidden");5<t&&$("#comments .loadmore").removeClass("hidden")}else{for(c=0;c<5;c++)$(o[c]).removeClass("hidden");5<t&&$("#comments .loadmore").removeClass("hidden")}$("#comments .loadmore>a").click(function(){if(m=$(".toplevel-thread .top-comment-wrap>ol>li.comment.hidden").length,r=t-m,0==m)$("div.loadmore a").addClass("hidden");else if(1==$("#comment-sortbox").prop("checked"))for(var e=m-1;m-5<=e;e--)$(o[e]).slideToggle(200),$(o[e]).removeClass("hidden"),$(o[e]).removeAttr("style");else for(e=r;e<r+5;e++)$(o[e]).slideToggle(200),$(o[e]).removeClass("hidden"),$(o[e]).removeAttr("style")}),$(".commentSort").click(function(){$(".comment-control").toggleClass("top"),$(".top-comment-wrap > .loadmore").slideToggle();var e=$(".toplevel-thread .top-comment-wrap>ol>li.comment").length;if(m=$(".toplevel-thread .top-comment-wrap>ol>li.comment.hidden").length,$(".toplevel-thread .top-comment-wrap>ol>li.comment").addClass("hidden"),1==$("#comment-sortbox").prop("checked"))for(var t=0;t<e-m;t++)$(o[t]).removeClass("hidden");else for(t=e-1;m<=t;t--)$(o[t]).removeClass("hidden")})});