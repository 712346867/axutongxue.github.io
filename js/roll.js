﻿    function randomString(length) {
    var str = "abcdefghijklmnopqrstuvwxyz";
    var result = "";
    for (var i = length; i > 0; --i) result += str[Math.floor(Math.random() * str.length)];
    return result;
    }
    var id = randomString(5);
    var roll = randomString(6);

    document.write("<style>#" + id + "{height:84px;overflow:hidden;width:290px;border:dashed 0.5px #07c160;margin: 4 auto 4 auto;}." + roll + " li{font-size:9px;text-indent:-35px;padding-top:4px}.icon{width:25px;margin-right:4;vertical-align:-40%}</style>");
    document.write("<div id=" + id + '><ul class="' + roll + '"><li><img class="icon" src="http://img.mail.sina.com/signature/9d31f5319985c64329c237b7c61bc41147306b4d/6374e576df3f2.png"><a href="https://pic.rmb.bdstatic.com/bjh/eb5d19dc207d8870e620e6f6a13d9c7f68.jpeg">同程旅行活动：QQ音乐会员仅需6元／月！</a></li><li><img class="icon" src="http://img.mail.sina.com/signature/9d31f5319985c64329c237b7c61bc41147306b4d/6374e4ef42330.jpg"><a href="https://docs.qq.com/doc/DZHdwQU9ocWRuTkx1">莆田珂珂鞋厂，自家工厂，全网最低价格，最高品质！</a></li><li><img class="icon" src="http://img.mail.sina.com/signature/9d31f5319985c64329c237b7c61bc41147306b4d/6374e5a144e2b.png"><a href="https://flowus.cn/share/1c2067a2-82eb-460b-afd5-77b7bf591b3b">价值699元尚德机构【在职研考研班】阿虚粉丝限时0元领取！</a></li><li><img class="icon" src="http://img.mail.sina.com/signature/9d31f5319985c64329c237b7c61bc41147306b4d/6374e5bdd9add.png"><a href="https://flowus.cn/share/17ef16a2-5974-4b7a-9e54-3fe62496591c">3.2折立享全新AI写作神器——魔撰写作（智能润色、实时纠错、AI续写...）</a></li><li><img class="icon" src="http://img.mail.sina.com/signature/9d31f5319985c64329c237b7c61bc41147306b4d/6374e5d533f4a.png"><a href="https://flowus.cn/share/0ee85362-74eb-4167-9a1c-3622204ee815">9折优惠！国内顶尖AI配音神器——魔音工坊（短视频创作必备）</a></li><li><img class="icon" src="http://img.mail.sina.com/signature/9d31f5319985c64329c237b7c61bc41147306b4d/637607af4b201.jpg"><a href="http://axu.xpsup.cn/goodscate/149/cid/150.html">限时6.5折！腾讯视频VIP，官方直冲！</a></li></ul></div>');

$(function() {
    var $this = $("#" + id);
    var scrollTimer;
    $this.hover(function() {
        clearInterval(scrollTimer);
    }, function() {
        scrollTimer = setInterval(function() {
            scrollNews($this);
        }, 3000);
    }).trigger("mouseleave");
    function scrollNews(obj) {
        var $self = obj.find("ul");
        var lineHeight = $self.find("li:first").height();
        $self.animate({
            marginTop:-lineHeight + "px"
        }, 500, function() {
            $self.css({
                marginTop:0
            }).find("li:first").appendTo($self);
        });
    }
});