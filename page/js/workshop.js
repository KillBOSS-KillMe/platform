const getColorList = function () {
  let colorList = [
    '000000', '000033', '000066', '000099', '0000CC', '0000FF',
    '003300', '003333', '003366', '003399', '0033CC', '0033FF',
    '006600', '006633', '006666', '006699', '0066CC', '0066FF',
    '009900', '009933', '009966', '009999', '0099CC', '0099FF',
    '00CC00', '00CC33', '00CC66', '00CC99', '00CCCC', '00CCFF',
    '00FF00', '00FF33', '00FF66', '00FF99', '00FFCC', '00FFFF'
  ]
  return colorList
}
const getIconList = function () {
  let IconList = [
    'icon-zhifubao', 'icon-haodapai', 'icon-servicequanmianbaozhang', 'icon-servicebaoshuicang',
    'icon-tianmaoguojizhekoubiao', 'icon-tianmaoguojiyingxiaodabiao', 'icon-service24xiaoshifahuo', 'icon-tamenduyongguo',
    'icon-dunla', 'icon-guanwangtonggoubeta', 'icon-31xingdongdian', 'icon-tianmao26geyingwenziti',
    'icon-31huabei', 'icon-31gouwuquan', 'icon-kefu', 'icon-huanqiushangou',
    'icon-jiage', 'icon-31pinpai1', 'icon-servicehuanqiubida', 'icon-31pinpai',
    'icon-31weizhangkuaicha', 'icon-31tianmaojiadian', 'icon-31paixingbang', 'icon-31moda',
    'icon-31guanfangzhishou', 'icon-31dapei', 'icon-31aichegujia', 'icon-servicehuanqiuzhida',
    'icon-servicetuihuobaozhangqia1', 'icon-shouhoufuwu1', 'icon-serviceyizhanshigouqi1', 'icon-servicewuyoutuihuanhuo1',
    'icon-serviceshangmentuihuo1', 'icon-serviceshangmenanzhuang1', 'icon-serviceshandianfahuo1', 'icon-serviceshandianfahuo1',
    'icon-serviceman88baoyou1', 'icon-servicejienengbutie1', 'icon-servicehaiwaizhiyou1', 'icon-serviceciribida1'
  ]
  return IconList
}
const findChildren = function () {
  var domList = $("#pageModel").children();
  // var i = 0;
  var domListNode = [];
  for (let i = 0; i < domList.length; i++) {
    let typeData = $("#" + domList[i].id).attr("data-type");
    let domNode = { type: typeData, data: {} };
    domListNode.push(domNode);
  }
  console.log(domListNode)
}



$(function () {

  //开始拖动
  $(".dragstartDom li, #pageModel .copyDropDom").on("dragstart", function (e) {
    console.log("SET -> addBuffer", e.target.id);
    e.originalEvent.dataTransfer.setData("addBuffer", e.target.id);
    e.originalEvent.dataTransfer.effectAllowed = 'all';
    e.originalEvent.dataTransfer.dropEffect = 'all';
    e.originalEvent.dataTransfer.setDragImage(this, 0, 0);
  });
  $("#pageModel").on("dragover", function (e) {
    e.originalEvent.preventDefault();
  })
  $("#removeBox").on("dragover", function (e) {
    e.originalEvent.preventDefault();
  })
  //放下事件  
  $("#pageModel").on("drop", function (e) {
    e.originalEvent.preventDefault();
    var id = e.originalEvent.dataTransfer.getData("addBuffer");
    if (id === null || id === "") {
      console.log("id is NULL！");
      return;
    }
    var itemName = id + parseInt(Math.random() * (1000000 - 1 + 1) + 1);
    // 克隆真实对象
    var cloneObject = document.getElementById(id + "_dom").cloneNode(true);
    // 为克隆对象设置唯一Id
    cloneObject.setAttribute("id", itemName);
    // 事件追加绑定
    cloneObject.addEventListener("dragstart", this.copyDrop2);
    // 把新的节点添加到新的区域中
    // e.target.appendChild(cloneObject);
    $("#pageModel").append(cloneObject);
    // 获取手机模型中的子元素
    findChildren();
  })
  $(document).on("click", ".delDomClick .iconfont", function (e) {
    var clickType = $(this).attr("data-type")
    let thisDom = $(this).parents('.copyDropDom')
    switch (clickType) {
      case 'setting':
        // 修改当前组件数据
        let typeName = $(this).parents('.copyDropDom').attr("data-type");
        // 显示与当前点击组件对应的修改项
        $('.setSettingComponent').hide()
        $('.' + typeName + '_Setting').show()
        return false
        break;
      case 'top':
        // 向上移动
        $(this).parents('.copyDropDom').prev('.copyDropDom').before(thisDom)
        break;
      case 'down':
        // 向下移动
        $(this).parents('.copyDropDom').next('.copyDropDom').insertBefore(thisDom)
        break;
      case 'del':
        // 删除当前DOM
        $(this).parents('.copyDropDom').remove()
        break;
      default:
        console.log('无匹配项')
        break;
    }
    // 获取手机模型中的子元素
    findChildren();
  });
  $(document).on("click", ".closeBox", function (e) {
    $(".colorSel .conList, .iconList").html('')
    $('.bulletBoxBG, .colorSel, .iconSel').hide()
  });
  // 点击选择颜色，浮层显示，颜色列表渲染
  $(document).on("click", "#colorSel", function (e) {
    $('.bulletBoxBG, .colorSel').show()
    let colorList = getColorList()
    let colorListDom = ''
    let i = 0
    for (i in colorList) {
      colorListDom += `<div data-color="${colorList[i]}" style="background-color: #${colorList[i]}"></div>`
    }
    $(".colorSel .conList").html(colorListDom)
  });
  // icon选择列表显示
  $(document).on("click", "#iconSel", function (e) {
    $('.bulletBoxBG, .iconSel').show()
    let iconList = getIconList()
    let iconListDom = ''
    let i = 0
    for (i in iconList) {
      iconListDom += `<i data-icon="${iconList[i]}" class="iconfont ${iconList[i]}"></i>`
    }
    $(".iconSel .conList").html(iconListDom)
  });
  // color 选择
  $(document).on("click", ".colorSel .conList div", function (e) {
    $(".colorSel .active").removeClass('active')
    $(this).addClass('active')
    let color = $(this).attr("data-color")
  });
  // icon 选择
  $(document).on("click", ".iconSel .conList i", function (e) {
    $(".iconSel .active").removeClass('active')
    $(this).addClass('active')
    let icon = $(this).attr("data-icon")
  });
}) 