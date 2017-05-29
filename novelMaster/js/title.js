//�^�C�g���V�[���̃L�����I��
//charaID = �L�����ԍ�
function CharaSelect(charaID){

    var charaName = "";

    switch (charaID) {
        case 0:
          charaName = "トンプ";
          break;
        case 1:
          charaName = "アンソ";
          break;
        case 2:
          charaName = "キンム";
          break;
        default:
          break;
      }

      //���̃L�����ł������m�F
      ret = confirm(charaName + "でゲームを始めますか？");

      //OK�������ꂽ���y�[�W�ړ�
      if(ret == true){
        location.href = "index.html?" + charaID;
      }

  }
