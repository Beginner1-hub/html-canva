/******** CALLBACK CALCULATOR ********/
const callbackOutput = document.getElementById('callback-output');

function myDisplay(text) {
    callbackOutput.textContent += text + '\n';
}

function sayHello(callback) {
    setTimeout(() => {
        myDisplay("Hello");
        if (callback) callback();
    }, 1000);
}

function calculator(a, b, callback) {
    setTimeout(() => {
        let result = a + b;
        myDisplay("Sum: " + result);
        if (callback) callback();
    }, 2000);
}

function sayGoodBye(callback) {
    setTimeout(() => {
        myDisplay("Good Bye");
        if (callback) callback();
    }, 1000);
}

document.getElementById('start-callback').addEventListener('click', () => {
    callbackOutput.textContent = ""; // clear output
    sayHello(() => {
        calculator(5, 7, () => {
            sayGoodBye();
        });
    });
});

/******** PROMISE EXAMPLE ********/
const promiseOutput = document.getElementById('promise-output');

document.getElementById('promise-btn').addEventListener('click', () => {
    promiseOutput.className = "pending";
    promiseOutput.textContent = "";

    const myPromise = new Promise((resolve, reject) => {
        const ok = Math.random() > 0.5;
        const msg = ok ? "Success!" : "Failure!";
        setTimeout(() => { ok ? resolve(msg) : reject(msg); }, 1000);
    });

    myPromise
        .then(result => {
            promiseOutput.className = "resolved";
            promiseOutput.textContent = result;
        })
        .catch(error => {
            promiseOutput.className = "rejected";
            promiseOutput.textContent = error;
        });
});

/******** ASYNC/AWAIT DEMO ********/
async function getJSON(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data.result || data.results;
}

async function loadItems(url) {
    const data = await getJSON(url);
    return data.map(item => {
        const span = document.createElement('span');
        span.textContent = item.name || item.description;
        span.style.display = "block";
        return span;
    });
}

async function initDemo() {
    const demo = document.getElementById('demo-async');
    const demoOutput = document.createElement('output');
    demoOutput.classList.add('allow-empty');
    demo.append(demoOutput);

    const index = await getJSON('https://www.swapi.tech/api/');

    for (const key in index) {
        const btn = document.createElement('button');
        btn.textContent = key;
        btn.addEventListener('click', async () => {
            demoOutput.textContent = "";
            demoOutput.append(...await loadItems(index[key]));
        });
        demo.append(btn);
    }
}

initDemo();
async function getJSON(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data.result || data.results;
}

async function loadItems(url) {
    const data = await getJSON(url);
    return data.map(item => {
        const span = document.createElement('span');
        span.textContent = item.name || item.description;
        return span;
    });
}

const demo = document.querySelector('#demo-async');
const index = await getJSON('https://www.swapi.tech/api/');

for(const key in index) {
    const btn = document.createElement('button');
    btn.textContent = key;
    btn.addEventListener('click', async ev => {
        output.classList.remove('allow-empty');
        while(output.firstChild) { output.lastChild.remove(); }
        output.append(...await loadItems(index[key]));
    });
    demo.append(btn);
}

const output = document.createElement('output');
output.classList.add('allow-empty');
demo.append(output);
