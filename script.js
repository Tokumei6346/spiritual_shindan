const TOTAL_STEPS = 10;

const questions = [
    {
        text: "日常を過ごす中で、心に引っかかっている<br><span class='highlight'>本当の違和感</span>はどちらですか？",
        btnA: "頑張っているのに<br><span class='highlight'>時間だけが過ぎていく</span>感覚",
        btnB: "理由もなく<br><span class='highlight'>心が重くモヤモヤする</span>感覚",
        typeA: "action", typeB: "mind"
    },
    {
        text: "朝起きた瞬間に、<br><span class='highlight'>真っ先に思い浮かぶ感覚</span>はどちらに近いですか？",
        btnA: "今日やるべきことへの<br>焦りや追い立てられる感覚",
        btnB: "身体や心がすっきりと目覚めない<br>だるさや重い感覚",
        typeA: "action", typeB: "mind"
    },
    {
        text: "自分の人生が進んでいないと感じるとき、<br><span class='highlight'>心の奥で起きていること</span>はどちらですか？",
        btnA: "今日という日の自分の足あとが<br>どこにも残っていない虚しさ",
        btnB: "頭の中の考えが多すぎて<br>どこへ向かうべきか迷う感覚",
        typeA: "journal", typeB: "notebook"
    },
    {
        text: "直感やアイデアが湧き出やすいのは<br><span class='highlight'>どんな瞬間</span>ですか？",
        btnA: "静かな場所で一人になり<br>手元に集中しているとき",
        btnB: "お風呂や散歩中など<br>リラックスして気分転換しているとき",
        typeA: "notebook", typeB: "incense"
    },
    {
        text: "心が重く感じるとき、<br><span class='highlight'>エネルギーを阻害しているもの</span>はどちらですか？",
        btnA: "言葉にできず内に溜め込んだ<br>自分自身の不完全な感情",
        btnB: "身の回りの空間や他者から<br>無意識に受けている影響",
        typeA: "pen", typeB: "space"
    },
    {
        text: "理想の未来を引き寄せるために、<br><span class='highlight'>今あなたの魂が求めている時間</span>はどちらですか？",
        btnA: "今日という日を丁寧に捉え直し<br>自分の歩みを噛み締める時間",
        btnB: "湧き上がるインスピレーションを<br>自由な形にして解き放つ時間",
        typeA: "journal", typeB: "notebook"
    },
    {
        text: "部屋の中で最も心が落ち着くのは<br><span class='highlight'>どのような状態のとき</span>ですか？",
        btnA: "机の上や身の回りが<br>綺麗に整理整頓されているとき",
        btnB: "心地よい香りや静けさに包まれ<br>空気が澄んでいるとき",
        typeA: "notebook", typeB: "incense"
    },
    {
        text: "溜め込んだ感情を安全に解放し、<br><span class='highlight'>本来の自分に戻る方法</span>はどちらですか？",
        btnA: "自分の手を使って紙の上に<br>感情をそのまま吐き出すこと",
        btnB: "五感を癒やす香りに包まれ<br>場を清らかにリセットすること",
        typeA: "pen", typeB: "incense"
    },
    {
        text: "人との関わりの中で、<br><span class='highlight'>疲れを感じやすい瞬間</span>はどちらですか？",
        btnA: "自分の本当の気持ちを抑えて<br>周囲に合わせてしまうとき",
        btnB: "他人のネガティブな感情や<br>場の雰囲気に影響されるとき",
        typeA: "pen", typeB: "stone"
    },
    {
        text: "ブレない自分軸を取り戻すために、<br><span class='highlight'>魂が求める共鳴</span>はどちらですか？",
        btnA: "自分自身の内側に流れる<br>中心のエネルギーを整える",
        btnB: "住空間全体を浄化し<br>エネルギーの聖域を作る",
        typeA: "stone", typeB: "incense"
    }
];

