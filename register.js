/**
 页面显示一句话文案* 
 */
document.write("系好安全带，准备启航吧--目标JS" + "<br><br><br>");

//弹窗显示是否准备好
function sen(){
	var p=confirm("准备好了吗？启航吧！");
	if(p==true){
		document.write("恭喜您，已经掌握此技能。");
	}
	else{
		alert("请重新学习课程内容吆，直到实践编写代码与实践要求一致。");
	}
}