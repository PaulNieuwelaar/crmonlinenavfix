# Dynamics 365 Online Nav Fix - Remove the 'Switch to another app' Menu
[![download](https://user-images.githubusercontent.com/14048382/27844360-c7ea9670-6174-11e7-8658-80d356c1ba8f.png)](https://github.com/PaulNieuwelaar/crmonlinenavfix/releases/download/v1.0/OnlineNavFix_1_0_0_0_managed.zip) (v1.0)

So you're trying to navigate somewhere in Dynamics 365 Online, and you click the little down arrow next to the Dynamics 365 logo, because in past versions of CRM that's the go-to place for navigating. But instead of being welcomed with the beautiful Dynamics 365 navigation menu, you're instead presented with the 'switch to another app' screen.

![](https://user-images.githubusercontent.com/14048382/29758198-ada19618-8c05-11e7-8ad1-0f2fc420c8ed.png)

I'm sure everyone has done this at least once, or like me, you've done it enough times that you felt the need to create a solution to fix it.

Basically what we want to see when clicking this button, is what we're expecting to see, and what we're used to seeing, which is the top level CRM navigation menu. Although since this is now visible when clicking into the 'Sales' menu for example, we'd essentially just want to see this menu by default.

![](https://user-images.githubusercontent.com/14048382/29758196-ad7ee9b0-8c05-11e7-85df-c1431ccc158b.png)

So what I've done is created a solution which runs a script on load of any screen in Dynamics 365 (via a custom hidden command bar button), which hacks into the menu bar, and overwrites the click event of that button with the click event of the other button. In other words, whenever you or any of your users click the down arrow next to the Dynamics 365 logo, instead of getting the switch apps screen, you'll get the navigation menu just as if you'd clicked the right button in the first place.

![](https://user-images.githubusercontent.com/14048382/29758197-ada16062-8c05-11e7-98d3-ed9f9c87cbbd.png)

The result? less frustration, and less clicks (because you don't have to waste time clicking the actual button). Note that this is highly unsupported, and should only be used if like me, you're frustrated with clicking the wrong button all the time and cannot wait until it gets fixed properly. So, I'd recommend using the managed solution in case it ever breaks, or gets fixed properly, it can easily be uninstalled. Also important to note that if you navigate somewhere and then quickly click the button again before the page has fully loaded, there's a chance you'll see the switch apps screen before the script has a chance to overwrite it again. But you can just click it again once it's loaded and she'll be right.

Created by [Paul Nieuwelaar](http://paulnieuwelaar.wordpress.com) - [@paulnz1](https://twitter.com/paulnz1)  
Sponsored by [Magnetism Solutions - Dynamics CRM Specialists](http://www.magnetismsolutions.com)

[![](https://user-images.githubusercontent.com/14048382/30045114-3805d840-9256-11e7-9bdb-323760fb43ea.png)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=WDZ9MWLLWBWFE)
