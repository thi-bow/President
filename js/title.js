//�^�C�g���V�[���̃L�����I��
//charaID = �L�����ԍ�
function CharaSelect(charaID){

    var charaName = "";

    switch (charaID) {
        case 0:
          charaName = "���Y�N";
          break;
        case 1:
          charaName = "�Ԏq����";
          break;
        case 2:
          charaName = "�C�`���[";
          break;
        default:
          break;
      }

      //���̃L�����ł������m�F
      ret = confirm(charaName + "�ł�낵���ł����H");

      //OK�������ꂽ��y�[�W�ړ�
      if(ret == true){
        location.href = "./sampletest.html?" + charaID;
      }

  }
