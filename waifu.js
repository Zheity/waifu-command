const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "waifu",
    description: "See your waifu",
    category: "Utility",
    options: [
        {
            name: "categorie",
            description: "choose your category",
            type: 3,
            required: true,
            choices: [
                { name: "Waifu", value: "waifu" },
                { name: "Maid", value: "maid" },
                { name: "Marin Kitagawa", value: "marin-kitagawa" },
                { name: "Mori Calliopea", value: "mori-calliope" },
                { name: "Raiden Shogun", value: "raiden-shogun" },
                { name: "Oppai", value: "oppai" },
                { name: "Selfies", value: "selfies" },
                { name: "Uniform", value: "uniform" },
            ]
        },
    ],

    run: async (client, interaction) => {

        const type  = interaction.options.getString("categorie")

        const body = await fetch(`https://api.waifu.im/search/?included_tags=${type}`).then((res) => res.json());

        const embed = new EmbedBuilder()
        .setTitle("Hello i'm your waifu ♥️")
        .setColor("Random")
        .setFooter({text: interaction.user.username, iconURL: interaction.member.displayAvatarURL({ dynamic: true }) })
        .setTimestamp()
        .setImage(body.images[0].url)

        interaction.reply({ embeds: [embed]})

        const message = await interaction.fetchReply()
        await message.react("👍")
        await message.react("👎")



    }
}
