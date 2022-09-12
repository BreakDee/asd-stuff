x = 1
f = 0

for (let i = 0; i < 9; i++) {
    x = x + 1
    f = f + 1
    input = document.getElementById("sequenceInput_" + f)
    input.value = x;
    console.log(x)

    
}
