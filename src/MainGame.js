import { useNavigate } from "react-router-dom";

export default function MainGame() {
    var Player1Played = 0;
    var Player2Played = 0;
    var Player1Turn = 1;
    var Player2Turn = 0;
    var GameOver = 0;
    var CallOnce = 0;
    var CallScoreOnce = 0;
    var Player1Wins = 0;
    var Player2Wins = 0;
    var P1SCORE = 0;
    var P2SCORE = 0;
    var PauseTimer = false;
    var distance = 600;
    var x;

    const navigate = useNavigate();
    setTimeout(() => {
        document.getElementById("Loader").style.display = "none";
        if (Player1Turn == 1) {
            if (Player1Played == 0) {
                document.getElementById("CurrentPlayer").innerHTML = localStorage.getItem("PLAYER1NAME");
                document.getElementById("P1Name").innerHTML = localStorage.getItem("PLAYER1NAME");
                document.getElementById("P2Name").innerHTML = localStorage.getItem("PLAYER2NAME");
                document.getElementById("P1Score").innerHTML = "0";
                document.getElementById("P2Score").innerHTML = "0";
            }
        }


        x = setInterval(function () {
            if (document.getElementById("Box1")) {
                if (PauseTimer == false) {
                    distance--;
                }
                // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor(distance / 60);
                var seconds = Math.floor(distance % 60);

                document.getElementById("Time").innerHTML = minutes + "m " + seconds + "s ";

                if (distance < 300) {
                    document.getElementById("Time").style.color = "red";
                    document.getElementById("Time").style.textShadow = "0 0 50px red";
                }

                if (distance == 0) {
                    CallScoreOnce++;
                    if (CallScoreOnce == 1) {
                        PauseTimer = true;
                        if (P1SCORE > P2SCORE) {
                            document.getElementById("WinnerPlayerName").innerHTML = localStorage.getItem("PLAYER1NAME");
                            document.getElementById("Winner").style.display = "block";
                        }
                        else
                            if (P2SCORE > P1SCORE) {
                                document.getElementById("WinnerPlayerName").innerHTML = localStorage.getItem("PLAYER2NAME");
                                document.getElementById("Winner").style.display = "block";
                            }
                            else
                                if (P1SCORE == P2SCORE) {
                                    document.getElementById("WinnerContent").innerHTML = "Its A Draw!!";
                                    document.getElementById("Winner").style.display = "block";
                                }
                        setTimeout(() => {
                            PauseTimer = false;
                            distance = 600;
                            document.getElementById("P1Score").innerHTML = "0";
                            document.getElementById("P2Score").innerHTML = "0";
                            P1SCORE = 0;
                            P2SCORE = 0;
                            document.getElementById("Box1").innerHTML = "";
                            document.getElementById("Box2").innerHTML = "";
                            document.getElementById("Box3").innerHTML = "";
                            document.getElementById("Box4").innerHTML = "";
                            document.getElementById("Box5").innerHTML = "";
                            document.getElementById("Box6").innerHTML = "";
                            document.getElementById("Box7").innerHTML = "";
                            document.getElementById("Box8").innerHTML = "";
                            document.getElementById("Box9").innerHTML = "";

                            document.getElementById("Box1").style.color = "rgb(199, 196, 194)";
                            document.getElementById("Box1").style.textShadow = "0 0 50px white";

                            document.getElementById("Box2").style.color = "rgb(199, 196, 194)";
                            document.getElementById("Box2").style.textShadow = "0 0 50px white";

                            document.getElementById("Box3").style.color = "rgb(199, 196, 194)";
                            document.getElementById("Box3").style.textShadow = "0 0 50px white";

                            document.getElementById("Box4").style.color = "rgb(199, 196, 194)";
                            document.getElementById("Box4").style.textShadow = "0 0 50px white";

                            document.getElementById("Box5").style.color = "rgb(199, 196, 194)";
                            document.getElementById("Box5").style.textShadow = "0 0 50px white";

                            document.getElementById("Box6").style.color = "rgb(199, 196, 194)";
                            document.getElementById("Box6").style.textShadow = "0 0 50px white";

                            document.getElementById("Box7").style.color = "rgb(199, 196, 194)";
                            document.getElementById("Box7").style.textShadow = "0 0 50px white";

                            document.getElementById("Box8").style.color = "rgb(199, 196, 194)";
                            document.getElementById("Box8").style.textShadow = "0 0 50px white";

                            document.getElementById("Box9").style.color = "rgb(199, 196, 194)";
                            document.getElementById("Box9").style.textShadow = "0 0 50px white";

                            document.getElementById("Winner").style.display = "none";
                            Player1Played = 0;
                            Player2Played = 0;
                            Player1Turn = 1;
                            Player2Turn = 0;
                            GameOver = 0;
                            CallOnce = 0;
                            CallScoreOnce = 0;
                            document.getElementById("CurrentPlayer").innerHTML = localStorage.getItem("PLAYER1NAME");
                        }, 6000);
                    }
                }
            }
        }, 1000);


        setInterval(() => {
            if (document.getElementById("Box1")) {
                if (!document.getElementById("Box1").innerHTML == "" && !document.getElementById("Box2").innerHTML == "" && !document.getElementById("Box3").innerHTML == "" && !document.getElementById("Box4").innerHTML == "" && !document.getElementById("Box5").innerHTML == "" && !document.getElementById("Box6").innerHTML == "" && !document.getElementById("Box7").innerHTML == "" && !document.getElementById("Box8").innerHTML == "" && !document.getElementById("Box9").innerHTML == "") {
                    setTimeout(() => {
                        if (GameOver == 0) {
                            Reset();
                        }
                    }, 1000);
                }

                
                    if (document.getElementById("Box1").innerHTML == "×" && document.getElementById("Box2").innerHTML == "×" && document.getElementById("Box3").innerHTML == "×") {
                        CallOnce++;
                        if (CallOnce == 1) {
                            document.getElementById("Box1").style.color = "red";
                            document.getElementById("Box1").style.textShadow = "0 0 50px red";

                            document.getElementById("Box2").style.color = "red";
                            document.getElementById("Box2").style.textShadow = "0 0 50px red";

                            document.getElementById("Box3").style.color = "red";
                            document.getElementById("Box3").style.textShadow = "0 0 50px red";

                            GameOver = 1;
                            PauseTimer = true;
                            document.getElementById("ResetButton").style.filter = "blur(0.04em)";
                            document.getElementById("ResetButton").style.cursor = "not-allowed";

                            setTimeout(() => {
                                Player1Wins = 1;
                                Player2Wins = 0;
                                P1SCORE++;
                                document.getElementById("P1Score").innerHTML = P1SCORE;
                                setTimeout(() => {
                                    document.getElementById("Box1").innerHTML = "";
                                    document.getElementById("Box2").innerHTML = "";
                                    document.getElementById("Box3").innerHTML = "";
                                    document.getElementById("Box4").innerHTML = "";
                                    document.getElementById("Box5").innerHTML = "";
                                    document.getElementById("Box6").innerHTML = "";
                                    document.getElementById("Box7").innerHTML = "";
                                    document.getElementById("Box8").innerHTML = "";
                                    document.getElementById("Box9").innerHTML = "";

                                    document.getElementById("Box1").style.color = "rgb(199, 196, 194)";
                                    document.getElementById("Box1").style.textShadow = "0 0 50px white";

                                    document.getElementById("Box2").style.color = "rgb(199, 196, 194)";
                                    document.getElementById("Box2").style.textShadow = "0 0 50px white";

                                    document.getElementById("Box3").style.color = "rgb(199, 196, 194)";
                                    document.getElementById("Box3").style.textShadow = "0 0 50px white";

                                    document.getElementById("Box4").style.color = "rgb(199, 196, 194)";
                                    document.getElementById("Box4").style.textShadow = "0 0 50px white";

                                    document.getElementById("Box5").style.color = "rgb(199, 196, 194)";
                                    document.getElementById("Box5").style.textShadow = "0 0 50px white";

                                    document.getElementById("Box6").style.color = "rgb(199, 196, 194)";
                                    document.getElementById("Box6").style.textShadow = "0 0 50px white";

                                    document.getElementById("Box7").style.color = "rgb(199, 196, 194)";
                                    document.getElementById("Box7").style.textShadow = "0 0 50px white";

                                    document.getElementById("Box8").style.color = "rgb(199, 196, 194)";
                                    document.getElementById("Box8").style.textShadow = "0 0 50px white";

                                    document.getElementById("Box9").style.color = "rgb(199, 196, 194)";
                                    document.getElementById("Box9").style.textShadow = "0 0 50px white";

                                    if (distance == 0) {
                                        distance = 600;

                                    }
                                    Player1Played = 0;
                                    Player2Played = 0;
                                    if (Player1Wins == 1) {
                                        Player1Turn = 0;
                                        Player2Turn = 1;
                                    }
                                    else
                                        if (Player2Wins == 1) {
                                            Player1Turn = 1;
                                            Player2Turn = 0;
                                        }
                                    GameOver = 0;
                                    CallOnce = 0;
                                    PauseTimer = false;
                                    if (Player1Turn == 1) {
                                        if (Player1Played == 0) {
                                            document.getElementById("CurrentPlayer").innerHTML = localStorage.getItem("PLAYER1NAME");
                                        }
                                    }
                                    else
                                        if (Player2Turn == 1) {
                                            if (Player2Played == 0) {
                                                document.getElementById("CurrentPlayer").innerHTML = localStorage.getItem("PLAYER2NAME");
                                            }
                                        }
                                }, 3000);
                            }, 1000);
                        }
                    }
                    else
                        if (document.getElementById("Box1").innerHTML == "×" && document.getElementById("Box4").innerHTML == "×" && document.getElementById("Box7").innerHTML == "×") {
                            CallOnce++;
                            if (CallOnce == 1) {
                                document.getElementById("Box1").style.color = "red";
                                document.getElementById("Box1").style.textShadow = "0 0 50px red";

                                document.getElementById("Box4").style.color = "red";
                                document.getElementById("Box4").style.textShadow = "0 0 50px red";

                                document.getElementById("Box7").style.color = "red";
                                document.getElementById("Box7").style.textShadow = "0 0 50px red";

                                GameOver = 1;
                                PauseTimer = true;
                                document.getElementById("ResetButton").style.filter = "blur(0.04em)";
                                document.getElementById("ResetButton").style.cursor = "not-allowed";

                                setTimeout(() => {
                                    Player1Wins = 1;
                                    Player2Wins = 0;
                                    P1SCORE++;
                                    document.getElementById("P1Score").innerHTML = P1SCORE;


                                    setTimeout(() => {
                                        document.getElementById("Box1").innerHTML = "";
                                        document.getElementById("Box2").innerHTML = "";
                                        document.getElementById("Box3").innerHTML = "";
                                        document.getElementById("Box4").innerHTML = "";
                                        document.getElementById("Box5").innerHTML = "";
                                        document.getElementById("Box6").innerHTML = "";
                                        document.getElementById("Box7").innerHTML = "";
                                        document.getElementById("Box8").innerHTML = "";
                                        document.getElementById("Box9").innerHTML = "";

                                        document.getElementById("Box1").style.color = "rgb(199, 196, 194)";
                                        document.getElementById("Box1").style.textShadow = "0 0 50px white";

                                        document.getElementById("Box2").style.color = "rgb(199, 196, 194)";
                                        document.getElementById("Box2").style.textShadow = "0 0 50px white";

                                        document.getElementById("Box3").style.color = "rgb(199, 196, 194)";
                                        document.getElementById("Box3").style.textShadow = "0 0 50px white";

                                        document.getElementById("Box4").style.color = "rgb(199, 196, 194)";
                                        document.getElementById("Box4").style.textShadow = "0 0 50px white";

                                        document.getElementById("Box5").style.color = "rgb(199, 196, 194)";
                                        document.getElementById("Box5").style.textShadow = "0 0 50px white";

                                        document.getElementById("Box6").style.color = "rgb(199, 196, 194)";
                                        document.getElementById("Box6").style.textShadow = "0 0 50px white";

                                        document.getElementById("Box7").style.color = "rgb(199, 196, 194)";
                                        document.getElementById("Box7").style.textShadow = "0 0 50px white";

                                        document.getElementById("Box8").style.color = "rgb(199, 196, 194)";
                                        document.getElementById("Box8").style.textShadow = "0 0 50px white";

                                        document.getElementById("Box9").style.color = "rgb(199, 196, 194)";
                                        document.getElementById("Box9").style.textShadow = "0 0 50px white";


                                        if (distance == 0) {
                                            distance = 600;

                                        }
                                        Player1Played = 0;
                                        Player2Played = 0;
                                        if (Player1Wins == 1) {
                                            Player1Turn = 0;
                                            Player2Turn = 1;
                                        }
                                        else
                                            if (Player2Wins == 1) {
                                                Player1Turn = 1;
                                                Player2Turn = 0;
                                            }
                                        GameOver = 0;
                                        CallOnce = 0;
                                        PauseTimer = false;
                                        if (Player1Turn == 1) {
                                            if (Player1Played == 0) {
                                                document.getElementById("CurrentPlayer").innerHTML = localStorage.getItem("PLAYER1NAME");
                                            }
                                        }
                                        else
                                            if (Player2Turn == 1) {
                                                if (Player2Played == 0) {
                                                    document.getElementById("CurrentPlayer").innerHTML = localStorage.getItem("PLAYER2NAME");
                                                }
                                            }
                                    }, 3000);
                                }, 1000);
                            }
                        }
                        else
                            if (document.getElementById("Box1").innerHTML == "×" && document.getElementById("Box5").innerHTML == "×" && document.getElementById("Box9").innerHTML == "×") {
                                CallOnce++;
                                if (CallOnce == 1) {
                                    document.getElementById("Box1").style.color = "red";
                                    document.getElementById("Box1").style.textShadow = "0 0 50px red";

                                    document.getElementById("Box5").style.color = "red";
                                    document.getElementById("Box5").style.textShadow = "0 0 50px red";

                                    document.getElementById("Box9").style.color = "red";
                                    document.getElementById("Box9").style.textShadow = "0 0 50px red";

                                    GameOver = 1;
                                    PauseTimer = true;
                                    document.getElementById("ResetButton").style.filter = "blur(0.04em)";
                                    document.getElementById("ResetButton").style.cursor = "not-allowed";

                                    setTimeout(() => {
                                        Player1Wins = 1;
                                        Player2Wins = 0;
                                        P1SCORE++;
                                        document.getElementById("P1Score").innerHTML = P1SCORE;


                                        setTimeout(() => {
                                            document.getElementById("Box1").innerHTML = "";
                                            document.getElementById("Box2").innerHTML = "";
                                            document.getElementById("Box3").innerHTML = "";
                                            document.getElementById("Box4").innerHTML = "";
                                            document.getElementById("Box5").innerHTML = "";
                                            document.getElementById("Box6").innerHTML = "";
                                            document.getElementById("Box7").innerHTML = "";
                                            document.getElementById("Box8").innerHTML = "";
                                            document.getElementById("Box9").innerHTML = "";

                                            document.getElementById("Box1").style.color = "rgb(199, 196, 194)";
                                            document.getElementById("Box1").style.textShadow = "0 0 50px white";

                                            document.getElementById("Box2").style.color = "rgb(199, 196, 194)";
                                            document.getElementById("Box2").style.textShadow = "0 0 50px white";

                                            document.getElementById("Box3").style.color = "rgb(199, 196, 194)";
                                            document.getElementById("Box3").style.textShadow = "0 0 50px white";

                                            document.getElementById("Box4").style.color = "rgb(199, 196, 194)";
                                            document.getElementById("Box4").style.textShadow = "0 0 50px white";

                                            document.getElementById("Box5").style.color = "rgb(199, 196, 194)";
                                            document.getElementById("Box5").style.textShadow = "0 0 50px white";

                                            document.getElementById("Box6").style.color = "rgb(199, 196, 194)";
                                            document.getElementById("Box6").style.textShadow = "0 0 50px white";

                                            document.getElementById("Box7").style.color = "rgb(199, 196, 194)";
                                            document.getElementById("Box7").style.textShadow = "0 0 50px white";

                                            document.getElementById("Box8").style.color = "rgb(199, 196, 194)";
                                            document.getElementById("Box8").style.textShadow = "0 0 50px white";

                                            document.getElementById("Box9").style.color = "rgb(199, 196, 194)";
                                            document.getElementById("Box9").style.textShadow = "0 0 50px white";


                                            if (distance == 0) {
                                                distance = 600;

                                            }
                                            Player1Played = 0;
                                            Player2Played = 0;
                                            if (Player1Wins == 1) {
                                                Player1Turn = 0;
                                                Player2Turn = 1;
                                            }
                                            else
                                                if (Player2Wins == 1) {
                                                    Player1Turn = 1;
                                                    Player2Turn = 0;
                                                }
                                            GameOver = 0;
                                            CallOnce = 0;
                                            PauseTimer = false;
                                            if (Player1Turn == 1) {
                                                if (Player1Played == 0) {
                                                    document.getElementById("CurrentPlayer").innerHTML = localStorage.getItem("PLAYER1NAME");
                                                }
                                            }
                                            else
                                                if (Player2Turn == 1) {
                                                    if (Player2Played == 0) {
                                                        document.getElementById("CurrentPlayer").innerHTML = localStorage.getItem("PLAYER2NAME");
                                                    }
                                                }
                                        }, 3000);
                                    }, 1000);
                                }
                            }
                            else
                                if (document.getElementById("Box2").innerHTML == "×" && document.getElementById("Box5").innerHTML == "×" && document.getElementById("Box8").innerHTML == "×") {
                                    CallOnce++;
                                    if (CallOnce == 1) {
                                        document.getElementById("Box2").style.color = "red";
                                        document.getElementById("Box2").style.textShadow = "0 0 50px red";

                                        document.getElementById("Box5").style.color = "red";
                                        document.getElementById("Box5").style.textShadow = "0 0 50px red";

                                        document.getElementById("Box8").style.color = "red";
                                        document.getElementById("Box8").style.textShadow = "0 0 50px red";

                                        GameOver = 1;
                                        PauseTimer = true;
                                        document.getElementById("ResetButton").style.filter = "blur(0.04em)";
                                        document.getElementById("ResetButton").style.cursor = "not-allowed";

                                        setTimeout(() => {
                                            Player1Wins = 1;
                                            Player2Wins = 0;
                                            P1SCORE++;
                                            document.getElementById("P1Score").innerHTML = P1SCORE;


                                            setTimeout(() => {
                                                document.getElementById("Box1").innerHTML = "";
                                                document.getElementById("Box2").innerHTML = "";
                                                document.getElementById("Box3").innerHTML = "";
                                                document.getElementById("Box4").innerHTML = "";
                                                document.getElementById("Box5").innerHTML = "";
                                                document.getElementById("Box6").innerHTML = "";
                                                document.getElementById("Box7").innerHTML = "";
                                                document.getElementById("Box8").innerHTML = "";
                                                document.getElementById("Box9").innerHTML = "";

                                                document.getElementById("Box1").style.color = "rgb(199, 196, 194)";
                                                document.getElementById("Box1").style.textShadow = "0 0 50px white";

                                                document.getElementById("Box2").style.color = "rgb(199, 196, 194)";
                                                document.getElementById("Box2").style.textShadow = "0 0 50px white";

                                                document.getElementById("Box3").style.color = "rgb(199, 196, 194)";
                                                document.getElementById("Box3").style.textShadow = "0 0 50px white";

                                                document.getElementById("Box4").style.color = "rgb(199, 196, 194)";
                                                document.getElementById("Box4").style.textShadow = "0 0 50px white";

                                                document.getElementById("Box5").style.color = "rgb(199, 196, 194)";
                                                document.getElementById("Box5").style.textShadow = "0 0 50px white";

                                                document.getElementById("Box6").style.color = "rgb(199, 196, 194)";
                                                document.getElementById("Box6").style.textShadow = "0 0 50px white";

                                                document.getElementById("Box7").style.color = "rgb(199, 196, 194)";
                                                document.getElementById("Box7").style.textShadow = "0 0 50px white";

                                                document.getElementById("Box8").style.color = "rgb(199, 196, 194)";
                                                document.getElementById("Box8").style.textShadow = "0 0 50px white";

                                                document.getElementById("Box9").style.color = "rgb(199, 196, 194)";
                                                document.getElementById("Box9").style.textShadow = "0 0 50px white";


                                                if (distance == 0) {
                                                    distance = 600;

                                                }
                                                Player1Played = 0;
                                                Player2Played = 0;
                                                if (Player1Wins == 1) {
                                                    Player1Turn = 0;
                                                    Player2Turn = 1;
                                                }
                                                else
                                                    if (Player2Wins == 1) {
                                                        Player1Turn = 1;
                                                        Player2Turn = 0;
                                                    }
                                                GameOver = 0;
                                                CallOnce = 0;
                                                PauseTimer = false;
                                                if (Player1Turn == 1) {
                                                    if (Player1Played == 0) {
                                                        document.getElementById("CurrentPlayer").innerHTML = localStorage.getItem("PLAYER1NAME");
                                                    }
                                                }
                                                else
                                                    if (Player2Turn == 1) {
                                                        if (Player2Played == 0) {
                                                            document.getElementById("CurrentPlayer").innerHTML = localStorage.getItem("PLAYER2NAME");
                                                        }
                                                    }
                                            }, 3000);
                                        }, 1000);
                                    }
                                }
                                else
                                    if (document.getElementById("Box3").innerHTML == "×" && document.getElementById("Box6").innerHTML == "×" && document.getElementById("Box9").innerHTML == "×") {
                                        CallOnce++;
                                        if (CallOnce == 1) {
                                            document.getElementById("Box3").style.color = "red";
                                            document.getElementById("Box3").style.textShadow = "0 0 50px red";

                                            document.getElementById("Box6").style.color = "red";
                                            document.getElementById("Box6").style.textShadow = "0 0 50px red";

                                            document.getElementById("Box9").style.color = "red";
                                            document.getElementById("Box9").style.textShadow = "0 0 50px red";

                                            GameOver = 1;
                                            PauseTimer = true;
                                            document.getElementById("ResetButton").style.filter = "blur(0.04em)";
                                            document.getElementById("ResetButton").style.cursor = "not-allowed";

                                            setTimeout(() => {
                                                Player1Wins = 1;
                                                Player2Wins = 0;
                                                P1SCORE++;
                                                document.getElementById("P1Score").innerHTML = P1SCORE;


                                                setTimeout(() => {
                                                    document.getElementById("Box1").innerHTML = "";
                                                    document.getElementById("Box2").innerHTML = "";
                                                    document.getElementById("Box3").innerHTML = "";
                                                    document.getElementById("Box4").innerHTML = "";
                                                    document.getElementById("Box5").innerHTML = "";
                                                    document.getElementById("Box6").innerHTML = "";
                                                    document.getElementById("Box7").innerHTML = "";
                                                    document.getElementById("Box8").innerHTML = "";
                                                    document.getElementById("Box9").innerHTML = "";

                                                    document.getElementById("Box1").style.color = "rgb(199, 196, 194)";
                                                    document.getElementById("Box1").style.textShadow = "0 0 50px white";

                                                    document.getElementById("Box2").style.color = "rgb(199, 196, 194)";
                                                    document.getElementById("Box2").style.textShadow = "0 0 50px white";

                                                    document.getElementById("Box3").style.color = "rgb(199, 196, 194)";
                                                    document.getElementById("Box3").style.textShadow = "0 0 50px white";

                                                    document.getElementById("Box4").style.color = "rgb(199, 196, 194)";
                                                    document.getElementById("Box4").style.textShadow = "0 0 50px white";

                                                    document.getElementById("Box5").style.color = "rgb(199, 196, 194)";
                                                    document.getElementById("Box5").style.textShadow = "0 0 50px white";

                                                    document.getElementById("Box6").style.color = "rgb(199, 196, 194)";
                                                    document.getElementById("Box6").style.textShadow = "0 0 50px white";

                                                    document.getElementById("Box7").style.color = "rgb(199, 196, 194)";
                                                    document.getElementById("Box7").style.textShadow = "0 0 50px white";

                                                    document.getElementById("Box8").style.color = "rgb(199, 196, 194)";
                                                    document.getElementById("Box8").style.textShadow = "0 0 50px white";

                                                    document.getElementById("Box9").style.color = "rgb(199, 196, 194)";
                                                    document.getElementById("Box9").style.textShadow = "0 0 50px white";


                                                    if (distance == 0) {
                                                        distance = 600;

                                                    }
                                                    Player1Played = 0;
                                                    Player2Played = 0;
                                                    if (Player1Wins == 1) {
                                                        Player1Turn = 0;
                                                        Player2Turn = 1;
                                                    }
                                                    else
                                                        if (Player2Wins == 1) {
                                                            Player1Turn = 1;
                                                            Player2Turn = 0;
                                                        }
                                                    GameOver = 0;
                                                    CallOnce = 0;
                                                    PauseTimer = false;
                                                    if (Player1Turn == 1) {
                                                        if (Player1Played == 0) {
                                                            document.getElementById("CurrentPlayer").innerHTML = localStorage.getItem("PLAYER1NAME");
                                                        }
                                                    }
                                                    else
                                                        if (Player2Turn == 1) {
                                                            if (Player2Played == 0) {
                                                                document.getElementById("CurrentPlayer").innerHTML = localStorage.getItem("PLAYER2NAME");
                                                            }
                                                        }
                                                }, 3000);
                                            }, 1000);
                                        }
                                    }
                                    else
                                        if (document.getElementById("Box3").innerHTML == "×" && document.getElementById("Box5").innerHTML == "×" && document.getElementById("Box7").innerHTML == "×") {
                                            CallOnce++;
                                            if (CallOnce == 1) {
                                                document.getElementById("Box3").style.color = "red";
                                                document.getElementById("Box3").style.textShadow = "0 0 50px red";

                                                document.getElementById("Box5").style.color = "red";
                                                document.getElementById("Box5").style.textShadow = "0 0 50px red";

                                                document.getElementById("Box7").style.color = "red";
                                                document.getElementById("Box7").style.textShadow = "0 0 50px red";

                                                GameOver = 1;
                                                PauseTimer = true;
                                                document.getElementById("ResetButton").style.filter = "blur(0.04em)";
                                                document.getElementById("ResetButton").style.cursor = "not-allowed";

                                                setTimeout(() => {
                                                    Player1Wins = 1;
                                                    Player2Wins = 0;
                                                    P1SCORE++;
                                                    document.getElementById("P1Score").innerHTML = P1SCORE;


                                                    setTimeout(() => {
                                                        document.getElementById("Box1").innerHTML = "";
                                                        document.getElementById("Box2").innerHTML = "";
                                                        document.getElementById("Box3").innerHTML = "";
                                                        document.getElementById("Box4").innerHTML = "";
                                                        document.getElementById("Box5").innerHTML = "";
                                                        document.getElementById("Box6").innerHTML = "";
                                                        document.getElementById("Box7").innerHTML = "";
                                                        document.getElementById("Box8").innerHTML = "";
                                                        document.getElementById("Box9").innerHTML = "";

                                                        document.getElementById("Box1").style.color = "rgb(199, 196, 194)";
                                                        document.getElementById("Box1").style.textShadow = "0 0 50px white";

                                                        document.getElementById("Box2").style.color = "rgb(199, 196, 194)";
                                                        document.getElementById("Box2").style.textShadow = "0 0 50px white";

                                                        document.getElementById("Box3").style.color = "rgb(199, 196, 194)";
                                                        document.getElementById("Box3").style.textShadow = "0 0 50px white";

                                                        document.getElementById("Box4").style.color = "rgb(199, 196, 194)";
                                                        document.getElementById("Box4").style.textShadow = "0 0 50px white";

                                                        document.getElementById("Box5").style.color = "rgb(199, 196, 194)";
                                                        document.getElementById("Box5").style.textShadow = "0 0 50px white";

                                                        document.getElementById("Box6").style.color = "rgb(199, 196, 194)";
                                                        document.getElementById("Box6").style.textShadow = "0 0 50px white";

                                                        document.getElementById("Box7").style.color = "rgb(199, 196, 194)";
                                                        document.getElementById("Box7").style.textShadow = "0 0 50px white";

                                                        document.getElementById("Box8").style.color = "rgb(199, 196, 194)";
                                                        document.getElementById("Box8").style.textShadow = "0 0 50px white";

                                                        document.getElementById("Box9").style.color = "rgb(199, 196, 194)";
                                                        document.getElementById("Box9").style.textShadow = "0 0 50px white";


                                                        if (distance == 0) {
                                                            distance = 600;

                                                        }
                                                        Player1Played = 0;
                                                        Player2Played = 0;
                                                        if (Player1Wins == 1) {
                                                            Player1Turn = 0;
                                                            Player2Turn = 1;
                                                        }
                                                        else
                                                            if (Player2Wins == 1) {
                                                                Player1Turn = 1;
                                                                Player2Turn = 0;
                                                            }
                                                        GameOver = 0;
                                                        CallOnce = 0;
                                                        PauseTimer = false;
                                                        if (Player1Turn == 1) {
                                                            if (Player1Played == 0) {
                                                                document.getElementById("CurrentPlayer").innerHTML = localStorage.getItem("PLAYER1NAME");
                                                            }
                                                        }
                                                        else
                                                            if (Player2Turn == 1) {
                                                                if (Player2Played == 0) {
                                                                    document.getElementById("CurrentPlayer").innerHTML = localStorage.getItem("PLAYER2NAME");
                                                                }
                                                            }
                                                    }, 3000);
                                                }, 1000);
                                            }
                                        }
                                        else
                                            if (document.getElementById("Box4").innerHTML == "×" && document.getElementById("Box5").innerHTML == "×" && document.getElementById("Box6").innerHTML == "×") {
                                                CallOnce++;
                                                if (CallOnce == 1) {
                                                    document.getElementById("Box4").style.color = "red";
                                                    document.getElementById("Box4").style.textShadow = "0 0 50px red";

                                                    document.getElementById("Box5").style.color = "red";
                                                    document.getElementById("Box5").style.textShadow = "0 0 50px red";

                                                    document.getElementById("Box6").style.color = "red";
                                                    document.getElementById("Box6").style.textShadow = "0 0 50px red";


                                                    GameOver = 1;
                                                    PauseTimer = true;
                                                    document.getElementById("ResetButton").style.filter = "blur(0.04em)";
                                                    document.getElementById("ResetButton").style.cursor = "not-allowed";

                                                    setTimeout(() => {
                                                        Player1Wins = 1;
                                                        Player2Wins = 0;
                                                        P1SCORE++;
                                                        document.getElementById("P1Score").innerHTML = P1SCORE;


                                                        setTimeout(() => {
                                                            document.getElementById("Box1").innerHTML = "";
                                                            document.getElementById("Box2").innerHTML = "";
                                                            document.getElementById("Box3").innerHTML = "";
                                                            document.getElementById("Box4").innerHTML = "";
                                                            document.getElementById("Box5").innerHTML = "";
                                                            document.getElementById("Box6").innerHTML = "";
                                                            document.getElementById("Box7").innerHTML = "";
                                                            document.getElementById("Box8").innerHTML = "";
                                                            document.getElementById("Box9").innerHTML = "";

                                                            document.getElementById("Box1").style.color = "rgb(199, 196, 194)";
                                                            document.getElementById("Box1").style.textShadow = "0 0 50px white";

                                                            document.getElementById("Box2").style.color = "rgb(199, 196, 194)";
                                                            document.getElementById("Box2").style.textShadow = "0 0 50px white";

                                                            document.getElementById("Box3").style.color = "rgb(199, 196, 194)";
                                                            document.getElementById("Box3").style.textShadow = "0 0 50px white";

                                                            document.getElementById("Box4").style.color = "rgb(199, 196, 194)";
                                                            document.getElementById("Box4").style.textShadow = "0 0 50px white";

                                                            document.getElementById("Box5").style.color = "rgb(199, 196, 194)";
                                                            document.getElementById("Box5").style.textShadow = "0 0 50px white";

                                                            document.getElementById("Box6").style.color = "rgb(199, 196, 194)";
                                                            document.getElementById("Box6").style.textShadow = "0 0 50px white";

                                                            document.getElementById("Box7").style.color = "rgb(199, 196, 194)";
                                                            document.getElementById("Box7").style.textShadow = "0 0 50px white";

                                                            document.getElementById("Box8").style.color = "rgb(199, 196, 194)";
                                                            document.getElementById("Box8").style.textShadow = "0 0 50px white";

                                                            document.getElementById("Box9").style.color = "rgb(199, 196, 194)";
                                                            document.getElementById("Box9").style.textShadow = "0 0 50px white";


                                                            if (distance == 0) {
                                                                distance = 600;

                                                            }
                                                            Player1Played = 0;
                                                            Player2Played = 0;
                                                            if (Player1Wins == 1) {
                                                                Player1Turn = 0;
                                                                Player2Turn = 1;
                                                            }
                                                            else
                                                                if (Player2Wins == 1) {
                                                                    Player1Turn = 1;
                                                                    Player2Turn = 0;
                                                                }
                                                            GameOver = 0;
                                                            CallOnce = 0;
                                                            PauseTimer = false;
                                                            if (Player1Turn == 1) {
                                                                if (Player1Played == 0) {
                                                                    document.getElementById("CurrentPlayer").innerHTML = localStorage.getItem("PLAYER1NAME");
                                                                }
                                                            }
                                                            else
                                                                if (Player2Turn == 1) {
                                                                    if (Player2Played == 0) {
                                                                        document.getElementById("CurrentPlayer").innerHTML = localStorage.getItem("PLAYER2NAME");
                                                                    }
                                                                }
                                                        }, 3000);
                                                    }, 1000);
                                                }
                                            }
                                            else
                                                if (document.getElementById("Box7").innerHTML == "×" && document.getElementById("Box8").innerHTML == "×" && document.getElementById("Box9").innerHTML == "×") {
                                                    CallOnce++;
                                                    if (CallOnce == 1) {
                                                        document.getElementById("Box7").style.color = "red";
                                                        document.getElementById("Box7").style.textShadow = "0 0 50px red";

                                                        document.getElementById("Box8").style.color = "red";
                                                        document.getElementById("Box8").style.textShadow = "0 0 50px red";

                                                        document.getElementById("Box9").style.color = "red";
                                                        document.getElementById("Box9").style.textShadow = "0 0 50px red";

                                                        GameOver = 1;
                                                        PauseTimer = true;
                                                        document.getElementById("ResetButton").style.filter = "blur(0.04em)";
                                                        document.getElementById("ResetButton").style.cursor = "not-allowed";

                                                        setTimeout(() => {
                                                            Player1Wins = 1;
                                                            Player2Wins = 0;
                                                            P1SCORE++;
                                                            document.getElementById("P1Score").innerHTML = P1SCORE;


                                                            setTimeout(() => {
                                                                document.getElementById("Box1").innerHTML = "";
                                                                document.getElementById("Box2").innerHTML = "";
                                                                document.getElementById("Box3").innerHTML = "";
                                                                document.getElementById("Box4").innerHTML = "";
                                                                document.getElementById("Box5").innerHTML = "";
                                                                document.getElementById("Box6").innerHTML = "";
                                                                document.getElementById("Box7").innerHTML = "";
                                                                document.getElementById("Box8").innerHTML = "";
                                                                document.getElementById("Box9").innerHTML = "";

                                                                document.getElementById("Box1").style.color = "rgb(199, 196, 194)";
                                                                document.getElementById("Box1").style.textShadow = "0 0 50px white";

                                                                document.getElementById("Box2").style.color = "rgb(199, 196, 194)";
                                                                document.getElementById("Box2").style.textShadow = "0 0 50px white";

                                                                document.getElementById("Box3").style.color = "rgb(199, 196, 194)";
                                                                document.getElementById("Box3").style.textShadow = "0 0 50px white";

                                                                document.getElementById("Box4").style.color = "rgb(199, 196, 194)";
                                                                document.getElementById("Box4").style.textShadow = "0 0 50px white";

                                                                document.getElementById("Box5").style.color = "rgb(199, 196, 194)";
                                                                document.getElementById("Box5").style.textShadow = "0 0 50px white";

                                                                document.getElementById("Box6").style.color = "rgb(199, 196, 194)";
                                                                document.getElementById("Box6").style.textShadow = "0 0 50px white";

                                                                document.getElementById("Box7").style.color = "rgb(199, 196, 194)";
                                                                document.getElementById("Box7").style.textShadow = "0 0 50px white";

                                                                document.getElementById("Box8").style.color = "rgb(199, 196, 194)";
                                                                document.getElementById("Box8").style.textShadow = "0 0 50px white";

                                                                document.getElementById("Box9").style.color = "rgb(199, 196, 194)";
                                                                document.getElementById("Box9").style.textShadow = "0 0 50px white";


                                                                if (distance == 0) {
                                                                    distance = 600;

                                                                }
                                                                Player1Played = 0;
                                                                Player2Played = 0;
                                                                if (Player1Wins == 1) {
                                                                    Player1Turn = 0;
                                                                    Player2Turn = 1;
                                                                }
                                                                else
                                                                    if (Player2Wins == 1) {
                                                                        Player1Turn = 1;
                                                                        Player2Turn = 0;
                                                                    }
                                                                GameOver = 0;
                                                                CallOnce = 0;
                                                                PauseTimer = false;
                                                                if (Player1Turn == 1) {
                                                                    if (Player1Played == 0) {
                                                                        document.getElementById("CurrentPlayer").innerHTML = localStorage.getItem("PLAYER1NAME");
                                                                    }
                                                                }
                                                                else
                                                                    if (Player2Turn == 1) {
                                                                        if (Player2Played == 0) {
                                                                            document.getElementById("CurrentPlayer").innerHTML = localStorage.getItem("PLAYER2NAME");
                                                                        }
                                                                    }
                                                            }, 3000);
                                                        }, 1000);
                                                    }
                                                }




                    if (document.getElementById("Box1").innerHTML == "O" && document.getElementById("Box2").innerHTML == "O" && document.getElementById("Box3").innerHTML == "O") {
                        CallOnce++;
                        if (CallOnce == 1) {
                            document.getElementById("Box1").style.color = "red";
                            document.getElementById("Box1").style.textShadow = "0 0 50px red";

                            document.getElementById("Box2").style.color = "red";
                            document.getElementById("Box2").style.textShadow = "0 0 50px red";

                            document.getElementById("Box3").style.color = "red";
                            document.getElementById("Box3").style.textShadow = "0 0 50px red";

                            GameOver = 1;
                            PauseTimer = true;
                            document.getElementById("ResetButton").style.filter = "blur(0.04em)";
                            document.getElementById("ResetButton").style.cursor = "not-allowed";

                            setTimeout(() => {
                                Player2Wins = 1;
                                Player1Wins = 0;
                                P2SCORE++;
                                document.getElementById("P2Score").innerHTML = P2SCORE;
                                setTimeout(() => {
                                    document.getElementById("Box1").innerHTML = "";
                                    document.getElementById("Box2").innerHTML = "";
                                    document.getElementById("Box3").innerHTML = "";
                                    document.getElementById("Box4").innerHTML = "";
                                    document.getElementById("Box5").innerHTML = "";
                                    document.getElementById("Box6").innerHTML = "";
                                    document.getElementById("Box7").innerHTML = "";
                                    document.getElementById("Box8").innerHTML = "";
                                    document.getElementById("Box9").innerHTML = "";

                                    document.getElementById("Box1").style.color = "rgb(199, 196, 194)";
                                    document.getElementById("Box1").style.textShadow = "0 0 50px white";

                                    document.getElementById("Box2").style.color = "rgb(199, 196, 194)";
                                    document.getElementById("Box2").style.textShadow = "0 0 50px white";

                                    document.getElementById("Box3").style.color = "rgb(199, 196, 194)";
                                    document.getElementById("Box3").style.textShadow = "0 0 50px white";

                                    document.getElementById("Box4").style.color = "rgb(199, 196, 194)";
                                    document.getElementById("Box4").style.textShadow = "0 0 50px white";

                                    document.getElementById("Box5").style.color = "rgb(199, 196, 194)";
                                    document.getElementById("Box5").style.textShadow = "0 0 50px white";

                                    document.getElementById("Box6").style.color = "rgb(199, 196, 194)";
                                    document.getElementById("Box6").style.textShadow = "0 0 50px white";

                                    document.getElementById("Box7").style.color = "rgb(199, 196, 194)";
                                    document.getElementById("Box7").style.textShadow = "0 0 50px white";

                                    document.getElementById("Box8").style.color = "rgb(199, 196, 194)";
                                    document.getElementById("Box8").style.textShadow = "0 0 50px white";

                                    document.getElementById("Box9").style.color = "rgb(199, 196, 194)";
                                    document.getElementById("Box9").style.textShadow = "0 0 50px white";


                                    if (distance == 0) {
                                        distance = 600;

                                    }
                                    Player1Played = 0;
                                    Player2Played = 0;
                                    if (Player1Wins == 1) {
                                        Player1Turn = 0;
                                        Player2Turn = 1;
                                    }
                                    else
                                        if (Player2Wins == 1) {
                                            Player1Turn = 1;
                                            Player2Turn = 0;
                                        }
                                    GameOver = 0;
                                    CallOnce = 0;
                                    PauseTimer = false;
                                    if (Player1Turn == 1) {
                                        if (Player1Played == 0) {
                                            document.getElementById("CurrentPlayer").innerHTML = localStorage.getItem("PLAYER1NAME");
                                        }
                                    }
                                    else
                                        if (Player2Turn == 1) {
                                            if (Player2Played == 0) {
                                                document.getElementById("CurrentPlayer").innerHTML = localStorage.getItem("PLAYER2NAME");
                                            }
                                        }
                                }, 3000);
                            }, 1000);
                        }
                    }
                    else
                        if (document.getElementById("Box1").innerHTML == "O" && document.getElementById("Box4").innerHTML == "O" && document.getElementById("Box7").innerHTML == "O") {
                            CallOnce++;
                            if (CallOnce == 1) {
                                document.getElementById("Box1").style.color = "red";
                                document.getElementById("Box1").style.textShadow = "0 0 50px red";

                                document.getElementById("Box4").style.color = "red";
                                document.getElementById("Box4").style.textShadow = "0 0 50px red";

                                document.getElementById("Box7").style.color = "red";
                                document.getElementById("Box7").style.textShadow = "0 0 50px red";

                                GameOver = 1;
                                PauseTimer = true;
                                document.getElementById("ResetButton").style.filter = "blur(0.04em)";
                                document.getElementById("ResetButton").style.cursor = "not-allowed";

                                setTimeout(() => {
                                    Player2Wins = 1;
                                    Player1Wins = 0;
                                    P2SCORE++;
                                    document.getElementById("P2Score").innerHTML = P2SCORE;


                                    setTimeout(() => {
                                        document.getElementById("Box1").innerHTML = "";
                                        document.getElementById("Box2").innerHTML = "";
                                        document.getElementById("Box3").innerHTML = "";
                                        document.getElementById("Box4").innerHTML = "";
                                        document.getElementById("Box5").innerHTML = "";
                                        document.getElementById("Box6").innerHTML = "";
                                        document.getElementById("Box7").innerHTML = "";
                                        document.getElementById("Box8").innerHTML = "";
                                        document.getElementById("Box9").innerHTML = "";

                                        document.getElementById("Box1").style.color = "rgb(199, 196, 194)";
                                        document.getElementById("Box1").style.textShadow = "0 0 50px white";

                                        document.getElementById("Box2").style.color = "rgb(199, 196, 194)";
                                        document.getElementById("Box2").style.textShadow = "0 0 50px white";

                                        document.getElementById("Box3").style.color = "rgb(199, 196, 194)";
                                        document.getElementById("Box3").style.textShadow = "0 0 50px white";

                                        document.getElementById("Box4").style.color = "rgb(199, 196, 194)";
                                        document.getElementById("Box4").style.textShadow = "0 0 50px white";

                                        document.getElementById("Box5").style.color = "rgb(199, 196, 194)";
                                        document.getElementById("Box5").style.textShadow = "0 0 50px white";

                                        document.getElementById("Box6").style.color = "rgb(199, 196, 194)";
                                        document.getElementById("Box6").style.textShadow = "0 0 50px white";

                                        document.getElementById("Box7").style.color = "rgb(199, 196, 194)";
                                        document.getElementById("Box7").style.textShadow = "0 0 50px white";

                                        document.getElementById("Box8").style.color = "rgb(199, 196, 194)";
                                        document.getElementById("Box8").style.textShadow = "0 0 50px white";

                                        document.getElementById("Box9").style.color = "rgb(199, 196, 194)";
                                        document.getElementById("Box9").style.textShadow = "0 0 50px white";


                                        if (distance == 0) {
                                            distance = 600;

                                        }
                                        Player1Played = 0;
                                        Player2Played = 0;
                                        if (Player1Wins == 1) {
                                            Player1Turn = 0;
                                            Player2Turn = 1;
                                        }
                                        else
                                            if (Player2Wins == 1) {
                                                Player1Turn = 1;
                                                Player2Turn = 0;
                                            }
                                        GameOver = 0;
                                        CallOnce = 0;
                                        PauseTimer = false;
                                        if (Player1Turn == 1) {
                                            if (Player1Played == 0) {
                                                document.getElementById("CurrentPlayer").innerHTML = localStorage.getItem("PLAYER1NAME");
                                            }
                                        }
                                        else
                                            if (Player2Turn == 1) {
                                                if (Player2Played == 0) {
                                                    document.getElementById("CurrentPlayer").innerHTML = localStorage.getItem("PLAYER2NAME");
                                                }
                                            }
                                    }, 3000);
                                }, 1000);
                            }
                        }
                        else
                            if (document.getElementById("Box1").innerHTML == "O" && document.getElementById("Box5").innerHTML == "O" && document.getElementById("Box9").innerHTML == "O") {
                                CallOnce++;
                                if (CallOnce == 1) {
                                    document.getElementById("Box1").style.color = "red";
                                    document.getElementById("Box1").style.textShadow = "0 0 50px red";

                                    document.getElementById("Box5").style.color = "red";
                                    document.getElementById("Box5").style.textShadow = "0 0 50px red";

                                    document.getElementById("Box9").style.color = "red";
                                    document.getElementById("Box9").style.textShadow = "0 0 50px red";

                                    GameOver = 1;
                                    PauseTimer = true;
                                    document.getElementById("ResetButton").style.filter = "blur(0.04em)";
                                    document.getElementById("ResetButton").style.cursor = "not-allowed";

                                    setTimeout(() => {
                                        Player2Wins = 1;
                                        Player1Wins = 0;
                                        P2SCORE++;
                                        document.getElementById("P2Score").innerHTML = P2SCORE;


                                        setTimeout(() => {
                                            document.getElementById("Box1").innerHTML = "";
                                            document.getElementById("Box2").innerHTML = "";
                                            document.getElementById("Box3").innerHTML = "";
                                            document.getElementById("Box4").innerHTML = "";
                                            document.getElementById("Box5").innerHTML = "";
                                            document.getElementById("Box6").innerHTML = "";
                                            document.getElementById("Box7").innerHTML = "";
                                            document.getElementById("Box8").innerHTML = "";
                                            document.getElementById("Box9").innerHTML = "";

                                            document.getElementById("Box1").style.color = "rgb(199, 196, 194)";
                                            document.getElementById("Box1").style.textShadow = "0 0 50px white";

                                            document.getElementById("Box2").style.color = "rgb(199, 196, 194)";
                                            document.getElementById("Box2").style.textShadow = "0 0 50px white";

                                            document.getElementById("Box3").style.color = "rgb(199, 196, 194)";
                                            document.getElementById("Box3").style.textShadow = "0 0 50px white";

                                            document.getElementById("Box4").style.color = "rgb(199, 196, 194)";
                                            document.getElementById("Box4").style.textShadow = "0 0 50px white";

                                            document.getElementById("Box5").style.color = "rgb(199, 196, 194)";
                                            document.getElementById("Box5").style.textShadow = "0 0 50px white";

                                            document.getElementById("Box6").style.color = "rgb(199, 196, 194)";
                                            document.getElementById("Box6").style.textShadow = "0 0 50px white";

                                            document.getElementById("Box7").style.color = "rgb(199, 196, 194)";
                                            document.getElementById("Box7").style.textShadow = "0 0 50px white";

                                            document.getElementById("Box8").style.color = "rgb(199, 196, 194)";
                                            document.getElementById("Box8").style.textShadow = "0 0 50px white";

                                            document.getElementById("Box9").style.color = "rgb(199, 196, 194)";
                                            document.getElementById("Box9").style.textShadow = "0 0 50px white";


                                            if (distance == 0) {
                                                distance = 600;

                                            }
                                            Player1Played = 0;
                                            Player2Played = 0;
                                            if (Player1Wins == 1) {
                                                Player1Turn = 0;
                                                Player2Turn = 1;
                                            }
                                            else
                                                if (Player2Wins == 1) {
                                                    Player1Turn = 1;
                                                    Player2Turn = 0;
                                                }
                                            GameOver = 0;
                                            CallOnce = 0;
                                            PauseTimer = false;
                                            if (Player1Turn == 1) {
                                                if (Player1Played == 0) {
                                                    document.getElementById("CurrentPlayer").innerHTML = localStorage.getItem("PLAYER1NAME");
                                                }
                                            }
                                            else
                                                if (Player2Turn == 1) {
                                                    if (Player2Played == 0) {
                                                        document.getElementById("CurrentPlayer").innerHTML = localStorage.getItem("PLAYER2NAME");
                                                    }
                                                }
                                        }, 3000);
                                    }, 1000);
                                }
                            }
                            else
                                if (document.getElementById("Box2").innerHTML == "O" && document.getElementById("Box5").innerHTML == "O" && document.getElementById("Box8").innerHTML == "O") {
                                    CallOnce++;
                                    if (CallOnce == 1) {
                                        document.getElementById("Box2").style.color = "red";
                                        document.getElementById("Box2").style.textShadow = "0 0 50px red";

                                        document.getElementById("Box5").style.color = "red";
                                        document.getElementById("Box5").style.textShadow = "0 0 50px red";

                                        document.getElementById("Box8").style.color = "red";
                                        document.getElementById("Box8").style.textShadow = "0 0 50px red";

                                        GameOver = 1;
                                        PauseTimer = true;
                                        document.getElementById("ResetButton").style.filter = "blur(0.04em)";
                                        document.getElementById("ResetButton").style.cursor = "not-allowed";

                                        setTimeout(() => {
                                            Player2Wins = 1;
                                            Player1Wins = 0;
                                            P2SCORE++;
                                            document.getElementById("P2Score").innerHTML = P2SCORE;


                                            setTimeout(() => {
                                                document.getElementById("Box1").innerHTML = "";
                                                document.getElementById("Box2").innerHTML = "";
                                                document.getElementById("Box3").innerHTML = "";
                                                document.getElementById("Box4").innerHTML = "";
                                                document.getElementById("Box5").innerHTML = "";
                                                document.getElementById("Box6").innerHTML = "";
                                                document.getElementById("Box7").innerHTML = "";
                                                document.getElementById("Box8").innerHTML = "";
                                                document.getElementById("Box9").innerHTML = "";

                                                document.getElementById("Box1").style.color = "rgb(199, 196, 194)";
                                                document.getElementById("Box1").style.textShadow = "0 0 50px white";

                                                document.getElementById("Box2").style.color = "rgb(199, 196, 194)";
                                                document.getElementById("Box2").style.textShadow = "0 0 50px white";

                                                document.getElementById("Box3").style.color = "rgb(199, 196, 194)";
                                                document.getElementById("Box3").style.textShadow = "0 0 50px white";

                                                document.getElementById("Box4").style.color = "rgb(199, 196, 194)";
                                                document.getElementById("Box4").style.textShadow = "0 0 50px white";

                                                document.getElementById("Box5").style.color = "rgb(199, 196, 194)";
                                                document.getElementById("Box5").style.textShadow = "0 0 50px white";

                                                document.getElementById("Box6").style.color = "rgb(199, 196, 194)";
                                                document.getElementById("Box6").style.textShadow = "0 0 50px white";

                                                document.getElementById("Box7").style.color = "rgb(199, 196, 194)";
                                                document.getElementById("Box7").style.textShadow = "0 0 50px white";

                                                document.getElementById("Box8").style.color = "rgb(199, 196, 194)";
                                                document.getElementById("Box8").style.textShadow = "0 0 50px white";

                                                document.getElementById("Box9").style.color = "rgb(199, 196, 194)";
                                                document.getElementById("Box9").style.textShadow = "0 0 50px white";


                                                if (distance == 0) {
                                                    distance = 600;

                                                }
                                                Player1Played = 0;
                                                Player2Played = 0;
                                                if (Player1Wins == 1) {
                                                    Player1Turn = 0;
                                                    Player2Turn = 1;
                                                }
                                                else
                                                    if (Player2Wins == 1) {
                                                        Player1Turn = 1;
                                                        Player2Turn = 0;
                                                    }
                                                GameOver = 0;
                                                CallOnce = 0;
                                                PauseTimer = false;
                                                if (Player1Turn == 1) {
                                                    if (Player1Played == 0) {
                                                        document.getElementById("CurrentPlayer").innerHTML = localStorage.getItem("PLAYER1NAME");
                                                    }
                                                }
                                                else
                                                    if (Player2Turn == 1) {
                                                        if (Player2Played == 0) {
                                                            document.getElementById("CurrentPlayer").innerHTML = localStorage.getItem("PLAYER2NAME");
                                                        }
                                                    }
                                            }, 3000);
                                        }, 1000);
                                    }
                                }
                                else
                                    if (document.getElementById("Box3").innerHTML == "O" && document.getElementById("Box6").innerHTML == "O" && document.getElementById("Box9").innerHTML == "O") {
                                        CallOnce++;
                                        if (CallOnce == 1) {
                                            document.getElementById("Box3").style.color = "red";
                                            document.getElementById("Box3").style.textShadow = "0 0 50px red";

                                            document.getElementById("Box6").style.color = "red";
                                            document.getElementById("Box6").style.textShadow = "0 0 50px red";

                                            document.getElementById("Box9").style.color = "red";
                                            document.getElementById("Box9").style.textShadow = "0 0 50px red";

                                            GameOver = 1;
                                            PauseTimer = true;
                                            document.getElementById("ResetButton").style.filter = "blur(0.04em)";
                                            document.getElementById("ResetButton").style.cursor = "not-allowed";

                                            setTimeout(() => {
                                                Player2Wins = 1;
                                                Player1Wins = 0;
                                                P2SCORE++;
                                                document.getElementById("P2Score").innerHTML = P2SCORE;


                                                setTimeout(() => {
                                                    document.getElementById("Box1").innerHTML = "";
                                                    document.getElementById("Box2").innerHTML = "";
                                                    document.getElementById("Box3").innerHTML = "";
                                                    document.getElementById("Box4").innerHTML = "";
                                                    document.getElementById("Box5").innerHTML = "";
                                                    document.getElementById("Box6").innerHTML = "";
                                                    document.getElementById("Box7").innerHTML = "";
                                                    document.getElementById("Box8").innerHTML = "";
                                                    document.getElementById("Box9").innerHTML = "";

                                                    document.getElementById("Box1").style.color = "rgb(199, 196, 194)";
                                                    document.getElementById("Box1").style.textShadow = "0 0 50px white";

                                                    document.getElementById("Box2").style.color = "rgb(199, 196, 194)";
                                                    document.getElementById("Box2").style.textShadow = "0 0 50px white";

                                                    document.getElementById("Box3").style.color = "rgb(199, 196, 194)";
                                                    document.getElementById("Box3").style.textShadow = "0 0 50px white";

                                                    document.getElementById("Box4").style.color = "rgb(199, 196, 194)";
                                                    document.getElementById("Box4").style.textShadow = "0 0 50px white";

                                                    document.getElementById("Box5").style.color = "rgb(199, 196, 194)";
                                                    document.getElementById("Box5").style.textShadow = "0 0 50px white";

                                                    document.getElementById("Box6").style.color = "rgb(199, 196, 194)";
                                                    document.getElementById("Box6").style.textShadow = "0 0 50px white";

                                                    document.getElementById("Box7").style.color = "rgb(199, 196, 194)";
                                                    document.getElementById("Box7").style.textShadow = "0 0 50px white";

                                                    document.getElementById("Box8").style.color = "rgb(199, 196, 194)";
                                                    document.getElementById("Box8").style.textShadow = "0 0 50px white";

                                                    document.getElementById("Box9").style.color = "rgb(199, 196, 194)";
                                                    document.getElementById("Box9").style.textShadow = "0 0 50px white";


                                                    if (distance == 0) {
                                                        distance = 600;

                                                    }
                                                    Player1Played = 0;
                                                    Player2Played = 0;
                                                    if (Player1Wins == 1) {
                                                        Player1Turn = 0;
                                                        Player2Turn = 1;
                                                    }
                                                    else
                                                        if (Player2Wins == 1) {
                                                            Player1Turn = 1;
                                                            Player2Turn = 0;
                                                        }
                                                    GameOver = 0;
                                                    CallOnce = 0;
                                                    PauseTimer = false;
                                                    if (Player1Turn == 1) {
                                                        if (Player1Played == 0) {
                                                            document.getElementById("CurrentPlayer").innerHTML = localStorage.getItem("PLAYER1NAME");
                                                        }
                                                    }
                                                    else
                                                        if (Player2Turn == 1) {
                                                            if (Player2Played == 0) {
                                                                document.getElementById("CurrentPlayer").innerHTML = localStorage.getItem("PLAYER2NAME");
                                                            }
                                                        }
                                                }, 3000);
                                            }, 1000);
                                        }
                                    }
                                    else
                                        if (document.getElementById("Box3").innerHTML == "O" && document.getElementById("Box5").innerHTML == "O" && document.getElementById("Box7").innerHTML == "O") {
                                            CallOnce++;
                                            if (CallOnce == 1) {
                                                document.getElementById("Box3").style.color = "red";
                                                document.getElementById("Box3").style.textShadow = "0 0 50px red";

                                                document.getElementById("Box5").style.color = "red";
                                                document.getElementById("Box5").style.textShadow = "0 0 50px red";

                                                document.getElementById("Box7").style.color = "red";
                                                document.getElementById("Box7").style.textShadow = "0 0 50px red";

                                                GameOver = 1;
                                                PauseTimer = true;
                                                document.getElementById("ResetButton").style.filter = "blur(0.04em)";
                                                document.getElementById("ResetButton").style.cursor = "not-allowed";

                                                setTimeout(() => {
                                                    Player2Wins = 1;
                                                    Player1Wins = 0;
                                                    P2SCORE++;
                                                    document.getElementById("P2Score").innerHTML = P2SCORE;


                                                    setTimeout(() => {
                                                        document.getElementById("Box1").innerHTML = "";
                                                        document.getElementById("Box2").innerHTML = "";
                                                        document.getElementById("Box3").innerHTML = "";
                                                        document.getElementById("Box4").innerHTML = "";
                                                        document.getElementById("Box5").innerHTML = "";
                                                        document.getElementById("Box6").innerHTML = "";
                                                        document.getElementById("Box7").innerHTML = "";
                                                        document.getElementById("Box8").innerHTML = "";
                                                        document.getElementById("Box9").innerHTML = "";

                                                        document.getElementById("Box1").style.color = "rgb(199, 196, 194)";
                                                        document.getElementById("Box1").style.textShadow = "0 0 50px white";

                                                        document.getElementById("Box2").style.color = "rgb(199, 196, 194)";
                                                        document.getElementById("Box2").style.textShadow = "0 0 50px white";

                                                        document.getElementById("Box3").style.color = "rgb(199, 196, 194)";
                                                        document.getElementById("Box3").style.textShadow = "0 0 50px white";

                                                        document.getElementById("Box4").style.color = "rgb(199, 196, 194)";
                                                        document.getElementById("Box4").style.textShadow = "0 0 50px white";

                                                        document.getElementById("Box5").style.color = "rgb(199, 196, 194)";
                                                        document.getElementById("Box5").style.textShadow = "0 0 50px white";

                                                        document.getElementById("Box6").style.color = "rgb(199, 196, 194)";
                                                        document.getElementById("Box6").style.textShadow = "0 0 50px white";

                                                        document.getElementById("Box7").style.color = "rgb(199, 196, 194)";
                                                        document.getElementById("Box7").style.textShadow = "0 0 50px white";

                                                        document.getElementById("Box8").style.color = "rgb(199, 196, 194)";
                                                        document.getElementById("Box8").style.textShadow = "0 0 50px white";

                                                        document.getElementById("Box9").style.color = "rgb(199, 196, 194)";
                                                        document.getElementById("Box9").style.textShadow = "0 0 50px white";


                                                        if (distance == 0) {
                                                            distance = 600;

                                                        }
                                                        Player1Played = 0;
                                                        Player2Played = 0;
                                                        if (Player1Wins == 1) {
                                                            Player1Turn = 0;
                                                            Player2Turn = 1;
                                                        }
                                                        else
                                                            if (Player2Wins == 1) {
                                                                Player1Turn = 1;
                                                                Player2Turn = 0;
                                                            }
                                                        GameOver = 0;
                                                        CallOnce = 0;
                                                        PauseTimer = false;
                                                        if (Player1Turn == 1) {
                                                            if (Player1Played == 0) {
                                                                document.getElementById("CurrentPlayer").innerHTML = localStorage.getItem("PLAYER1NAME");
                                                            }
                                                        }
                                                        else
                                                            if (Player2Turn == 1) {
                                                                if (Player2Played == 0) {
                                                                    document.getElementById("CurrentPlayer").innerHTML = localStorage.getItem("PLAYER2NAME");
                                                                }
                                                            }
                                                    }, 3000);
                                                }, 1000);
                                            }
                                        }
                                        else
                                            if (document.getElementById("Box4").innerHTML == "O" && document.getElementById("Box5").innerHTML == "O" && document.getElementById("Box6").innerHTML == "O") {
                                                CallOnce++;
                                                if (CallOnce == 1) {
                                                    document.getElementById("Box4").style.color = "red";
                                                    document.getElementById("Box4").style.textShadow = "0 0 50px red";

                                                    document.getElementById("Box5").style.color = "red";
                                                    document.getElementById("Box5").style.textShadow = "0 0 50px red";

                                                    document.getElementById("Box6").style.color = "red";
                                                    document.getElementById("Box6").style.textShadow = "0 0 50px red";

                                                    GameOver = 1;
                                                    PauseTimer = true;
                                                    document.getElementById("ResetButton").style.filter = "blur(0.04em)";
                                                    document.getElementById("ResetButton").style.cursor = "not-allowed";

                                                    setTimeout(() => {
                                                        Player2Wins = 1;
                                                        Player1Wins = 0;
                                                        P2SCORE++;
                                                        document.getElementById("P2Score").innerHTML = P2SCORE;


                                                        setTimeout(() => {
                                                            document.getElementById("Box1").innerHTML = "";
                                                            document.getElementById("Box2").innerHTML = "";
                                                            document.getElementById("Box3").innerHTML = "";
                                                            document.getElementById("Box4").innerHTML = "";
                                                            document.getElementById("Box5").innerHTML = "";
                                                            document.getElementById("Box6").innerHTML = "";
                                                            document.getElementById("Box7").innerHTML = "";
                                                            document.getElementById("Box8").innerHTML = "";
                                                            document.getElementById("Box9").innerHTML = "";

                                                            document.getElementById("Box1").style.color = "rgb(199, 196, 194)";
                                                            document.getElementById("Box1").style.textShadow = "0 0 50px white";

                                                            document.getElementById("Box2").style.color = "rgb(199, 196, 194)";
                                                            document.getElementById("Box2").style.textShadow = "0 0 50px white";

                                                            document.getElementById("Box3").style.color = "rgb(199, 196, 194)";
                                                            document.getElementById("Box3").style.textShadow = "0 0 50px white";

                                                            document.getElementById("Box4").style.color = "rgb(199, 196, 194)";
                                                            document.getElementById("Box4").style.textShadow = "0 0 50px white";

                                                            document.getElementById("Box5").style.color = "rgb(199, 196, 194)";
                                                            document.getElementById("Box5").style.textShadow = "0 0 50px white";

                                                            document.getElementById("Box6").style.color = "rgb(199, 196, 194)";
                                                            document.getElementById("Box6").style.textShadow = "0 0 50px white";

                                                            document.getElementById("Box7").style.color = "rgb(199, 196, 194)";
                                                            document.getElementById("Box7").style.textShadow = "0 0 50px white";

                                                            document.getElementById("Box8").style.color = "rgb(199, 196, 194)";
                                                            document.getElementById("Box8").style.textShadow = "0 0 50px white";

                                                            document.getElementById("Box9").style.color = "rgb(199, 196, 194)";
                                                            document.getElementById("Box9").style.textShadow = "0 0 50px white";


                                                            if (distance == 0) {
                                                                distance = 600;

                                                            }
                                                            Player1Played = 0;
                                                            Player2Played = 0;
                                                            if (Player1Wins == 1) {
                                                                Player1Turn = 0;
                                                                Player2Turn = 1;
                                                            }
                                                            else
                                                                if (Player2Wins == 1) {
                                                                    Player1Turn = 1;
                                                                    Player2Turn = 0;
                                                                }
                                                            GameOver = 0;
                                                            CallOnce = 0;
                                                            PauseTimer = false;
                                                            if (Player1Turn == 1) {
                                                                if (Player1Played == 0) {
                                                                    document.getElementById("CurrentPlayer").innerHTML = localStorage.getItem("PLAYER1NAME");
                                                                }
                                                            }
                                                            else
                                                                if (Player2Turn == 1) {
                                                                    if (Player2Played == 0) {
                                                                        document.getElementById("CurrentPlayer").innerHTML = localStorage.getItem("PLAYER2NAME");
                                                                    }
                                                                }
                                                        }, 3000);
                                                    }, 1000);
                                                }
                                            }
                                            else
                                                if (document.getElementById("Box7").innerHTML == "O" && document.getElementById("Box8").innerHTML == "O" && document.getElementById("Box9").innerHTML == "O") {
                                                    CallOnce++;
                                                    if (CallOnce == 1) {
                                                        document.getElementById("Box7").style.color = "red";
                                                        document.getElementById("Box7").style.textShadow = "0 0 50px red";

                                                        document.getElementById("Box8").style.color = "red";
                                                        document.getElementById("Box8").style.textShadow = "0 0 50px red";

                                                        document.getElementById("Box9").style.color = "red";
                                                        document.getElementById("Box9").style.textShadow = "0 0 50px red";

                                                        GameOver = 1;
                                                        PauseTimer = true;
                                                        document.getElementById("ResetButton").style.filter = "blur(0.04em)";
                                                        document.getElementById("ResetButton").style.cursor = "not-allowed";

                                                        setTimeout(() => {
                                                            Player2Wins = 1;
                                                            Player1Wins = 0;
                                                            P2SCORE++;
                                                            document.getElementById("P2Score").innerHTML = P2SCORE;


                                                            setTimeout(() => {
                                                                document.getElementById("Box1").innerHTML = "";
                                                                document.getElementById("Box2").innerHTML = "";
                                                                document.getElementById("Box3").innerHTML = "";
                                                                document.getElementById("Box4").innerHTML = "";
                                                                document.getElementById("Box5").innerHTML = "";
                                                                document.getElementById("Box6").innerHTML = "";
                                                                document.getElementById("Box7").innerHTML = "";
                                                                document.getElementById("Box8").innerHTML = "";
                                                                document.getElementById("Box9").innerHTML = "";

                                                                document.getElementById("Box1").style.color = "rgb(199, 196, 194)";
                                                                document.getElementById("Box1").style.textShadow = "0 0 50px white";

                                                                document.getElementById("Box2").style.color = "rgb(199, 196, 194)";
                                                                document.getElementById("Box2").style.textShadow = "0 0 50px white";

                                                                document.getElementById("Box3").style.color = "rgb(199, 196, 194)";
                                                                document.getElementById("Box3").style.textShadow = "0 0 50px white";

                                                                document.getElementById("Box4").style.color = "rgb(199, 196, 194)";
                                                                document.getElementById("Box4").style.textShadow = "0 0 50px white";

                                                                document.getElementById("Box5").style.color = "rgb(199, 196, 194)";
                                                                document.getElementById("Box5").style.textShadow = "0 0 50px white";

                                                                document.getElementById("Box6").style.color = "rgb(199, 196, 194)";
                                                                document.getElementById("Box6").style.textShadow = "0 0 50px white";

                                                                document.getElementById("Box7").style.color = "rgb(199, 196, 194)";
                                                                document.getElementById("Box7").style.textShadow = "0 0 50px white";

                                                                document.getElementById("Box8").style.color = "rgb(199, 196, 194)";
                                                                document.getElementById("Box8").style.textShadow = "0 0 50px white";

                                                                document.getElementById("Box9").style.color = "rgb(199, 196, 194)";
                                                                document.getElementById("Box9").style.textShadow = "0 0 50px white";


                                                                if (distance == 0) {
                                                                    distance = 600;

                                                                }
                                                                Player1Played = 0;
                                                                Player2Played = 0;
                                                                if (Player1Wins == 1) {
                                                                    Player1Turn = 0;
                                                                    Player2Turn = 1;
                                                                }
                                                                else
                                                                    if (Player2Wins == 1) {
                                                                        Player1Turn = 1;
                                                                        Player2Turn = 0;
                                                                    }
                                                                GameOver = 0;
                                                                CallOnce = 0;
                                                                PauseTimer = false;
                                                                if (Player1Turn == 1) {
                                                                    if (Player1Played == 0) {
                                                                        document.getElementById("CurrentPlayer").innerHTML = localStorage.getItem("PLAYER1NAME");
                                                                    }
                                                                }
                                                                else
                                                                    if (Player2Turn == 1) {
                                                                        if (Player2Played == 0) {
                                                                            document.getElementById("CurrentPlayer").innerHTML = localStorage.getItem("PLAYER2NAME");
                                                                        }
                                                                    }
                                                            }, 3000);
                                                        }, 1000);
                                                    }
                                                }
            }
        }, 100);
    }, 100);

    const Playing = (event) => {
        if (event.target.innerHTML == "") {
            if (GameOver == 0) {
                if (Player1Turn == 1) {
                    if (Player1Played == 0) {
                        Player1Played = 1;
                        Player2Played = 0;
                        document.getElementById("CurrentPlayer").innerHTML = localStorage.getItem("PLAYER2NAME");
                    }
                }
                else
                    if (Player2Turn == 1) {
                        if (Player2Played == 0) {
                            Player2Played = 1;
                            Player1Played = 0;
                            document.getElementById("CurrentPlayer").innerHTML = localStorage.getItem("PLAYER1NAME");
                        }
                    }

                if (Player1Played == 1) {
                    document.getElementById("ResetButton").style.filter = "blur(0em)";
                    document.getElementById("ResetButton").style.cursor = "pointer";
                    event.target.innerHTML = "×";
                    Player1Turn = 0;
                    Player2Turn = 1;
                }
                else
                    if (Player2Played == 1) {
                        document.getElementById("ResetButton").style.filter = "blur(0em)";
                        document.getElementById("ResetButton").style.cursor = "pointer";
                        event.target.innerHTML = "O";
                        Player2Turn = 0;
                        Player1Turn = 1;
                    }
            }
        }
    }

    const GoHome = () => {
        clearInterval(x);
        navigate("/");
    }
    const Reset = () => {
        document.getElementById("ResetButton").style.filter = "blur(0.04em)";
        document.getElementById("ResetButton").style.cursor = "not-allowed";

        document.getElementById("Box1").innerHTML = "";
        document.getElementById("Box2").innerHTML = "";
        document.getElementById("Box3").innerHTML = "";
        document.getElementById("Box4").innerHTML = "";
        document.getElementById("Box5").innerHTML = "";
        document.getElementById("Box6").innerHTML = "";
        document.getElementById("Box7").innerHTML = "";
        document.getElementById("Box8").innerHTML = "";
        document.getElementById("Box9").innerHTML = "";

        document.getElementById("Box1").style.color = "rgb(199, 196, 194)";
        document.getElementById("Box1").style.textShadow = "0 0 50px white";

        document.getElementById("Box2").style.color = "rgb(199, 196, 194)";
        document.getElementById("Box2").style.textShadow = "0 0 50px white";

        document.getElementById("Box3").style.color = "rgb(199, 196, 194)";
        document.getElementById("Box3").style.textShadow = "0 0 50px white";

        document.getElementById("Box4").style.color = "rgb(199, 196, 194)";
        document.getElementById("Box4").style.textShadow = "0 0 50px white";

        document.getElementById("Box5").style.color = "rgb(199, 196, 194)";
        document.getElementById("Box5").style.textShadow = "0 0 50px white";

        document.getElementById("Box6").style.color = "rgb(199, 196, 194)";
        document.getElementById("Box6").style.textShadow = "0 0 50px white";

        document.getElementById("Box7").style.color = "rgb(199, 196, 194)";
        document.getElementById("Box7").style.textShadow = "0 0 50px white";

        document.getElementById("Box8").style.color = "rgb(199, 196, 194)";
        document.getElementById("Box8").style.textShadow = "0 0 50px white";

        document.getElementById("Box9").style.color = "rgb(199, 196, 194)";
        document.getElementById("Box9").style.textShadow = "0 0 50px white";


        if (distance == 0) {
            distance = 600;

        }
        if (Player1Played == 1) {
            Player1Turn = 0;
            Player2Turn = 1;
        }
        else
            if (Player2Played == 1) {
                Player2Turn = 0;
                Player1Turn = 1;
            }
        // Player1Played = 0;
        // Player2Played = 0;
        GameOver = 0;
        CallOnce = 0;
    }

    const PauseGame = () => {
        PauseTimer = true;
        document.getElementById("PauseMenu").style.display = "block";
    }

    const RESUMEGAME = () => {
        document.getElementById("PauseMenu").style.display = "none";
        PauseTimer = false;
    }

    const RESTARTGAME = () => {
        document.getElementById("PauseMenu").style.display = "none";
        PauseTimer = false;
        document.getElementById("ResetButton").style.filter = "blur(0.04em)";
        document.getElementById("ResetButton").style.cursor = "not-allowed";

        document.getElementById("Box1").innerHTML = "";
        document.getElementById("Box2").innerHTML = "";
        document.getElementById("Box3").innerHTML = "";
        document.getElementById("Box4").innerHTML = "";
        document.getElementById("Box5").innerHTML = "";
        document.getElementById("Box6").innerHTML = "";
        document.getElementById("Box7").innerHTML = "";
        document.getElementById("Box8").innerHTML = "";
        document.getElementById("Box9").innerHTML = "";

        document.getElementById("Box1").style.color = "rgb(199, 196, 194)";
        document.getElementById("Box1").style.textShadow = "0 0 50px white";

        document.getElementById("Box2").style.color = "rgb(199, 196, 194)";
        document.getElementById("Box2").style.textShadow = "0 0 50px white";

        document.getElementById("Box3").style.color = "rgb(199, 196, 194)";
        document.getElementById("Box3").style.textShadow = "0 0 50px white";

        document.getElementById("Box4").style.color = "rgb(199, 196, 194)";
        document.getElementById("Box4").style.textShadow = "0 0 50px white";

        document.getElementById("Box5").style.color = "rgb(199, 196, 194)";
        document.getElementById("Box5").style.textShadow = "0 0 50px white";

        document.getElementById("Box6").style.color = "rgb(199, 196, 194)";
        document.getElementById("Box6").style.textShadow = "0 0 50px white";

        document.getElementById("Box7").style.color = "rgb(199, 196, 194)";
        document.getElementById("Box7").style.textShadow = "0 0 50px white";

        document.getElementById("Box8").style.color = "rgb(199, 196, 194)";
        document.getElementById("Box8").style.textShadow = "0 0 50px white";

        document.getElementById("Box9").style.color = "rgb(199, 196, 194)";
        document.getElementById("Box9").style.textShadow = "0 0 50px white";
        distance = 600;
        document.getElementById("P1Score").innerHTML = "0";
        document.getElementById("P2Score").innerHTML = "0";
        P1SCORE = 0;
        P2SCORE = 0;
        GameOver = 0;
        CallOnce = 0;
        Player1Played = 0;
        Player2Played = 0;
        Player1Turn = 1;
        Player2Turn = 0;
        document.getElementById("CurrentPlayer").innerHTML = localStorage.getItem("PLAYER1NAME");
    }

    const QUITGAME = () => {
        clearInterval(x);
        navigate("/");
    }
    return (
        <>
            <div id="MainGameContainer">
                <div id="PlayerTurn">Its Your Turn <span id="CurrentPlayer"></span>
                </div>
                <div id="MainGameContents">
                    <div id="Box1" onClick={Playing}></div>
                    <div id="Box2" onClick={Playing}></div>
                    <div id="Box3" onClick={Playing}></div>
                    <div id="Box4" onClick={Playing}></div>
                    <div id="Box5" onClick={Playing}></div>
                    <div id="Box6" onClick={Playing}></div>
                    <div id="Box7" onClick={Playing}></div>
                    <div id="Box8" onClick={Playing}></div>
                    <div id="Box9" onClick={Playing}></div>
                </div>

                <div id="BackButton" onClick={GoHome}> {"<"} Back</div>
                <div id="ResetButton" onClick={Reset}>RESET</div>
                <div id="PlayerScores">
                    <div id="PSFlex">
                        <div id="PLAYER1NameAndScore"><span id="P1Name"></span> : <span id="P1Score"></span></div>
                        <div id="PLAYER2NameAndScore"><span id="P2Name"></span> : <span id="P2Score"></span></div>
                    </div>
                </div>
                <div id="TimeAndPauseButton">
                    <div id="TimeAndPauseButtonFlex">
                        <div id="Time"></div>
                        <div id="PauseButton" onClick={PauseGame}>||</div>
                    </div>
                </div>
                <div id="Winner">
                    <div id="WinnerContent"><span id="WinnerPlayerName"></span> Is The Winner!!</div>
                </div>

                <div id="PauseMenu">
                    <div id="PauseMenuContent">
                        <div id="ResumeButton" onClick={RESUMEGAME}>RESUME</div>
                        <div id="RestartButton" onClick={RESTARTGAME}>RESTART</div>
                        <div id="QuitButton" onClick={QUITGAME}>QUIT</div>
                    </div>
                </div>
            </div>
        </>
    )

}