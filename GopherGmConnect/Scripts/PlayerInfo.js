function Shoots(dir) {
    if (dir == 0) {
        return "L";
    }
    return "R";
}

function GetPosition(pos) {
    var position = "OMG NO POSITION";
    switch (pos) {
        case 0:
            position = "LW";
            break;
        case 1:
            position = "RW";
            break;
        case 2:
            position = "C";
            break;
        case 3:
            position = "D";
            break;
        case 4: 
            position = "G";
            break;
        default:
            position = pos;
            break;
    }
    return position;
}

var AllPlayerRatings = {
    Offensive: [
        "something",
        "something2",
        "something3"
    ],
    Defensive: [
        "esomething",
        "esomething2",
        "esomething3"
    ],
    Goalie: [
        "asomething",
        "asomething2",
        "asomething3"
    ]
}