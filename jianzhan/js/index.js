/*公用的属性*/

//轮播图
var number = 2;
//圆圈
var da1 = document.getElementById('da1').getElementsByTagName('div');
//第三块
var a1 = document.getElementsByClassName('ul4')[0].getElementsByTagName('a');

/*轮播图*/

function lun() {
	var top_left1 = document.getElementsByClassName('top_left1')[0];
	var top_left2 = document.getElementsByClassName('top_left2')[0];
	var top_left3 = document.getElementsByClassName('top_left3')[0];
	var linum = document.getElementsByClassName('ul3')[0].getElementsByTagName('li');
	var img1 = document.getElementsByClassName('img1')[0];

	/*略缩图的轮流*/
	for(var i = 0; i < linum.length; i++) {
		if(number == (i + 1)) {
			linum[i].style.backgroundColor = "#4DD0C8";
		} else {
			linum[i].style.backgroundColor = "white";
		}
	}

	/*轮播图的轮流*/
	if(number == 1) {
		img1.style.backgroundImage = "url(./image/index/1.png)";
		top_left1.style.display = "block";
		top_left2.style.display = "none";
		top_left3.style.display = "none";

	}
	if(number == 2) {
		img1.style.backgroundImage = "url(./image/index/2.png)";
		top_left1.style.display = "none";
		top_left2.style.display = "block";
		top_left3.style.display = "none";
	}
	if(number == 3) {
		img1.style.backgroundImage = "url(./image/index/3.png)";
		top_left1.style.display = "none";
		top_left2.style.display = "none";
		top_left3.style.display = "block";
	}
	if(number == 3) {
		number = 0;
	}
	number++;

}
setInterval(lun, 3000);

function shangyi(num) {
	var j;

	for(var i = 0; i < da1.length; i++) {
		da1[i].className = "xiao";
		j = i + 1;
		var img1 = document.getElementById('img' + j);
		var img2 = document.getElementById('img' + j + j)

		img1.style.transform = "rotate(-10deg)"
		img1.style.transitionDuration = "2s"
		img2.style.tra = nsform = "rotate(10deg)"
		img2.style.transitionDuration = "2s"

	}
	var img1 = document.getElementById('img' + num);
	var img2 = document.getElementById('img' + num + num);
	var quan = document.getElementById('quan' + num)

	quan.className = "da"
	img1.style.transform = "rotate(9999999999deg)"
	img1.style.transitionDuration = "21590000s"
	img2.style.transform = "rotate(-9999999999deg)"
	img2.style.transitionDuration = "21590000s"
}

/*第三块的a标签上移效果*/
var a1 = document.getElementsByClassName('ul4')[0].getElementsByTagName('a');

for(var i = 0; i < a1.length; i++) {
	a1[i].onmouseover = function() {
		for(var i = 0; i < a1.length; i++) {
			a1[i].className = "";
		}
		this.className = "a1";
	}
}