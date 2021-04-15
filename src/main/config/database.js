require('dotenv').config();
//Import the mongoose module
import mongoose from 'mongoose'
import chalk from 'chalk'
import {keys} from './keys'
import logger from '../logger/index'

const connected = chalk.bold.cyan;
const error = chalk.bold.yellow;
const disconnected = chalk.bold.red;
const termination = chalk.bold.magenta;

if (process.env.NODE_ENV === 'production') {
    const DB_URL = keys.DB_URL_PRODUCTION
}

const DB_URL = keys.DB_URL_DEVELOPMENT

export const database = ()=> {
  mongoose.connect(DB_URL, {
		useCreateIndex: true,
		useNewUrlParser: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
	})

  mongoose.connection.on('connected', function() {
	  logger.info('Mongoose default connection is open')
		console.log(connected('Mongoose default connection is open'));
	});

	mongoose.connection.on('error', function(err) {

		console.log(
			error('Mongoose default connection has occured ' + err + ' error')
		);
	});

	mongoose.connection.on('disconnected', function() {
		console.log(disconnected('Mongoose default connection is disconnected'));
	});

  process.on('SIGINT', function() {
		mongoose.connection.close(function() {
			console.log(
				termination(
					'Mongoose default connection is disconnected due to application termination'
				)
			);
			process.exit(0);
		});
	});
}