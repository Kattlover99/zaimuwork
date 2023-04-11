require('dotenv').config();

const nodemailer = require('nodemailer');

exports.handler = function (event, context, callback) {
  const { name, company, email, tel, cmethod, message } = JSON.parse(event.body).payload
    .data;

  // トランスポート
  const transport = {
    host: 'mail71.onamae.ne.jp',
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWORD,
      type: "LOGIN"
    },
  };

  let transporter = nodemailer.createTransport(transport);

  transporter.verify(function (error, success) {
    if (error) {
      console.log("error verifying transporter", error);
    } else {
      console.log('Server is ready to take our messages');
    }
  });

  const url = 'https://tax-trouble.jp/';

  let mailOptions = {
    from: `税務調査トラブル対策機構 <info@tax-trouble.jp>`,
    to: `${email}`,
    subject: '【税務調査トラブル対策機構】お問い合わせありがとうございます',
    text: `${name} 様\n\nこの度は税務調査トラブル対策機構にお問い合わせありがとうございます。\n以下の内容でフォームを送信いたしました。\n数日中に追って担当者よりメールにて回答をお送りいたします。\n今しばらくお待ちください。\n\n------ 送信内容 ------\n【お名前】${name}\n\n【会社名】${company}\n\n【メールアドレス】${email}\n\n【電話番号】${tel}\n\n【ご希望連絡方法】${cmethod}\n\n【お問い合わせ内容】\n${message}\n\n--------------------\n【税務調査トラブル対策機構】\n${url}\n`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      callback(error);
    } else {
      callback(null, {
        statusCode: 200,
        body: 'ok',
      });
    }
  });
};
