for (let i = 0; i <= 50; i++) {
    console.log(`${i}: Cj`);

}

for (let i = 70; i >= 0; i--) {
    console.log(i);
}


for (let i = 1; i <= 20; i++) {
    console.log(i);
}

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {

        console.log(i);
    }
}
for (let i = 1; i <= 7; i++) {
        
        console.log(i * 7);
}

for (let i = 10; i >= 2; i -= 2) {
    console.log(i);
}

for (let i = 1; i <= 10; i += 3) {
    console.log(i);
}


// note
for (
    let i = 1;    // ① Initialization
    i <= 5;       // ② Condition
    i++           // ③ Update
) {
    console.log(i); // ④ Body
}

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);
}


// continue
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        continue;
    }

    console.log(i);
}


for (let i = 1; i <= 10; i++) {
    if (i === 3) {
        continue;
    }

    if (i === 7) {
        break;
    }

    console.log(i);
}