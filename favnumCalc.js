function guessFavNumber() {
    let FavoriteNumber = 26;
    let guess = prompt("Guess the Favorite Number");
    while (guess != FavoriteNumber) {
        if (guess < FavoriteNumber) {
            alert("Too low")
        } else {
            alert("Too High")
        }
        enter = prompt("Guess the Favorite Number.");
    }
    alert("Correct");
}