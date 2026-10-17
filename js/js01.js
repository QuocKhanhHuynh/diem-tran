console.log('ready');

    var bgMusic = document.getElementById('bg-music');
    if (bgMusic) {
        var tryPlay = function () {
            bgMusic.play().catch(function () {});
        };
        tryPlay();
        document.addEventListener('click', tryPlay, { once: true });
        document.addEventListener('touchstart', tryPlay, { once: true });
    }

    var james = $('#bond');

    var right = function () {
        james.animate({ left: '5px' }, 600, left);
    };

    var left = function () {
        james.animate({ left: '0px' }, 600, right);
    };
    right();