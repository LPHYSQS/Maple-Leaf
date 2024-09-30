document.addEventListener('DOMContentLoaded', function() {
    var studioLogoContainer = document.getElementById('studioLogoContainer');
    var studioLogo = document.getElementById('studioLogo');
    var studioText = document.getElementById('studioText');
    var mainContent = document.getElementById('mainContent');
    var card = document.getElementById('card');
    var title = document.getElementById('title');
    var downloadExeButton = document.getElementById('downloadExeButton');
    var downloadZipButton = document.getElementById('downloadZipButton');
    var versionText = document.getElementById('versionText');
    var rightImageContainer = document.getElementById('rightImageContainer');
    var socialButtons = document.getElementById('socialButtons');
    var yearVersionText = document.getElementById('yearVersionText');

    // Function to check screen width and toggle rightImageContainer visibility and studioText font size
    function checkScreenWidth() {
        if (window.matchMedia("(max-width: 956px)").matches) {
            rightImageContainer.style.display = 'none';
            studioText.style.fontSize = 'smaller'; // Adjust the font size as needed
        } else {
            rightImageContainer.style.display = 'block';
            studioText.style.fontSize = ''; // Reset to default font size
        }
    }

    // Check screen width on initial load
    checkScreenWidth();

    // Add event listener for screen size changes
    window.addEventListener('resize', checkScreenWidth);

    studioLogo.onload = function() {
        studioLogoContainer.style.opacity = '1';

        setTimeout(function() {
            studioLogoContainer.style.opacity = '0';

            setTimeout(function() {
                studioLogoContainer.style.display = 'none';
                mainContent.style.display = 'flex';
                socialButtons.style.display = 'flex';
                checkScreenWidth(); // Check screen width again after display change
                setTimeout(function() {
                    card.style.opacity = '1';
                    title.style.opacity = '1';
                    downloadExeButton.style.opacity = '1';
                    downloadZipButton.style.opacity = '1';
                    versionText.style.opacity = '1';
                    rightImageContainer.style.opacity = '1'; // Add this line
                    socialButtons.style.opacity = '1'; // Add this line
                    yearVersionText.style.opacity = '1'; // Add this line
                }, 100);
            }, 1000);
        }, 2000);
    };

    downloadExeButton.addEventListener('click', function() {
        var downloadUrlExe = "https://github.com/LPHYSQS/Maple-Leaf/releases/download/V1.2.1/MapleLeafSetup.exe";
        window.location.href = downloadUrlExe;
    });

    downloadZipButton.addEventListener('click', function() {
        var downloadUrlZip = "https://github.com/LPHYSQS/Maple-Leaf/releases/download/V1.2.1/Maple.Leaf-win64-v1.2.1.zip";
        window.location.href = downloadUrlZip;
    });
});
