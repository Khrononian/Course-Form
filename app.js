// Variables
const customerInput = document.querySelector(".customer")
const courseInput = document.querySelector(".course");
const authorInput = document.querySelector(".author");
const formValues = document.querySelector(".submit");

// Event Listeners
formValues.addEventListener("click", submitValues);


// Functions
const courses = () => {
    const customer = customerInput.value;
    const course = courseInput.value;
    const author = authorInput.value;
    
    const formulate = () => {
        const div = document.createElement("div");
        document.querySelector(".contain-courses").appendChild(div)
        div.className = "card"
        const img = document.createElement("img");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");

        div.appendChild(img);
        img.className = "imgs"
        img.src = "https://js-beginners.github.io/course-form-oop-project/img/cust-0.jpg" // Add an array for these images
        div.appendChild(p1)
        p1.className = "name title"
        p1.innerText = `Name: ${customer}`;
        div.appendChild(p2)
        p2.className = "program title"
        p2.innerText = `Course: ${course}`;
        div.appendChild(p3)
        p3.className = "writer title"
        p3.innerText = `Author: ${author}`;
    }
    return {formulate}  
}

function submitValues(item) {
    let addInto = courses();
    item.preventDefault();

    console.log(item);
    if (!(customerInput.value && courseInput.value && authorInput.value)) {
        return
    } else {
        addInto.formulate()
        customerInput.value = "";
        courseInput.value = "";
        authorInput.value = "";
    }
    
}





















