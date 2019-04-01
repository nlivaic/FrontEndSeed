import '../styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/dist/jquery.min.js'
import * as messages from './messages';


messages.printMe('Hello world!');
messages.printYou('Hello world!');
messages.printThree('Hello world!');

let inputTask = document.querySelector('#inputTask'); 



module.hot.accept();