const results = {
    journal: {
        title: "未来書き換えの啓示",
        text: "人生の停滞感を感じる本当の原因は、脳が『自分を生きた足あと』を認識できていない点にあります。人間の意識は、記録に残さなかった一日を無意識のうちに『なかったもの』として処理してしまいます。<br><br>運命を変える第一歩は、立派な目標を立てることではなく、1日わずか数十秒でも自分と向き合い、今日を生きた証を残すという『自分との契約』を結ぶことです。この小さな儀式が潜在意識のスイッチを入れ、未来を書き換え始めます。",
        desc: "自分自身と向き合う『特別な契約の場』として、日付記入式の日記帳を手元に置くことが運命を変えるトリガーになります。手元に置くという行為そのものが、人生の主導権を取り戻す合図です。",
        affiliateData: {"n":"3年連用日記 扉 茶 -3 YEARS DIARY- 3年日記 ミドリ デザインフィル【☆送料無料☆】 *メール便不可 12395 【PD3000】","b":"","t":"","d":"https:\/\/thumbnail.image.rakuten.co.jp","c_p":"\/@0_mall\/sankyodo\/cabinet\/otona-st","p":["\/3yearsbrown1.jpg","\/3yearsbrown2.jpg","\/3y-2.jpg"],"u":{"u":"https:\/\/item.rakuten.co.jp\/sankyodo\/12395006\/","t":"rakuten","r_v":""},"v":"2.1","b_l":[{"id":1,"u_tx":"楽天市場で見る","u_bc":"#f76956","u_url":"https:\/\/item.rakuten.co.jp\/sankyodo\/12395006\/","a_id":5810134,"p_id":54,"pl_id":27059,"pc_id":54,"s_n":"rakuten","u_so":1},{"id":2,"u_tx":"Yahoo!ショッピングで見る","u_bc":"#66a7ff","u_url":"https:\/\/shopping.yahoo.co.jp\/search?first=1\u0026p=3%E5%B9%B4%E9%80%A3%E7%94%A8%E6%97%A5%E8%A8%98%E3%80%80%E6%89%89%E3%80%80%E8%8C%B6%E3%80%80-3%20YEARS%20DIARY-%203%E5%B9%B4%E6%97%A5%E8%A8%98%20%E3%83%9F%E3%83%89%E3%83%AA%E3%80%80%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%83%95%E3%82%A3%E3%83%AB%E3%80%9【%E2%98%86%E9%80%81%E6%96%99%E7%84%A1%E6%96%99%E2%98%86%E3%80%91%E3%80%80*%E3%83%A1%E3%83%BC%E3%83%AB%E4%BE%BF%E4%B8%8D%E5%8F%AF%E3%80%8012395%E3%80%80%E3%80%9【PD3000%E3%80%91","a_id":5810130,"p_id":1225,"pl_id":27061,"pc_id":1925,"s_n":"yahoo","u_so":2}],"eid":"jKns5","s":"s"}
    },
    notebook: {
        title: "思考可視化の啓示",
        text: "頭の中に溢れるアイデアや焦りが形にならない理由は、脳内のメモリが常に満杯だからです。思考が頭の中に留まっている限り、それは単なる『モヤモヤした重荷』として運気を停滞させます。<br><br>自分の外側へ書き出すという行為は、脳のスペースを解放し、直感と引き寄せのスペースを作る作業です。思考を紙の上に解き放つことで、今まで見落としていた本当の選択肢が見えてきます。",
        desc: "思考を制限なく受け止めてくれる重厚なハードカバーノートは、あなたの頭の中をクリアにし、理想の未来を具体化するための『思考のグラウンディングツール』として機能します。",
        affiliateData: {"n":"《全16色》LEUCHTTURM1917 A5ミディアム 横罫 ハードカバーノート 【ロイヒトトゥルム 手帳 メモ帳 日記 記録 ドイツ 通勤 通学 出張 レフィル ステーショナリー 文房具 万年筆】2509ss","b":"","t":"","d":"https:\/\/thumbnail.image.rakuten.co.jp","c_p":"\/@0_mall\/actplus\/cabinet\/leuchtturm","p":["\/lhta540101.jpg","\/lhta540102.jpg","\/lhta50101.jpg"],"u":{"u":"https:\/\/item.rakuten.co.jp\/actplus\/2007376\/","t":"rakuten","r_v":""},"v":"2.1","b_l":[{"id":1,"u_tx":"楽天市場で見る","u_bc":"#f76956","u_url":"https:\/\/item.rakuten.co.jp\/actplus\/2007376\/","a_id":5810134,"p_id":54,"pl_id":27059,"pc_id":54,"s_n":"rakuten","u_so":1},{"id":2,"u_tx":"Yahoo!ショッピングで見る","u_bc":"#66a7ff","u_url":"https:\/\/shopping.yahoo.co.jp\/search?first=1\u0026p=%E3%80%8A%E5%85%A816%E8%89%B2%E3%80%8BLEUCHTTURM1917%20A5%E3%83%9F%E3%83%87%E3%82%A3%E3%82%A2%E3%83%A0%20%E6%A8%AA%E7%BD%AB%20%E3%83%8F%E3%83%BC%E3%83%89%E3%82%AB%E3%83%90%E3%83%BC%E3%83%8E%E3%83%BC%E3%83%88%20%E3%80%9【%E3%83%AD%E3%82%A4%E3%83%92%E3%83%88%E3%83%88%E3%82%A5%E3%83%AB%E3%83%A0%20%E6%89%8B%E5%B8%B3%20%E3%83%A1%E3%83%A2%E5%B8%B3%20%E6%97%A5%E8%A8%98%20%E8%A8%98%E9%8C%B2%20%E3%83%89%E3%82%A4%E3%83%84%20%E9%80%9A%E5%8B%A4%20%E9%80%9A%E5%AD%A6%20%E5%87%BA%E5%BC%B5%20%E3%83%AC%E3%83%95%E3%82%A3%E3%83%AB%20%E3%82%B9%E3%83%86%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%8A%E3%83%AA%E3%83%BC%20%E6%96%87%E6%88%BF%E5%85%B7%20%E4%B8%87%E5%B9%B4%E7%AD%86%E3%80%912509ss","a_id":5810130,"p_id":1225,"pl_id":27061,"pc_id":1925,"s_n":"yahoo","u_so":2}],"eid":"mTzOo","s":"s"}
    },
    pen: {
        title: "感情解放の啓示",
        text: "理由のない疲労感や停滞感の正体は、日常の中で飲み込んできた『言葉にできなかった感情の澱』です。感情はエネルギーであり、発散されないまま留まると運気の流れを阻害します。<br><br>デジタルデバイスへの入力ではなく、手を使って紙に書き出す行為こそが、内面の滞りを物理的に外部へ排出する最も強力なデトックスになります。",
        desc: "溢れる感情や思考をそのまま解き放ち、書き留めるための上質なノートを用意しましょう。夜の静寂の中で文字を刻む体験そのものが、心を解放するスイッチになります。",
        affiliateData: {"n":"《全16色》LEUCHTTURM1917 A5ミディアム 横罫 ハードカバーノート 【ロイヒトトゥルム 手帳 メモ帳 日記 記録 ドイツ 通勤 通学 出張 レフィル ステーショナリー 文房具 万年筆】2509ss","b":"","t":"","d":"https:\/\/thumbnail.image.rakuten.co.jp","c_p":"\/@0_mall\/actplus\/cabinet\/leuchtturm","p":["\/lhta540101.jpg","\/lhta540102.jpg","\/lhta50101.jpg"],"u":{"u":"https:\/\/item.rakuten.co.jp\/actplus\/2007376\/","t":"rakuten","r_v":""},"v":"2.1","b_l":[{"id":1,"u_tx":"楽天市場で見る","u_bc":"#f76956","u_url":"https:\/\/item.rakuten.co.jp\/actplus\/2007376\/","a_id":5810134,"p_id":54,"pl_id":27059,"pc_id":54,"s_n":"rakuten","u_so":1},{"id":2,"u_tx":"Yahoo!ショッピングで見る","u_bc":"#66a7ff","u_url":"https:\/\/shopping.yahoo.co.jp\/search?first=1\u0026p=%E3%80%8A%E5%85%A816%E8%89%B2%E3%80%8BLEUCHTTURM1917%20A5%E3%83%9F%E3%83%87%E3%82%A3%E3%82%A2%E3%83%A0%20%E6%A8%AA%E7%BD%AB%20%E3%83%8F%E3%83%BC%E3%83%89%E3%82%AB%E3%83%90%E3%83%BC%E3%83%8E%E3%83%BC%E3%83%88%20%E3%80%9【%E3%83%AD%E3%82%A4%E3%83%92%E3%83%88%E3%83%88%E3%82%A5%E3%83%AB%E3%83%A0%20%E6%89%8B%E5%B8%B3%20%E3%83%A1%E3%83%A2%E5%B8%B3%20%E6%97%A5%E8%A8%98%20%E8%A8%98%E9%8C%B2%20%E3%83%89%E3%82%A4%E3%83%84%20%E9%80%9A%E5%8B%A4%20%E9%80%9A%E5%AD%A6%20%E5%87%BA%E5%BC%B5%20%E3%83%AC%E3%83%95%E3%82%A3%E3%83%AB%20%E3%82%B9%E3%83%86%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%8A%E3%83%AA%E3%83%BC%20%E6%96%87%E6%88%BF%E5%85%B7%20%E4%B8%87%E5%B9%B4%E7%AD%86%E3%80%912509ss","a_id":5810130,"p_id":1225,"pl_id":27061,"pc_id":1925,"s_n":"yahoo","u_so":2}],"eid":"mTzOo","s":"s"}
    },
    incense: {
        title: "空間浄化の啓示",
        text: "どれほど前向きになろうとしても気持ちが沈んでしまう場合、原因はあなた自身ではなく『あなたが過ごしている場の波動』にある可能性が高いです。空間には、日々のストレスや過去の感情の残像が溜まります。<br><br>場を整えずに努力を重ねることは、濁った水の中で必死に泳ぐようなものです。まず空間を清め、心が自然と安らぐ環境を作ることが、波動を跳ね上げる絶対条件となります。",
        desc: "天然のホワイトセージやお香の煙は、空間の重い波動を瞬時に分解します。お部屋に香りをくゆらせる数分間を、あなたの日常を聖域化する準備として取り入れてみてください。",
        affiliateData: {"n":"お香40種類から7種類選べるお香セット HEM 1箱20本入り合計140本送料無料 ポスト投函 他商品同梱不可です でお送りします スティック インセンス アジアン雑貨 ポッキリ インド香 お香立て お香たて お試しの香り 白檀 コーン香 アロマ 宅配便ご選択時は送料無料にはなりません。","b":"","t":"","d":"https:\/\/thumbnail.image.rakuten.co.jp","c_p":"\/@0_mall\/happyhour\/cabinet\/05548106\/05548109","p":["\/199.jpg","\/imgrc0098635543.jpg","\/5416.jpg"],"u":{"u":"https:\/\/item.rakuten.co.jp\/happyhour\/10008494\/","t":"rakuten","r_v":""},"v":"2.1","b_l":[{"id":1,"u_tx":"楽天市場で見る","u_bc":"#f76956","u_url":"https:\/\/item.rakuten.co.jp\/happyhour\/10008494\/","a_id":5810134,"p_id":54,"pl_id":27059,"pc_id":54,"s_n":"rakuten","u_so":1},{"id":2,"u_tx":"Yahoo!ショッピングで見る","u_bc":"#66a7ff","u_url":"https:\/\/shopping.yahoo.co.jp\/search?first=1\u0026p=%E3%81%8A%E9%A6%9940%E7%A8%AE%E9%A1%9E%E3%81%8B%E3%82%897%E7%A8%AE%E9%A1%9E%E9%81%B8%E3%81%B9%E3%82%8B%E3%81%8A%E9%A6%99%E3%82%BB%E3%83%83%E3%83%88%20HEM%201%E7%AE%B120%E6%9C%AC%E5%85%A5%E3%82%8A%E5%90%88%E8%A8%88140%E6%9C%AC%E9%80%81%E6%96%99%E7%84%A1%E6%96%99%20%E3%83%9D%E3%82%B9%E3%83%88%E6%8A%95%E5%87%BD%20%E4%BB%96%E5%95%86%E5%93%81%E5%90%8C%E6%A2%B1%E4%B8%8D%E5%8F%AF%E3%81%A7%E3%81%99%20%E3%81%A7%E3%81%8A%E9%80%81%E3%82%8A%E3%81%97%E3%81%BE%E3%81%99%20%E3%82%B9%E3%83%86%E3%82%A3%E3%83%83%E3%82%AF%20%E3%82%A4%E3%83%B3%E3%82%BB%E3%83%B3%E3%82%B9%20%E3%82%A2%E3%82%B8%E3%82%A2%E3%83%B3%E9%9B%91%E8%B2%A8%20%E3%83%9D%E3%83%83%E3%82%AD%E3%83%AA%20%E3%82%A4%E3%83%B3%E3%83%89%E9%A6%99%20%E3%81%8A%E9%A6%99%E7%AB%8B%E3%81%A6%20%E3%81%8A%E9%A6%99%E1%81%9F%E3%81%A6%20%E3%81%8A%E8%A9%A6%E3%81%97%20%E7%99%BD%E6%AA%80%20%E3%82%B3%E3%83%BC%E3%83%B3%E9%A6%99%20%E3%82%A2%E3%82%BD%E3%83%9E%20%E5%AE%85%E9%85%8D%E4%BE%BF%E3%81%94%E9%81%B8%E6%8A%9E%E6%99%82%E3%81%AF%E9%80%81%E6%96%99%E7%84%A1%E6%96%99%E3%81%AB%E3%81%AF%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%9B%E3%82%93%E3%80%82","a_id":5810130,"p_id":1225,"pl_id":27061,"pc_id":1925,"s_n":"yahoo","u_so":2}],"eid":"XO0yd","s":"s"}
    },
    stone: {
        title: "波動調整の啓示",
        text: "あなたの直感力や引き寄せの力が弱まっていると感じるとき、エネルギーの軸が外側の環境や他人に引っ張られてブレています。自分軸が揺らぐと、チャンスが訪れても掴み取ることができません。<br><br>地球が果てしない時間をかけて育んだ天然鉱物は、常に変わらない固有の安定した振動数を持っています。その安定した波長に触れることで、乱れたあなたのエネルギーが共鳴し、本来の軸へと戻っていきます。",
        desc: "自然のエネルギーを秘めたパワーストーンは、ブレやすい日常の中で自分軸を思い出させるアンカーとなります。お守りとして身につけ、本来の強さを呼び醒ましましょう。",
        affiliateData: {"n":"【50%OFFクーポン配布中】 パワーストーン ブレスレット メンズ 天然石 【 鑑定ブレス 】 ラピスラズリ オニキス 天眼石 強運 成功 ブレス 誕生石 | アクセサリー 厄除け 魔除け 開運 メンズ アクセ 金運 誕生日 浄化 プレゼント 男性 女性 ゴム I WISH","b":"","t":"","d":"https:\/\/thumbnail.image.rakuten.co.jp","c_p":"\/@0_mall\/i-wish\/cabinet\/bracelet13","p":["\/1104051748.jpg","\/1104051748rank.jpg","\/1104051748a.jpg"],"u":{"u":"https:\/\/item.rakuten.co.jp\/i-wish\/1104051748\/","t":"rakuten","r_v":""},"v":"2.1","b_l":[{"id":1,"u_tx":"楽天市場で見る","u_bc":"#f76956","u_url":"https:\/\/item.rakuten.co.jp\/i-wish\/1104051748\/","a_id":5810134,"p_id":54,"pl_id":27059,"pc_id":54,"s_n":"rakuten","u_so":1},{"id":2,"u_tx":"Yahoo!ショッピングで見る","u_bc":"#66a7ff","u_url":"https:\/\/shopping.yahoo.co.jp\/search?first=1\u0026p=%E3%80%9【50%25OFF%E3%82%AF%E3%83%BC%E3%83%9D%E3%83%B3%E9%85%8D%E5%B8%83%E4%B8%AD%E3%80%91%20%E3%83%91%E3%83%AF%E3%83%BC%E3%82%B9%E3%83%88%E3%83%BC%E3%83%B3%20%E3%83%96%E3%83%AC%E3%82%B9%E3%83%AC%E3%83%83%E3%83%88%20%E3%83%A1%E3%83%B3%E3%82%BA%20%E5%A4%A9%E7%84%B6%E7%9F%B3%20%E3%80%9【%20%E9%91%91%E5%AE%9A%E3%83%96%E3%83%AC%E3%82%B9%20%E3%80%9】%20%E3%83%A1%E3%83%94%E3%82%B9%E3%83%A9%E3%82%BA%E3%83%AA%20%E3%82%AA%E3%83%8B%E3%82%AD%E3%82%B9%20%E5%A4%A9%E7%84%B6%E7%9F%B3%20%E5%BC%B7%E9%81%8B%20%E6%88%90%E5%8A%9F%20%E3%83%96%E3%83%AC%E3%82%B9%20%E8%AA%95%E7%94%9F%E7%9F%B3%20%7C%20%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B5%E3%83%AA%E3%83%BC%20%E5%8E%84%E9%99%A4%E3%81%91%20%E9%AD%94%E9%99%A4%E3%81%91%20%E9%96%8B%E9%81%8B%20%E3%83%A1%E3%83%B3%E3%82%BA%20%E3%82%A2%E3%82%AF%E3%82%BB%20%E9%87%91%E9%81%8B%20%E8%AA%95%E7%94%9F%E6%97%A5%20%E6%B5%84%E5%8C%96%20%E3%83%97%E3%83%AC%E3%82%BC%E3%83%B3%E3%83%88%20%E7%94%B7%E6%80%A7%20%E5%A5%B3%E6%80%A7%20%E3%82%B4%E3%83%A0%20I%20WISH","a_id":5810130,"p_id":1225,"pl_id":27061,"pc_id":1925,"s_n":"yahoo","u_so":2}],"eid":"sOykM","s":"s"}
    }
};

