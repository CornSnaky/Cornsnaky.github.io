puzzlenumber=0
puzzleTitle=["曹晟康之路","谜途","神秘转化","夜观星車","阳阴两隔","走亲戚","蛇梯棋","惜·时","完美","成长","你是什么色？你是什么火？","汉字听写大会"];
puzzleFlavorText=["","","","“那值相等之直线上的星車散发光芒，同色而交辉为初之星；星之色彩映照周围八方，而诞生次之星。初次不容，而初等先至。仰望天空的生灵啊，虽仅目及次等之天体，仍可触及天空的光芒：那邻则不同色的星車，排列天中。”","有的人死了，他还活着。","","","","（2-4-7-13-17-20）","蛇蛇和谜龙来到东部一片三角洲，看到这样一块牌子","",""]
puzzleImagePath=[["./puzzleContent/1/images/1.png"],[],["./puzzleContent/3/1.png"],["./puzzleContent/4/1.jpg"],["./puzzleContent/5/1.png"],["./puzzleContent/6/1.png"],[],[],["./puzzleContent/9/1.jpg"],["./puzzleContent/10/1.png"],["./puzzleContent/11/1.png"],[]]
puzzleFilePath=[[],["./puzzleContent/2/谜途.zip"],[],[],[],[],["./puzzleContent/7/files/1.zip"],["./puzzleContent/8/惜·时.exe"],[],[],[],[]]
puzzleAudioPath=[[],[],[],[],[],[],[],[],[],[],[],["./puzzleContent/12/audio/1.mp3","./puzzleContent/12/audio/2.mp3","./puzzleContent/12/audio/3.mp3","./puzzleContent/12/audio/4.mp3"]]
puzzleAnswer=["plains","scale","celltype","accede","memorial","diverse","testify","forever","unique","infer","calite","咬文嚼字"]
solutionsImages=[["./puzzleSolutionsImages/1/1.png"],["./puzzleSolutionsImages/2/1.png"],[],["./puzzleSolutionsImages/4/1.png","./puzzleSolutionsImages/4/2.png","./puzzleSolutionsImages/4/3.png","./puzzleSolutionsImages/4/4.png","./puzzleSolutionsImages/4/5.png"],[],[],[],["./puzzleSolutionsImages/8/1.png","./puzzleSolutionsImages/8/2.png","./puzzleSolutionsImages/8/3.png","./puzzleSolutionsImages/8/4.png"],[],[],[],[]]
solutionsTexts=[["（结合提示1的标题）察觉到这是moon or sun纸笔谜题变种（改回路为路径）解题：","题名 曹盛康之路，搜索曹盛康并与“之路”联系，得到盲道。在解出来的路径上铺上盲道（盲道转弯或危险处铺•，直行处铺—）注意到盲道上图案的形状是•和—，想到摩斯码，按照摩斯码进行提取得到plains"],
                ["既然标题说了谜途，我们先画出地图并按告示牌找到谜龙","看到碎片0～3，容易看出表示键盘，得到对应关系w=0，a=1，s=2，d=3而wasd通常对应上下左右移动。结合贝44.txt和33333.txt：3+1=10得到四进制，又33333确定三次移动一分割,按照路径，对应着wasd来移动，得到数字按四进制理解，用A1Z26提取得到scale"],
                ["“转化”提示要对单词进行变形。按照图中所给词性，应该是应用每行前一个词性变为后一个词性的变形方法。\nadj.fat->n.face\nn.shoot->pl.sheet\nadj.lustrate->ant.illustrate\nn.axe->adj.axial\nn.television->abbr.tel\nadj.apple->adv.apply\nv.sume->n.sumption\nn.picture->abbr.pic->n.(电子的)epic"],
                ["注意图片左下角有单位长，得知“值相等之直线”指的是左下到右上对角线，从而星車在这条线上。紧跟的后一句话表明了星車有颜色，同色的星車“交辉”会产生初之星。注意星車的命名，車表示象棋中車的走法，暗示星車发光是十字形的。也就是说初之星是同色星車发出的十字光芒的交点。自然可以得知初之星的颜色与这两个星車相同。初之星将它们的色彩映到周围8个格子（八方代表周围八个格子而非八个方向。这里出题失误表意不清），映出次之星。虽仅目及此等之天体，这表明我们看到的只是次之星，而最后一句话告诉我们要研究星車的排列。我们看到的次之星有红+蓝=品红，红+绿=黄，蓝+绿=青和红+蓝+绿=白四种颜色，从而次之星颜色是周围初之星颜色的混合。我们需要根据次之星的颜色推断星車的排列。首先我们可以从规则中看出，盘面的右下和左上应当是对称的。","青色次之星周围没有红色初之星，黄色次之星周围没有蓝色初之星，紫色次之星周围没有绿色初之星，而白色次之星周围三种颜色的初之星全有。依此可以从白色次之星和其他颜色次之星紧挨着的地方尝试入手","之后，因为白色次之星周围的的三行和三列必然都是红绿蓝的排列，且相同颜色不相邻，以及次之星的位置不能产生初之星（同色线不能交在次之星上）得到：（这次操作使用紫色标记）","继续：（这次操作使用橙色标记）","继续：（本次使用白色）","得到对角线上颜色的序列，最后按照提取提示中提取蓝绿红 绿红绿 红绿蓝 蓝红绿 红蓝绿 红绿红序列的个数，并按照a1z26提取得到accede"],
                ["先看到图片中的数码管，它们显示的并不是正常的内容，需要先把亮的数码管变暗，暗的数码管变亮，得到8个日期。这是标题“阳阴两隔”的第一层含义。接着，像第一步一样，把日期的阴转换成阳：将日期当作阴历，转换成阳里对应日期。最后，按照副标题的暗示，提取对应阳历日期逝世的名人名字（略），将拼音按照括号内提取，得到memorial"],
                ["-纯搜索题，需要搜索图中每条玉米蛇的基因/品系名。从上往下为：Sunkissed\nStripe\nLava\nMotley\nAnery\nScaleless\nAmel"],
                ["解出snake纸笔盘面放在蛇梯棋棋盘上，按照双方棋子最终是否踏在纸笔的答案上，提取为1或0后按照五位二进制提取。"],
                ["注意“一生一世”“我爱你”等都是常见的数字谐音（也可以考虑到“单身节”11.11等）结合标题与明显的时钟图像，得知需要用到每句话对应的时间。而且只有部分文字使用了深色背景，应该只需要深色背景上文字对应的时间。按照提示提取：\n我还是单身—11:11\n但我愿陪你一生一世—13:14\n纵使时间缓缓递增—01:23或12:34或23:45\n纵使时间如同无穷—8:00\n哪怕是最后一分钟—23:59\n我也要说：“我爱你”—5:20或5:21\n新年的钟声敲响了—0:00\n之后，你既可以按照谜龙所说“等时间去解开封印”，等待时间自然流逝来帮你解开谜题（这是刻意设计），也可以发现：题目似乎没有必要做成程序，说明你必须在电脑上完成什么操作…将系统时间调到对应的时间点，","就会发现异常：对应时间点的文字开始抖动。你一定忍不住去点的…对吧？点击之后便会跳出时空乱流的红色字样提示，只要把时间调到提示中正确的时间，就会出现“已解封”的绿色字样和这个时间对应的钟面。","最后，按照谜龙信中“立的flag要实现哦”的flag，进行旗语提取，得到forever。"],
                [],[],[],[]]
