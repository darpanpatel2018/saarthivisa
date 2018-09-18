const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
var port = process.env.PORT || 3000;
const nodemailer = require('nodemailer');



const app = express();
app.listen(process.env.PORT || 3000 );
// View engine setup
//app.engine('handlebars', exphbs());
//app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
var conso = require('consolidate');
app.engine('html', conso.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('index');
  console.log("Server Started :: index");
});



app.get('/contact', (req, res) => {
  res.render('contact');
  console.log("Server Started :: Contact");
});


app.get('/mbbs', (req, res) => {
  res.render('mbbs');
  console.log("Server Started :: MBBS");
});


app.get('/nurses', (req, res) => {
  res.render('nurses');
  console.log("Server Started :: Nurses");
});

//////////////----WORK----/////////////////////

app.get('/au-work', (req, res) => {
  res.render('work/au');
  console.log("Server Started :: Au - Work");
});
app.get('/ir-work', (req, res) => {
  res.render('work/ir');
  console.log("Server Started :: Ir - Work");
});
app.get('/po-work', (req, res) => {
  res.render('work/po');
  console.log("Server Started :: Po - Work");
});
app.get('/uk-work', (req, res) => {
  res.render('work/uk');
  console.log("Server Started :: uk - Work");
});

//////////////---INVEST----/////////////////////

app.get('/uk-invest', (req, res) => {
  res.render('invest/uk');
  console.log("Server Started :: uk - invest");
});
app.get('/st-invest', (req, res) => {
  res.render('invest/st');
  console.log("Server Started :: st - invest");
});
app.get('/spain-invest', (req, res) => {
  res.render('invest/spain');
  console.log("Server Started :: uk - invest");
});
app.get('/malta-invest', (req, res) => {
  res.render('invest/malta');
  console.log("Server Started :: malta - invest");
});
app.get('/hungary-invest', (req, res) => {
  res.render('invest/hungary');
  console.log("Server Started :: hungary - invest");
});
app.get('/grenada-invest', (req, res) => {
  res.render('invest/grenada');
  console.log("Server Started :: grenada - invest");
});
app.get('/greece-invest', (req, res) => {
  res.render('invest/greece');
  console.log("Server Started :: greece - invest");
});
app.get('/cyprus-invest', (req, res) => {
  res.render('invest/cyprus');
  console.log("Server Started :: cyprus - invest");
});
app.get('/bulgaria-invest', (req, res) => {
  res.render('invest/bulgaria');
  console.log("Server Started :: bulgaria - invest");
});
app.get('/antigua-invest', (req, res) => {
  res.render('invest/antigua');
  console.log("Server Started :: antigua - invest");
});

//////////////----MIGRATE----/////////////////////

app.get('/au-mi', (req, res) => {
  res.render('mig/au');
  console.log("Server Started :: au - MIGRATE");
});

app.get('/ca-mi', (req, res) => {
  res.render('mig/ca');
  console.log("Server Started :: ca - MIGRATE");
});
app.get('/new-mi', (req, res) => {
  res.render('mig/new');
  console.log("Server Started :: new - MIGRATE");
});

//////////////----STUDY----/////////////////////

