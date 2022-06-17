export default class MainUtils {
    
    checkByte(valueText: String){
        const text_val = valueText; //입력한 문자
        const text_len = text_val.length; //입력한 문자수
    
        let totalByte=0;
        for(let i=0; i<text_len; i++){
            const each_char = text_val.charAt(i);
            const uni_char = escape(each_char); //유니코드 형식으로 변환
            if(uni_char.length>4){
                // 한글 : 2Byte
                totalByte += 2;
            }else{
                // 영문,숫자,특수문자 : 1Byte
                totalByte += 1;
            }
        }
        return totalByte;
    }
    
    checkNumber(value: any) {
        const pattern_num = /[0-9]/;	// 숫자 
        const pattern_eng = /[a-zA-Z]/;	// 문자 
        const pattern_spc = /[~!@#$%^&*()_+|<>?:{}]/; // 특수문자
        const pattern_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; // 한글체크

        if( (pattern_num.test(value)) && !(pattern_eng.test(value)) && !(pattern_spc.test(value)) && !(pattern_kor.test(value)) ){
            return true;
        }else{
            alert("숫자만 입력 가능합니다.");
            return false;
        }
    }
};