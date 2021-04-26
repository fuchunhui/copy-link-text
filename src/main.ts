console.log('123456');

const na = document.createComment('p');
document.body.appendChild(na);
const div = document.createElement('div');
div.innerHTML = '<p>测试文本内容</p>'; 
document.body.appendChild(div);