hintsTitle=[["这是什么纸笔谜题？","我已经解开了题面，能提示我怎么得到下一步该做的事吗？","我已经解开了题面，请告诉我应该干什么。","我已经铺好了道路，现在我应该干什么？"],
            ["我毫无头绪","'提示2'","'提示3'","'提示4'","我得到了一些提示，我应该怎么把它们联系起来？"],
            ["这些是什么意思？词的词性怎么不对？","请告诉我第一行所对应的。","请告诉我第二行所对应的。","请告诉我第三行所对应的。","请告诉我第四行所对应的。","请告诉我第五行所对应的。","请告诉我第六行所对应的。","请告诉我第七行所对应的。","请告诉我第八行所对应的。"],
            ["请按顺序提取以下序列的个数。","第一步该怎么做？","什么是值相等直线？","怎么理解星之色彩？","怎么理解星車交辉？","我理解怎样构成次之星了，但是不是有点奇怪？"],
            ["我毫无头绪。","我的操作刚刚使题面变得有意义了，接下来我要做什么？","我得到了一些新的日期，他们该怎么应用？"],
            ["我毫无头绪。","我知道要做什么，请给我一些平台。","请告诉我第一条所对应的","请告诉我第二条所对应的","请告诉我第三条所对应的","请告诉我第四条所对应的","请告诉我第五条所对应的","请告诉我第六条所对应的","请告诉我第七条所对应的"],
            ["有些不属于蛇梯棋的部分，它们有什么用？","我把我看到的两部分都完成了，但是现在我应该干什么？"],
            ["我毫无头绪","我注意到了一些事情，他们能用来做什么？","我做了提示2所说的，那么我要干什么？","我得到了一些东西，下一步我该怎么办？","我想我已经到了最后一步，该怎么提取？"],
            ["我毫无头绪","我好像找到了该题的主题，但我该怎么用？","如何提取？"],
            ["这些是什么？我应该干什么？"],
            ["我毫无头绪。","数字有什么用？","请直接告诉我数字有什么用。","我得到了三个中间答案，如何提取？"],
            ["这些都是什么？","我应该干什么？","我知道应该干什么，但我应该怎么完成？","请告诉我音频1所对应的。","请告诉我音频2所对应的。","请告诉我音频3所对应的。","请告诉我音频4所对应的。"]
            ]
