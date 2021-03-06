auto = setInterval(function() {
    // Send hunters   
        $("a:contains('Bonfire')")[0].click();
        $("span:contains('Send hunters')").click();
    
        $("a:contains('Town')")[0].click();
        $("div:contains('Artisan')")[8].children[1].children[0].click();
        $("a:contains('Bonfire')")[0].click();
    
    // Automatically Observe Astronomical Events
        $("#observeBtn").click();
        
    // Automatically Convert Catnip to Wood
        var catnip = gamePage.resPool.get('catnip');
        var calendar = gamePage.calendar;

        if (catnip.value / catnip.maxValue > 0.95 && catnip.perTickCached > 0) { 
            gamePage.craftAll('wood');
        }
        
    // Craft rare materials 
        if (gamePage.workshop.getCraft('parchment').unlocked)  { gamePage.craftAll('parchment');  }
        if (gamePage.workshop.getCraft('manuscript').unlocked) { gamePage.craftAll('manuscript'); }
        if (gamePage.workshop.getCraft('blueprint').unlocked)  { gamePage.craftAll('blueprint');  }
        if (gamePage.workshop.getCraft('compedium').unlocked)  { gamePage.craftAll('compedium');  }
    
    // Craft base materials
        var resources = [["wood", "beam" ], ["minerals", "slab" ], ["coal", "steel"], ["iron", "plate"]];
    
        for (var i = 0; i < resources.length; i++) {
            var curRes = gamePage.resPool.get(resources[i][0]);
            if (curRes.value / curRes.maxValue > 0.95 && gamePage.workshop.getCraft(resources[i][1]).unlocked) {
                gamePage.craftAll(resources[i][1]);
            }
        }
    // Praise the sun
        var faith = gamePage.resPool.get('faith');
        if (faith.value / faith.maxValue > 0.95) {
            $("a:contains('Praise the sun')")[0].click();
        }
    // Select Manager
        $("a:contains('Town')")[0].click();
        $("div:contains('Manager')")[8].children[1].children[0].click();
        $("a:contains('Bonfire')")[0].click();
}, 5 * 1000);
clearInterval(auto);
// https://www.reddit.com/r/kittensgame/comments/2eqlt5/a_few_kittens_game_scripts_ive_put_together/
