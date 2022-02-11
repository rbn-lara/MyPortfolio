import web1 from "./resources/web/web-diagram.png";
import web2 from "./resources/web/api-swagger.png";
import web3 from "./resources/web/clients-main.png";
import web4 from "./resources/web/clients-add.png";
import web5 from "./resources/web/clients-list.png";
import web6 from "./resources/web/projects-main.png";
import web7 from "./resources/web/projects-display-button.png";
import web8 from "./resources/web/projects-list.png";
import win1 from "./resources/forms/1-diagram.png"
import win2 from "./resources/forms/server-main.png"
import win3 from "./resources/forms/server-user-activation.png"
import win4 from "./resources/forms/client-main.png"
import win5 from "./resources/forms/client-treatments.png"



class project {
    constructor(file, imgs, mi){
        this.file = file;
        this.images = imgs;
        this.moreInfo = mi;
    }
}

const PROJECTS_INFO = [
    new project({
        name: "Fullstack Asp.net Web Application",
        implements: ["C#", ".Net Framework", "Entity Framework", "MSSQL", "Blazor", "Javascript", "Bootstrap"]
        },
        [web1, web2, web3, web4, web5, web6, web7, web8],
        ["A fullstack application that register data input by the user into a database.",
        "Front-end is made with Asp.net while the backend is accesed by an API that access the database with Entity Framework",
        "Challenges Fullfiled:"
    ]),
    new project({
        name: "Windows Forms Server-Client Application",
        implements: ["C#", ".Net Framework", "MSSQL", "Multithread programming"]
        },
        [win1, win2, win3, win4, win5],
        ["Two different apps created with windows forms that connect by TCP",
        "The Server application connects to a database and register data and users",
        "The Client side application is for users that can login with their credentials",
        "Both interact by sending and receiving requests by TCP",
        "Challenges Fullfiled:"
    ])
];

export default PROJECTS_INFO;