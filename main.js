document.getElementById("goButton").addEventListener("click", function () {
    var selectedMechanic = document.getElementById("mechanicDropdown").value;
    var selectedStation = document.getElementById("stationDropdown").value;

    selectedMechanic = selectedMechanic.toUpperCase().replace(" ", "_");
    selectedStation = selectedStation.toUpperCase().replace(" ", "_");

    var baseRedirectURL = "https://web.miniextensions.com/Coh40eDvJWVxS734kjh1?prefill_Mechanic=" + selectedMechanic;

    var redirectionURLs = {
        "QC1": baseRedirectURL + "&prefill_Station=" + selectedStation,
        "QC2": baseRedirectURL + "&prefill_Station=" + selectedStation,
        "QC3": baseRedirectURL + "&prefill_Station=" + selectedStation,
        "QC4": baseRedirectURL + "&prefill_Station=" + selectedStation
        
    };

    if (redirectionURLs[selectedStation]) {
        window.location.href = redirectionURLs[selectedStation];
    } else {
        alert("Please select both a mechanic and a station before clicking Go.");
    }
});
