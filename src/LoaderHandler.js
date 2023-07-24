export default function LoaderHandler() {
    setTimeout(() => {
        if (document.getElementById("MainContainer")) {
            document.getElementById("AppName").style.animationName = "none";
            document.getElementById("AppName3").style.animationName = "none";
            document.getElementById("AppName").style.left = "33.5%";
            document.getElementById("AppName3").style.right = "33.5%";
            setTimeout(() => {
                document.getElementById("AppName").style.visibility = "hidden";
                document.getElementById("AppName3").style.visibility = "hidden";
                document.getElementById("AppName").innerHTML = "";
                document.getElementById("AppName3").innerHTML = "";
                document.getElementById("AppName2").style.left = "100%";
                document.getElementById("AppName2").innerHTML = "X&O";
                document.getElementById("AppName2").style.animationDelay = "0s";
                document.getElementById("AppName2").style.animationName = "ScaleOut";
                document.getElementById("AppName2").style.animationIterationCount = "1";
                setTimeout(() => {
                    document.getElementById("Loader").style.display = "none";
                    document.getElementById("MainContainer").style.display = "block";
                    document.getElementById("LoaderHandler").style.display = "none";
                }, 3000);
            }, 1000);
        }
    }, 7000);
    return (
        <>
            <div id="LoaderHandler">

            </div>
        </>
    )
}