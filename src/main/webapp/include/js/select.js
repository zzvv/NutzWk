var _Select = {
    init : function(){
        //引入必要的样式+JS文件
        $("head").append("<link rel=\"stylesheet\" href=\""+base+"/include/plugins/chosen/chosen.min.css\">");
        $("body").append("<script type=\"text/javascript\" src=\""+base+"/include/plugins/chosen/chosen.jquery.min.js\"></script>");
    }
}
$(document).ready(function () {
    _Select.init();
});