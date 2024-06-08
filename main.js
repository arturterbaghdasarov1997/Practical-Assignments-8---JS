// Power
function expo(base, exponent, cb){

    if(exponent === 0) return 1;
    return cb(base, expo(base, exponent - 1, cb))
}

const pow1 = expo(5, 3, (num, base) => num * base);
const pow2 = expo(11, 2, (num, base) => num * base);
const pow3 = expo(4, 4, (num, base) => num * base);
const pow4 = expo(12, 2, (num, base) => num * base);

console.log(pow1);
console.log(pow2);
console.log(pow3);
console.log(pow4);

// Fetch
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => {
        const postsContainer = document.getElementById('posts');
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');

            const titleEelement = document.createElement('h2');
            titleEelement.textContent = post.title;
            postElement.appendChild(titleEelement);

            const bodyElement = document.createElement('p');
            bodyElement.textContent = post.body;
            postElement.appendChild(bodyElement);

            postsContainer.appendChild(postElement);
        })
    })
    .catch(err => console.log(err))

    // Asynch deepCopy
    async function deepCopyObject(obj) {
        return new Promise((resolve, reject) => {
          if (typeof obj !== 'object' || obj === null) {
            reject(new Error('Argument must be an object'));
          } else {
            try {
              const copy = JSON.parse(JSON.stringify(obj));
              resolve(copy);
            } catch (error) {
              reject(error);
            }
          }
        });
      }
      
    const originalObj = {
        name: 'Artur',
        lastName: 'Ter-Baghdasarov',
        age: 26,
    };
    
    deepCopyObject(originalObj)
    .then(copy => {
      console.log("Deep copy:", copy);
    })
    .catch(error => {
        console.error("Error:", error.message);
    });

    const originalArray = ["Java", "JavaScript", "React", "Angular", "C", "C#"];

    deepCopyObject(originalArray)
    .then(copy => {
      console.log("Deep copy:", copy);
    })
    .catch(error => {
        console.error("Error:", error.message);
    });

const notAnObj = "Not an object";

    deepCopyObject(notAnObj)
    .then(copy => {
      console.log("Deep copy:", copy);
    })
    .catch(error => {
        console.error("Error:", error.message);
    });