var e2c = {cat: "貓", dog: "狗", a: "一隻", the: "這隻", chase:"追", eat:"吃"}

function mt() {
  var english = document.getElementById('english')
  var chinese = document.getElementById('chinese')
  var e = english.value.split(/\s+/)
  var c = []
  for (var i=0; i < e.length; i++) {
    c.push(e2c[e[i]])
  }
  chinese.innerText = c.join(' ')
}