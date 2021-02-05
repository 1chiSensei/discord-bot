import Sword

let bot = Sword(token: "Your bot token here")

bot.editStatus(to: "online", playing: "with Sword!")

bot.on(.messageCreate) { data in
  let msg = data as! Message

  if msg.content == "!ping" {
    msg.reply(with: "Pong!")
  }
}

bot.connect()
