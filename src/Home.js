import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    setTimeout(() => {
        if (document.getElementById("LoaderHandler").style.display == "none") {
            document.getElementById("MainContainer").style.display = "block";
        }
        if (!localStorage.getItem("PLAYER1NAME") == "") {
            document.getElementById("EditName").innerHTML = localStorage.getItem("PLAYER1NAME");
        }

        if (!localStorage.getItem("PLAYER2NAME") == "") {
            document.getElementById("EditName2").innerHTML = localStorage.getItem("PLAYER2NAME");
        }
        document.getElementById("EditBut").addEventListener('click', () => {
            document.getElementById("PopUp").style.display = "block";
        });

        document.getElementById("EditBut2").addEventListener('click', () => {
            document.getElementById("PopUp2").style.display = "block";
        });
    }, 100);

    const ClosePopUp =() => {
        document.getElementById("PopUp").style.display = "none";    
    }

    const ClosePopUp2 =() => {
        document.getElementById("PopUp2").style.display = "none";    
    }

    const EDITNAME = () => {
        if (!document.getElementById("NameInput").value == "") {
            document.getElementById("EditName").innerHTML = document.getElementById("NameInput").value;
            document.getElementById("PopUp").style.display = "none";
            localStorage.setItem("PLAYER1NAME", document.getElementById("EditName").innerHTML);
        }
    }

    const CheckIfTyping = () => {
        if (!document.getElementById("NameInput").value == "") {
            document.getElementById("ConfirmBut").style.filter = "blur(0em)";
            document.getElementById("ConfirmBut").style.cursor = "pointer";
        }
        else {
            document.getElementById("ConfirmBut").style.filter = "blur(0.04em)";
            document.getElementById("ConfirmBut").style.cursor = "not-allowed"; 
        }
    }




    const EDITNAME2 = () => {
        if (!document.getElementById("NameInput2").value == "") {
            document.getElementById("EditName2").innerHTML = document.getElementById("NameInput2").value;
            document.getElementById("PopUp2").style.display = "none";
            localStorage.setItem("PLAYER2NAME", document.getElementById("EditName2").innerHTML);
        }
    }

    const CheckIfTyping2 = () => {
        if (!document.getElementById("NameInput2").value == "") {
            document.getElementById("ConfirmBut2").style.filter = "blur(0em)";
            document.getElementById("ConfirmBut2").style.cursor = "pointer";
        }
        else {
            document.getElementById("ConfirmBut2").style.filter = "blur(0.04em)";
            document.getElementById("ConfirmBut2").style.cursor = "not-allowed"; 
        }
    }

    const START = () => {
        if (!localStorage.getItem("PLAYER1NAME") == "" && !localStorage.getItem("PLAYER2NAME") == "") {
            navigate("/MainGame");
        }
        else {
            alert("Set Player Names Before Starting Game!!");
        }
    }
    return (
        <>
            <div id="MainContainer">
                <div id="Container">
                    <div id="PlayerBox">
                        <span id="PlayerName">PLAYER 1</span> <br />
                        <span id="EditName">PLAYERNAME</span><br />
                        <span id="PlayerLetter">×</span><br />
                        <span id="EditBut">EDIT NAME</span>
                    </div>
                    <div id="PlayerBox2">
                        <span id="PlayerName2">PLAYER 2</span> <br />
                        <span id="EditName2">PLAYERNAME</span><br />
                        <span id="PlayerLetter2">O</span><br />
                        <span id="EditBut2">EDIT NAME</span>
                    </div>
                </div >
                <center><div id="StartButton" onClick={START}>START GAME</div></center>
                <div id="PopUp">
                    <center>
                        <div id="PopUpContent">
                            <div id="CYN">CHOOSE YOUR NAME</div> <br />
                            <div id="YN">YOUR NAME </div><br />
                            <input id="NameInput" maxLength="6" type="text" placeholder="Type In Your Name" onChange={CheckIfTyping} /> <br />
                            <div id="PopUpButtons">
                                <div id="CancelBut" onClick={ClosePopUp}>×</div>
                                <div id="ConfirmBut" onClick={EDITNAME}>√</div>
                            </div>
                        </div>
                    </center>
                </div>


                <div id="PopUp2">
                    <center>
                        <div id="PopUpContent">
                            <div id="CYN">CHOOSE YOUR NAME</div> <br />
                            <div id="YN">YOUR NAME </div><br />
                            <input id="NameInput2" maxLength="6" type="text" placeholder="Type In Your Name" onChange={CheckIfTyping2} /> <br />
                            <div id="PopUpButtons">
                                <div id="CancelBut" onClick={ClosePopUp2}>×</div>
                                <div id="ConfirmBut2" onClick={EDITNAME2}>√</div>
                            </div>
                        </div>
                    </center>
                </div>
            </div >
        </>
    )
}