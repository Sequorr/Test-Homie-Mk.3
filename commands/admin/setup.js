const fs = require('fs');
const path = require('path');
const { SlashCommandBuilder } = require('discord.js');

const setupOptions = {
	gumroad: {
		description: 'Set up Gumroad API integration',
		async execute(interaction) {
			const guildId = interaction.guildId;
			const configPath = path.join(process.cwd(), 'config', `${guildId}_config.json`);

			// Check if the config file exists
			if (!fs.existsSync(configPath)) {
				await interaction.reply('Error: Setup configuration file not found! Run `/setup` first!');
				return;
			}

			// Read the existing config file
			const configData = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

			// Check if Gumroad access token is already set
			if (configData.gumroadAccessToken) {
				await interaction.reply('Gumroad access token is already set.');
				return;
			}

			// Ask for Gumroad Access Token
			await interaction.reply('Please enter your Gumroad Access Token:');

			const filter = (response) => response.author.id === interaction.user.id;
			const collector = interaction.channel.createMessageCollector({ filter, time: 60000 });

			collector.on('collect', async (message) => {
				const token = message.content.trim();

				// Update the config with the Gumroad Access Token
				configData.gumroadAccessToken = token;

				// Write the updated config back to the file
				fs.writeFileSync(configPath, JSON.stringify(configData, null, 4));

				await interaction.followUp('Gumroad Access Token set successfully.');
				collector.stop();
			});

			collector.on('end', (collected, reason) => {
				if (reason === 'time') {
					interaction.followUp('You took too long to respond. The setup has been canceled.');
				}
			});
		},
	},
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('setup')
		.setDescription('Set up the bot for the server')
		.addSubcommand((subcommand) =>
			subcommand.setName('gumroad').setDescription(setupOptions.gumroad.description),
		),

	async execute(interaction) {
		const subcommand = interaction.options.getSubcommand(true);

		if (subcommand === 'gumroad') {
			await setupOptions.gumroad.execute(interaction);
		}
		else {
			// Create a new config file if it doesn't exist

			const guildId = interaction.guildId;
			const configFolderPath = path.join(process.cwd(), 'config');
			const configPath = path.join(configFolderPath, `${guildId}_config.json`);

			if (!fs.existsSync(configPath)) {
				fs.mkdirSync(configFolderPath, { recursive: true });
				fs.writeFileSync(configPath, JSON.stringify({ guildId }, null, 4));
			}

			await interaction.reply('Setup complete!');
		}
	},
};