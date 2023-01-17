function projects(input) {
    let name = input[0];
    let numProjects = Number(input[1]);
    let projectsTime = numProjects * 3 ; 
    console.log(`The architect ${name} will need ${projectsTime} hours to complete ${numProjects} project/s.`);
}
projects(["George ","9"]);