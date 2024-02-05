const students = [
    {name: "Протоиерей", age: 17, serial: 1488, group: "ИС-2-2"},
    {name: "Мефодий", age: 18, serial: 1488, group: "ИС-2-2"},
    {name: "Бонифаций", age: 17, serial: 1488, group: "ИС-2-2"},
    {name: "Всеволод", age: 17, serial: 1488, group: "ИС-2-2"},
    {name: "Добрыня", age: 17, serial: 1488, group: "ИС-2-2"},
    {name: "Владыка", age: 18, serial: 1488, group: "ИС-2-2"}
]

let studentIndex = 4;
let studentName = students[studentIndex]["name"]
let studentAge = students[studentIndex]["age"]

if (studentAge  < 18 ) {
console.log(`Студенту ${studentName} меньше 18 лет.`)
} else {
    console.log(`Студенту ${studentName} меньше 18 лет. Ему ${studentAge} лет.`)
}