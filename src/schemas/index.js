import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const urlReg = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm

export const basicSchema = yup.object().shape({
  email: yup.string().email("メールアドレスの形式に誤りがあります").required("必須入力項目です"),
  name: yup.string().required("必須入力項目です"),
  tel: yup.string().matches(phoneRegExp, {message: "電話番号の形式に誤りがあります"}).required("必須入力項目です"),
  company: yup.string().required("必須入力項目です"),
  url: yup.string().matches(urlReg, "urlの形式に誤りがあります").required("必須入力項目です"),
  message: yup.string().required("必須入力項目です"),
  agree: yup.bool().oneOf([true], '同意は必須です'),
})