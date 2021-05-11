import {define} from './section'
import {createComponent} from './defer'

define();

const ele = createComponent();
const main = document.getElementById('main')
main?.appendChild(ele)
