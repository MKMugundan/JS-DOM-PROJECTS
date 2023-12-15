let btn = document.querySelector('button');
let quote = document.querySelector('.text-area');
let person = document.querySelector('.person');

const quotes = [
  { quote : `"The best way to find yourself is to lose yourself in the service of others"`,
    person : `Mahatma Gandhi`
  },
  { quote : `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    person : `Albert Einstein` 
  },
  { quote : `"Your Time is limited, so don't waste it living someone else's life"`,
    person : `Steve jobs`
  }
];

btn.addEventListener("click",function()
  {
    let random = Math.floor(Math.random()*quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
  }
);