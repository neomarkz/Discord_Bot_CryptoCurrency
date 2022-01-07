require('dotenv').config() // Load .env file
const axios = require('axios')
const Discord = require('discord.js')

const client1 = new Discord.Client()
const client2 = new Discord.Client()
const client3 = new Discord.Client()
const client4 = new Discord.Client()
const client5 = new Discord.Client()

async function getPrices() {
	// API for price BTC.
	axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${process.env.PREFERRED_CURRENCY}&ids=${process.env.COIN_ID_BTC}`,).then(res => {
		// If we got a valid response
		if (res.data && res.data[0].current_price && res.data[0].price_change_percentage_24h) {
			let currentPrice = res.data[0].current_price || 0 // Default to zero
			let priceChange = res.data[0].price_change_percentage_24h || 0 // Default to zero
			let symbol = res.data[0].symbol || '?'
			client1.user.setPresence({
				game: {
					// Example: "Watching -5,52% | BTC"
					name: `${process.env.CURRENCY_SYMBOL}${(currentPrice).toLocaleString().replace(/,/g, process.env.THOUSAND_SEPARATOR)} | ${priceChange.toFixed(2)}%`,
					type: 3 // Use activity type 3 which is "Watching"
				}
			})
		}
		else
			console.log('Could not load player count data for', process.env.COIN_ID_BTC)

	}).catch(err => console.log('Error at api.coingecko.com data:', err))

	// API for price BNB.
	axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${process.env.PREFERRED_CURRENCY}&ids=${process.env.COIN_ID_BNB}`).then(res => {
		// If we got a valid response
		if (res.data && res.data[0].current_price && res.data[0].price_change_percentage_24h) {
			let currentPrice = res.data[0].current_price || 0 // Default to zero
			let priceChange = res.data[0].price_change_percentage_24h || 0 // Default to zero
			let symbol = res.data[0].symbol || '?'
			client2.user.setPresence({
				game: {
					// Example: "Watching -5,52% | BTC"
					name: `${process.env.CURRENCY_SYMBOL}${(currentPrice).toLocaleString().replace(/,/g, process.env.THOUSAND_SEPARATOR)} | ${priceChange.toFixed(2)}%`,
					type: 3 // Use activity type 3 which is "Watching"
				}
			})
		}
		else
			console.log('Could not load player count data for', process.env.COIN_ID_BNB)

	}).catch(err => console.log('Error at api.coingecko.com data:', err))

	// API for price ETH.
	axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${process.env.PREFERRED_CURRENCY}&ids=${process.env.COIN_ID_ETH}`).then(res => {
		// If we got a valid response
		if (res.data && res.data[0].current_price && res.data[0].price_change_percentage_24h) {
			let currentPrice = res.data[0].current_price || 0 // Default to zero
			let priceChange = res.data[0].price_change_percentage_24h || 0 // Default to zero
			let symbol = res.data[0].symbol || '?'
			client3.user.setPresence({
				game: {
					// Example: "Watching -5,52% | BTC"
					name: `${process.env.CURRENCY_SYMBOL}${(currentPrice).toLocaleString().replace(/,/g, process.env.THOUSAND_SEPARATOR)} | ${priceChange.toFixed(2)}%`,
					type: 3 // Use activity type 3 which is "Watching"
				}
			})
		}
		else
			console.log('Could not load player count data for', process.env.COIN_ID_ETH)

	}).catch(err => console.log('Error at api.coingecko.com data:', err))

	// API for price GF.
	axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${process.env.PREFERRED_CURRENCY}&ids=${process.env.COIN_ID_GF}`).then(res => {
		// If we got a valid response
		if (res.data && res.data[0].current_price && res.data[0].price_change_percentage_24h) {
			let currentPrice = res.data[0].current_price || 0 // Default to zero
			let priceChange = res.data[0].price_change_percentage_24h || 0 // Default to zero
			let symbol = res.data[0].symbol || '?'
			client4.user.setPresence({
				game: {
					// Example: "Watching -5,52% | BTC"
					name: `${process.env.CURRENCY_SYMBOL}${(currentPrice).toLocaleString().replace(/,/g, process.env.THOUSAND_SEPARATOR)} | ${priceChange.toFixed(2)}%`,
					type: 3 // Use activity type 3 which is "Watching"
				}
			})
		}
		else
			console.log('Could not load player count data for', process.env.COIN_ID_GF)

	}).catch(err => console.log('Error at api.coingecko.com data:', err))

	// API for price CCAR.
	axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${process.env.PREFERRED_CURRENCY}&ids=${process.env.COIN_ID_CCAR}`).then(res => {
		// If we got a valid response
		if (res.data && res.data[0].current_price && res.data[0].price_change_percentage_24h) {
			let currentPrice = res.data[0].current_price || 0 // Default to zero
			let priceChange = res.data[0].price_change_percentage_24h || 0 // Default to zero
			let symbol = res.data[0].symbol || '?'
			client5.user.setPresence({
				game: {
					// Example: "Watching -5,52% | BTC"
					name: `${process.env.CURRENCY_SYMBOL}${(currentPrice).toLocaleString().replace(/,/g, process.env.THOUSAND_SEPARATOR)} | ${priceChange.toFixed(2)}%`,
					type: 3 // Use activity type 3 which is "Watching"
				}
			})
		}
		else
			console.log('Could not load player count data for', process.env.COIN_ID_CCAR)

	}).catch(err => console.log('Error at api.coingecko.com data:', err))
}

// Runs when client connects to Discord.
client1.on('ready', () => {
	getPrices()
	console.log('Logged in as', client1.user.tag)
})

client2.on('ready', () => {
	getPrices()
	console.log('Logged in as', client2.user.tag)
})

client3.on('ready', () => {
	getPrices()
	console.log('Logged in as', client3.user.tag)
})

client4.on('ready', () => {
	getPrices()
	console.log('Logged in as', client4.user.tag)
})

client5.on('ready', () => {
	getPrices()
	console.log('Logged in as', client5.user.tag)
})

// Login to Discord
client1.login(process.env.BTC_TOKEN)
client2.login(process.env.BNB_TOKEN)
client3.login(process.env.ETH_TOKEN)
client4.login(process.env.GF_TOKEN)
client5.login(process.env.CCAR_TOKEN)