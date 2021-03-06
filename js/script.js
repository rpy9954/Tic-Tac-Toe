let turn = true;
        let children;
        let winnerFound = false;

        document.addEventListener('DOMContentLoaded', load);

        function load() {
            children = document.getElementsByClassName("child");
            for (let i = 0; i < children.length; i++) {
                children[i].addEventListener("click", function () {
                    clicked(i);
                });
            }
            document.getElementById("clear").addEventListener("click", function () {
                    clearBoard();
                }
            );
            updateTurn();
        }

        function clearBoard() {
            for (let i = 0; i < children.length; i++) {
                children[i].innerHTML = '';
                children[i].classList.remove('animate');
            }
            turn = true;
            winnerFound = false;
            updateTurn();
        }

        //text at the top
        function updateTurn() {
            if (turn)
                document.getElementById("turn").innerHTML = "X";
            else
                document.getElementById("turn").innerHTML = "O";
        }

        function clicked(i) {
            if (winnerFound)
                return;
            if (children[i].childElementCount !== 0)
                return;
            const div = document.createElement('div');
            if (turn) {
                div.textContent = 'X';
            }
            else {
                div.textContent = 'O';
            }
            children[i].appendChild(div);
            children[i].classList.add('animate');
            turn = !turn;
            checkWinner();
            updateTurn();
        }

        function checkWinner() {
            //check rows
            for (let x = 0; x < 9; x += 3) {
                if (childContent(x) === childContent(x + 1) && childContent(x) === childContent(x + 2)) {
                    alert(childContent(x) + " won!");
                    winnerFound = true;
                }
            }
            //check columns
            for (let x = 0; x < 3; x += 1) {
                if (childContent(x) === childContent(x + 3) && childContent(x) === childContent(x + 6)) {
                    alert(childContent(x)+ " won!");
                    winnerFound = true;
                }
            }
            //check diagonals
            if (childContent(0) === childContent(4) && childContent(0) === childContent(8)) {
                alert(childContent(0)+ " won!");
                winnerFound = true;
            }
            if (childContent(2) === childContent(4) && childContent(2) === childContent(6)) {
                alert(childContent(2)+ " won!");
                winnerFound = true;
            }
        }

        function childContent(i) {
            if (children[i].childElementCount === 0) {
                return i;
            }
            return children[i].getElementsByTagName('div')[0].innerHTML;
        }