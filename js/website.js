window.moveHeader = function(ScrollTop){
	var Header = $('#header');
	ScrollTop > 200 ? Header.addClass('on') : Header.removeClass('on');
};
window.showTopBtn = function(ScrollTop){
	var toTop = $('#toTop');
	ScrollTop > 200 ? toTop.addClass('on') : toTop.removeClass('on');
};

function toTop(){
	var Top = $('#toTop');
	$('html,body').animate({scrollTop:0},500);
}

function NotCopy(){
	$('body').on('copy',function(){return false;});
}

var PhoneMenu = {
	Menu : $('#menu'),
	Btn : $('#menu-btn'),
	Item : $('.nav-item',this.Menu),
	SubNav : $('.sub-nav',this.Item),
	SubTitle : $('.sub-title',this.SubNav),
	Close : $('.menu-close',this.Menu),
	TriggerWidth : 992,
	OpenClass : 'open-menu',
	checkWidth : function(){
		return window.innerWidth < this.TriggerWidth;
	},
	slideMenu : function(Action){
		if(Action){
			this.Menu.addClass(this.OpenClass);
			$('html,body,#header,#website').addClass(this.OpenClass);
		}else{
			this.Item.removeClass('on');
			this.SubNav.removeClass('open');
			this.Menu.removeClass(this.OpenClass);
			$('html,body,#header,#website').removeClass(this.OpenClass);
		}
	},
	slideSub : function(Action,Sub){
		if(Action){
			Sub.addClass('open');
			Sub.parents('.nav-item').addClass('on');
			this.Menu.animate({scrollTop:0},300);
		}else{
			Sub.removeClass('open')
			Sub.parents('.nav-item').removeClass('on');
		}
	},
	Running : function(){
		var thisObj = this;
		thisObj.Btn.click(function(){ if(thisObj.checkWidth()){ thisObj.slideMenu(true) } });
		thisObj.Close.click(function(){ if(thisObj.checkWidth()){ thisObj.slideMenu(false) } });
		thisObj.Item.find('.item-a').click(function(){
			if(thisObj.checkWidth()){
				var Sub = $(this).next(thisObj.SubNav);
				if(Sub.length){	//有二级导航
					thisObj.slideSub(true,Sub);
					return false;	//阻止链接跳转页面
				}
			}
		});
		thisObj.SubTitle.click(function(){ if(thisObj.checkWidth()){ thisObj.slideSub(false,$(this).parent()); } });
	}
}

var ProductsBox = {
	Box : $('#products.index'),
	Cate : $('.categorys a',this.Box),
	CateBtn : $('.categorys .dropdown > button',this.Box),
	List : $('.products-list .item',this.Box),
	maxCol : 5,
    Breakpoint : undefined,
	Col : this.maxCol,
	Swiper : new Object(),
	SwiperOpt : {
		touchEventsTarget: 'wrapper',
		scrollbar: '.products-scrollbar',
        slidesPerView: 5,
        spaceBetween: 20,
        slidesPerColumnFill: 'row',
        breakpoints: {
        	1280: {
        		slidesPerView: 4
        	},
        	991: {
        		slidesPerView: 3
        	},
        	480: {
        		slidesPerView: 2
        	}
        }
	},
	ColObj : {
		1280: 4,
		991:  3,
		480:  2
	},
	getBreakpoint : function(){
        if (!this.ColObj) return false;
        var Breakpoint = false;
        var points = [], point;
        for ( point in this.ColObj ) {
            if (this.ColObj.hasOwnProperty(point)) {
                points.push(point);
            }
        }
        points.sort(function (a, b) {
            return parseInt(a, 10) > parseInt(b, 10);
        });
        for (var i = 0; i < points.length; i++) {
            point = points[i];
            if (point >= window.innerWidth && !Breakpoint) {
                Breakpoint = point;
            }
        }
        return Breakpoint || '';
	},
	setBreakpoint : function(){
        var Breakpoint = this.getBreakpoint();
        if (Breakpoint && this.Breakpoint !== Breakpoint) {
            var breakPointsParams = Breakpoint in this.ColObj ? this.ColObj[Breakpoint] : this.maxCol;
            for ( var param in breakPointsParams ) {
                s.params[param] = breakPointsParams[param];
            }
            this.Breakpoint = Breakpoint;
        }
	},
	onSwiper : function(){
		return new Swiper(this.Box,this.SwiperOpt);
	},
	setFirst : function(){
		var thisObj = this;
        thisObj.setBreakpoint();
        thisObj.Col = thisObj.Breakpoint ? thisObj.ColObj[thisObj.Breakpoint] : thisObj.maxCol;
        $('.products-list .item[status=on]',this.Box).each(function(i,e){
            i % thisObj.Col == 0 ? $(e).addClass('first') : $(e).removeClass('first');
        });
        window.title = thisObj.Col;
        thisObj.Breakpoint = undefined;
	},
	changeList : function(){
		var thisObj = this;
		thisObj.Cate.click(function(){
			var CId = $(this).attr('cid'),
				Txt = $(this).text();
			$(this).addClass('on').siblings(thisObj.Cate).removeClass('on');
			thisObj.CateBtn.html(Txt+' <span class="caret"></span>');
			thisObj.List.removeAttr('style');		//重置
			if(CId!='all'){
				thisObj.List.each(function(){
					$(this).attr('cid') == CId ? $(this).attr('status','on').addClass('swiper-slide') : $(this).attr('status','off').removeClass('swiper-slide');
				});
			}else{
				thisObj.List.attr('status','on').addClass('swiper-slide');
			}
			thisObj.setFirst();
			//thisObj.Swiper = thisObj.onSwiper();
		});
	},
	Running : function(){
		var thisObj = this;
		//this.Swiper = this.onSwiper();
		this.setFirst();
		this.changeList();
		$(window).resize(function(){
			thisObj.setFirst();
		});
	}
};

$(window).scroll(function(){
	var ScrollTop = $(this).scrollTop();
	window.moveHeader(ScrollTop);
	window.showTopBtn(ScrollTop);
});

$(function(){
	PhoneMenu.Running();
	ProductsBox.Running();

	// alert(ProductsBox.List.outerWidth(true));

	new Swiper('.banner',{
		touchEventsTarget: 'wrapper',
		speed: 600,
		autoplay: 5000,
		spaceBetween: 0,
		prevButton: '.prev',
		nextButton: '.next',
		autoplayDisableOnInteraction: false
	});

	new Swiper('#news.index .swiper-container',{
		touchEventsTarget: 'wrapper',
		slidesPerView: 4,
		spaceBetween: 60,
		prevButton: '.prev',
		nextButton: '.next',
		breakpoints: {
			1280: {
				spaceBetween: 30
			},
			991: {
				slidesPerView: 3,
				spaceBetween: 20
			},
			768: {
				slidesPerView: 2,
			},
			480: {
				slidesPerView: 1,
			}
		}
	});

	$('body').on('click','.stopPropagation',function(e){ e.stopPropagation(); });
});