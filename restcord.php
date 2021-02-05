<?php

include __DIR__.'/vendor/autoload.php';

use RestCord\DiscordClient;

$discord = new DiscordClient(['token' => 'bot-token']); // Token is required

var_dump($discord->guild->getGuild(['guild.id' => 81384788765712384]));
