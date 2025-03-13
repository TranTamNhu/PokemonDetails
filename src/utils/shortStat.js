export function getShortName(name)
{
    let text;
    switch (name)
    {
        case "hp":
            text = "hp";
            break;
        case "attack":
            text = "atk";
            break;
        case "defense":
            text = "def";
            break;
        case "special-attack":
            text = "spa";
            break;
        case "special-defense":
            text = "spd";
            break;
        case "speed":
            text = "spd";
            break;
        default:
            console.log("chiu roi em oi!");
    }
    return text;
}