hintsContent=[["这是纸笔谜题moon or sun的轻微变种","搜索曹晟康，他有一个特点，这个特点可以与‘路’连接起来，得到你所要的","你解得的是一条路径，你需要在这条路上铺上盲道。","观察你所铺的路，它与某种古典密码有着无比密切的联系。"],
            ["去里面探索吧，提示都在里面","这是键盘的一部分，你需要把对应位置的字母换成数字","你需要把路径划为3步一组","你需要把数字当成4进制去看待","画一张地图，然后用你的移动键重新走一遍路。"],
            ["你需要把左边的单词变形成右边的单词，但是变形方法是‘错误的’，即 将本应用在其他单词上的变形方法用在了左边的单词上，但是变形前后的单词都是存在的","face","sheet","illustrate","axial","tel.","apply","sumption","pic,epic"],
            ["请按顺序提取以下序列的个数：蓝绿红 绿红绿 红绿蓝 蓝红绿 红蓝绿 红绿红","你需要按照左下角和右上角的单位长度绘制出网格，星星均落在网格交点处","就是‘副对角线’，坐标系中的y=x。","初之星散发与自身同色的光芒到周围8格，这种光芒混合成次之星","这是初之星形成的方式。同色的星車发出横竖两条光的交点构成一颗初之星","这些天体并不是所有的次之星。"],
            ["本题中你需要多次运用标题。例如，第一步你应该将上面数码管的亮与暗对调。","再运用一次标题，将当前为阴历的日期转换为阳历","结合副标题。如果还是不懂，尝试将你得到的日期与副标题连起来读，并搜索副标题所指的人。"],
            ["所给图片中7条蛇均为玉米蛇。你需要根据它们的特征搜索它们的基因或品系名。如果没有搜到品系名就搜一搜基因吧。","首推bilibili，up主大家好我是木。仍然没有搜到可以试试百度。","太阳之吻，Sunkissed","直线，Stripe","熔岩，Lava","甜甜圈，Motley","炭黑，Anery","无鳞，Scaleless","白化，Amel"],
            ["它们是一个纸笔谜题snake的盘面","你需要记录蛇梯棋的棋子是否踏在了另一部分的答案上。"],
            ["仔细，更仔细地观察，有些文本有什么不一样吗？","对每一个阴影文字都能找出一个与之相关的时刻。","你可以经过漫长的等待，或是……直接跳过等待？","既然慢了，那么你应该能得到正确的时间。","旗语"],
            ["不妨把题名和题面的特征一起丢进搜索引擎。","把你找到的东西和题目图片叠放在一起。","题目中那些数字是 你要提取的字母所属图形的大小序数（从小到大）"],
            ["这些是eyezmaze.com上的一些游戏。你需要去网站上完成这些游戏并按照题面下方数字提取。"],
            ["图中每幅小图都是一种垃圾，把它们投到对应颜色的垃圾桶里吧！","观察垃圾所属垃圾桶的颜色，这三种颜色是……","用于当做对应垃圾所属垃圾桶颜色（红/绿/蓝)的数值，再将每行的三部分按照RGB混合在一起。","提取对应焰色的化学元素符号"],
            ["这些音频是书写汉字时笔尖与纸摩擦的声音。","每段音频都有一段空缺，你需要还原空缺时段应该在写什么字。","每一段音频本应包含4个字，它们是一个成语。你可以通过前后的字来推断。","反咬一口","繁文缛节","裂眦嚼齿","句比字栉"]];
