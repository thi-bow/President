//タイトルシーンのキャラ選択
//charaID = キャラ番号
function CharaSelect(charaID){

    var charaName = "";

    switch (charaID) {
        case 0:
          charaName = "太郎君";
          break;
        case 1:
          charaName = "花子さん";
          break;
        case 2:
          charaName = "イチロー";
          break;
        default:
          break;
      }

      //このキャラでいいか確認
      ret = confirm(charaName + "でよろしいですか？");

      //OKが押されたらページ移動
      if(ret == true){
        location.href = "./sampletest.html?" + charaID;
      }

  }
