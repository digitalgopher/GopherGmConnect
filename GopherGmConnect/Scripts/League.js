function Division(dv) {
    var name = "";
    switch (dv) {
        case 8:
            name = "Northeast";
            break;
        case 3:
            name = "Northwest";
            break;
        case 4:
            name = "Pacific";
            break;
        case 5:
            name = "Central";
            break;
        case 6:
            name = "Southeast";
            break;
        case 7:
            name = "Atlantic";
            break;
        default:
            name = "League.js::Division::Error";
            break;
    }
    return name;
}

function Conference(dv) {
    var name = "";
    switch (dv) {
        case 1:
            name = "Western Conference";
            break;
        case 2:
            name = "Eastern Conference";
            break;
        default:
            name = "League.js::Division::Error";
            break;
    }
    return name;
}