function img(m,n){
    return "<img src="+solutionsImages[m][n]+">";
}
function maketxtsolutions(m,n){
    return "<p>"+solutionsTexts[m][n]+"</p>";
}
function maketitlehints(m,n){
    return "<summary>"+hintsTitle[m][n]+"</summary>";
}
solutionsHtml=[maketxtsolutions(0,0)+img(0,0)+maketxtsolutions(0,1),maketxtsolutions(1,0)+img(1,0)+maketxtsolutions(1,1),maketxtsolutions(2,0),maketxtsolutions(3,0)+img(3,0)+maketxtsolutions(3,1)+img(3,1)+maketxtsolutions(3,2)+img(3,2)+maketxtsolutions(3,3)+img(3,3)+maketxtsolutions(3,4)+img(3,4)+maketxtsolutions(3,5),maketxtsolutions(4,0),maketxtsolutions(5,0),maketxtsolutions(6,0),maketxtsolutions(7,0)+img(7,0)+img(7,1)+maketxtsolutions(7,1)+img(7,2)+img(7,3)+maketxtsolutions(7,2),"暂无解答","暂无解答","暂无解答","暂无解答"]
hintsHtml=["","","","","","","","","","","",""]
for(let i=0;i<12;i++){
    let contenthtml="";
    for(let j=0;j<hintsTitle[i].length;j++){
        contenthtml+="<details>"+maketitlehints(i,j)+"<p>"+hintsContent[i][j]+"</p>"+"</details>";
    }
    hintsHtml[i]=contenthtml;
}
function getPuzzleContent(n){
    document.getElementById("puzzle-title").innerText=puzzleTitle[n];
    document.getElementById("puzzle-flavortext").innerText=puzzleFlavorText[n];
    let imagehtml="";
    for(let i=0;i<puzzleImagePath[n].length;i++){
        imagehtml+=("<img src='"+puzzleImagePath[n][i]+"' style='width:400px;'>");
    }
    document.getElementById("puzzle-image").innerHTML=imagehtml;
    let filehtml="";
    for(let i=0;i<puzzleFilePath[n].length;i++){
        filehtml+=("<button id='download-file"+i+"' style='width:100%;height:fit-content;'>点击下载题目文件</button>")
    }
    document.getElementById("puzzle-files").innerHTML=filehtml;
    for(let i=0;i<puzzleFilePath[n].length;i++){
        let downloadfilebutton=document.getElementById("download-file"+i);
        console.log("download-file"+i)
        downloadfilebutton.addEventListener("click",function(){
            const link=document.createElement("a");
            link.href=puzzleFilePath[n][i];
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
    }
    let audiohtml="";
    for(let i=0;i<puzzleAudioPath[n].length;i++){
        audiohtml+=("<audio controls src='"+puzzleAudioPath[n][i]+"'></audio>");
    }
    document.getElementById("puzzle-audio").innerHTML=audiohtml;
    
    document.getElementsByClassName("active")[0].classList.remove("active");
    if(n<=7){
        document.getElementById("main"+(n+1)).classList.add("active");
    }
    else{
        document.getElementById("side"+(n-7)).classList.add("active");
    }
    document.getElementById("hints-inner-content").innerHTML=hintsHtml[n]+"<details><summary>解答</summary><p>"+solutionsHtml[n]+"</p></details>";
}
function submitanswer(){
    let submit=document.getElementById("submit-answer").value.toLowerCase().replace(/\s+/g, "");
    console.log(submit)
    if(submit==puzzleAnswer[puzzlenumber]){
        alert("回答正确！")
    }
    else{
        alert("回答错误")
    }
}
function updatePuzzleContent(){

}
function changePuzzle(n){
    getPuzzleContent(n);
    puzzlenumber=n;
}
function initTabs(){
    for(let i=0;i<8;i++){
        
        document.getElementById("main"+(i+1)).addEventListener("click",function(){changePuzzle(i)})
    }
    for(let i=0;i<4;i++){
        document.getElementById("side"+(i+1)).addEventListener("click",function(){changePuzzle(i+8)})
    }
}

// 模式框显示与关闭逻辑
document.addEventListener("DOMContentLoaded", function () {
    // 获取元素
    const modal = document.getElementById("puzzle-hints-window-background");
    const closeBtn = document.getElementById("close-hints-window");
    const okBtn = document.getElementById("modal-ok-button");
    const hintBtn = document.getElementById("hint-button");

    // 显示模式框
    if (hintBtn) {
        hintBtn.onclick = function () {
            modal.style.display = "block";
        };
    }

    // 关闭模式框
    if (closeBtn) {
        closeBtn.onclick = function () {
            modal.style.display = "none";
        };
    }
    if (okBtn) {
        okBtn.onclick = function () {
            modal.style.display = "none";
        };
    }

    // 点击遮罩关闭
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});