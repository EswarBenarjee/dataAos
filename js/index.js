function add(div, dataAos) {
    let d = document.createElement('div');
    d.setAttribute('data-aos', dataAos);
    d.classList.add('data');
    let t = document.createElement('span');

        let t1 = document.createElement('span');
        t1.classList.add('blueMe');
        t1.textContent = '<div';

        let t2 = document.createElement('span');
        t2.classList.add('lightMe');
        t2.textContent = ' data-aos=';

        let t3 = document.createElement('span');
        t3.classList.add('orangeMe');
        t3.textContent = '"'+dataAos+'"';

        let t4 = document.createElement('span');
        t4.classList.add('blueMe');
        t4.textContent = '>';

        let t5 = document.createElement('span');
        t5.classList.add('blueMe');
        t5.textContent = '</div>';
    
    t.append(t1);
    t.append(t2);
    t.append(t3);
    t.append(t4);
    t.append(t5);

    d.appendChild(t);

    d.setAttribute('onClick', () => {copy(t)})
    document.getElementById(div).appendChild(d);
}

let l = [{'div': 'fade', 'data': ['fade-up', 'fade-down', 'fade-right', 'fade-left', 'fade-up-right', 'fade-up-left', 'fade-down-right', 'fade-down-left']},
         {'div': 'flip', 'data': ['flip-left', 'flip-right', 'flip-up', 'flip-down']},
         {'div': 'zoom', 'data': ['zoom-in', 'zoom-in-up', 'zoom-in-down', 'zoom-in-left', 'zoom-in-right', 'zoom-out', 'zoom-out-up', 'zoom-out-down', 'zoom-out-left', 'zoom-out-right']}
        ];

l.forEach(d => {
    d.data.forEach(data => {
        add(d.div, data);
    });
});

let ele = document.getElementsByClassName('data');
for (let index = 0; index < ele.length; index++) {
    ele[index].addEventListener('click', () => {copy(ele[index].textContent)});
}

function copy(e) {
    navigator.clipboard.writeText(e).then(function() {
        /* clipboard successfully set */
        Swal.fire({
            icon: 'success',
            title: 'Copied',
            text: 'Copied "'+e+'" to Clipboard successfully!'
        })
      }, function() {
        /* clipboard write failed */
        Swal.fire({
            icon: 'error',
            title: 'Not Copied',
            text: 'Error copying "'+e+'" to Clipboard!'
        })
      });
}


/* Footer */

let css = document.getElementById('cdnCss');

let css1 = document.createElement('span');
css1.textContent = '<link  ';
css1.classList.add('blueMe');

let css2 = document.createElement('span');
css2.textContent = 'href=';
css2.classList.add('lightMe');

let css3 = document.createElement('span');
css3.textContent = '"https://unpkg.com/aos@2.3.1/dist/aos.css"';
css3.classList.add('orangeMe');

let css4 = document.createElement('span');
css4.textContent = '  rel=';
css4.classList.add('lightMe');

let css5 = document.createElement('span');
css5.textContent = '"stylesheet"';
css5.classList.add('orangeMe');

let css6 = document.createElement('span');
css6.textContent = '>';
css6.classList.add('blueMe');

css.appendChild(css1);
css.appendChild(css2);
css.appendChild(css3);
css.appendChild(css4);
css.appendChild(css5);
css.appendChild(css6);

let js = document.getElementById('cdnJs');

let js1 = document.createElement('span');
js1.textContent = '<script  ';
js1.classList.add('blueMe');

let js2 = document.createElement('span');
js2.textContent = 'src=';
js2.classList.add('lightMe');

let js3 = document.createElement('span');
js3.textContent = '"https://unpkg.com/aos@2.3.1/dist/aos.js"';
js3.classList.add('orangeMe');

let js4 = document.createElement('span');
js4.textContent = '></script>';
js4.classList.add('blueMe');

js.appendChild(js1);
js.appendChild(js2);
js.appendChild(js3);
js.appendChild(js4);

let initialize = document.getElementById('initialize');

let i1 = document.createElement('span');
i1.textContent = '<script> ';
i1.classList.add('blueMe');

let i2 = document.createElement('span');
i2.textContent = 'AOS.init();';
i2.classList.add('orangeMe');

let i3 = document.createElement('span');
i3.textContent = ' </script>';
i3.classList.add('blueMe');

initialize.appendChild(i1);
initialize.appendChild(i2);
initialize.appendChild(i3);