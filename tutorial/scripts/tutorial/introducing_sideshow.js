//A Sideshow Tutorial Example
//This tutorial introduces the Sideshow basics to the newcomer
var PlaylistName = "";
var menuPlaylist = "";
var amount = "";
Sideshow.registerWizard({
    name: "Introduction",
    title: "Introducing WLK",
    description: "Introducing the main features of welovekpop.club",
    estimatedTime: "5 Minutes",
    affects: [
        function() {
            //Here we could do any checking to infer if this tutorial is eligible the current screen/context.
            //After this checking, just return a boolean indicating if this tutorial will be available.
            //As a simple example we're returning a true, so this tutorial would be available in any context
            return true;
        }
    ]
}).storyLine({
    showStepPosition: true,
    steps: [{
            title: "What is WE ❤ KPOP?",
            text: "WE ❤ KPOP (WLK) is a **multi-platform community** dedicated to sharing the best South Korean music. Our main website, üWave, allows you to contribute to a **collaborative listening experience** by sharing your favourite songs. This tutorial will introduce you to the main aspects of the site: the live Chat and the creation of Playlists.",
            format: "markdown"
        }, {
            title: "The Chat",
            text: "Share your opinion on what you hear by participating in the Chat. Here, you'll be able to talk to every user in the Room. You'll also find our resident bot helping us out. **SekshiBot** greets everyone who signs into the WLK Room and will respond to certain **commands.**",
            subject: ".ChatContainer-messages",
            format: "markdown"
        }, {
            title: "Playlist Manager",
            text: "You'll need to create a Playlist to start playing. Let's begin by opening the **Playlist Manager**, which is located at the bottom of the Room. Give it a click!",
            completingConditions: [
                function() {
                    return $(".PlaylistManager")[0];
                }
            ],
            subject: ".FooterBar-next",
            targets: ".FooterBar-next",
            format: "markdown"
        }, {
            title: "Creating a Playlist",
            text: "Click on the **'Create Playlist'** button and enter a name for your first Playlist.",
            completingConditions: [
                function() {
                    return $(".Dialog")[0];
                }
            ],
            subject: ".PlaylistMenuRow--create",
            targets: ".PlaylistMenuRow--create",
            format: "markdown"
        }, {
            title: "Creating a Playlist",
            text: "Enter the name of the playlist and click on 'Create'.",
            completingConditions: [
                function() {

                    return !$(".TextField-input:visible").length > 0;
                }
            ],
            listeners: {
                beforeStep: function() {
                },
                afterStep: function() {
                    PlaylistName = $(".PlaylistMeta-name").html();
                    menuPlaylist = $('.PlaylistMenu-row').has('.PlaylistMenuRow-title:contains("'+PlaylistName+'")')[0];
					amount = $('.PlaylistMenu-row').has('.PlaylistMenuRow-title:contains("'+PlaylistName+'")')[0].lastChild.lastChild.innerHTML;

                },
            },
            subject: ".Dialog",
            targets: ".TextField-input",
            format: "markdown"
        }, {
            title: "Search  for a song to play",
            text: "This is the search bar. At the far right of this bar, you can select a platform from which to play a song; currently, you may choose between **YouTube** and **SoundCloud**. Please enter the name, artist or URL of the song that you want to add.",
            listeners: {
                beforeStep: function() {
                    $(".SearchBar-input").focus();
                },
                afterStep: function() {

                },
            },
            completingConditions: [
                function() {
                    return $(".SearchResults-query")[0];
                }
            ],
            subject: ".SearchBar",
            targets: ".SearchBar",
            format: "markdown"
        }, {
            title: "Adding a song to your "+PlaylistName+ " Playlist",
            text: "**Drag and drop** your chosen song into your "+ PlaylistName +" Playlist (located in the left-hand bar). All of your available Playlists will be displayed here.",
            listeners: {
                beforeStep: function() {
                },
                afterStep: function() {
                    $('.PlaylistMenuRow-title:contains("'+PlaylistName+'")')[0].click();
                },
            },
            completingConditions: [
                function() {
                    return menuPlaylist.lastChild.lastChild.innerHTML > amount;
                }
            ],
            subject: ".PlaylistManager",
			targets: menuPlaylist,
            format: "markdown"
        }, {
            title: "Activate your Playlist",
            text: "Click this checkbox to activate your Playlist. This will ensure that songs from the correct Playlist have been selected when it is your turn to play.",
            completingConditions: [
                function() {
                    return $(".PlaylistMeta-active").find('input[type="checkbox"]').is(':checked');
                }
            ],
            subject: ".PlaylistManager",
            targets: ".PlaylistMeta-active",
            format: "markdown"
        }, {
            title: "You're ready!",
            text: "Awesome! You've now created a Playlist and have added your first song. If you're ready, you can **join the Waitlist** to play it live for everyone to hear. All available tutorials can be found in the Settings at the bottom left of the Playlist Manager. Additionally, if you have any questions, please ask a Moderator, Manager or Admin in the Chat.",
            subject: ".FooterBar-join",
            targets: ".FooterBar-join",
            format: "markdown"
        }

    ]
});
