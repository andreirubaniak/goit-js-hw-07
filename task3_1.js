let message = '';
const user = {
  age: 20,
  hobby: 'html',
  name: 'Mango',
  premium: true,
};

//Write code under this line
user.mood = 'happy';
const fullTime = 'full time';
user[fullTime] = true;
user.hobby = 'skydiving';
user.premium = false;

const keys = Object.keys(user);
// Write code under this line
for (const key of keys) {
  //   console.log(key);

  message += `${key}: ${user[key]}\n`;
}

console.log(message);
/*
'age : 20
hobby : skydiving
name : Mango
premium : false
mood : happy
"full time" : true
' */