app.get('/australia-s', (req, res) => {
  res.render('study/australia');
  console.log("Server Started :: australia - study");
});
app.get('/austria-s', (req, res) => {
  res.render('study/austria');
  console.log("Server Started :: austria - study");
});
app.get('/belgium-s', (req, res) => {
  res.render('study/belgium');
  console.log("Server Started :: belgium - study");
});
app.get('/bulgaria-s', (req, res) => {
  res.render('study/bulgaria');
  console.log("Server Started :: bulgaria - study");
});
app.get('/canada-s', (req, res) => {
  res.render('study/canada');
  console.log("Server Started :: canada - study");
});
app.get('/china-s', (req, res) => {
  res.render('study/china');
  console.log("Server Started :: china - study");
});
app.get('/cyprus-s', (req, res) => {
  res.render('study/cyprus');
  console.log("Server Started :: cyprus - study");
});
app.get('/czech-s', (req, res) => {
  res.render('study/czech');
  console.log("Server Started :: czech - study");
});
app.get('/dominica-s', (req, res) => {
  res.render('study/dominica');
  console.log("Server Started :: dominica - study");
});
app.get('/france-s', (req, res) => {
  res.render('study/france');
  console.log("Server Started :: france - study");
});
app.get('/georgia-s', (req, res) => {
  res.render('study/georgia');
  console.log("Server Started :: georgia - study");
});
app.get('/germany-s', (req, res) => {
  res.render('study/germany');
  console.log("Server Started :: germany - study");
});
app.get('/greece-s', (req, res) => {
  res.render('study/greece');
  console.log("Server Started :: greece - study");
});
app.get('/hungary-s', (req, res) => {
  res.render('study/hungary');
  console.log("Server Started :: hungary - study");
});
app.get('/ireland-s', (req, res) => {
  res.render('study/ireland');
  console.log("Server Started :: ireland - study");
});
app.get('/italy-s', (req, res) => {
  res.render('study/italy');
  console.log("Server Started :: italy - study");
});
app.get('/latvia-s', (req, res) => {
  res.render('study/latvia');
  console.log("Server Started :: latvia - study");
});
app.get('/lithuania-s', (req, res) => {
  res.render('study/lithuania');
  console.log("Server Started :: lithuania - study");
});
app.get('/malaysia-s', (req, res) => {
  res.render('study/malaysia');
  console.log("Server Started :: malaysia - study");
});
app.get('/newzealand-s', (req, res) => {
  res.render('study/newzealand');
  console.log("Server Started :: newzealand - study");
});
app.get('/netherland-s', (req, res) => {
  res.render('study/netherland');
  console.log("Server Started :: netherland - study");
});
app.get('/norway-s', (req, res) => {
  res.render('study/norway');
  console.log("Server Started :: norway - study");
});
app.get('/philippines-s', (req, res) => {
  res.render('study/philippines');
  console.log("Server Started :: philippines - study");
});
app.get('/portugal-s', (req, res) => {
  res.render('study/portugal');
  console.log("Server Started :: portugal - study");
});
app.get('/russia-s', (req, res) => {
  res.render('study/russia');
  console.log("Server Started :: russia - study");
});
app.get('/singapore-s', (req, res) => {
  res.render('study/singapore');
  console.log("Server Started :: singapore - study");
});
app.get('/spain-s', (req, res) => {
  res.render('study/spain');
  console.log("Server Started :: spain - study");
});
app.get('/sweden-s', (req, res) => {
  res.render('study/sweden');
  console.log("Server Started :: sweden - study");
});
app.get('/switzerland-s', (req, res) => {
  res.render('study/switzerland');
  console.log("Server Started :: switzerland - study");
});
app.get('/uk-s', (req, res) => {
  res.render('study/uk');
  console.log("Server Started :: uk - study");
});
app.get('/ukraine-s', (req, res) => {
  res.render('study/ukraine');
  console.log("Server Started :: ukraine - study");
});
app.get('/us-s', (req, res) => {
  res.render('study/us');
  console.log("Server Started :: us - study");
});

app.post('/send', (req, res) => {
  const output = `
    <p>Saarthi Visa</p>
    <h3>New Entry</h3>
    <ul>  
      <li>Name: ${req.body.name}  ${req.body.sec}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
      <li> Intrest : ${req.body.chk}</li>
    </ul>
   
  `;
  // create reusable transporter object using the default SMTP transport
  
  let transporter = nodemailer.createTransport({
    service: 'SendGrid',
   // host: 'smtp.sendgrid.net',
   // port:  465,
   // secure: false, // true for 465, false for other ports
   auth: {
    user: 'pratik8575', // generated ethereal user
    pass: 'APPLE33a'  // generated ethereal password
}
  });
  // setup email data with unicode symbols
  let mailOptions = {
      from: '"Saarthi Visa" <web@saarthivisa.com>', // sender address
      to: 'info@saarthivisa.com, hitarth,gor@saarthivisa.com, s.viralbp@itmvu.in' , // list of receivers
      subject: 'Saarthi Visa | New Entry', // Subject line
      text: 'Hello world?', // plain text body
      html: output // html body
  };
  // send mail with defined transport object
  transporter.sendMail(mailOptions,(error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      res.render('index', {msg:'Email has been sent'});
  });
  }); 