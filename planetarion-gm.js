// ==UserScript==
// @name         Planetarion style script
// @namespace    http://www.hoyce.com/
// @version      1.1
// @description  A user script that style and make the interface of Planetarion more user friendly
// @include 	     http://game.planetarion.com/*
// @author       Hoyce
// @require      http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==

$(document).ready(function() {

    function setGeneralLinkStyle() {
        $('.tab_link').css('color','#ffffff');
      $('.tab_link.tab_link_active').css('color','#47b4fa');

        $('.tab_link').on('click', function() {
        setGeneralLinkStyle();
      });
    }

    function resetMenuLinks() {
        var menuGroupItems = $('ul#menu li.menu_grp ul li a');
        var menuItems = $('ul#menu li a');
        menuGroupItems.css('color', '#ffffff').css('font-weight', 'normal');
        menuItems.css('color', '#ffffff').css('font-weight', 'normal');
    }

    function setActiveLink(element) {
        var menuItem = $(element);
        menuItem.css('font-weight', 'bold').css('color', '#47b4fa');
    }

    function setTitle(title) {
        $('title').text('PA ' + title);
    }

    function setSelectedMenuItem() {
        if(window.location.href.indexOf("forum.pl") > 0) {
            setActiveLink('li#menu_forums a');
            setTitle('Forum');
        }
        if(window.location.href.indexOf("chat.pl") > 0) {
            setActiveLink('li#menu_comunit a');
            setTitle('Chat');
        }
        if(window.location.href.indexOf("mining.pl") > 0) {
            setActiveLink('li#menu_mining a');
            setTitle('Mining');
        }
        if(window.location.href.indexOf("research.pl") > 0) {
            setActiveLink('li#menu_research a');
            setTitle('Research');
        }
        if(window.location.href.indexOf("constructions.pl") > 0) {
            setActiveLink('li#menu_construction a');
            setTitle('Construction');
        }
        if(window.location.href.indexOf("population.pl") > 0) {
            setActiveLink('li#menu_population a');
            setTitle('Population');
        }
        if(window.location.href.indexOf("waves.pl") > 0) {
            setActiveLink('li#menu_waves a');
            setTitle('Waves');
        }
        if(window.location.href.indexOf("covert.pl") > 0) {
            setActiveLink('li#menu_covert_ops a');
            setTitle('Covert Ops');
        }
        if(window.location.href.indexOf("production.pl") > 0) {
            setActiveLink('li#menu_production a');
            setTitle('Production');
        }
        if(window.location.href.indexOf("fleets.pl") > 0) {
            setActiveLink('li#menu_fleets a');
            setTitle('Fleets');
        }
        if(window.location.href.indexOf("bcalc.pl") > 0) {
            setActiveLink('li#menu_bcalc a');
            setTitle('BCalc');
        }
        if(window.location.href.indexOf("galaxy_status.pl") > 0) {
            setActiveLink('li#menu_galaxy_status a');
            setTitle('Status');
        }
        if(window.location.href.indexOf("politics.pl") > 0) {
            setActiveLink('li#menu_politics a');
            setTitle('Politics');
        }
        if(window.location.href.indexOf("galaxy.pl") > 0) {
            setActiveLink('li#menu_galaxy a');
            setTitle('Galaxy');
        }
        if(window.location.href.indexOf("alliance.pl") > 0) {
            setActiveLink('li#menu_alliance a');
            setTitle('Alliance');
        }
        if(window.location.href.indexOf("universe.pl") > 0) {
            setActiveLink('li#menu_universe a');
            setTitle('Universe');
        }
        if(window.location.href.indexOf("history.pl") > 0) {
            setActiveLink('li#menu_history a');
            setTitle('History');
        }
        if(window.location.href.indexOf("journal.pl") > 0) {
            setActiveLink('li#menu_journal a');
            setTitle('Journal');
        }
        if(window.location.href.indexOf("support.pl") > 0) {
            setActiveLink('li#menu_support a');
            setTitle('Support');
        }
        if(window.location.href.indexOf("manual.pl") > 0) {
            setActiveLink('li#menu_manual a');
            setTitle('Manual');
        }
        if(window.location.href.indexOf("manual.pl?page=stats") > 0) {
            setActiveLink('li#menu_stats a');
            setTitle('Stats');
        }
        if(window.location.href.indexOf("portal.pl") > 0) {
            setActiveLink('li#menu_portal a');
            setTitle('Portal');
        }
        if(window.location.href.indexOf("preferences.pl") > 0) {
            alert('hej');
            setActiveLink('ul#menu li#menu_preferences a');
            setTitle('Preferences');
        }
    }

    function setAllianceMenu() {
      if(window.location.href.indexOf("alliance_attacks.pl") > 0) {
            $("a[href*='alliance_attacks.pl']").css('color','#47b4fa').css('font-weight', 'bold');
            setTitle('Alliance');
        }
        if(window.location.href.indexOf("alliance_defence.pl") > 0) {
            $("a[href*='alliance_defence.pl']").css('color','#47b4fa').css('font-weight', 'bold');
            setTitle('Alliance');
        }
    }

    function setBattleCalculatorStyle() {
        if(window.location.href.indexOf("bcalc.pl") > 0) {
            $('#bcalc').css('background', 'none');
            $('#bcalc').css('background-color', '#000');
            $('.container').css('display', 'none');
            $('#bcalc input').css('font-size', '12px');
            $('#bcalc input').css('padding', '2px 4px');
            $('th#def').css('border-right', '2px dashed #fff');
            $('th#def_value').css('border-right', '2px dashed #fff')
                     .css('border-top', '2px dashed #fff')
                             .css('padding', '6px 2px');
            $('th#att_score').css('border-top', '2px dashed #fff')
                             .css('padding', '6px 2px');
        }
    }

    /*
     * Run the script
     */
    setGeneralLinkStyle();
    resetMenuLinks();
    setSelectedMenuItem();
    setBattleCalculatorStyle();
    setAllianceMenu();
});
