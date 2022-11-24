購物車網站demo -- 洋蔥購物網 Onion Shop

目前已部屬網站至線上，可經由以下IP進入查看網站：

    100.20.92.101
    44.225.181.72
    44.227.217.144

主要功能：

    1. 首頁
    2. 商品頁面(目前僅有手機及周邊頁可供瀏覽，無論點擊哪個分類圖案都會前往手機及周邊頁面)
    3. 會員登入(註冊的部分僅有介面，無設置註冊功能)
        測試用帳號：example001@aaa.com； 密碼：123321
    4. 加入購物車功能
    5. 購物車系統

主要目錄及文件說明：

	public -- 靜態文件目錄
		|＿css -- 通用樣式css檔案
		|＿data -- 存放前端所需數據(axios發送請求獲取資料的目的地)
		|＿images -- 存放圖檔之目錄

  	src -- 源代碼目錄
		|＿components -- 一般組件目錄
		|＿containers -- 容器組件目錄(使用redux的組件)
		|＿helpers -- 監聽某個事件用的全局組件
		|＿pages -- 存放路由組件的目錄(react-router-dom)
		|＿redux -- redux相關之js文件(actions、reducers、store)
		|＿routes -- 存放路由表之目錄
		|＿App.css -- 使用antd的UI庫必須的css樣式檔案(其中也寫了很多為避免被antd樣式覆蓋而額外寫上的css樣式)

以下補充說明部分名稱較難懂的組件：

	components -- 一般組件目錄
		|＿AccountHeader -- 用於登入及註冊組件之頭部(header)
		|＿Main -- 首頁的主要內容部分(其中包括輪播圖Slider組件及Carousel等組件)
		|＿MyATag -- 對html的a標籤封裝的組件
		|＿Title -- 購物車系統內標題區的組件


	containers -- 容器組件目錄(使用redux的組件)
		|＿Account -- 登入及註冊組件的外層組件
		|＿Header -- 首頁及商品頁面的共用頭部組件
		|＿List -- 展示購物車裡商品的組件
		|＿ProductList -- 展示商品頁面之商品的組件
		|＿ShowCart -- 負責簡單展示購物車內商品有哪些的組件(位於首頁及商品頁面Header的右上方購物車圖案，如果滑鼠hover至圖案上方，則展示購物車內商品)
		|＿Sort -- 商品頁面之排序組件
		

圖標素材(來源為免費提供)，來自於以下：

    facebook:
    <a href="https://www.flaticon.com/free-icons/facebook" title="facebook icons">Facebook icons created by Hight Quality Icons - Flaticon</a>

    IG:
    <a href="https://www.flaticon.com/free-icons/instagram" title="instagram icons">Instagram icons created by Hight Quality Icons - Flaticon</a>

    Line:
    <a href="https://www.flaticon.com/free-icons/line" title="line icons">Line icons created by Pixel perfect - Flaticon</a>

    通知總覽：
    <a href="https://www.flaticon.com/free-icons/notification" title="notification icons">Notification icons created by CreativeCons - Flaticon</a>

    幫助中心：
    <a href="https://www.flaticon.com/free-icons/question" title="question icons">Question icons created by Freepik - Flaticon</a>


    搜尋鍵：
    <a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Chanut - Flaticon</a>


    右箭頭(滑動圖片)：
    <a href="https://www.flaticon.com/free-icons/next" title="next icons">Next icons created by Roundicons - Flaticon</a>


    左箭頭(滑動圖片)：
    <a href="https://www.flaticon.com/free-icons/back" title="back icons">Back icons created by Roundicons - Flaticon</a>


商品頁面分類圖片素材來源：

    手機：
    <a href="https://www.flaticon.com/free-icons/phone" title="phone icons">Phone icons created by Freepik - Flaticon</a>

    電腦：
    <a href="https://www.flaticon.com/free-icons/computer" title="computer icons">Computer icons created by Freepik - Flaticon</a>

    男裝：
    <a href="https://www.flaticon.com/free-icons/shirt" title="shirt icons">Shirt icons created by turkkub - Flaticon</a>

    女裝：
    <a href="https://www.flaticon.com/free-icons/dress" title="dress icons">Dress icons created by AmethystDesign - Flaticon</a>

    美食：
    <a href="https://www.flaticon.com/free-icons/cupcake" title="cupcake icons">Cupcake icons created by Freepik - Flaticon</a>

    飲料：
    <a href="https://www.flaticon.com/free-icons/drink" title="drink icons">Drink icons created by monkik - Flaticon</a>

    美妝：
    <a href="https://www.flaticon.com/free-icons/fashion" title="fashion icons">Fashion icons created by Freepik - Flaticon</a>