let currentStepIndex = 0;
const scores = {
    journal: 0,
    notebook: 0,
    pen: 0,
    incense: 0,
    stone: 0
};

function startQuiz() {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    renderQuestion();
}

function renderQuestion() {
    const q = questions[currentStepIndex];
    document.getElementById('question-num').textContent = `質問 ${currentStepIndex + 1} / ${TOTAL_STEPS}`;
    document.getElementById('question-text').innerHTML = q.text;
    document.getElementById('btn-a').innerHTML = q.btnA;
    document.getElementById('btn-b').innerHTML = q.btnB;
    updateStars();
}

function updateStars() {
    const stars = document.querySelectorAll('#stars-container .star');
    stars.forEach((star, index) => {
        if (index <= currentStepIndex) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

function nextQuestion(choice) {
    const q = questions[currentStepIndex];
    const selectedType = choice === 'A' ? q.typeA : q.typeB;

    if (scores.hasOwnProperty(selectedType)) {
        scores[selectedType]++;
    }

    currentStepIndex++;

    if (currentStepIndex >= TOTAL_STEPS) {
        calculateAndShowResult();
    } else {
        renderQuestion();
    }
}

function calculateAndShowResult() {
    let maxScore = -1;
    let finalResultKey = "journal";

    for (const [key, value] of Object.entries(scores)) {
        if (value > maxScore) {
            maxScore = value;
            finalResultKey = key;
        }
    }

    showResult(finalResultKey);
}

function showResult(resKey) {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');

    const resData = results[resKey];
    document.getElementById('result-type').textContent = resData.title;
    document.getElementById('result-text').innerHTML = resData.text;
    document.getElementById('recommend-desc').textContent = resData.desc;

    const targetContainer = document.getElementById('affiliate-target');
    const linkId = "msmaflink-" + resData.affiliateData.eid;
    
    targetContainer.innerHTML = `<div id="${linkId}"></div>`;

    // もしもアフィリエイトの実行キュー初期化
    window.MsiLeadObject = "msmaflink";
    window.msmaflink = window.msmaflink || function() {
        (window.msmaflink.q = window.msmaflink.q || []).push(arguments);
    };
    window.msmaflink.l = 1 * new Date();

    // データの登録
    window.msmaflink(resData.affiliateData);

    // スクリプトの動的読み込み
    const oldScript = document.getElementById('msm-bundle-script');
    if (oldScript) {
        oldScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'msm-bundle-script';
    script.src = "//dn.msmstatic.com/site/cardlink/bundle.js?20220329";
    script.async = true;
    document.body.appendChild(script);
}
