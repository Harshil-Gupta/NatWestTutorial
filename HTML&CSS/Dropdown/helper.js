function addcourse() {
    let name = document.getElementById("inputcourse").value;
    let courses = document.getElementById("courses_dropdown");
    let new_course = document.createElement("option");
    new_course.innerText = name;
    courses.append(new_course);
}
