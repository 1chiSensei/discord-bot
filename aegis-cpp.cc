#include <aegis.hpp>

int main()
{
    aegis::core bot(aegis::create_bot_t().log_level(spdlog::level::trace).token("TOKEN"));
    bot.set_on_message_create([](auto obj)
    {
        if (obj.msg.get_content() == "Hi")
            obj.msg.get_channel().create_message(fmt::format("Hello {}", obj.msg.author.username));
    });
    bot.run();
    bot.yield();
}
