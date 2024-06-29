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
    var socialButtons=document.getElementById('socialButtons');
    var yearVersionText=document.getElementById('yearVersionText');

    studioLogo.onload = function() {
        studioLogoContainer.style.opacity = '1';

        setTimeout(function() {
            studioLogoContainer.style.opacity = '0';
            
            setTimeout(function() {
                studioLogoContainer.style.display = 'none';
                mainContent.style.display = 'flex';
                rightImageContainer.style.display = 'block'; // 添加这一行
                socialButtons.style.display = 'flex';
                setTimeout(function() {
                    card.style.opacity = '1';
                    title.style.opacity = '1';
                    downloadExeButton.style.opacity = '1';
                    downloadZipButton.style.opacity = '1';
                    versionText.style.opacity = '1';
                    rightImageContainer.style.opacity = '1'; // 添加这一行
                    socialButtons.style.opacity = '1'; // 添加这一行
                    yearVersionText.style.opacity = '1'; // 添加这一行
                }, 100);
            }, 1000);
        }, 2000);
    };

    downloadExeButton.addEventListener('click', function() {
        var downloadUrlExe = "https://github.com/LPHYSQS/Maple-Leaf/releases/download/V1.0.0.3/MapleLeafSetup.exe";
        window.location.href = downloadUrlExe;
    });

    downloadZipButton.addEventListener('click', function() {
        var downloadUrlZip = "https://github.com/LPHYSQS/Maple-Leaf/releases/download/V1.0.0.3/Maple.Leaf-win64-v1.0.0.3.zip";
        window.location.href = downloadUrlZip;
    });
});
