  let person = {
    name:{first:"太郎",last:"独習"},
    age: 18
  };
  console.log(person["age"]);  // 値の取得　＞18

  console.log(person["name"]["last"]); // 値の取得   ＞独習

  person["name"]["last"] = "次郎"; // 値の変更
  person["gender"] = "男"; // プロパティと値の追加
  person["family"] = {wife:"花子", child:"三郎"}; // 他のオブジェクトを追加

  console.log(person["family"]["wife"]);  // 追加したオブジェクトのプロパティを確認   ＞花子
  console.log(person);   // オブジェクトの中身を確認
  // >{age:18, family:{wife:"花子", child:"三郎"},gender:"男",name{first:"太郎",last:"次郎"}}
