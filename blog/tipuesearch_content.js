var tipuesearch = {"pages":[{"title":"W16","text":"W16內容 填寫自評表單 對這學期自己做的評分","tags":"w16","url":"./41123145-W16.html"},{"title":"w16","text":"w16完成事項 (網際綜合球類競賽機器人協同設計與模擬)進籃框得五分進球門得一分。 問題1:電子是記分板都只停在5再得分還是不會進位 原因:角度轉到180再丟進一球角度反而重180變到0 解決:添加了角度範圍檢查和修正，確保角度值在合理範圍內。這樣可以避免角度從正值跳到負值的問題 問題2:轉到360度時角度不會再累積下去 解決:添加了 cumulative_red_angle 和 cumulative_blue_angle 變數來保持累積角度。每次更新時，這些變數都會累積關節的旋轉角度，並用於計算分數。 問題3:上述添加的程式只要丟一球正嘗是轉180度但實際上卻一直飆升沒有停 原因:由於每次在sysCall_actuation中不斷累加當前角度，導致角度持續增加。 解決:每次sysCall_actuation調用時，我們計算相對於前一次的角度增量，並將其累加到累積角度中。 問題4:機械式計分器顯示5分但電子式卻顯示4分 原因:使用 math.floor 的问题 假设累积角度应该是180度，这应该等于5分（180 / 36 = 5）。 然而，由于浮点数的精度问题，累积角度可能会变成179.999999度。 在这种情况下，math.floor(179.999999 / 36) 将返回4，因为 math.floor 向下取整，179.999999 / 36 约为 4.99999997，向下取整结果为4。 解決:加入0.5修正的优势 如果你加入0.5，计算方式变为 math.floor((179.999999 / 36) + 0.5)。 这里，179.999999 / 36 约等于4.99999997，加上0.5等于5.49999997。 然后 math.floor(5.49999997) 返回5，这就修正了由于浮点数精度问题导致的误差。 (解決完測試影片)","tags":"w16","url":"./41123105_2024-Spring-w16.html"},{"title":"W16","text":"2024/05/24 課程內容(W16) 填寫自評表單 到老師倉儲https://github.com/mdecycu/cd2024/discussions/18 點選discussions開啟表單 連結","tags":"四設二甲","url":"./W16內容.html"},{"title":"41123119  w15","text":"2024 w12課程. 今完成事項 被分配到的任務 為 實現平衡台可動 以下說明方法 2. 詳細說明在W15 step1.匯入組合stl step2. Edit > Shape groping / merging > divide // 分解組合圖 成零件圖 step3. Edit > Shape reference france > relocate mesh center // 零件原點從組合圖原點 改成 零件質量原點 step4. Add >Joint > Revolute // 新增joint 取代 圓桿位置 step5.Edit > Shape groping / merging > group // 分別把 頂部 及 基底 的小零件 組合成 group step6. 接著建立從屬關係 底板 > joint 1 > 頂板 > 2X{ motor 1. >長桿 1.>joint 2 }>接回 底板 step7.各部件屬性 如下 step8.加入球 step9.完成 問題: 1.底座件 連到 頂板的部分 解決: 1.複製 沒連到 零件 偏移 x 0.081 重新插入 底板零件 取代第一個底板位置 就不用重畫了","tags":"41123119 w15","url":"./41123119-w15.html"},{"title":"W15","text":"W15內容 .","tags":"w15","url":"./41123145-W15.html"},{"title":"w15","text":"w15完成事項 (網際綜合球類競賽機器人協同設計與模擬)測試進球機械轉盤是否轉動","tags":"w15","url":"./41123105_2024-Spring-w15.html"},{"title":"W15","text":"2024/05/24 課程內容(W15) 手術回來趕進度 推新靜態網頁 每周進度(網誌)- 連結1 Codespace指令說明- 連結2","tags":"四設二甲","url":"./W15內容.html"},{"title":"w15課程 41123152","text":"2024 Spring 網際內容管理與協同產品設計實習課程w15. 今日課程內容 1.組裝平台以及轉檔 2.使用football內之檔案judge.py及player.py控制模擬場景計時器以及生成球和控制球員","tags":"w15","url":"./2024-Spring-w15-blog-tutorial-41123152.html"},{"title":"W14","text":"2024/05/24 課程內容(W14)","tags":"四設二甲","url":"./W14內容.html"},{"title":"W13","text":"2024/05/17 課程內容(W13)","tags":"四設二甲","url":"./W13內容.html"},{"title":"W14","text":"W14內容 翻譯文章LaTex 翻譯文章41123145-LaTex 66-67中英合併 66-67中英合併文字稿 翻譯文章第二組整合 2a-midag2 2a-midag2文字稿","tags":"w14","url":"./41123145-W14.html"},{"title":"w14","text":"w14完成事項 將(網際綜合球類競賽機器人協同設計與模擬)場景做出 程式:(編寫中)","tags":"w14","url":"./41123105_2024-Spring-w14.html"},{"title":"w14課程 41123152","text":"2024 Spring 網際內容管理與協同產品設計實習課程w14. 今日課程內容 1.繪畫鋼球平衡台之組合件 2.組裝平台","tags":"w14","url":"./2024-Spring-w14-blog-tutorial-41123152.html"},{"title":"2024 Spring 課程 w14 41123123","text":"2024 Spring 網際內容管理與協同產品設計實習w14課程. 1.修改足球機器人的場景並加入籃框及空氣牆 2.修改足球機器人程式:將一個球增加至10個 3.遇到問題:執行時球會碰撞而飛走","tags":"w14","url":"./2024-Spring-w14-blog-tutorial 41123123.html"},{"title":"W13","text":"W13內容","tags":"w13","url":"./41123145-W13.html"},{"title":"2024 Spring 課程 w13 41123123","text":"2024 Spring 網際內容管理與協同產品設計實習w13課程. 1.繪畫鋼球平衡台之組合件 2.補做之前期中前未補的事項補齊","tags":"w13","url":"./2024-Spring-w13-blog-tutorial 41123123.html"},{"title":"w13課程 41123152","text":"2024 Spring 網際內容管理與協同產品設計實習課程w13. 今日課程內容 組裝平台","tags":"w13","url":"./2024-Spring-w13-blog-tutorial-41123152.html"},{"title":"41123119  w12","text":"2024 w12課程. 今完成事項 1.平台繪圖完成 檔案 2. 分組倉儲設為評分倉儲子模組","tags":"41123119 w12","url":"./41123119-w12.html"},{"title":"W12","text":"W12內容","tags":"w12","url":"./41123145-W12.html"},{"title":"w12","text":"w12課程 (任務一) 將分組倉儲設為評分網站子模組 2a cd2024 評分網站 (任務二) 將鋼球平衡台零組件的繪製 底座","tags":"w12","url":"./41123105_2024-Spring-w12.html"},{"title":"W12","text":"2024/05/10 課程內容(W12)","tags":"四設二甲","url":"./W12內容.html"},{"title":"w12課程 41123152","text":"2024 Spring 網際內容管理與協同產品設計實習課程w12. 今日課程內容 將小組倉儲上傳至2astud-2asite","tags":"w12","url":"./2024-Spring-w12-blog-tutorial-41123152.html"},{"title":"41123130-W13課程","text":"第十三週 41123130-W13 補做之前期中前未補的事項補齊 繪畫鋼球平衡台之組合件 新增群組靜態內容","tags":"w13","url":"./41123130 W13.html"},{"title":"41123130-W14課程","text":"第十四週 41123130-W14 1.平台繪圖完成 2.組合完成並轉檔","tags":"w14","url":"./41123130 W14.html"},{"title":"41123130-W15課程","text":"第十五週 41123130-W15 1.上傳小組內容影片","tags":"w15","url":"./41123130 W15.html"},{"title":"41123119  w11","text":"2024 w11課程. 今完成事項 1. 個人心得加入子模組","tags":"41123119 w11","url":"./41123119-w11.html"},{"title":"W11","text":"W11內容 在2astud-2asite 倉儲新增個人心得 41123145心得: 使用github啟動codespaces維護動態網站以及更新網誌，之前只學會了replit更新網站以及網誌，這學期學會了codespaces更新更加方便，只需要在終端機打幾行指令，就可以完成倉儲更新。","tags":"w11","url":"./41123145-W11.html"},{"title":"w11","text":"w11課程 將個人心得打入2a cd2024 評分網站 2a cd2024 評分網站","tags":"w11","url":"./41123105_2024-Spring-w11.html"},{"title":"W11","text":"2024/05/03 課程內容(W11) 針對課程內容做分類 分成時間、任務、地點等項目並說明 再次複習分支推送與合併 心得","tags":"四設二甲","url":"./W11內容.html"},{"title":"2024 Spring 課程 w11 41123123","text":"2024 Spring 網際內容管理與協同產品設計實習w11課程. 1.學習並練習使用建分支的方式去維護小組倉儲 2.用NX畫鋼球平衡零件圖","tags":"w11","url":"./2024-Spring-w11-blog-tutorial 41123123.html"},{"title":"w11課程 41123152","text":"2024 Spring 網際內容管理與協同產品設計實習課程w11. 今日課程內容 新增個人及小組學習心得至2astud-2asite","tags":"w11","url":"./2024-Spring-w11-blog-tutorial-41123152.html"},{"title":"41123130-W12課程","text":"第十二週 41123130-W12 利用NXOpen程式分別執行建立block與挖孔，並將兩個程式合併為一個程式，可以直接完成建立一個 block 並在其特定面上挖孔 將分組倉儲(ag2)設為評分網站(2a-stud)子模組 [git submodule add https://github.com/mdecd2024/2a-midag2.git g1]","tags":"w12","url":"./41123130 W12.html"},{"title":"41123119  w10","text":"2024 w10課程. 今完成事項 1.把期中latax個人作業完成 latax txt 檔 latax pdf 檔 2.整理之前的blog 3.任務一 from browser import window, ajax, document, html def fetch_csv_data(): # CSV 檔案網址 url = \"https://mdecd2024.github.io/2astud-2asite/downloads/2a.txt\" def on_complete(req): if req.status == 200 or req.status == 0: # 讀取 CSV 檔案內容 content = req.text # 依照換行符號拆分資料 lines = content.split('\\n') # 建立空列表儲存資料 data = [] # 遍歷每一行資料 for line in lines: # 忽略空白行 if line.strip() == \"\": continue # 依照逗號拆分資料 items = line.split(',') # 將拆分後的資料加入列表 data.append(items) # 必須去除 data 的第一列標題資料, 只取序號為 1 之後的資料 data = data[1:] # 取得 html 可以插入的標註位置 brython_div = document[\"brython_div1\"] course_title = \"cd2024\" # 逐一處理學員資料 index = 0 for items in data: index += 1 student_id, github_username, group = items if github_username == \"\": github_username = \"000\" # 建立網站和倉儲連結，使用正確的模板 site_url = f\"https://{github_username}.github.io/{course_title}\" repo_url = f\"https://github.com/{github_username}/{course_title}\" group_site_url = f\"https://mdecd2024.github.io/2a-midag{group}\" group_repo_url = f\"https://github.com/mdecd2024/2a-midag{group}\" # 添加學號, 網站, 倉儲連結和序號到 brython_div brython_div <= str(index) + \". \" + html.A(student_id, href=site_url) brython_div <= \" (\" brython_div <= html.A(\"repo\", href=repo_url) brython_div <= \") | \" brython_div <= html.A(\"Group Site\", href=group_site_url) brython_div <= \" | \" brython_div <= html.A(\"Group Repo\", href=group_repo_url) brython_div <= html.BR() else: print(\"Error:\", req.text) # 發送 AJAX 請求 req = ajax.ajax() req.bind('complete', on_complete) req.open('GET', url, True) req.set_header('content-type', 'application/x-www-form-urlencoded') req.send() # 呼叫函式讀取 CSV 資料 fetch_csv_data() 4.任務二 文章一 : Construction and theoretical study of a ball balancing platform (構建一個球體平衡平台涉及到平台本身的物理結構建造以及用於維持球體平衡的控制算法的理論研究) 摘要內容 : 通過實施自動控制理論穩定動態系統時的局限性, 球平衡平臺的構造和理論研究, 通過實施穩定動態系統時的局限性自動控制理論. 通過物理構造的裝置作為理論的演示者, 進一步比較從牛頓力學得出的事實物理和計算機模擬結果. 為了能夠進行比較, 有必要設計一個能夠滿足系統要求的令人滿意的控制器. 在設備和控制方面, 為在平臺上平衡球的系統引入比例積分導數控制器. 進一步允許分析以確定穩定自然不穩定或半穩定系統時的局限性. 建立球體平衡平台的理論模型, 並與實際搭建的平台進行比較. 分析理論與實際結果之間的差異, 探討控制理論與系統實施的挑戰. 文章二 : A real time control system for balancing a ball on a platform with FPGA parallel implementation (用於在平臺上平衡球的即時控制系統，具有FPGA並行實現) 摘要內容 : 在一個FPGA晶元上開發了兩個並行PID控制器，用於獨立控制一個物件的兩個參數。確保了控制物件的PID控制器的輪廓計算的並行處理，調節器的輸出已經歸一化。通過自然類比，提高了在平台上調節球位置的精度。設計的控制器可用於即時控制具有許多受控參數的高速物體 。 文章三 : Simulation and Experimental Study of Ball Position Control at Biaxial Platform using State Space Approach (基於狀態空間方法的雙軸平臺球位控制模擬與實驗研究) 摘要內容 : 本研究詳細設計並比較了三種控制結構，用於自動穩定球在板上的位置和球的軌跡跟蹤。即PD控制器、狀態空間反饋和狀態空間觀測器。所有三種方法都經過設計並進行了實際比較。所有結構都有一個共同的特徵。它是計算控制器參數的方法。通過牛頓方法推導的板上球數學模型和直流電機位置環路控制也是本文的一部分。 文章四： Design and Implementation a Ball Balancing System for Control Theory Course（控制理論課程的球平衡系統設計與實現） 摘要內容： 開發一個球平衡系統，使用微控制器和相關控制演算法來保持球在橫樑上的平衡，以通過即時感官反饋調整橫樑的角度。在此過程中，製作了三個原型並相互比較，特別是在合理性和成本方面。通過集成一個伺服電機、一個距離感測器、一個微控制器板和一個機械平臺，可以很容易地設計整個系統。此外，他們將通過微控制器程式設計來理解和實現控制演算法。如果學生對MATLAB知之甚少。開發介面程式以在MATLAB中繪製即時位置曲線。這個簡化的系統將作為連接理論知識和實踐技能的橋樑。所提方法也適用於更複雜的系統 。 文章五: Ball on the plate balancing control system (板上球平衡控制系統) 摘要內容 : 平衡問題是一個持續的研究挑戰，適用於從教育到交通的許多興趣領域。二自由度球平衡實驗室試驗台是瞭解控制系統的重要設備。本文重點介紹了在板上平衡球的機械設計。使用電阻式觸摸屏獲取球體位置數據，使用步進電機和位置傳感器控制平台傾斜角度。 設計基於 AVR 微控制器的雙環下屬控制系統，使用 PID 控制器維持球體平衡。 文章六 : 2D Ball Balancer Control using QUARC (使用 QUARC 的 2D 球平衡器控制) 摘要內容 : 使用 QUARC 軟體設計和實現球體在二維平台上的位置控制。 設計 PD 和 PID 控制器，並探討設定點權重和積分器抗飽和等控制技術。 使用攝像頭讀取球體位置，並進行校準和轉換。","tags":"41123119 w10","url":"./41123119-w10.html"},{"title":"W10","text":"W10內容 任務二 閱讀論文後請將摘要內容放入個人與分組網誌中 論文一：Construction and theoretical study of a ball balancing platform 摘要:探討了構建和理論研究球平衡平台的過程。通過應用自動控制理論，研究了穩定動態系統的限制。該研究使用比例-積分-微分控制器來平衡平台上的球，並比較了計算機模擬結果與基於牛頓力學的實際物理結果。研究結果表明，構建的物理模型在某些系統要求方面表現出色，但在靜態誤差方面存在問題。此外，研究還討論了模擬和實際結果之間的差異，並提出了減少建構錯誤的必要措施。 結論:通過構建球平衡平台並應用控制理論，我們研究了穩定動態系統的挑戰。比較模擬和實際結果，揭示了控制理論在實際應用中的限制。未來研究可專注於改進控制器設計，以應對系統不穩定性，減少模擬與實際結果的差異。这项研究為自動控制理論的實際應用提供了重要啟示。 論文二：A real time control system for balancing a ball on a platform with FPGA parallel implementation 摘要:提出一個基於PID調節器的新解決方案，用於增加實時平台上球位置調節的準確性。首先，發展了平衡球在平台上的傳遞函數，並合成了用於平衡球在平台上的PID調節器。接著，設計了在FPGA上進行平行計算的PID調節器實現。通過自然模擬證實了增加調節平台上球位置準確性的效果。關鍵詞包括PID控制器、FPGA、VHDL和實時系統。 結論:在FPGA上實現PID調節器的新方法，可提高實時調節平台上球位置的準確性。通過平行計算，我們成功設計了控制器，可同時控制多個參數，並通過自然模擬驗證了其有效性。這種方法有望應用於實時控制高速對象。 論文三：Simulation and Experimental Study of Ball Position Control at Biaxial Platform using State Space Approach 摘要:探討了在雙軸平台上平衡球的控制結構，並介紹了使用直流電機和數位信號控制器的基準系統。文中討論了不同的位置估計方法，以及永磁直流電機的數學模型和PD控制器的實驗結果。整體而言，這篇論文強調了控制結構在實際應用中的重要性。 結論:研究了在雙軸平台上控制球的位置，並提出了三種不同的控制結構。通過實驗和模擬比較，證明了這些控制結構的有效性和可行性。整體而言，這些研究結果對於控制系統設計和應用具有重要價值。 論文四：Design and Implementation a Ball Balancing System for Control Theory Course 摘要:開發一個球平衡系統，利用微控制器和控制算法來保持球在樑上平衡。通過實時感應反饋，系統調整樑的角度以最小化誤差，同時教導學生有關PID控制。整個系統包括伺服馬達、距離感應器、微控制器板和機械平台，可用於教授本科生控制理論和微控制器編程。該系統的簡化設計將理論知識與實踐技能相連接，並可應用於更複雜的系統。 結論:球平衡系統是一個廉價的教學工具，旨在教授控制理論應用。學生可以通過實施基於傳感器和微控制器的控制平台來應用他們所學，這與閉環反饋理論相關。整體而言，球樑系統對於開發和展示相關反饋控制算法非常有效。 論文五：Ball on the plate balancing control system 摘要:探討了關於在平板上平衡球的機械設計和控制算法，提供了對控制系統理解的寶貴見解。該實驗室測試台包括阻性觸摸屏用於球位置數據獲取，帶有位置傳感器的步進馬達用於平台傾斜角度反饋數據，以及基於AVR微控制器的雙環從屬控制系統，其中包括用於維持球位置的PID控制器。 結論:描述了一個平衡球的實驗室測試台的設計，該設計可用於測試穩定性和平衡控制算法，對於海洋船舶和空中載具等應用可能至關重要。基於微控制器的控制系統追蹤阻性觸摸屏上球的位置並計算位置誤差，從而使球保持在阻性玻璃的中心點。 論文六：2D Ball Balancer Control using QUARC 摘要:為了幫助使用QUARC軟件控制2D球平衡器的實驗。它包含了設計PID控制器、進行步階響應、坡道響應、正弦響應等的步驟。同時還提供了有關SRV02系統的角度關係、運動方程等的詳細解釋。 結論:提供了豐富的資訊和步驟，幫助使用者學習如何使用QUARC軟件控制2D球平衡器。通過實驗和模擬，使用者可以設計並實施PID控制器，並評估系統的性能。這將有助於加深對控制系統設計和實施的理解。","tags":"w10","url":"./41123145-W10.html"},{"title":"w10","text":"w10課程 (任務一) 列出個學員的資訊 (任務二) (各篇論文要點摘要) 文章一 : Construction and theoretical study of a ball balancing platform (構建一個球體平衡平台涉及到平台本身的物理結構建造以及用於維持球體平衡的控制算法的理論研究) 摘要內容 : 通過實施自動控制理論穩定動態系統時的局限性, 球平衡平臺的構造和理論研究, 通過實施穩定動態系統時的局限性自動控制理論. 通過物理構造的裝置作為理論的演示者, 進一步比較從牛頓力學得出的事實物理和計算機模擬結果. 為了能夠進行比較, 有必要設計一個能夠滿足系統要求的令人滿意的控制器. 在設備和控制方面, 為在平臺上平衡球的系統引入比例積分導數控制器. 進一步允許分析以確定穩定自然不穩定或半穩定系統時的局限性. 建立球體平衡平台的理論模型, 並與實際搭建的平台進行比較. 分析理論與實際結果之間的差異, 探討控制理論與系統實施的挑戰. 文章二 : A real time control system for balancing a ball on a platform with FPGA parallel implementation (用於在平臺上平衡球的即時控制系統，具有FPGA並行實現) 摘要內容 : 在一個FPGA晶元上開發了兩個並行PID控制器，用於獨立控制一個物件的兩個參數。確保了控制物件的PID控制器的輪廓計算的並行處理，調節器的輸出已經歸一化。通過自然類比，提高了在平台上調節球位置的精度。設計的控制器可用於即時控制具有許多受控參數的高速物體。 文章三 : Simulation and Experimental Study of Ball Position Control at Biaxial Platform using State Space Approach (基於狀態空間方法的雙軸平臺球位控制模擬與實驗研究) 摘要內容 : 本研究詳細設計並比較了三種控制結構，用於自動穩定球在板上的位置和球的軌跡跟蹤。即PD控制器、狀態空間反饋和狀態空間觀測器。所有三種方法都經過設計並進行了實際比較。所有結構都有一個共同的特徵。它是計算控制器參數的方法。通過牛頓方法推導的板上球數學模型和直流電機位置環路控制也是本文的一部分。 文章四：Design and Implementation a Ball Balancing System for Control Theory Course（控制理論課程的球平衡系統設計與實現） 摘要內容：開發一個球平衡系統，使用微控制器和相關控制演算法來保持球在橫樑上的平衡，以通過即時感官反饋調整橫樑的角度。在此過程中，製作了三個原型並相互比較，特別是在合理性和成本方面。通過集成一個伺服電機、一個距離感測器、一個微控制器板和一個機械平臺，可以很容易地設計整個系統。此外，他們將通過微控制器程式設計來理解和實現控制演算法。如果學生對MATLAB知之甚少。開發介面程式以在MATLAB中繪製即時位置曲線。這個簡化的系統將作為連接理論知識和實踐技能的橋樑。所提方法也適用於更複雜的系統。 文章五: Ball on the plate balancing control system (板上球平衡控制系統) 摘要內容 : 平衡問題是一個持續的研究挑戰，適用於從教育到交通的許多興趣領域。二自由度球平衡實驗室試驗台是瞭解控制系統的重要設備。本文重點介紹了在板上平衡球的機械設計。使用電阻式觸摸屏獲取球體位置數據，使用步進電機和位置傳感器控制平台傾斜角度。 設計基於 AVR 微控制器的雙環下屬控制系統，使用 PID 控制器維持球體平衡。 文章六 : 2D Ball Balancer Control using QUARC (使用 QUARC 的 2D 球平衡器控制) 摘要內容 : 使用 QUARC 軟體設計和實現球體在二維平台上的位置控制。 設計 PD 和 PID 控制器，並探討設定點權重和積分器抗飽和等控制技術。 使用攝像頭讀取球體位置，並進行校準和轉換。 (任務三) 將鋼球平衡台零組件的繪製 底座","tags":"w10","url":"./41123105_2024-Spring-w10.html"},{"title":"W10","text":"2024/04/26 課程內容(W10) 任務一 任務二 請下載 [cd2024_ball_balancing_platform_control_ref.7z] 閱讀後請將摘要內容放入個人與分組網誌中. 論文一：2D Ball Balancer Control using QUARC １內容摘要:這份指南將引導您通過使用QUARC控制2D球平衡器的過程。您將學習如何從頭原理建模、分析和有效控制系統。摘要內容包括實驗的先決條件、系統建模和傳遞函數的獲取，以及實現2D球平衡器的期望控制響應的方法。 ２總結:這份指南旨在教導如何使用QUARC控制2D球平衡器。內容包括先決條件、系統建模、傳遞函數獲取以及實現期望控制響應的方法。通过这份指南，用户将学习如何有效地模拟、分析和控制2D球平衡器系统。 論文二：A real time control system for balancing a ball on a platform with FPGA parallel implementation １內容摘要:這份文件介紹了一個利用PID調節器和FPGA平行實現的實時控制系統，旨在提高在平台上平衡球的準確性。該系統的設計包括開發平衡球在平台上的轉換函數、合成PID調節器以及在FPGA上進行平行計算的實現。通過自然模擬，證實了對平台上球位置調節準確性的提高。這項研究的目的是為了應對當今控制系統面臨的新挑戰，如物聯網、無人駕駛汽車和擁有多個參數的複雜對象。這表明了對於開發、研究和設計具有多個參數的複雜對象的實時控制系統的需求。 ２總結:這份文件介紹了一個新的實時控制系統，利用PID調節器和FPGA平行實現，旨在提高在平台上平衡球的準確性。該系統的設計包括開發轉換函數、合成PID調節器以及在FPGA上進行平行計算。通過自然模擬驗證了對平台上球位置調節準確性的提高。這項研究突顯了對於控制系統在處理物聯網、無人駕駛汽車等新挑戰時的重要性，並強調了實時控制系統對於具有多個參數的複雜對象的開發和研究的價值。 論文三：Ball on the plate balancing control system １內容摘要:這份文件描述了設計一個用於平衡球在平板上的實驗室測試臺。系統利用微控制器和控制算法來追踪球的位置並進行控制。通過電阻式觸摸屏確定物體位置，並透過步進馬達的轉角確定平板傾斜角度。控制系統以100 Hz頻率運行，讀取球的坐標和平台傾角信息。系統目標是將物體帶到觸摸屏中心點並保持在該位置，儘管受到干擾。实驗結果顯示，控制系統成功維持球在觸摸屏中心點。 ２總結:這份文件介紹了一個用於平衡球在平板上的實驗室測試臺，利用微控制器和控制算法來追踪和控制球的位置。系統包括電阻式觸摸屏和步進馬達，以確定物體位置和平板傾斜角度。控制系統旨在將球帶到觸摸屏中心並保持穩定。实驗結果表明，控制系統成功實現了維持球在觸摸屏中心的目標。 論文四Construction and theoretical study of a ball balancing platfor １內容摘要:這份文件探討了一個球平衡平台的構造和理論研究，旨在通過自動控制理論的應用來探討穩定動態系統的局限性。該文件包括了構造球平衡平台的方法、將物理和計算機模擬結果進行比較的結果，以及引入比例-積分-微分控制器來幫助平衡平台上的球並觀察系統穩定性方面的限制。 ２總結:這份文件掔探討了通過自動控制理論來穩定動態系統的限制。研究通過構造球平衡平台，比較物理和計算機模擬結果，並引入比例-積分-微分控制器來平衡球在平台上的運動。研究還探討了在穩定自然不穩定或半穩定系統時的性能限制 論文五：Design and Implementation a Ball Balancing System for Control Theory Course １內容摘要:這個專案旨在設計和實現一個球平衡系統，用於控制理論課程。該系統利用微控制器和控制算法來保持一個球在樑上平衡。通過實時反饋，系統調整樑的角度以最小化誤差，並教導學生有關PID控制。該系統採用了伺服馬達、超聲波感測器和3D打印的PVC塑料樑，並使用MATLAB進行模擬和視覺化。這個項目有助於學生理解控制理論的應用，並提供了一個實用的實驗平台。 ２總結:這個專案設計了一個球平衡系統，旨在教控制理論課程的學生應用PID控制。系統利用微控制器和控制算法來調整樑的角度，以保持球在樑上平衡。通過實時反饋，系統能夠最小化誤差，並提供了一個實用的實驗平台，幫助學生理解控制理論的應用。 論文六：Simulation and Experimental Study of Ball Position Control at Biaxial Platform using State Space Approach １內容摘要:這份文件探討控制理論的實際應用，特別聚焦於在雙軸平台上平衡球的應用。文件中描述了如何利用控制結構在防衛軍事技術、攝影穩定和太空火箭垂直降落等高端應用中使用。研究人員通常如何在應用實踐中探索新的控制理論，控制結構對防衛軍事技術有哪些實際影響，以及文件中描述的基準系統是如何在測試控制結構中使用的。 ２總結:這份文件探討了控制理論在平衡球的應用中的實際應用。通過在雙軸平台上平衡球來研究控制結構的性能，並探討了在防衛軍事技術和高端應用中的潛在應用。文件中還介紹了基準系統的設計和控制結構的比較，以及控制器參數的計算方法。整體而言，這份文件提供了有關控制系統設計和應用的深入設計和比較，並強調了其在不同領域中的潛在應用價值。 任務三","tags":"四設二甲","url":"./W10內容.html"},{"title":"2024 Spring 課程 w10 41123123","text":"2024 Spring 網際內容管理與協同產品設計實習w10課程. 1.增加任務一的程式","tags":"w10","url":"./2024-Spring-w10-blog-tutorial 41123123.html"},{"title":"w10課程 41123152","text":"2024 Spring 網際內容管理與協同產品設計實習課程w10. 今日課程內容 完成Latex翻譯並上傳至Downloads中","tags":"w10","url":"./2024-Spring-w10-blog-tutorial-41123152.html"},{"title":"41123130-W11課程","text":"第十一週 41123130-W11 在小組倉儲更新自己的子模組 學習並練習使用建分支的方式去維護小組倉儲 用NX畫鋼球平衡零件圖","tags":"w11","url":"./41123130 W11.html"},{"title":"41123119  w9","text":"2024 w9課程. 今完成事項 1.把一分鐘的影片報告放到各分組網誌 2.整理之前的blog","tags":"41123119 w9","url":"./41123119-w9.html"},{"title":"W9","text":"W9內容 期中自評 自評分數65分","tags":"w9","url":"./41123145-W9.html"},{"title":"w9","text":"w9課程 期中自評","tags":"w9","url":"./41123105_2024-Spring-w9.html"},{"title":"W9","text":"2024/04/19 課程內容(W9) 期中考周 填寫自評成績/Github帳號/分組組別 分別為65分/41123108/第2組 期中分組報告 41123108 分配負責頁數為23-33頁 期中分組報告(翻譯) 報告連結","tags":"四設二甲","url":"./W9內容.html"},{"title":"2024 Spring 課程 w9 41123123","text":"2024 Spring 網際內容管理與協同產品設計實習w9課程. 1.重新整頓之前Blog之問題 2.整合群組子模組","tags":"w9","url":"./2024-Spring-w9-blog-tutorial 41123123.html"},{"title":"w9課程 41123152","text":"2024 Spring 網際內容管理與協同產品設計實習課程w9. 今日課程內容 運用OBS嘗試加入部分教學成果總結 重新整頓之前Blog之問題 整合群組子模組","tags":"w9","url":"./2024-Spring-w9-blog-tutorial-41123152.html"},{"title":"41123130-W10課程","text":"第十週 41123130-W10 完成Latex翻譯並上傳至Downloads中 將W10任務放在","tags":"w10","url":"./41123130 W10.html"},{"title":"41123119  w8","text":"2024 w8課程. 今完成事項 一分鐘的影片報告 影片","tags":"41123119 w8","url":"./41123119-w8.html"},{"title":"W8","text":"W8內容 更改Slug名稱 將網誌Slug名稱改成自己學號","tags":"w8","url":"./41123145-W8.html"},{"title":"w8","text":"w8課程 將組員各週的網誌合併至分組網誌 將個人一分鐘的影片報告放到各分組網誌","tags":"w8","url":"./41123105_2024-Spring-w8.html"},{"title":"W8","text":"2024/04/12 課程內容(W8) 未知","tags":"四設二甲","url":"./W8內容.html"},{"title":"w8課程 41123152","text":"2024 Spring 網際內容管理與協同產品設計實習課程w8. 今日課程內容 運用OBS嘗試加入部分教學成果總結","tags":"w8","url":"./2024-Spring-w8-blog-tutorial-41123152.html"},{"title":"41123130-W9課程","text":"第九週 41123130-W9 重新整頓之前Blog之問題 整合群組子模組","tags":"w9","url":"./41123130 W9.html"},{"title":"41123119  w7","text":"2024 w7課程. 連假","tags":"41123119 w7","url":"./41123119-w7.html"},{"title":"w7","text":"w7課程 放假","tags":"w7","url":"./41123105_2024-Spring-w7.html"},{"title":"41123130-W8課程","text":"第八週 41123130-W8 運用OBS嘗試加入部分教學成果總結(未成功)","tags":"w8","url":"./41123130 W8.html"},{"title":"41123119  w6","text":"2024 w6課程. 今完成事項 update 了 組中自己的子模組 且學習如何用branch 協同更新 方法如下: 1.在github main create new branch //branch name 我使用學號 41123119 2.進入自己的branch 3.create a codspeace on 41123119 4.open codspeace 5.chmod u+x init_replit ./init_replit 6.git submodule update --init //將 git submodule init 和 git submodule update 合併成一步 7.cd 41123119 //進入41123119的子模組 8.git pull origin main//從遠端更新程式碼 並將 main 合併至分支41123119 9.cd ..//退到大廳 10.git add . git commit git push 11.git merge//合併branch 41123119 至 main 12.在github確定沒衝突的合併後送出請求 13.同意後即可 14.合併後的branch 只要沒有與main有衝突的合併應該可以一直用 問題 既然可以用從遠端更新子模組 那子模組可以更新回遠端嗎?","tags":"41123119 w6","url":"./41123119-w6.html"},{"title":"W6","text":"W6內容 update個人子模組到小組倉儲 update 41123145子模組","tags":"w6","url":"./41123145-W6.html"},{"title":"w6","text":"w6課程 將自己每週更新的內容推回去分組 2a-midag2 blog","tags":"w6","url":"./41123105_2024-Spring-w6.html"},{"title":"W6","text":"2024/03/29 課程內容(W6)","tags":"四設二甲","url":"./W6內容.html"},{"title":"w6課程 41123152","text":"2024 Spring 網際內容管理與協同產品設計實習課程w6. 今日課程內容 UpDate 了小組中自己的子模組 且學習如何用branch 協同更新 方法如下: 1. 在 github main create new branch 和 branch name 41123152 //創建個人分支 2. create a codspeace on 41123152 3. open codspeace 4. chmod u+x init_replit 並./init_replit 5. git submodule update --init //將 git submodule init 和 git submodule update 合併成一步 6. cd 41123152 //進入41123152的子模組 7. git pull origin main //從遠端更新程式碼 並將 main 合併至分支41123152 8. cd ..//退到大廳 9. git add .(加入更改) 10. git commit -m \" \"(命名這次更改) 11. git push(推到倉儲) 12. git merge //合併branch 41123152 至 main 13. 在github確定沒衝突的合併後送出請求,並合併branch 14. 合併後的branch 只要沒有與main有衝突的合併應該可以一直用","tags":"w6","url":"./2024-Spring-w6-blog-tutorial-41123152.html"},{"title":"41123130-W6課程","text":"第六週 41123130-W6 UpDate 了小組中自己的子模組 且學習如何用branch 協同更新 方法如下: 1.在 github main create new branch 和 branch name 41123130 //創建個人分支 2.create a codspeace on 41123130 // 3.open codspeace 4.chmod u+x init_replit 並./init_replit 5.git submodule update --init //將 git submodule init 和 git submodule update 合併成一步 6.cd 41123130 //進入41123130的子模組 7.git pull origin main //從遠端更新程式碼 並將 main 合併至分支41123130 8.cd ..//退到大廳 9.git add .(加入更改) git commit -m \" \"(命名這次更改) git push(推到倉儲) 10.git merge //合併branch 41123130 至 main 11.在github確定沒衝突的合併後送出請求,並合併branch 12.合併後的branch 只要沒有與main有衝突的合併應該可以一直用","tags":"w6","url":"./41123130 W6.html"},{"title":"41123119  w5","text":"2024 w5課程. 今完成事項 1.在分組倉儲的 w4 blog 新增自己的字評與影片 字幕 2.下載 Siemens NX 1872 至個人隨身碟或電腦 影片 及 逐字稿","tags":"41123119 w5","url":"./41123119-w5.html"},{"title":"W5","text":"W5內容 將上字幕影片上傳到小組倉儲 各組自行搜尋前面已經發布的教學影片上字幕 wcm2024_1a_w3_2_將組員的個人倉儲納為分組倉儲的子模組 說明如何將組員的個人倉儲納入分組倉儲成為子模組 影片逐字稿","tags":"w5","url":"./41123145-W5.html"},{"title":"w5","text":"w5課程 將之前入製的影片加入文字加入分組blog裡及自評 2a-midag2的blog","tags":"w5","url":"./41123105_2024-Spring-w5.html"},{"title":"W5","text":"2024/03/22 課程內容(W5)","tags":"四設二甲","url":"./W5.html"},{"title":"2024 Spring 課程 w5 41123123","text":"2024 Spring 網際內容管理與協同產品設計實習w5課程. 將個人網誌上的影片新增到分組網頁上","tags":"w5","url":"./2024-Spring-w5-blog-tutorial 41123123.html"},{"title":"2024 Spring 課程 w6 41123123","text":"2024 Spring 網際內容管理與協同產品設計實習w6課程. update 41123123 的子模組到 2a-midag2上","tags":"w6","url":"./2024-Spring-w6-blog-tutorial 41123123.html"},{"title":"w5課程 41123152","text":"2024 Spring 網際內容管理與協同產品設計實習課程w5. 1.將自己的倉儲加入小組成為子模組 2.以 LaTeX 格式分工完成文章的英文與中文翻譯並列資料 3.上一部教學影片字幕","tags":"w5","url":"./2024-Spring-w5-blog-tutorial-41123152.html"},{"title":"41123130-W5課程","text":"第五週 41123130-W5 1.將自己的倉儲加入小組成為子模組 2.以 LaTeX 格式分工完成文章的英文與中文翻譯並列資料 3.上一部教學影片字幕 http://229.cycu.org/latex_images_github.7z \">逐字稿","tags":"w5","url":"./41123130 W5.html"},{"title":"41123119  w4","text":"2024 w4課程. 今完成事項 1.cd2024_2a_w2_5 如何利用近端可攜環境與外部 IPv4 開啟動態網站的字幕 2.其影片逐字稿 3.為了上傳 影片 檔案 照片等 學習了blog寫法 影片 及 逐字稿","tags":"41123119 w4","url":"./41123119-w4.html"},{"title":"W4","text":"W4內容 各組自行搜尋前面已經發布的教學影片上字幕 wcm2024_1a_w3_2_將組員的個人倉儲納為分組倉儲的子模組 說明如何將組員的個人倉儲納入分組倉儲成為子模組 影片逐字稿","tags":"w4","url":"./41123145-W4.html"},{"title":"w4","text":"w4課程 將之前入製的影片加入文字 影片名稱:cd2024_2a_w3_如何將學員倉儲設為分組倉儲的子模組 影片逐字檔 影片逐字檔","tags":"w4","url":"./41123105_2024-Spring-w4.html"},{"title":"W4","text":"2024/03/15 課程內容(W4) 挑選一部曾經課堂上傳影片中填上字幕 分組翻譯解析課程影片時長27分 影片連結 影片字幕中整理出 逐字稿","tags":"四設二甲","url":"./W4內容.html"},{"title":"2024 Spring 課程 w4 41123123","text":"2024 Spring 網際內容管理與協同產品設計實習w4課程. cd2024_2a_2_odoo_plm簡介 逐字稿","tags":"w4","url":"./2024-Spring-w4-blog-tutorial 41123123.html"},{"title":"41123130-W4課程","text":"第四週 41123130-W4 1.cd2024_2a_w2_5 如何利用近端可攜環境與外部 IPv4 開啟動態網站的字幕 2.為教學影片上其影片逐字稿","tags":"w4","url":"./41123130 W4.html"},{"title":"w4課程 41123152","text":"2024 Spring 網際內容管理與協同產品設計實習課程w4. 今日課程內容 如何利用近端可攜環境與外部 IPv4 開啟動態網站的字幕 新增影片字幕及逐字稿 cd2024_2a_w2_4_利用 Replit 管理 Github Classroom 分組倉儲 (字幕版本) 影片逐字稿","tags":"w4","url":"./41123152-w4-blog-tutorial-41123152.html"},{"title":"2A-MIDAG2 W4","text":"2024 Spring w4小組作業. 41123105 自評:65 影片名稱:cd2024_2a_w3_如何將學員倉儲設為分組倉儲的子模組 影片逐字檔 影片逐字檔 41123108 自評:65 完成事項: 分組翻譯解析課程影片時長27分 影片連結 影片字幕中整理出 逐字稿 影片逐字稿 41123119 自評:75 完成事項 1.cd2024_2a_w2_5 如何利用近端可攜環境與外部 IPv4 開啟動態網站的字幕 2.其影片逐字稿 3.為了上傳 影片 檔案 照片等 學習了blog寫法 影片 及 逐字稿 41123123 自評:65 完成事項 1.製作cd2024_2a_w2_4_cd2024_2a_2_odoo_plm簡介 (字幕版本) 2.其影片逐字稿 逐字稿 41123130 自評分數:70 1.將自己的倉儲加入小組成為子模組 2.以 LaTeX 格式分工完成文章的英文與中文翻譯並列資料 3.上一部教學影片字幕 http://229.cycu.org/latex_images_github.7z \">逐字稿 41123145 自評:75 wcm2024_1a_w3_2_將組員的個人倉儲納為分組倉儲的子模組 說明如何將組員的個人倉儲納入分組倉儲成為子模組 影片逐字稿 41123152 自評:75 完成事項 1.製作cd2024_2a_w2_4_利用 Replit 管理 Github Classroom 分組倉儲 (字幕版本)(25:02) 2.其影片逐字稿 3.為了上傳 影片 檔案 照片等 學習了blog寫法 cd2024_2a_w2_4_利用 Replit 管理 Github Classroom 分組倉儲 (字幕版本) 影片逐字稿 2a_w1_video(字幕) 1.如何設定個人倉儲中的 Pelican 網誌 (12:51) 2.簡介 Odoo PLM 用法 (6:45) 2a_w1_word(逐字稿) 1.如何設定個人倉儲中的 Pelican 網誌 (12:51) 2.簡介 Odoo PLM 用法 (6:45) 2a_w2_video(字幕) 1.如何建立各組的 Team midag1 並利用 Codespaces 維護內容 (13:24) 2.利用 Replit 管理 Github Classroom 分組倉儲 (25:02) 3.如何利用近端可攜環境與外部 IPv4 開啟動態網站 (14:18) 2a_w2_word(逐字稿) 1.如何建立各組的 Team midag1 並利用 Codespaces 維護內容 (13:24) 2.利用 Replit 管理 Github Classroom 分組倉儲 (25:02) 3.如何利用近端可攜環境與外部 IPv4 開啟動態網站 (14:18)","tags":"w4","url":"./W4影片翻譯與逐字稿.html"},{"title":"41123119  w3","text":"2024 w3課程. 今完成事項 學習如何改blog 1.複製上一周blog 2.改Title Date Category Slug 內容 3. ./gen_blog 4.git add . 5.git commit -m\" \" 6.git push","tags":"41123119 w3","url":"./41123119-w3.html"},{"title":"W3","text":"W3內容 個人倉儲設為小組的子模組 將個人倉儲納入分組倉儲成為子模組 翻譯文章 41123145負責67-77頁 67-77原文 67-77中文翻譯 67-77中英合併","tags":"w3","url":"./41123145-W3.html"},{"title":"w3","text":"w3課程 將個人倉儲納入分組倉儲的子模組 翻譯所分配到的頁數 page12~22 翻譯","tags":"w3","url":"./41123105_2024-Spring-w3.html"},{"title":"W3","text":"2024/03/08 課程內容(W3) 將個人倉儲設為分組倉儲子模組 使群組內所有成員獲得群組倉儲之權限 群組倉儲連結 期中分組報告 41123108 分配負責頁數為23-33頁 期中分組報告(翻譯) 報告連結","tags":"四設二甲","url":"./W3內容.html"},{"title":"2024 Spring 課程 w3 41123123","text":"2024 Spring 網際內容管理與協同產品設計實習w3課程. 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w3","url":"./2024-Spring-w3-blog-tutorial 41123123.html"},{"title":"41123130-W3課程","text":"第三週 41123130-W3 1.建立小組群組倉儲(https://github.com/mdecd2024/2a-midag2) 2.建立Putty權限(ppk)","tags":"w3","url":"./41123130 W3.html"},{"title":"w3課程 41123152","text":"2024 Spring 網際內容管理與協同產品設計實習課程w3. 今日課程內容 1.建立小組群組倉儲(https://github.com/mdecd2024/2a-midag2) 2.建立Putty權限(ppk)","tags":"w3","url":"./41123152-w3-blog-tutorial-41123152.html"},{"title":"41123119  w2","text":"2024 w2課程. 今完成事項 1.分組 2.建立協同網站 3.replit協同網站github","tags":"41123119 w2","url":"./41123119-w2.html"},{"title":"W2","text":"W2內容 進行分組 老師在teams給的網址加入小組 加入小組連結 加入第二組 第二組 2a-midag2","tags":"w2","url":"./41123145-W2.html"},{"title":"w2","text":"w2課程 加入小組 第二組https://github.com/mdecd2024/2a-midag2","tags":"w2","url":"./41123105_2024-Spring-w2.html"},{"title":"W2","text":"2024/03/01 課程內容(W2) 加入分組2a-midag2 主要利用 Github Classroom 進行協同分組 經由組長建立各組的Team midag，再讓組員自行加入 群組2a-midag2的GitHub連結： 倉儲連結 *組長操作(難)： 1.說明甲班第一組組長如何建立 midag1 Team, 並利用 Codespaces 維護 2a-midag1 分組倉儲 影片網址1 /細節說明(擷取自老師blog)： 由於各分組網站從 Github Classroom 執行配置, 因此該倉儲位於 mdecd2024 帳號下, 雖然各組組員具備對此分組倉儲改版的權限, 但是若將分組倉儲 import 到 Replit, 因為其倉儲擁有者為 mdecd2024, 因此無法從 Replit accoount 項下進行授權, 但是可以利用 ssh-keygen 建立 .ssh 目錄下的 id_rsa 與 id_rsa.pub, 之後除了將公鑰送到 Github 之外, 還需要在 .ssh 目錄中建立 config, 且將倉儲 .git/config 中的 https 協定改為 SSH. 根據上述流程, 可以在 Replit 中以 SSH 模式取得對 Github 帳號下特定倉儲的改版全縣, 只不過 Replit 的免費帳號環境會不定時刪除 /home/runner/.ssh 目錄中的授權資料, 因此若要使用 Replit 維護從 Github Classroom 取得授權的分組倉儲, 必須使用程式方法配置 .ssh 中的 id_rsa 與 config 檔案. 2.學習使用 Replit 管理從 Classroom 取得的分組倉儲 影片說明(不太理解)： * 待各分組的期中報告 Team 與倉儲全部建立就緒後, 則甲班學員後續可配合期末作業名稱 2a2, 由甲班各組組長建立 Team finalag1, finalag2 ....等.(嗯???...) 利用Codespaces維護群組倉儲內容 教學影片： 利用近端可攜系統維護分組網站(待學) 學習使用一二年級所學的維護方式打開 puttty.exe (PuTTY) 操作 影片說明(不太理解)： 乙班-設定網誌 利用 [OBS] 加上廣播系統錄製的-設定個人倉儲中的 Pelican 網誌","tags":"四設二甲","url":"./W2內容.html"},{"title":"2024 Spring 課程 w2 41123123","text":"2024 Spring 網際內容管理與協同產品設計實習w2課程. 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w2","url":"./2024-Spring-w2-blog-tutorial 41123123.html"},{"title":"41123130-W2課程","text":"第二週 41123130-W2 1.創建自己的倉儲(cd2024) 2.創建自己的動靜態並修改內容 3.為了上傳 影片 檔案 照片等 學習了blog寫法 (git add . git commit -m \"\" git push)","tags":"w2","url":"./41123130 W2.html"},{"title":"w2課程 41123152","text":"2024 Spring 網際內容管理與協同產品設計實習課程w2. 今日課程內容 1.創建自己的倉儲(cd2024) 2.創建自己的動靜態並修改內容 3.為了上傳 影片 檔案 照片等 學習了blog寫法 (git add . git commit -m \"\" git push)","tags":"w2","url":"./41123152-w2-blog-tutorial-41123152.html"},{"title":"41123119  w1","text":"2024 w1課程. 建立個人倉儲 任務:個人 cd2024 與分組倉儲的建立及維護. 1. 個人 cd2024 倉儲 2.分組 倉儲 3.建立方法 a.利用 此倉儲 作為 Template b.新增一個名稱為 cd2024 的倉儲 4.維護方法 a.利用Codespaces b.git add . // git commit // git push 等進行維護","tags":"41123119 w1","url":"./41123119-w1.html"},{"title":"W1","text":"W1內容 加入CD2024課程的teams 團隊代碼:p0961sy 建立個人倉儲 倉儲連結 41123145倉儲 建立個人網誌 網誌連結 41123145網誌 建立個人網頁 網頁連結 41123145網頁 建立個人簡報 簡報連結 41123145簡報 心得 新增倉儲，簡報，網頁，網誌，建立Github與Replit和網誌推送，下載可攜程式環境以及其他檔案。","tags":"w1","url":"./41123145-W1.html"},{"title":"w1","text":"w1課程 建立個人倉儲 https://github.com/jyunci01/cd2024 下載可攜套件 下載可攜程式環境: portable_2024.7z (需要密碼, 下載 540MB, 解開壓縮後約 1.8GB) 下載 miktex-portable.7z (需要密碼, 下載 167MB, 解開壓縮檔案後約 1GB) 設定 Github 帳號的雙重認證 說明如何設定 Github 雙重認證, 其中手機必須先安裝 Github Mobile, 也可以使用 Authy App 作為認證套件, 一旦在 Github 帳號下的 Setting 中的 Password and authentication 啟用雙重認證, 最後必須下載對應的 Recovery codes 並存入隨身碟, 而且要寄到個人的電子郵箱. 設定網誌 1.blog 的文檔在 markdown 用pelican套件 轉完後html檔會跑到 blog folder 2.為何可以用pelican? 在init_replit安裝 有安裝 pelican套件和markdown套件 3.有關blog 的 檔案 1. local_publishconf.py 啟動留言 2.pelicanconf.py 共用的 進去需要改相關的設定:AUTHOR=學號 SITENAME=網誌的名稱(協同產絣設計實習 3.publishconf.py 加留言的 進去需要改相關的設定:SITEURL=網誌網址 4.轉檔透過gen_blog 先在shell打入chmod u+x gen_blog才能執行 u:使用者 x:執行 5.page裡要自行更對應正確的網址 網誌前八行的格式不能改變第12行也不行亂改標題大小用#表示:大標#.小標## 轉檔打./gen_blog","tags":"w1","url":"./41123105_2024-Spring-w1.html"},{"title":"W1","text":"2024/02/23 課程內容-W1(摘要) 1.建立個人倉儲 41123108 Github連結 *補充細節(擷取自老師blog)： 登入 github.com, 連結到 https://github.com/mdecycu/cmsimde_site, 利用此倉儲作為 Template, 新增一個名稱為 cd2024 的倉儲, 並且將其 main 分支設為網頁根目錄. https://github.com/mdecycu/cmsimde_site 與 https://github.com/mdecycu/cmsite 的差別為, 目前的 Template 將 cmsimde 當作目錄, 而非 cmsite 中的子模組. 上述建立個人課程 cd2024 倉儲與網站的操作影片, 建立的網站為：https://github.com/41123108/cd2024 2.加入課程cd2024-Teams Team code: p0961sy Teams連結 3.下載可攜套件檔案 下載可攜程式環境: portable_2024.7z (需要密碼, 下載 540MB, 解開壓縮後約 1.8GB) 下載 miktex-portable.7z (需要密碼, 下載 167MB, 解開壓縮檔案後約 1GB) 4.從 Replit Account 設定 Connect 連結到 Github使雙方互相信任 5.靜態更新+推送 將倉儲 import 至 Replit 改版後推回 github 步驟：(1)Edit編輯-(2)更新內容-(3)Save儲存-(4)Convert轉靜態-(5)到Rrpit的Git-(6)簡述更新內容+提交-(7)push推到遠端-(8)Confirm確認推送改版 (remote遠端) 6.建立個人網誌 41123108 網誌連結 7.學習如何編輯/更新網誌 8.設定 Github 帳號的雙重認證 使用 Authy App認證，在Github帳號下的Setting中以Password and authentication啟用雙重認證 說明：手機必須先安裝 Github Mobile, 也可以使用 Authy App 作為認證套件, 一旦在 Github 帳號下的 Setting 中的 Password and authentication 啟用雙重認證, 最後必須下載對應的 Recovery codes 並存入隨身碟, 而且要寄到個人的電子郵箱.","tags":"四設二甲","url":"./W1內容(主題名稱).html"},{"title":"41123130-W1課程","text":"第一週 41123130-W1 建立個人倉儲 https://github.com/41123130/cd2024 下載可攜套件 下載可攜程式環境: portable_2024.7z (需要密碼, 下載 540MB, 解開壓縮後約 1.8GB) 下載 miktex-portable.7z (需要密碼, 下載 167MB, 解開壓縮檔案後約 1GB) 設定 Github 帳號的雙重認證 說明如何設定 Github 雙重認證, 其中手機必須先安裝 Github Mobile, 也可以使用 Authy App 作為認證套件, 一旦在 Github 帳號下的 Setting 中的 Password and authentication 啟用雙重認證, 最後必須下載對應的 Recovery codes 並存入隨身碟, 而且要寄到個人的電子郵箱. 設定網誌 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./41123130 W1.html"},{"title":"w1課程 41123152","text":"2024 Spring 網際內容管理與協同產品設計實習課程w1. 今日課程內容 建立個人倉儲 https://github.com/41123130/cd2024 下載可攜套件 下載可攜程式環境: portable_2024.7z (需要密碼, 下載 540MB, 解開壓縮後約 1.8GB) 下載 miktex-portable.7z (需要密碼, 下載 167MB, 解開壓縮檔案後約 1GB) 設定 Github 帳號的雙重認證 說明如何設定 Github 雙重認證, 其中手機必須先安裝 Github Mobile, 也可以使用 Authy App 作為認證套件, 一旦在 Github 帳號下的 Setting 中的 Password and authentication 啟用雙重認證, 最後必須下載對應的 Recovery codes 並存入隨身碟, 而且要寄到個人的電子郵箱. 設定網誌 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./41123152-w1-blog-tutorial-41123152.html"},{"title":"2024 Spring 課程","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統41123145 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./41123145.html"},{"title":"2024 Spring 課程","text":"2024 Spring 協同產品設計實習 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./41123105_2024-Spring-w1-blog-tutorial.html"},{"title":"2024 Spring 課程","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統08 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./2024-Spring-w1-blog-tutorial.html"},{"title":"2024 Spring 課程 w1 41123123","text":"2024 Spring 網際內容管理與協同產品設計實習w1課程.","tags":"w1","url":"./2024-Spring-w1-blog-tutorial 41123123.html"},{"title":"2A-MIDAG2 W1","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./2a-midag2-w1-blog.html"}]};